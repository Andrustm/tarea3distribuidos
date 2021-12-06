# 


En este repositorio tendremos el código y las instrucciones para ejecutar la tarea 3 de sistemas distribuidos, esta consiste en implementar un servicio api rest con replicas administradas por un balanceador de carga con nginx y una base de datos con esquema master-slave, para efectos de nuestro proyecto utilizaremos nodejs y docker para lograr los objetivos.



# Integrantes: Diego Venegas, Andres Daille, Marcelo Luengo.

### Ls tecnologias que se ocuparon en esta tarea fueron nginx que era la solicitada y postgresql que era la recomendada asi que se ocupo, dentro de otras tecnologias que se ocuparon por preferencia propia docker, nodejs, npm y docker-compose que fue fundamental.

git clone




# Para poder ejecutrar el codido se ocupa el comando a continuacion, pero se destaca que hay que esperar un buen rato, con el fin de que ejecute los contenedores de forma correcta.Los logs dan informacion de que como va la cosa.


```
docker-compose up --build
```







# /localhost:8080/crear_producto
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

# /localhost:8080/obtener_producto/yeyoldo

OJO: Alfinal de la ruta se pone que buscar, PARA ESTE CASO es yeyoldo

Metodo para buscar un producto, a continuacion se muestra como se ve:

```
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
```
