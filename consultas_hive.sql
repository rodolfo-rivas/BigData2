-- Temperatura Promedio por Ubicacion
SELECT 
    ubicacion, 
    ROUND(AVG(temperatura), 1) as temp_promedio, 
    ROUND(AVG(humedad), 1) as humedad_promedio 
FROM sensores_hive 
GROUP BY ubicacion;

-- Satisfacción del cliente por producto
SELECT 
    producto_comprado, 
    ROUND(AVG(calificacion), 2) as satisfaccion_promedio,
    COUNT(*) as total_opiniones
FROM opiniones_hive 
GROUP BY producto_comprado 
ORDER BY satisfaccion_promedio DESC;

-- Análisis de Tendencias de Ventas por Region
SELECT 
    region, 
    producto, 
    SUM(cantidad) as total_unidades_vendidas 
FROM ventas_hive 
GROUP BY region, producto 
ORDER BY region, total_unidades_vendidas DESC;

-- Rentabilidad Estimada por Temporada
SELECT 
    CASE 
        WHEN month(to_date(fecha)) IN (12, 1, 2) THEN 'Verano'
        WHEN month(to_date(fecha)) IN (3, 4, 5) THEN 'Otoño'
        WHEN month(to_date(fecha)) IN (6, 7, 8) THEN 'Invierno'
        ELSE 'Primavera'
    END AS temporada,
    SUM(cantidad) AS total_productos_vendidos,
    SUM(cantidad * CASE 
        WHEN producto LIKE '%Manzanas%' THEN 900
        WHEN producto LIKE '%Arandanos%' THEN 4500
        WHEN producto LIKE '%Papas%' THEN 6000
        WHEN producto LIKE '%Trigo%' THEN 22000
        WHEN producto LIKE '%Cerezas%' THEN 3500
        WHEN producto LIKE '%Maiz%' THEN 15000
        WHEN producto LIKE '%Tomates%' THEN 1200
        WHEN producto LIKE '%Uva%' THEN 1800
        WHEN producto LIKE '%Palta%' THEN 5000
        WHEN producto LIKE '%Cebollas%' THEN 4000
        ELSE 0 
    END) AS rentabilidad_estimada
FROM ventas_hive
GROUP BY 
    CASE 
        WHEN month(to_date(fecha)) IN (12, 1, 2) THEN 'Verano'
        WHEN month(to_date(fecha)) IN (3, 4, 5) THEN 'Otoño'
        WHEN month(to_date(fecha)) IN (6, 7, 8) THEN 'Invierno'
        ELSE 'Primavera'
    END
ORDER BY rentabilidad_estimada DESC;