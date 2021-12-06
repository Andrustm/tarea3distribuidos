# tarea3distribuidos

# Integrantes: Diego Venegas, Andres Daille, Marcelo Luengo.



git clone

docker-compose up










# http://localhost:8080/crear_producto
Metodo para crear un producto, a continuacion se muestra como se ve:


```
{
	"nombre": "yeyoldo",
	"precio": 31
}
```
Al ingresar lo anterior responde con el mensaje "redy", de que ya se ingreso en una de las 3 bases de datos replicadas:

```
{
  "mensaje": "redy"
}
```

# http://localhost:8080/obtener_producto/yeyoldo

OJO: Alfinal de la ruta se pone que buscar, PARA ESTE CASO es yeyoldo

Metodo para buscar un producto, a continuacion se muestra como se ve:


[
  {
    "id": 1,
    "nombre": "yeyoldo",
    "precio": 31
  },
  {
    "id": 2,
    "nombre": "yeyoldo",
    "precio": 45
  }
  
  
]

