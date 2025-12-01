import random
import datetime
import json

# --- CONFIGURACIÓN ---
CANTIDAD_VENTAS = 220    # Mínimo 200 según rúbrica
CANTIDAD_CLIENTES = 50   # Base de clientes para rotar
CANTIDAD_REGISTROS = 250
# Definimos productos fijos para que sea realista
PRODUCTOS_BASE = [
    ("MAN-FJ-001", "Manzanas Fuji Export", 900),
    ("ARD-PR-002", "Arandanos Premium", 4500),
    ("PAP-SC-003", "Papas Saco 25kg", 6000),
    ("TRG-GR-004", "Trigo Granel Quintal", 22000),
    ("CER-EX-005", "Cerezas Export Box", 3500),
    ("MAZ-FR-006", "Maiz Forrajero", 15000),
    ("TOM-LM-007", "Tomates Limachinos", 1200),
    ("UVA-MS-008", "Uva de Mesa", 1800),
    ("PLT-HS-009", "Palta Hass Calibre 1", 5000),
    ("CBL-ML-010", "Cebollas Malla", 4000)
]

REGIONES = ["La Araucanía", "Los Ríos", "Los Lagos", "Metropolitana"]
SUCURSALES = ["Temuco-1","Temuco-2", "Freire", "Quepe", "Pitrufquen", "Villarrica" ]
NOMBRES = ["Juan", "Maria", "Pedro", "Ana", "Luis", "Carla", "Jose", "Francisca"]
APELLIDOS = ["Perez", "Gonzalez", "Silva", "Rojas", "Muñoz", "Diaz", "Soto", "Contreras"]

CANTIDAD_OPINIONES = 220 # Mínimo 200 según rúbrica

PRODUCTOS_NOMBRES = [
    "Manzanas Fuji Export",
    "Arandanos Premium",
    "Papas Saco 25kg",
    "Trigo Granel Quintal",
    "Cerezas Export Box",
    "Maiz Forrajero",
    "Tomates Limachinos",
    "Uva de Mesa",
    "Palta Hass Calibre 1",
    "Cebollas Malla"
]

COMENTARIOS_POSITIVOS = [
    "Excelente calidad, muy fresco.",
    "Llegó a tiempo y en buen estado.",
    "Muy buen precio para la calidad.",
    "Totalmente recomendado, volveré a comprar.",
    "El producto cumple con lo prometido."
]

COMENTARIOS_NEGATIVOS = [
    "El despacho demoró más de lo esperado.",
    "El embalaje llegó un poco dañado.",
    "No estaba tan fresco como la vez anterior.",
    "Esperaba mejor calidad por el precio.",
    "Atención al cliente lenta."
]

UBICACIONES_PREDIOS = [
    "Invernadero A - Sector Norte",
    "Invernadero B - Hidroponia",
    "Predio Los Aromos",
    "Predio Santa Elena",
    "Invernadero Central",
    "Campo Abierto - Sector 1"
]

# Listas para guardar las claves generadas y asegurar integridad referencial
lista_ruts_generados = []
lista_codigos_productos = [p[0] for p in PRODUCTOS_BASE]

sql_script = []

  
sql_script.append("USE AgroDataSur;")
sql_script.append("")

# --- 1. GENERAR PRODUCTOS (Tabla Padre) ---
sql_script.append("-- 1. Insertando Productos")
sql_script.append("INSERT INTO productos (codigo_producto, nombre_producto, precio_unitario) VALUES")
values_prod = []
for prod in PRODUCTOS_BASE:
    values_prod.append(f"('{prod[0]}', '{prod[1]}', {prod[2]})")
sql_script.append(",\n".join(values_prod) + ";")
sql_script.append("")

# --- 2. GENERAR CLIENTES (Tabla Padre) ---
sql_script.append("-- 2. Insertando Clientes")
sql_script.append("INSERT INTO clientes (rut_cliente, nombre, region) VALUES")
values_cli = []
for i in range(CANTIDAD_CLIENTES):
    rut = f"{random.randint(5, 25)}.{random.randint(100, 999)}.{random.randint(100, 999)}-{random.randint(0, 9)}"
    # Evitar duplicados de RUT
    while rut in lista_ruts_generados:
         rut = f"{random.randint(5, 25)}.{random.randint(100, 999)}.{random.randint(100, 999)}-{random.randint(0, 9)}"
    lista_ruts_generados.append(rut)
    
    nombre = f"{random.choice(NOMBRES)} {random.choice(APELLIDOS)}"
    region = random.choice(REGIONES)
    values_cli.append(f"('{rut}', '{nombre}', '{region}')")

sql_script.append(",\n".join(values_cli) + ";")
sql_script.append("")

# --- 3. GENERAR STOCK (Tabla Hija de Productos) ---
sql_script.append("-- 3. Insertando Stock por Sucursal")
sql_script.append("INSERT INTO stock (codigo_producto, sucursal, cantidad_disponible) VALUES")
values_stock = []
for codigo in lista_codigos_productos:
    for suc in SUCURSALES:
        cant = random.randint(0, 1000)
        values_stock.append(f"('{codigo}', '{suc}', {cant})")

sql_script.append(",\n".join(values_stock) + ";")
sql_script.append("")

