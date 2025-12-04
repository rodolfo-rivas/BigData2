# 📊 Proyecto Big Data - AgroDataSur

Sistema de análisis de datos agrícolas que integra múltiples fuentes de datos (MySQL, MongoDB, API REST) y procesamiento en entorno Hadoop/Hive.

---

## 📁 Estructura del Proyecto

```
BigData/
├── ArchivoConfiguracion/        # Archivos de configuración de servicios
│   ├── HDFS/                    # Configuración Hadoop
│   │   ├── core-site.xml
│   │   ├── hdfs-site.xml
│   │   ├── mapred-site.xml
│   │   └── yarn-site.xml
│   ├── Hive/                    # Configuración Hive
│   │   └── hive-site.xml
│   └── MONGODB/                 # Configuración MongoDB
│       ├── config.yml
│       └── mongod.service
├── generator.py                 # Generador de datos sintéticos
├── mydb.sql                     # Schema MySQL
├── poblado_tablas_completo.sql  # Datos MySQL (generado)
├── carga_mongodb.js             # Datos MongoDB (generado)
├── datos_sensores_api.sql       # Datos sensores IoT
├── etl.py                       # Pipeline ETL
├── consultas_hive.sql           # Consultas analíticas
└── README.md                    # Este archivo
```

---

## 📁 Archivos de Datos y Scripts

### 🔧 **generator.py**
**Propósito:** Script generador de datos sintéticos para el proyecto.

**Funcionalidades:**
- Genera datos realistas para productos agrícolas con códigos descriptivos (ej: `MAN-FJ-001`)
- Crea clientes con RUTs válidos chilenos
- Genera transacciones de ventas con integridad referencial
- Produce datos de sensores IoT (temperatura, humedad, CO2)
- Genera opiniones de clientes con calificaciones y comentarios
- **Salidas generadas:**
  - `poblado_tablas_completo.sql`: Scripts INSERT para MySQL
  - `carga_mongodb.js`: Datos de opiniones para MongoDB

**Configuración:**
- `CANTIDAD_VENTAS`: 220 registros (mínimo 200)
- `CANTIDAD_CLIENTES`: 50 clientes
- `CANTIDAD_OPINIONES`: 220 opiniones
- 10 productos agrícolas base
- 6 sucursales en La Araucanía

**Uso:**
```powershell
python generator.py
```

---

### 🗄️ **mydb.sql**
**Propósito:** Script de definición de esquema para base de datos relacional.

**Contenido:**
- Crea la base de datos `AgroDataSur`
- Define 4 tablas principales:
  - `clientes`: Información de clientes (RUT, nombre, región)
  - `productos`: Catálogo de productos con códigos y precios
  - `stock`: Inventario por sucursal con relaciones FK
  - `ventas`: Transacciones que relacionan clientes, productos y sucursales

**Relaciones:**
- Integridad referencial con claves foráneas
- Normalización adecuada (3FN)

**Uso:**
```powershell
mysql -u root -p < mydb.sql
```

---

### 📥 **poblado_tablas_completo.sql**
**Propósito:** Script de carga masiva de datos generados.

**Contenido:**
- Inserts para todas las tablas de MySQL
- Datos coherentes con integridad referencial
- Generado automáticamente por `generator.py`

**Incluye:**
- 10 productos
- 50 clientes
- 60 registros de stock (10 productos × 6 sucursales)
- 220+ ventas

**Uso:**
```powershell
mysql -u root -p AgroDataSur < poblado_tablas_completo.sql
```

---

### 🍃 **carga_mongodb.js**
**Propósito:** Script de carga de datos NoSQL para MongoDB.

**Contenido:**
- Colección: `opiniones_clientes` en DB `agrodata_opiniones`
- Documentos JSON con opiniones de clientes
- Campos: id_cliente, nombre, región, producto, calificación (1-5), comentario, fecha
- +200 documentos generados

**Estructura de documento:**
```javascript
{
    "id_cliente": 1000,
    "nombre": "Maria Soto",
    "region": "Metropolitana",
    "producto_comprado": "Trigo Granel Quintal",
    "calificacion": 4,
    "comentario": "Excelente calidad",
    "fecha": "2025-10-17"
}
```

**Uso:**
```powershell
mongosh < carga_mongodb.js
```

---

### 🌡️ **datos_sensores_api.sql**
**Propósito:** Datos simulados de sensores IoT para API REST.

