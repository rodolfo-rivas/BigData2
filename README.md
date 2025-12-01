# 📊 Proyecto Big Data - AgroDataSur

Sistema de análisis de datos agrícolas que integra múltiples fuentes de datos (MySQL, MongoDB, API REST) y procesamiento en entorno Hadoop/Hive.

---

## 📁 Estructura de Archivos

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
mysql -u root -p < mysql.sql
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

### **Paso 2: Carga en MySQL**
```powershell
mysql -u root -p < mysql.sql
mysql -u root -p AgroDataSur < poblado_tablas_completo.sql
mysql -u root -p AgroDataSur < datos_sensores_api.sql
```

### **Paso 3: Carga en MongoDB**
```powershell
mongosh < carga_mongodb.js
```

### **Paso 4: Configurar API REST**
Implementar servidor que exponga `/api/sensores_data` desde tabla MySQL.

### **Paso 5: Ejecutar ETL**
```powershell
# Configurar credenciales en etl.py
python etl.py
```

### **Paso 6: Crear Tablas Hive**
```bash
# En Hive CLI
CREATE EXTERNAL TABLE ventas_hive (...)
LOCATION '/user/hadoop/datos/ventas/';

CREATE EXTERNAL TABLE opiniones_hive (...)
LOCATION '/user/hadoop/datos/opiniones/';

CREATE EXTERNAL TABLE sensores_hive (...)
LOCATION '/user/hadoop/datos/sensores/';
```

### **Paso 7: Análisis**
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

## 🔧 Configuración

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

## 📝 Notas

- Los códigos de productos siguen formato: `XXX-YY-NNN` (Tipo-Descripción-Número)
- Las fechas de ventas abarcan enero-noviembre 2025
- Los RUTs son sintéticos pero siguen formato chileno
- Los datos de sensores simulan IoT agrícola real
- El proyecto cumple con requisitos de +200 registros por fuente

---

## 👥 Autor

Proyecto desarrollado para evaluación de Big Data - AgroDataSur

---

## 📄 Licencia

Proyecto académico - Uso educativo