# --- 4. GENERAR VENTAS (Tabla Hija de Clientes y Productos) ---
# Aquí es donde usamos las listas generadas arriba para asegurar que las FK existan
sql_script.append("-- 4. Insertando Ventas (Transacciones)")
sql_script.append("INSERT INTO ventas (fecha, rut_cliente, codigo_producto, cantidad, sucursal) VALUES")
values_ventas = []

for i in range(CANTIDAD_VENTAS):
    fecha = datetime.date(2025, random.randint(1, 11), random.randint(1, 28))
    # SELECCIONAMOS SOLO RUTS Y PRODUCTOS QUE YA EXISTEN
    rut_fk = random.choice(lista_ruts_generados)
    prod_fk = random.choice(lista_codigos_productos)
    
    cantidad = random.randint(10, 200)
    sucursal = random.choice(SUCURSALES)
    
    values_ventas.append(f"('{fecha}', '{rut_fk}', '{prod_fk}', {cantidad}, '{sucursal}')")

sql_script.append(",\n".join(values_ventas) + ";")

# --- GUARDAR ARCHIVO ---
with open("poblado_tablas_completo.sql", "w", encoding="utf-8") as f:
    f.write("\n".join(sql_script))

print("¡Archivo 'poblado_tablas_completo.sql' generado correctamente!")
print(f"Se crearon: {len(PRODUCTOS_BASE)} Productos, {CANTIDAD_CLIENTES} Clientes, {len(values_stock)} reg. Stock y {CANTIDAD_VENTAS} Ventas.")



print("Generando script de carga para MongoDB...")

opiniones = []

for i in range(CANTIDAD_OPINIONES):
    # Generar datos aleatorios
    nombre_cliente = f"{random.choice(NOMBRES)} {random.choice(APELLIDOS)}"
    region = random.choice(REGIONES)
    producto = random.choice(PRODUCTOS_NOMBRES) # <--- AQUÍ ESTÁ LA CLAVE DE LA CONSISTENCIA
    
    # Lógica simple: Calificación alta = comentario positivo
    calificacion = random.randint(1, 5)
    if calificacion >= 4:
        comentario = random.choice(COMENTARIOS_POSITIVOS)
    else:
        comentario = random.choice(COMENTARIOS_NEGATIVOS)
    
    fecha = str(datetime.date(2025, random.randint(1, 11), random.randint(1, 28)))
    
    # Estructura JSON solicitada en la rúbrica
    documento = {
        "id_cliente": 1000 + i, # ID numérico como pide el ejemplo JSON de la rúbrica
        "nombre": nombre_cliente,
        "region": region,
        "producto_comprado": producto,
        "calificacion": calificacion,
        "comentario": comentario,
        "fecha": fecha
    }
    opiniones.append(documento)

# --- ESCRIBIR ARCHIVO .JS ---
# Formato compatible con mongo shell
json_string = json.dumps(opiniones, indent=4, ensure_ascii=False)
contenido_js = f"""
// Script de carga para MongoDB - Evaluación 3
// Base de Datos: agrodata_opiniones
// Colección: opiniones_clientes

use agrodata_opiniones;
db.opiniones_clientes.drop(); // Limpia si existe
db.createCollection("opiniones_clientes");

db.opiniones_clientes.insertMany({json_string});

print("Carga de datos completada exitosamente.");
"""

with open("carga_mongodb.js", "w", encoding="utf-8") as f:
    f.write(contenido_js)

print("¡Archivo 'carga_mongodb.js' generado!")
print(f"Se generaron {CANTIDAD_OPINIONES} opiniones consistentes con los productos de MySQL.")


sql_script = []

sql_script.append("USE AgroDataSur;")
sql_script.append("")

sql_script.append("-- Tabla API Sensores IoT")
sql_script.append("DROP TABLE IF EXISTS sensores_data;")
sql_script.append("""CREATE TABLE sensores_data (
    id_medicion INT AUTO_INCREMENT PRIMARY KEY,
    id_sensor VARCHAR(20),
    ubicacion VARCHAR(50),  -- Ej: Invernadero A, Predio 1
    temperatura DECIMAL(5,2),
    humedad DECIMAL(5,2),
    co2 INT,
    timestamp DATETIME
);""")
sql_script.append("")

sql_script.append("-- Insertando datos simulados")
sql_script.append("INSERT INTO sensores_data (id_sensor, ubicacion, temperatura, humedad, co2, timestamp) VALUES")
values_list = []

for i in range(CANTIDAD_REGISTROS):
    ubicacion = random.choice(UBICACIONES_PREDIOS)

    prefix = ubicacion.split()[0][:3].upper() + "-" + ubicacion.split()[1][0].upper()
    id_sensor = f"SENS-{prefix}-{random.randint(1, 5):02d}"

    temp = round(random.uniform(10.0, 35.2), 2)
    humedad = round(random.uniform(30.0, 90.0), 2)
    co2 = random.randint(350, 600)

    start_date = datetime.datetime(2025, 11, 1)
    random_minutes = random.randint(0, 30 * 24 * 60)
    ts = start_date + datetime.timedelta(minutes=random_minutes)

    values_list.append(f"('{id_sensor}', '{ubicacion}','{temp}', '{humedad}', '{co2}', '{ts}')")


sql_script.append(",\n".join(values_list) + ";")

with open("datos_sensores_api.sql", "w", encoding="utf-8") as f:
    f.write("\n".join(sql_script))