**Contenido:**
- Tabla: `sensores_data` en MySQL
- Registros de sensores ubicados en:
  - Invernaderos (A, B, Central)
  - Predios (Los Aromos, Santa Elena)
  - Campos abiertos
- Mediciones: temperatura, humedad, CO2, timestamp
- 250+ registros para noviembre 2025

**Uso:**
```powershell
mysql -u root -p AgroDataSur < datos_sensores_api.sql
```

---

### 🔄 **etl.py**
**Propósito:** Pipeline ETL (Extract, Transform, Load) para procesar datos desde múltiples fuentes hacia HDFS.

**Funcionalidades:**

#### 1. **Extracción desde MySQL**
- Consulta tabla `ventas` con JOINs
- Exporta a `ventas_data.csv`
- Sube a HDFS: `/user/hadoop/datos/ventas/`

#### 2. **Extracción desde MongoDB**
- Lee colección `opiniones_clientes`
- Exporta a `opiniones_data.json` (formato JSON Lines)
- Sube a HDFS: `/user/hadoop/datos/opiniones/`

#### 3. **Extracción desde API REST**
- Consume endpoint: `http://localhost:3000/api/sensores_data`
- Exporta a `sensores_data.json`
- Sube a HDFS: `/user/hadoop/datos/sensores/`

**Configuración requerida:**
```python
MYSQL_CONFIG = {
    'user': 'root',
    'password': 'tu_password_mysql',  # ⚠️ CAMBIAR
    'host': 'localhost',
    'database': 'AgroDataSur'
}

MONGO_URI = "mongodb://admin:tu_password_mongo@localhost:27017/"  # ⚠️ CAMBIAR
API_URL = "http://localhost:3000/api/sensores_data"
```

**Dependencias:**
```powershell
pip install mysql-connector-python pymongo requests
```

**Uso:**
```powershell
python etl.py
```

---

### 🐝 **consultas_hive.sql**
**Propósito:** Consultas analíticas sobre datos en Hive/Hadoop.

**Consultas implementadas:**

#### 1. **Temperatura Promedio por Ubicación**
Analiza condiciones ambientales por invernadero/predio.

#### 2. **Satisfacción del Cliente por Producto**
Calcula calificación promedio y total de opiniones por producto.

#### 3. **Tendencias de Ventas por Región**
Identifica productos más vendidos por región geográfica.

#### 4. **Rentabilidad Estimada por Temporada**
Calcula ingresos por estación del año (verano, otoño, invierno, primavera).

**Tablas Hive requeridas:**
- `sensores_hive` (datos de API)
- `opiniones_hive` (datos de MongoDB)
- `ventas_hive` (datos de MySQL)

**Uso:**
```bash
hive -f consultas_hive.sql
```

---

## 🚀 Flujo de Trabajo Completo

### **Paso 1: Preparación**
```powershell
# Generar datos sintéticos
python generator.py
```

