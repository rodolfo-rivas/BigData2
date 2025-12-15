import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import mean_squared_error, accuracy_score, confusion_matrix, classification_report
from sklearn.preprocessing import LabelEncoder

# Configuración de estilo
sns.set(style="whitegrid")
plt.rcParams['figure.figsize'] = (10, 6)

def analizar_ventas():
    print("--- ANÁLISIS PREDICTIVO DE VENTAS ---")
    try:
        df = pd.read_csv('dataset_ventas.csv')
    except FileNotFoundError:
        print("Error: No se encontró 'dataset_ventas.csv'. Ejecuta generator.py primero.")
        return

    # 1. Gráfico: Ventas Totales por Región
    plt.figure()
    ventas_por_region = df.groupby('region_cliente')['total_venta'].sum().sort_values(ascending=False)
    sns.barplot(x=ventas_por_region.index, y=ventas_por_region.values, palette="viridis")
    plt.title('Ventas Totales por Región')
    plt.ylabel('Total Venta ($)')
    plt.xlabel('Región')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig('grafico_ventas_region.png')
    print("Gráfico guardado: grafico_ventas_region.png")

    # 2. Gráfico: Evolución de Ventas (Serie de Tiempo)
    df['fecha'] = pd.to_datetime(df['fecha'])
    ventas_diarias = df.groupby('fecha')['total_venta'].sum()
    plt.figure()
    ventas_diarias.plot(kind='line', color='blue')
    plt.title('Evolución Diaria de Ventas')
    plt.ylabel('Total Venta ($)')
    plt.xlabel('Fecha')
    plt.tight_layout()
    plt.savefig('grafico_ventas_tiempo.png')
    print("Gráfico guardado: grafico_ventas_tiempo.png")

    # 3. Modelo Predictivo: Regresión Lineal
    # Intentaremos predecir la 'cantidad' vendida basándonos en el 'precio_unitario'
    # (Hipótesis: A mayor precio, menor cantidad - Curva de demanda)
    X = df[['precio_unitario']]
    y = df['cantidad']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    model = LinearRegression()
    model.fit(X_train, y_train)
    
    y_pred = model.predict(X_test)
    mse = mean_squared_error(y_test, y_pred)
    r2 = model.score(X_test, y_test)
    
    print(f"Modelo Regresión Lineal (Precio -> Cantidad):")
    print(f"  MSE: {mse:.2f}")
    print(f"  R2 Score: {r2:.2f} (Indica qué tan bien el modelo explica la varianza)")
    print(f"  Coeficiente (Pendiente): {model.coef_[0]:.2f}")
    
    # Gráfico de la regresión
    plt.figure()
    plt.scatter(X_test, y_test, color='gray', alpha=0.6, label='Datos Reales')
    plt.plot(X_test, y_pred, color='red', linewidth=2, label='Predicción')
    plt.title('Regresión: Precio Unitario vs Cantidad Vendida')
    plt.xlabel('Precio Unitario')
    plt.ylabel('Cantidad')
    plt.legend()
    plt.tight_layout()
    plt.savefig('grafico_regresion_ventas.png')
    print("Gráfico guardado: grafico_regresion_ventas.png")
    print("-" * 30)

def analizar_opiniones():
    print("--- ANÁLISIS PREDICTIVO DE OPINIONES ---")
    try:
        df = pd.read_csv('dataset_opiniones.csv')
    except FileNotFoundError:
        print("Error: No se encontró 'dataset_opiniones.csv'. Ejecuta generator.py primero.")
        return
    
    # 1. Gráfico: Distribución de Sentimientos
    plt.figure()
    sns.countplot(x='sentimiento_target', data=df, palette="pastel")
    plt.title('Distribución de Sentimientos (Positivo/Negativo)')
    plt.tight_layout()
    plt.savefig('grafico_opiniones_sentimiento.png')
    print("Gráfico guardado: grafico_opiniones_sentimiento.png")

    # 2. Modelo Predictivo: Clasificación
    # Predecir si la opinión es Positiva o Negativa basado en la Región y el Producto
    # Esto nos dice si ciertos productos o regiones tienden a tener mejores/peores reviews
    
    le_region = LabelEncoder()
    le_producto = LabelEncoder()
    le_target = LabelEncoder()
    
    df['region_encoded'] = le_region.fit_transform(df['region'])
    df['producto_encoded'] = le_producto.fit_transform(df['producto_comprado'])
    df['target_encoded'] = le_target.fit_transform(df['sentimiento_target']) 
    
    X = df[['region_encoded', 'producto_encoded']]
    y = df['target_encoded']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    clf = LogisticRegression()
    clf.fit(X_train, y_train)
    
    y_pred = clf.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    
    print(f"Modelo Clasificación (Región+Producto -> Sentimiento): Accuracy = {acc:.2f}")
    print("\nReporte de Clasificación:")
    print(classification_report(y_test, y_pred, target_names=le_target.classes_))
    
    # Matriz de Confusión
    cm = confusion_matrix(y_test, y_pred)
    plt.figure()
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=le_target.classes_, yticklabels=le_target.classes_)
    plt.title('Matriz de Confusión - Clasificación de Sentimientos')
    plt.ylabel('Real')
    plt.xlabel('Predicho')
    plt.tight_layout()
    plt.savefig('grafico_confusion_opiniones.png')
    print("Gráfico guardado: grafico_confusion_opiniones.png")
    print("-" * 30)

if __name__ == "__main__":
    analizar_ventas()
    analizar_opiniones()
    print("Análisis completado. Revisa los archivos .png generados.")
