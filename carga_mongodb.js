
// Script de carga para MongoDB - Evaluación 3
// Base de Datos: agrodata_opiniones
// Colección: opiniones_clientes

db = db.getSiblingDB('agrodata_opiniones');
db.opiniones_clientes.drop(); // Limpia si existe
db.createCollection("opiniones_clientes");

db.opiniones_clientes.insertMany([
    {
        "id_cliente": 1000,
        "nombre": "Maria Soto",
        "region": "Metropolitana",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-10-17"
    },
    {
        "id_cliente": 1001,
        "nombre": "Juan Silva",
        "region": "La Araucanía",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-04-27"
    },
    {
        "id_cliente": 1002,
        "nombre": "Ana Rojas",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-01-25"
    },
    {
        "id_cliente": 1003,
        "nombre": "Francisca Silva",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-08-22"
    },
    {
        "id_cliente": 1004,
        "nombre": "Jose Muñoz",
        "region": "Los Lagos",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 4,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-05-15"
    },
    {
        "id_cliente": 1005,
        "nombre": "Juan Contreras",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-09-25"
    },
    {
        "id_cliente": 1006,
        "nombre": "Maria Diaz",
        "region": "Los Lagos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-10-05"
    },
    {
        "id_cliente": 1007,
        "nombre": "Jose Silva",
        "region": "Los Ríos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-10-24"
    },
    {
        "id_cliente": 1008,
        "nombre": "Francisca Perez",
        "region": "Los Lagos",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 1,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-05-12"
    },
    {
        "id_cliente": 1009,
        "nombre": "Jose Gonzalez",
        "region": "Los Lagos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-08-22"
    },
    {
        "id_cliente": 1010,
        "nombre": "Jose Perez",
        "region": "Metropolitana",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-02-15"
    },
    {
        "id_cliente": 1011,
        "nombre": "Luis Diaz",
        "region": "Los Ríos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 2,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-09-22"
    },
    {
        "id_cliente": 1012,
        "nombre": "Pedro Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-04-24"
    },
    {
        "id_cliente": 1013,
        "nombre": "Francisca Soto",
        "region": "La Araucanía",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 3,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-10-07"
    },
    {
        "id_cliente": 1014,
        "nombre": "Ana Soto",
        "region": "Los Ríos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-08-20"
    },
    {
        "id_cliente": 1015,
        "nombre": "Ana Rojas",
        "region": "Los Lagos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-09-26"
    },
    {
        "id_cliente": 1016,
        "nombre": "Francisca Muñoz",
        "region": "Metropolitana",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 3,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-07-08"
    },
    {
        "id_cliente": 1017,
        "nombre": "Luis Silva",
        "region": "Los Ríos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-07-05"
    },
    {
        "id_cliente": 1018,
        "nombre": "Jose Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 5,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-10-08"
    },
    {
        "id_cliente": 1019,
        "nombre": "Luis Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 1,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-05-09"
    },
    {
        "id_cliente": 1020,
        "nombre": "Pedro Silva",
        "region": "Metropolitana",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 3,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-03-13"
    },
    {
        "id_cliente": 1021,
        "nombre": "Pedro Diaz",
        "region": "Los Lagos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-03-09"
    },
    {
        "id_cliente": 1022,
        "nombre": "Francisca Rojas",
        "region": "Los Lagos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-06-28"
    },
    {
        "id_cliente": 1023,
        "nombre": "Carla Perez",
        "region": "La Araucanía",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-11-25"
    },
    {
        "id_cliente": 1024,
        "nombre": "Carla Diaz",
        "region": "La Araucanía",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-11-03"
    },
    {
        "id_cliente": 1025,
        "nombre": "Ana Silva",
        "region": "Metropolitana",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-07-08"
    },
    {
        "id_cliente": 1026,
        "nombre": "Maria Diaz",
        "region": "Metropolitana",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 1,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-07-28"
    },
    {
        "id_cliente": 1027,
        "nombre": "Pedro Gonzalez",
        "region": "Los Lagos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-01-20"
    },
    {
        "id_cliente": 1028,
        "nombre": "Pedro Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-07-24"
    },
    {
        "id_cliente": 1029,
        "nombre": "Francisca Muñoz",
        "region": "Los Lagos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 4,
        "comentario": "Totalmente recomendado, volveré a comprar.",
        "fecha": "2025-06-12"
    },
    {
        "id_cliente": 1030,
        "nombre": "Juan Soto",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 5,
        "comentario": "Totalmente recomendado, volveré a comprar.",
        "fecha": "2025-01-09"
    },
    {
        "id_cliente": 1031,
        "nombre": "Juan Muñoz",
        "region": "Metropolitana",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-05-23"
    },
    {
        "id_cliente": 1032,
        "nombre": "Luis Rojas",
        "region": "La Araucanía",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-07-02"
    },
    {
        "id_cliente": 1033,
        "nombre": "Pedro Gonzalez",
        "region": "La Araucanía",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 3,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-02-13"
    },
    {
        "id_cliente": 1034,
        "nombre": "Pedro Gonzalez",
        "region": "Los Ríos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-01-15"
    },
    {
        "id_cliente": 1035,
        "nombre": "Francisca Diaz",
        "region": "Metropolitana",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-07-22"
    },
    {
        "id_cliente": 1036,
        "nombre": "Carla Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-11-02"
    },
    {
        "id_cliente": 1037,
        "nombre": "Maria Soto",
        "region": "La Araucanía",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-07-04"
    },
    {
        "id_cliente": 1038,
        "nombre": "Luis Gonzalez",
        "region": "Los Ríos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 1,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-09-11"
    },
    {
        "id_cliente": 1039,
        "nombre": "Pedro Soto",
        "region": "Los Ríos",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 5,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-07-03"
    },
    {
        "id_cliente": 1040,
        "nombre": "Carla Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-02-18"
    },
    {
        "id_cliente": 1041,
        "nombre": "Carla Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 2,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-03-05"
    },
    {
        "id_cliente": 1042,
        "nombre": "Francisca Rojas",
        "region": "La Araucanía",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-03-08"
    },
    {
        "id_cliente": 1043,
        "nombre": "Juan Perez",
        "region": "Los Ríos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-08-10"
    },
    {
        "id_cliente": 1044,
        "nombre": "Maria Diaz",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-11-15"
    },
    {
        "id_cliente": 1045,
        "nombre": "Pedro Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-03-12"
    },
    {
        "id_cliente": 1046,
        "nombre": "Juan Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-10-18"
    },
    {
        "id_cliente": 1047,
        "nombre": "Maria Silva",
        "region": "La Araucanía",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-02-08"
    },
    {
        "id_cliente": 1048,
        "nombre": "Carla Contreras",
        "region": "Metropolitana",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 1,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-08-02"
    },
    {
        "id_cliente": 1049,
        "nombre": "Carla Gonzalez",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-09-25"
    },
    {
        "id_cliente": 1050,
        "nombre": "Carla Perez",
        "region": "Metropolitana",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-05-07"
    },
    {
        "id_cliente": 1051,
        "nombre": "Juan Perez",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 4,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-07-07"
    },
    {
        "id_cliente": 1052,
        "nombre": "Maria Silva",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-03-03"
    },
    {
        "id_cliente": 1053,
        "nombre": "Juan Muñoz",
        "region": "Los Ríos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-03-15"
    },
    {
        "id_cliente": 1054,
        "nombre": "Luis Perez",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 4,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-06-18"
    },
    {
        "id_cliente": 1055,
        "nombre": "Maria Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-04-17"
    },
    {
        "id_cliente": 1056,
        "nombre": "Jose Diaz",
        "region": "Los Lagos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-02-11"
    },
    {
        "id_cliente": 1057,
        "nombre": "Ana Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-10-15"
    },
    {
        "id_cliente": 1058,
        "nombre": "Maria Muñoz",
        "region": "Metropolitana",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-09-20"
    },
    {
        "id_cliente": 1059,
        "nombre": "Jose Contreras",
        "region": "Los Lagos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-07-09"
    },
    {
        "id_cliente": 1060,
        "nombre": "Carla Soto",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-09-02"
    },
    {
        "id_cliente": 1061,
        "nombre": "Luis Perez",
        "region": "Metropolitana",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-02-13"
    },
    {
        "id_cliente": 1062,
        "nombre": "Jose Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-06-03"
    },
    {
        "id_cliente": 1063,
        "nombre": "Luis Soto",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-08-03"
    },
    {
        "id_cliente": 1064,
        "nombre": "Maria Rojas",
        "region": "Los Lagos",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 1,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-05-17"
    },
    {
        "id_cliente": 1065,
        "nombre": "Luis Muñoz",
        "region": "Los Ríos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-07-03"
    },
    {
        "id_cliente": 1066,
        "nombre": "Maria Soto",
        "region": "Los Lagos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-09-15"
    },
    {
        "id_cliente": 1067,
        "nombre": "Luis Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-02-10"
    },
    {
        "id_cliente": 1068,
        "nombre": "Carla Perez",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-02-18"
    },
    {
        "id_cliente": 1069,
        "nombre": "Jose Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 4,
        "comentario": "Totalmente recomendado, volveré a comprar.",
        "fecha": "2025-09-05"
    },
    {
        "id_cliente": 1070,
        "nombre": "Luis Perez",
        "region": "Metropolitana",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 2,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-07-21"
    },
    {
        "id_cliente": 1071,
        "nombre": "Jose Rojas",
        "region": "Los Lagos",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 5,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-08-12"
    },
    {
        "id_cliente": 1072,
        "nombre": "Juan Perez",
        "region": "La Araucanía",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-09-21"
    },
    {
        "id_cliente": 1073,
        "nombre": "Pedro Contreras",
        "region": "Los Lagos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 2,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-09-10"
    },
    {
        "id_cliente": 1074,
        "nombre": "Pedro Silva",
        "region": "Los Ríos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-05-18"
    },
    {
        "id_cliente": 1075,
        "nombre": "Jose Perez",
        "region": "Metropolitana",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-01-15"
    },
    {
        "id_cliente": 1076,
        "nombre": "Carla Soto",
        "region": "Los Lagos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-10-06"
    },
    {
        "id_cliente": 1077,
        "nombre": "Ana Diaz",
        "region": "La Araucanía",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 2,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-02-21"
    },
    {
        "id_cliente": 1078,
        "nombre": "Ana Perez",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 1,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-04-28"
    },
    {
        "id_cliente": 1079,
        "nombre": "Pedro Soto",
        "region": "Los Lagos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 2,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-05-20"
    },
    {
        "id_cliente": 1080,
        "nombre": "Ana Muñoz",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 5,
        "comentario": "Totalmente recomendado, volveré a comprar.",
        "fecha": "2025-03-16"
    },
    {
        "id_cliente": 1081,
        "nombre": "Maria Gonzalez",
        "region": "Metropolitana",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 5,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-06-15"
    },
    {
        "id_cliente": 1082,
        "nombre": "Francisca Diaz",
        "region": "Los Ríos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 5,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-01-07"
    },
    {
        "id_cliente": 1083,
        "nombre": "Carla Gonzalez",
        "region": "Los Ríos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-02-01"
    },
    {
        "id_cliente": 1084,
        "nombre": "Pedro Perez",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 2,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-06-21"
    },
    {
        "id_cliente": 1085,
        "nombre": "Jose Silva",
        "region": "Los Lagos",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-01-06"
    },
    {
        "id_cliente": 1086,
        "nombre": "Luis Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 5,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-08-11"
    },
    {
        "id_cliente": 1087,
        "nombre": "Luis Diaz",
        "region": "Los Lagos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 3,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-04-17"
    },
    {
        "id_cliente": 1088,
        "nombre": "Jose Diaz",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-09-22"
    },
    {
        "id_cliente": 1089,
        "nombre": "Maria Contreras",
        "region": "Los Lagos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 2,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-08-13"
    },
    {
        "id_cliente": 1090,
        "nombre": "Carla Silva",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-04-17"
    },
    {
        "id_cliente": 1091,
        "nombre": "Juan Diaz",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 5,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-02-04"
    },
    {
        "id_cliente": 1092,
        "nombre": "Luis Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-09-10"
    },
    {
        "id_cliente": 1093,
        "nombre": "Ana Silva",
        "region": "Metropolitana",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 5,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-09-17"
    },
    {
        "id_cliente": 1094,
        "nombre": "Carla Rojas",
        "region": "La Araucanía",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 5,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-01-15"
    },
    {
        "id_cliente": 1095,
        "nombre": "Jose Contreras",
        "region": "Los Lagos",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 3,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-08-02"
    },
    {
        "id_cliente": 1096,
        "nombre": "Luis Perez",
        "region": "La Araucanía",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 4,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-11-18"
    },
    {
        "id_cliente": 1097,
        "nombre": "Ana Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-11-16"
    },
    {
        "id_cliente": 1098,
        "nombre": "Francisca Muñoz",
        "region": "Los Ríos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-03-12"
    },
    {
        "id_cliente": 1099,
        "nombre": "Juan Silva",
        "region": "Los Lagos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-08-02"
    },
    {
        "id_cliente": 1100,
        "nombre": "Ana Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 5,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-05-25"
    },
    {
        "id_cliente": 1101,
        "nombre": "Luis Contreras",
        "region": "Los Lagos",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 1,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-01-11"
    },
    {
        "id_cliente": 1102,
        "nombre": "Jose Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 1,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-05-20"
    },
    {
        "id_cliente": 1103,
        "nombre": "Luis Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-06-18"
    },
    {
        "id_cliente": 1104,
        "nombre": "Juan Muñoz",
        "region": "Metropolitana",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 4,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-05-10"
    },
    {
        "id_cliente": 1105,
        "nombre": "Francisca Contreras",
        "region": "Metropolitana",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-03-09"
    },
    {
        "id_cliente": 1106,
        "nombre": "Jose Contreras",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 5,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-04-09"
    },
    {
        "id_cliente": 1107,
        "nombre": "Carla Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-01-11"
    },
    {
        "id_cliente": 1108,
        "nombre": "Francisca Diaz",
        "region": "La Araucanía",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 5,
        "comentario": "Totalmente recomendado, volveré a comprar.",
        "fecha": "2025-01-10"
    },
    {
        "id_cliente": 1109,
        "nombre": "Pedro Muñoz",
        "region": "Los Lagos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 4,
        "comentario": "Totalmente recomendado, volveré a comprar.",
        "fecha": "2025-02-09"
    },
    {
        "id_cliente": 1110,
        "nombre": "Francisca Rojas",
        "region": "Los Lagos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 3,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-05-03"
    },
    {
        "id_cliente": 1111,
        "nombre": "Carla Contreras",
        "region": "Los Lagos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-01-05"
    },
    {
        "id_cliente": 1112,
        "nombre": "Maria Gonzalez",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-10-18"
    },
    {
        "id_cliente": 1113,
        "nombre": "Maria Silva",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-11-11"
    },
    {
        "id_cliente": 1114,
        "nombre": "Luis Silva",
        "region": "La Araucanía",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-04-23"
    },
    {
        "id_cliente": 1115,
        "nombre": "Francisca Diaz",
        "region": "Los Lagos",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-08-10"
    },
    {
        "id_cliente": 1116,
        "nombre": "Francisca Gonzalez",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-03-04"
    },
    {
        "id_cliente": 1117,
        "nombre": "Carla Diaz",
        "region": "Los Ríos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-08-03"
    },
    {
        "id_cliente": 1118,
        "nombre": "Carla Perez",
        "region": "La Araucanía",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-10-17"
    },
    {
        "id_cliente": 1119,
        "nombre": "Carla Silva",
        "region": "Metropolitana",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-02-13"
    },
    {
        "id_cliente": 1120,
        "nombre": "Francisca Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-10-12"
    },
    {
        "id_cliente": 1121,
        "nombre": "Carla Contreras",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-01-19"
    },
    {
        "id_cliente": 1122,
        "nombre": "Ana Contreras",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-08-26"
    },
    {
        "id_cliente": 1123,
        "nombre": "Luis Soto",
        "region": "Los Ríos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-11-28"
    },
    {
        "id_cliente": 1124,
        "nombre": "Carla Perez",
        "region": "Los Ríos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 5,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-07-22"
    },
    {
        "id_cliente": 1125,
        "nombre": "Ana Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-01-22"
    },
    {
        "id_cliente": 1126,
        "nombre": "Ana Muñoz",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-05-11"
    },
    {
        "id_cliente": 1127,
        "nombre": "Francisca Soto",
        "region": "La Araucanía",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-06-28"
    },
    {
        "id_cliente": 1128,
        "nombre": "Carla Soto",
        "region": "Los Lagos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-10-26"
    },
    {
        "id_cliente": 1129,
        "nombre": "Francisca Gonzalez",
        "region": "Los Ríos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-02-03"
    },
    {
        "id_cliente": 1130,
        "nombre": "Pedro Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-01-28"
    },
    {
        "id_cliente": 1131,
        "nombre": "Pedro Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-02-14"
    },
    {
        "id_cliente": 1132,
        "nombre": "Francisca Silva",
        "region": "Metropolitana",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 1,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-03-19"
    },
    {
        "id_cliente": 1133,
        "nombre": "Carla Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-03-12"
    },
    {
        "id_cliente": 1134,
        "nombre": "Jose Gonzalez",
        "region": "La Araucanía",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 5,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-10-06"
    },
    {
        "id_cliente": 1135,
        "nombre": "Ana Silva",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 4,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-03-21"
    },
    {
        "id_cliente": 1136,
        "nombre": "Luis Soto",
        "region": "Metropolitana",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-06-13"
    },
    {
        "id_cliente": 1137,
        "nombre": "Luis Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-03-13"
    },
    {
        "id_cliente": 1138,
        "nombre": "Juan Gonzalez",
        "region": "Metropolitana",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-01-05"
    },
    {
        "id_cliente": 1139,
        "nombre": "Francisca Perez",
        "region": "Los Ríos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 3,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-06-25"
    },
    {
        "id_cliente": 1140,
        "nombre": "Pedro Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-07-11"
    },
    {
        "id_cliente": 1141,
        "nombre": "Francisca Contreras",
        "region": "Los Lagos",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-04-02"
    },
    {
        "id_cliente": 1142,
        "nombre": "Francisca Soto",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-10-27"
    },
    {
        "id_cliente": 1143,
        "nombre": "Maria Diaz",
        "region": "Los Ríos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 5,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-11-01"
    },
    {
        "id_cliente": 1144,
        "nombre": "Maria Soto",
        "region": "Los Lagos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 5,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-08-08"
    },
    {
        "id_cliente": 1145,
        "nombre": "Luis Perez",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-02-28"
    },
    {
        "id_cliente": 1146,
        "nombre": "Luis Muñoz",
        "region": "Los Ríos",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 4,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-04-01"
    },
    {
        "id_cliente": 1147,
        "nombre": "Jose Diaz",
        "region": "Metropolitana",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-04-19"
    },
    {
        "id_cliente": 1148,
        "nombre": "Maria Perez",
        "region": "La Araucanía",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-10-21"
    },
    {
        "id_cliente": 1149,
        "nombre": "Carla Gonzalez",
        "region": "Los Ríos",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 3,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-10-04"
    },
    {
        "id_cliente": 1150,
        "nombre": "Juan Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 2,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-11-22"
    },
    {
        "id_cliente": 1151,
        "nombre": "Ana Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-03-02"
    },
    {
        "id_cliente": 1152,
        "nombre": "Ana Soto",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 4,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-08-06"
    },
    {
        "id_cliente": 1153,
        "nombre": "Carla Silva",
        "region": "Metropolitana",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 5,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-10-17"
    },
    {
        "id_cliente": 1154,
        "nombre": "Luis Soto",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-09-27"
    },
    {
        "id_cliente": 1155,
        "nombre": "Carla Perez",
        "region": "Los Ríos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 4,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-01-22"
    },
    {
        "id_cliente": 1156,
        "nombre": "Luis Diaz",
        "region": "Metropolitana",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-03-17"
    },
    {
        "id_cliente": 1157,
        "nombre": "Ana Silva",
        "region": "La Araucanía",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 4,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-04-13"
    },
    {
        "id_cliente": 1158,
        "nombre": "Juan Perez",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 3,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-07-27"
    },
    {
        "id_cliente": 1159,
        "nombre": "Francisca Diaz",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-04-23"
    },
    {
        "id_cliente": 1160,
        "nombre": "Luis Perez",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-11-25"
    },
    {
        "id_cliente": 1161,
        "nombre": "Francisca Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-07-24"
    },
    {
        "id_cliente": 1162,
        "nombre": "Ana Perez",
        "region": "Los Lagos",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 3,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-10-18"
    },
    {
        "id_cliente": 1163,
        "nombre": "Carla Perez",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-08-02"
    },
    {
        "id_cliente": 1164,
        "nombre": "Pedro Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-07-22"
    },
    {
        "id_cliente": 1165,
        "nombre": "Pedro Contreras",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-07-27"
    },
    {
        "id_cliente": 1166,
        "nombre": "Maria Muñoz",
        "region": "Los Lagos",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 2,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-08-23"
    },
    {
        "id_cliente": 1167,
        "nombre": "Pedro Silva",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 1,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-08-03"
    },
    {
        "id_cliente": 1168,
        "nombre": "Juan Soto",
        "region": "Los Lagos",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-03-07"
    },
    {
        "id_cliente": 1169,
        "nombre": "Juan Silva",
        "region": "Metropolitana",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-03-25"
    },
    {
        "id_cliente": 1170,
        "nombre": "Ana Rojas",
        "region": "La Araucanía",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 2,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-06-16"
    },
    {
        "id_cliente": 1171,
        "nombre": "Carla Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-11-23"
    },
    {
        "id_cliente": 1172,
        "nombre": "Carla Gonzalez",
        "region": "Los Lagos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-03-27"
    },
    {
        "id_cliente": 1173,
        "nombre": "Ana Diaz",
        "region": "La Araucanía",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-01-20"
    },
    {
        "id_cliente": 1174,
        "nombre": "Juan Diaz",
        "region": "La Araucanía",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 1,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-11-06"
    },
    {
        "id_cliente": 1175,
        "nombre": "Maria Gonzalez",
        "region": "La Araucanía",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-05-24"
    },
    {
        "id_cliente": 1176,
        "nombre": "Maria Gonzalez",
        "region": "Los Ríos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 5,
        "comentario": "Totalmente recomendado, volveré a comprar.",
        "fecha": "2025-07-01"
    },
    {
        "id_cliente": 1177,
        "nombre": "Juan Silva",
        "region": "Metropolitana",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-06-01"
    },
    {
        "id_cliente": 1178,
        "nombre": "Carla Soto",
        "region": "Los Lagos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-09-03"
    },
    {
        "id_cliente": 1179,
        "nombre": "Pedro Rojas",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-06-22"
    },
    {
        "id_cliente": 1180,
        "nombre": "Maria Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 5,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-05-15"
    },
    {
        "id_cliente": 1181,
        "nombre": "Maria Rojas",
        "region": "Los Lagos",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-02-19"
    },
    {
        "id_cliente": 1182,
        "nombre": "Francisca Contreras",
        "region": "Metropolitana",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-02-19"
    },
    {
        "id_cliente": 1183,
        "nombre": "Carla Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 5,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-01-03"
    },
    {
        "id_cliente": 1184,
        "nombre": "Juan Rojas",
        "region": "Metropolitana",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-04-04"
    },
    {
        "id_cliente": 1185,
        "nombre": "Jose Silva",
        "region": "Metropolitana",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-07-27"
    },
    {
        "id_cliente": 1186,
        "nombre": "Carla Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-10-28"
    },
    {
        "id_cliente": 1187,
        "nombre": "Maria Contreras",
        "region": "Los Ríos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 3,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-01-17"
    },
    {
        "id_cliente": 1188,
        "nombre": "Luis Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 3,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-08-03"
    },
    {
        "id_cliente": 1189,
        "nombre": "Carla Perez",
        "region": "Los Lagos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-04-08"
    },
    {
        "id_cliente": 1190,
        "nombre": "Luis Perez",
        "region": "Los Ríos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-08-23"
    },
    {
        "id_cliente": 1191,
        "nombre": "Luis Soto",
        "region": "Metropolitana",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 3,
        "comentario": "Atención al cliente lenta.",
        "fecha": "2025-08-18"
    },
    {
        "id_cliente": 1192,
        "nombre": "Juan Rojas",
        "region": "Los Ríos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 2,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-07-07"
    },
    {
        "id_cliente": 1193,
        "nombre": "Juan Gonzalez",
        "region": "Los Ríos",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 3,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-08-28"
    },
    {
        "id_cliente": 1194,
        "nombre": "Ana Diaz",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 3,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-11-07"
    },
    {
        "id_cliente": 1195,
        "nombre": "Jose Muñoz",
        "region": "Los Lagos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-05-14"
    },
    {
        "id_cliente": 1196,
        "nombre": "Carla Silva",
        "region": "Metropolitana",
        "producto_comprado": "Cebollas Malla",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-03-10"
    },
    {
        "id_cliente": 1197,
        "nombre": "Maria Soto",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 5,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-03-24"
    },
    {
        "id_cliente": 1198,
        "nombre": "Pedro Silva",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 4,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-07-18"
    },
    {
        "id_cliente": 1199,
        "nombre": "Pedro Gonzalez",
        "region": "Los Lagos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-05-17"
    },
    {
        "id_cliente": 1200,
        "nombre": "Jose Contreras",
        "region": "Metropolitana",
        "producto_comprado": "Maiz Forrajero",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-04-26"
    },
    {
        "id_cliente": 1201,
        "nombre": "Carla Contreras",
        "region": "Metropolitana",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-06-19"
    },
    {
        "id_cliente": 1202,
        "nombre": "Pedro Contreras",
        "region": "Los Lagos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 5,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-08-16"
    },
    {
        "id_cliente": 1203,
        "nombre": "Pedro Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Uva de Mesa",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-06-28"
    },
    {
        "id_cliente": 1204,
        "nombre": "Juan Silva",
        "region": "La Araucanía",
        "producto_comprado": "Palta Hass Calibre 1",
        "calificacion": 3,
        "comentario": "El embalaje llegó un poco dañado.",
        "fecha": "2025-03-20"
    },
    {
        "id_cliente": 1205,
        "nombre": "Jose Perez",
        "region": "Los Ríos",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-01-15"
    },
    {
        "id_cliente": 1206,
        "nombre": "Francisca Soto",
        "region": "La Araucanía",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 4,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-02-16"
    },
    {
        "id_cliente": 1207,
        "nombre": "Juan Gonzalez",
        "region": "Los Lagos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 4,
        "comentario": "Llegó a tiempo y en buen estado.",
        "fecha": "2025-11-12"
    },
    {
        "id_cliente": 1208,
        "nombre": "Ana Muñoz",
        "region": "Los Ríos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 4,
        "comentario": "Totalmente recomendado, volveré a comprar.",
        "fecha": "2025-07-03"
    },
    {
        "id_cliente": 1209,
        "nombre": "Pedro Gonzalez",
        "region": "Metropolitana",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 5,
        "comentario": "Totalmente recomendado, volveré a comprar.",
        "fecha": "2025-11-07"
    },
    {
        "id_cliente": 1210,
        "nombre": "Ana Muñoz",
        "region": "Los Ríos",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 5,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-01-16"
    },
    {
        "id_cliente": 1211,
        "nombre": "Francisca Perez",
        "region": "La Araucanía",
        "producto_comprado": "Tomates Limachinos",
        "calificacion": 1,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-10-19"
    },
    {
        "id_cliente": 1212,
        "nombre": "Carla Muñoz",
        "region": "La Araucanía",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 1,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-09-14"
    },
    {
        "id_cliente": 1213,
        "nombre": "Pedro Perez",
        "region": "Los Lagos",
        "producto_comprado": "Papas Saco 25kg",
        "calificacion": 5,
        "comentario": "Excelente calidad, muy fresco.",
        "fecha": "2025-02-10"
    },
    {
        "id_cliente": 1214,
        "nombre": "Juan Soto",
        "region": "Los Ríos",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 3,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-06-03"
    },
    {
        "id_cliente": 1215,
        "nombre": "Luis Perez",
        "region": "Los Ríos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 4,
        "comentario": "Muy buen precio para la calidad.",
        "fecha": "2025-09-01"
    },
    {
        "id_cliente": 1216,
        "nombre": "Maria Silva",
        "region": "Metropolitana",
        "producto_comprado": "Manzanas Fuji Export",
        "calificacion": 2,
        "comentario": "No estaba tan fresco como la vez anterior.",
        "fecha": "2025-04-22"
    },
    {
        "id_cliente": 1217,
        "nombre": "Carla Rojas",
        "region": "La Araucanía",
        "producto_comprado": "Trigo Granel Quintal",
        "calificacion": 2,
        "comentario": "El despacho demoró más de lo esperado.",
        "fecha": "2025-01-11"
    },
    {
        "id_cliente": 1218,
        "nombre": "Maria Silva",
        "region": "Metropolitana",
        "producto_comprado": "Cerezas Export Box",
        "calificacion": 5,
        "comentario": "El producto cumple con lo prometido.",
        "fecha": "2025-03-22"
    },
    {
        "id_cliente": 1219,
        "nombre": "Pedro Rojas",
        "region": "Los Lagos",
        "producto_comprado": "Arandanos Premium",
        "calificacion": 2,
        "comentario": "Esperaba mejor calidad por el precio.",
        "fecha": "2025-05-20"
    }
]);

print("Carga de datos completada exitosamente.");