### **Paso 2: Configurar Servicios**
Ver sección [Configuración de Servicios](#-configuración-de-servicios).

### **Paso 3: Carga en MySQL**
```powershell
mysql -u root -p < mydb.sql
mysql -u root -p AgroDataSur < poblado_tablas_completo.sql
mysql -u root -p AgroDataSur < datos_sensores_api.sql
```

### **Paso 4: Carga en MongoDB**
```powershell
mongosh < carga_mongodb.js
```

### **Paso 5: Configurar API REST**
Implementar servidor que exponga `/api/sensores_data` desde tabla MySQL.

### **Paso 6: Ejecutar ETL**
```powershell
# Configurar credenciales en etl.py
python etl.py
```

### **Paso 7: Crear Tablas Hive**
```bash
# En Hive CLI
CREATE EXTERNAL TABLE ventas_hive (...)
LOCATION '/user/hadoop/datos/ventas/';

CREATE EXTERNAL TABLE opiniones_hive (...)
LOCATION '/user/hadoop/datos/opiniones/';

CREATE EXTERNAL TABLE sensores_hive (...)
LOCATION '/user/hadoop/datos/sensores/';
```

### **Paso 8: Análisis**
```bash
hive -f consultas_hive.sql
```

---

## 📦 Dependencias

### Python
- `mysql-connector-python`: Conexión a MySQL
- `pymongo`: Conexión a MongoDB
- `requests`: Consumo de API REST

### Bases de Datos
- MySQL 8.0+
- MongoDB 6.0+

### Big Data
- Hadoop 3.x
- Hive 3.x

---

## ⚙️ Configuración de Servicios

El directorio `ArchivoConfiguracion/` contiene todas las configuraciones necesarias para el entorno Big Data.

### 🐘 **HDFS - Hadoop Distributed File System**

#### **core-site.xml**
Configuración del sistema de archivos principal.

**Propiedades clave:**
```xml
<property>
  <name>fs.defaultFS</name>
  <value>hdfs://localhost:9000</value>
</property>
```
- Define el NameNode en puerto 9000
- Configuración de proxy user para ec2-user

**Ubicación:** `$HADOOP_HOME/etc/hadoop/core-site.xml`

---

#### **hdfs-site.xml**
Configuración específica de HDFS.

**Propiedades clave:**
```xml
<property>
  <name>dfs.replication</name>
  <value>1</value>
</property>
```
- Factor de replicación: 1 (modo single-node)

**Ubicación:** `$HADOOP_HOME/etc/hadoop/hdfs-site.xml`

---

#### **mapred-site.xml**
Configuración de MapReduce.

**Propiedades clave:**
```xml
<property>
  <name>mapreduce.framework.name</name>
  <value>yarn</value>
</property>
```
- MapReduce ejecuta sobre YARN

**Ubicación:** `$HADOOP_HOME/etc/hadoop/mapred-site.xml`

---

#### **yarn-site.xml**
Configuración de YARN (gestión de recursos).

**Propiedades clave:**
```xml
<property>
  <name>yarn.nodemanager.aux-services</name>
  <value>mapreduce_shuffle</value>
</property>
```
- Habilita shuffle service para MapReduce

**Ubicación:** `$HADOOP_HOME/etc/hadoop/yarn-site.xml`

---

### 🐝 **Hive - Data Warehouse**

#### **hive-site.xml**
Configuración de Hive para consultas analíticas.

**Propiedades principales:**

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| `hive.metastore.warehouse.dir` | `hdfs://localhost:9000/user/hive/warehouse` | Ubicación del warehouse |
| `javax.jdo.option.ConnectionURL` | `jdbc:derby:;databaseName=metastore_db;create=true` | Metastore embebido (Derby) |
| `hive.exec.scratchdir` | `/tmp/hive` | Directorio temporal |

**Ubicación:** `$HIVE_HOME/conf/hive-site.xml`

**Nota:** Usa Derby embebido para desarrollo. Para producción considerar MySQL/PostgreSQL.

---

### 🍃 **MongoDB - Base de Datos NoSQL**

#### **config.yml**
Configuración principal de MongoDB.

**Contenido:**
```yaml
storage:
  engine: wiredTiger              # Motor de almacenamiento
  dbPath: /var/lib/mongod/data    # Directorio de datos

systemLog:
  destination: file
  path: /var/log/mongodb/mongod.log
  logAppend: true

net:
  bindIp: 0.0.0.0                 # Acepta conexiones remotas
  port: 27017

security:
  authorization: enabled           # Autenticación habilitada

setParameter:
  enableLocalhostAuthBypass: true  # Permite crear admin inicial
```

**Ubicación:** `/var/lib/mongod/config.yml`

---

#### **mongod.service**
Servicio systemd para MongoDB.

**Contenido:**
```ini
[Unit]
Description=MongoDB Server
After=network.target

[Service]
Type=simple
User=mongo
ExecStart=/usr/local/bin/mongod --config /var/lib/mongod/config.yml
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

**Instalación del servicio:**
```bash
sudo cp ArchivoConfiguracion/MONGODB/mongod.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable mongod
sudo systemctl start mongod
```

**Verificar estado:**
```bash
sudo systemctl status mongod
```

---

## 🔧 Configuración de Aplicación

### Credenciales a Modificar

**En `etl.py`:**
- `MYSQL_CONFIG['password']`
- `MONGO_URI` (credenciales de admin)
- `API_URL` (si cambia el puerto/host)

### Rutas HDFS
Por defecto: `/user/hadoop/datos/`

Asegúrate de crear los directorios:
```bash
hdfs dfs -mkdir -p /user/hadoop/datos/ventas
hdfs dfs -mkdir -p /user/hadoop/datos/opiniones
hdfs dfs -mkdir -p /user/hadoop/datos/sensores
```

### Inicialización de Servicios

#### Hadoop/HDFS
```bash
# Formatear NameNode (solo primera vez)
hdfs namenode -format

# Iniciar servicios
start-dfs.sh
start-yarn.sh

# Verificar
jps  # Debe mostrar: NameNode, DataNode, ResourceManager, NodeManager
```

#### Hive
```bash
# Inicializar schema de metastore (solo primera vez)
schematool -dbType derby -initSchema

# Crear directorios en HDFS
hdfs dfs -mkdir -p /user/hive/warehouse
hdfs dfs -mkdir -p /tmp/hive
hdfs dfs -chmod g+w /user/hive/warehouse
hdfs dfs -chmod g+w /tmp/hive

# Iniciar Hive
hive
```

#### MongoDB
```bash
# Crear usuario administrador (solo primera vez)
mongosh
use admin
db.createUser({
  user: "admin",
  pwd: "tu_password",
  roles: ["root"]
})
exit

# Reiniciar servicio
sudo systemctl restart mongod
```

---

## 📊 Datos Generados

| Componente | Cantidad | Formato |
|-----------|----------|---------|
| Productos | 10 | SQL/JSON |
| Clientes | 50 | SQL |
| Ventas | 220+ | SQL/CSV |
| Opiniones | 220+ | JSON |
| Sensores | 250+ | SQL/JSON |
| Sucursales | 6 | — |
| Regiones | 4 | — |

---

## 🔍 Verificación del Sistema

### Comprobar servicios activos

```bash
# HDFS
hdfs dfsadmin -report

# YARN
yarn node -list

# MongoDB
mongosh --eval "db.adminCommand('ping')"

# MySQL
mysql -u root -p -e "SHOW DATABASES;"
```

### Verificar datos en HDFS

```bash
# Listar archivos
hdfs dfs -ls /user/hadoop/datos/ventas/
hdfs dfs -ls /user/hadoop/datos/opiniones/
hdfs dfs -ls /user/hadoop/datos/sensores/

# Ver contenido (primeras líneas)
hdfs dfs -cat /user/hadoop/datos/ventas/ventas_data.csv | head
```

---

## 📝 Notas Técnicas

### Códigos de Productos
Formato: `XXX-YY-NNN` (Tipo-Descripción-Número)

Ejemplos:
- `MAN-FJ-001`: Manzanas Fuji
- `ARD-PR-002`: Arándanos Premium
- `TRG-GR-004`: Trigo Granel

### Datos Temporales
- Las fechas de ventas abarcan enero-noviembre 2025
- Los datos de sensores son de noviembre 2025
- Los RUTs son sintéticos pero siguen formato chileno

### Características del Sistema
- **Modo de despliegue:** Single-node (desarrollo)
- **Replicación HDFS:** Factor 1
- **Metastore Hive:** Derby embebido
- **MongoDB:** Autenticación habilitada
- **Cumplimiento:** +200 registros por fuente de datos

---

## 🚨 Troubleshooting

### Problema: HDFS no inicia
```bash
# Ver logs
cat $HADOOP_HOME/logs/hadoop-*-namenode-*.log

# Reformatear (⚠️ BORRA DATOS)
stop-dfs.sh
rm -rf /tmp/hadoop-*
hdfs namenode -format
start-dfs.sh
```

### Problema: MongoDB no acepta conexiones
```bash
# Verificar puerto
sudo netstat -tlnp | grep 27017

# Ver logs
sudo tail -f /var/log/mongodb/mongod.log

# Revisar permisos
sudo chown -R mongo:mongo /var/lib/mongod
```

### Problema: Hive no encuentra tablas
```bash
# Verificar metastore
ls -la metastore_db/

# Reinicializar (⚠️ BORRA METADATOS)
rm -rf metastore_db/
schematool -dbType derby -initSchema
```

---

## 📚 Referencias

### Documentación Oficial
- [Hadoop Documentation](https://hadoop.apache.org/docs/)
- [Hive Documentation](https://hive.apache.org/)
- [MongoDB Manual](https://docs.mongodb.com/)

### Puertos por Defecto
| Servicio | Puerto | URL |
|----------|--------|-----|
| HDFS NameNode | 9000 | hdfs://localhost:9000 |
| HDFS NameNode Web UI | 9870 | http://localhost:9870 |
| YARN ResourceManager | 8088 | http://localhost:8088 |
| MongoDB | 27017 | mongodb://localhost:27017 |
| MySQL | 3306 | localhost:3306 |
| API Sensores | 3000 | http://localhost:3000 |

---

## 👥 Autor

Proyecto desarrollado para evaluación de Big Data - AgroDataSur

---

## 📄 Licencia

Proyecto académico - Uso educativo
