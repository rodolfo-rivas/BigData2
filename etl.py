import mysql.connector
import pymongo
import requests
import csv
import json
import os
import subprocess
import datetime

# --- CONFIGURACIÓN ---
MYSQL_CONFIG = {
    'user': 'root', 
    'password': 'tu_password_mysql',  # <--- CAMBIAR
    'host': 'localhost',
    'database': 'AgroDataSur'
}

MONGO_URI = "mongodb://admin:tu_password_mongo@localhost:27017/" # <--- CAMBIAR
MONGO_DB = "agrodata_opiniones"
MONGO_COL = "opiniones_clientes"

API_URL = "http://localhost:3000/api/sensores_data"

# Rutas HDFS (Deben existir)
HDFS_BASE = "/user/hadoop/datos"

def subir_a_hdfs(ruta_local, ruta_hdfs):
    """Sube un archivo local a HDFS usando el comando de sistema"""
    print(f"Subiendo {ruta_local} a {ruta_hdfs}...")
    # Comando: hdfs dfs -put -f archivo_local ruta_hdfs
    cmd = ["hdfs", "dfs", "-put", "-f", ruta_local, ruta_hdfs]
    result = subprocess.run(cmd, capture_output=True, text=True)
    
    if result.returncode == 0:
        print("   [OK] Subida exitosa.")
    else:
        print(f"   [ERROR] Falló la subida: {result.stderr}")

# --- 1. PROCESO MYSQL (Ventas) ---
def procesar_mysql():
    print("\n--- 1. Extrayendo datos de MySQL (Ventas) ---")
    try:
        conn = mysql.connector.connect(**MYSQL_CONFIG)
        cursor = conn.cursor()
        
        # Hacemos un JOIN para tener una vista completa de la venta
        query = """
        SELECT v.id_venta, v.fecha, c.region, p.nombre_producto, v.cantidad, v.sucursal 
        FROM ventas v
        JOIN clientes c ON v.rut_cliente = c.rut_cliente
        JOIN productos p ON v.codigo_producto = p.codigo_producto
        """
        cursor.execute(query)
        
        archivo_salida = "ventas_data.csv"
        with open(archivo_salida, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            # Escribir encabezados si es necesario (Hive a veces prefiere sin, pero para CSV es util)
            # writer.writerow(["id_venta", "fecha", "region", "producto", "cantidad", "sucursal"])
            writer.writerows(cursor.fetchall())
            
        print(f"   Datos exportados a {archivo_salida}")
        subir_a_hdfs(archivo_salida, f"{HDFS_BASE}/ventas/")
        
    except Exception as e:
        print(f"   [ERROR] MySQL: {e}")
    finally:
        if 'conn' in locals() and conn.is_connected(): conn.close()

# --- 2. PROCESO MONGODB (Opiniones) ---
def procesar_mongodb():
    print("\n--- 2. Extrayendo datos de MongoDB (Opiniones) ---")
    try:
        client = pymongo.MongoClient(MONGO_URI)
        db = client[MONGO_DB]
        col = db[MONGO_COL]
        
        # Extraemos sin el campo _id de Mongo que da problemas en Hive
        datos = list(col.find({}, {"_id": 0}))
        
        archivo_salida = "opiniones_data.json"
        
        # Guardamos como JSON Line (un JSON por línea) que es ideal para Hive/Spark
        with open(archivo_salida, 'w', encoding='utf-8') as f:
            for doc in datos:
                f.write(json.dumps(doc, ensure_ascii=False) + "\n")
                
        print(f"   Datos exportados a {archivo_salida}")
        subir_a_hdfs(archivo_salida, f"{HDFS_BASE}/opiniones/")
        
    except Exception as e:
        print(f"   [ERROR] MongoDB: {e}")

# --- 3. PROCESO API REST (Sensores) ---
def procesar_api():
    print("\n--- 3. Extrayendo datos de API (Sensores) ---")
    try:
        response = requests.get(API_URL)
        if response.status_code == 200:
            datos = response.json()
            
            # La API de xmysql devuelve metadata, los datos reales suelen estar bajo una llave o directo
            # Ajuste: xmysql devuelve un array directo usualmente.
            
            archivo_salida = "sensores_iot.csv"
            
            with open(archivo_salida, 'w', newline='', encoding='utf-8') as f:
                writer = csv.writer(f)
                # Escribimos datos. Asumimos que 'datos' es una lista de diccionarios
                if len(datos) > 0:
                    # Extraer valores en orden
                    for fila in datos:
                        writer.writerow([
                            fila.get('id_sensor'),
                            fila.get('ubicacion'),
                            fila.get('temperatura'),
                            fila.get('humedad'),
                            fila.get('co2'),
                            fila.get('timestamp')
                        ])
            
            print(f"   Datos descargados y convertidos a {archivo_salida}")
            subir_a_hdfs(archivo_salida, f"{HDFS_BASE}/sensores/")
        else:
            print(f"   [ERROR] API retornó código {response.status_code}")
            
    except Exception as e:
        print(f"   [ERROR] API: {e}")

# --- EJECUCIÓN PRINCIPAL ---
if __name__ == "__main__":
    print("INICIANDO PROCESO DE INGESTA AL DATALAKE...")
    procesar_mysql()
    procesar_mongodb()
    procesar_api()
    print("\n--- PROCESO FINALIZADO ---")