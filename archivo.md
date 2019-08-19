# Footters - Backend Developer Test!

La siguiente prueba ha sido realizada con Node.js V10.16.0 y como framework se ha usado Express V4.17, como base de datos para esta prueba se ha usado SQLite.


# Endpoints
1. Players:
	* GET /api/players (http://localhost:8080/api/players?page=0&pageSize=10&position=goalkeeper) los params son opcionales. [Listar todos los jugadores]
	* POST /api/players (http://localhost:8080/api/players). En el body tenemos que pasar los siguientes params [Crear un jugador]
		```javascript
		{ "name": "string",
		"number": integer,
		"position": "string" }
		```
	* PUT  /api/players (http://localhost:8080/api/players). En el body tenemos que pasar: [Modificar los datos de un jugador]
		```javascript
		{
			"name": "string",
			"change":{
				"number": integer //or 
				"position": "string"
			}
		}
		```
	* DELETE /api/players/:nickName (http://localhost:8080/api/player/iniesta) [Borrar un jugador]

2. Lineups:
	* GET /api/lineups (http://localhost:8080/api/lineups) [Obtener todas las alineaciones]
	* POST /api/lineups (http://localhost:8080/api/lineups) [Crear una nueva alineación]. Los datos que tenemos que pasar en el body son:
		```javascript
		{
		"name":"String",
		"lineup":"String",
		"numPlayers": integer
		}
		```
	* PUT /api/lineups/:name (http://localhost:8080/api/lineups/local) [Modificar una alineación] los campos a pasar en el body son:
		```javascript
		{
		"change":{
			"lineup":"string" // 4-4-2 | 4-3-3 ...
			}
		}
		```
	* DELETE /api/lineups/:name (http://localhost:8080/api/lineups/local) [Borra una alineación]
	* PUT /api/lineups/:team/:name (http://localhost:8080/api/lineups/local/iniesta) [Asociar un jugador a una alineación]. En el caso de que no exista el jugador o la alineación, se devuelve un 404 y un mensaje
		```javascript
		{"message": "player or team not exists"}
		```

3. Actions:
	* GET /api/actions/ (http://localhost:8080/api/actions?page=0&pageSize=10&player=1)[Obtiene todas las acciones asociadas a un jugador.
	* POST /api/actions/ (http://localhost:8080/api/actions) [Crea una nueva acción]. Los datos a pasar en el body son:
		```javascript
		{
			"type":"string",
			"minute": integer,
			"player": "string"
		}
		```
	* DELETE /api/actions/:id (http://localhost:8080/api/actions/2) [Eliminar una acción por su id]

# Cache

Se ha implementado un sistema de cache con Redis, Para este ejemplo se ha implementado un middleware, que en el código actual solo lo usa el endpoint de obtener todos los jugadores. Las peticiones se cachean durante 60 segundos y se han añadido las cabeceras de "**isCache**" para saber si está o no cacheada. Para que el sistema funcione es necesario tener un redis levantado en local.
# Docker File and Docker-compose

Se han creado los ficheros para contenerizar la aplicación. Lamentablemente no he podido probarlo por un problema con docker en mi ordenador.

# Test

Para los test se ha usado **jest** y se han creado test para todos los casos de uso de la prueba (Obtener jugadores, añadirlos y borrarlos, crear alineaciones, editarlas, borrarlas, crear acciones, editarlas, borrarlas). Para ejecutar los test tenemos que ejecutar **npm test**.



# Ejecución del proyecto

Primero es necesario instalar las dependencias con npm install, una vez instaladas las dependencias, ejecutar npm start. Esto levanta un server en el puerto 8080.

