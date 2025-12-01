CREATE DATABASE IF NOT EXISTS AgroDataSur;
USE AgroDataSur;

-- 1. Tabla Clientes (Maestro)
CREATE TABLE clientes (
    rut_cliente VARCHAR(12) PRIMARY KEY,
    nombre VARCHAR(100),
    region VARCHAR(50)
);

-- 2. Tabla Productos (Maestro)
CREATE TABLE productos (
    codigo_producto VARCHAR(20) PRIMARY KEY,
    nombre_producto VARCHAR(50),
    precio_unitario INT
);

-- 3. Tabla Stock (Inventario por Sucursal)
CREATE TABLE stock (
    id_stock INT AUTO_INCREMENT PRIMARY KEY,
    codigo_producto VARCHAR(20),
    sucursal VARCHAR(50),
    cantidad_disponible INT,
    FOREIGN KEY (codigo_producto) REFERENCES productos(codigo_producto)
);

-- 4. Tabla Ventas (Transacciones - Une todo)
CREATE TABLE ventas (
    id_venta INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    rut_cliente VARCHAR(12),
    codigo_producto VARCHAR(20),
    cantidad INT,
    sucursal VARCHAR(50),
    FOREIGN KEY (rut_cliente) REFERENCES clientes(rut_cliente),
    FOREIGN KEY (codigo_producto) REFERENCES productos(codigo_producto)
);

