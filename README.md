
# Integrantes: Diego Venegas, Andres Daille, Marcelo Luengo.

#### Para lo pedido en la tarea N°3, se crea una api sencilla, junto con replicas las cuales van a ser trabajadas por el balanceador de carga nginx, que reparte equitativamente los requests a cada instancia del microservicio de inventario, y cada una de estas instancias inserta en la base de datos master o lee en la base de datos slave, tal como en la siguiente figura. Las tecnologias que se ocuparon en esta tarea fueron nginx que era la solicitada y postgresql que era la recomendada asi que se ocupo, dentro de otras tecnologias que se ocuparon por preferencia propia docker, nodejs, npm y docker-compose que fue fundamental.










## Para poder ejecutrar el codido se ocupa el comando a continuacion, pero se destaca que hay que esperar un buen rato, con el fin de que ejecute los contenedores de forma correcta.Los logs dan informacion de que como va la cosa.


```
docker-compose up --build
```

# Las rutas a ocupar:
## /localhost:8080/crear_producto
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

## /localhost:8080/obtener_producto/yeyoldo

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
