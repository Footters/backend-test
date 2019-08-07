<div align="center">
	<div>
		<img width="200" src="media/logo.png" alt="Footters Core">
	</div>
    <h1 width="200">Footters - Backend Developer Test</h1>
	<p>La siguiente es una prueba para evaluar a aspectos técnicos de los candidatos a desarrollador <b>Backend</b>.</p>
	<p>
		<sub>Made with :heart: by people who loves :soccer:</sub>
	</p>
	<br>
</div>



## Introducción
Este repositorio contiene una serie de requerimientos de un Caso Práctico, que busca evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de Tecnología de _Footters_.

#### ¿Qué se busca evaluar?
Principalmente los siguientes aspectos:
* Creatividad para resolver los requerimientos.
* Calidad del código entregado (estructura y buenas prácticas).
* Eficiencia de la solución entregada.
* Familiaridad con librerías, frameworks y plataformas de desarrollo.

## Importante
1. No hay tiempo establecido para entregar la prueba. Aun así, recomendamos emplear un máximo de **3-4 días** y enviar todo lo que puedas.
2. Se requiere de una **cuenta de GitHub** para realizar este ejercicio.
3. **Antes de comenzar a programar:**
    * Realizar un `Fork` de este repositorio (https://github.com/Footters/backend-test).
    * Clonar el fork a su máquina local  `git clone git@github.com:USERNAME/FORKED-PROJECT.git`
    * Crear un `branch` en su cuenta de GitHub utilizando su nombre completo.
4. Se recomienda añadir un `archivo.md` en la solución aportada para explicar mediante texto lo que se considere oportuno.
5. **Al finalizar**, existen 2 opciones para entregar su proyecto:
    * 1) Realizar un `Commit` de su proyecto, **enviar un `Pull Request` al branch con su nombre**, y notificar a la siguiente dirección de correo electrónico  [tech@footters.com](mailto:tech@footters.com).
    * 2) Crear un archivo comprimido (_.zip_ o _.rar_) de su proyecto y enviar a la siguiente dirección de correo electrónico  [tech@footters.com](mailto:tech@footters.com).

## Descripción
Se solicita la creación de una API REST que gestione las alineaciones de los partidos de fútbol, los jugadores alineados en ellas y las acciones que generan estos jugadores durante un partido.

### Especificaciones
1. Las alineaciones adoptan una formación (e.g. 4-4-2) de entre varias (4-4-2, 4-3-3, 3-4-3). No es necesario incluir ninguna más.
2. Una alineación es del equipo local o visitante. No es necesario gestionar datos de equipos.
3. Los jugadores tienen un nickname (nombre de la camiseta), un dorsal y una posición (por defecto).
4. Se alinean un máximo de 11 jugadores en un partido.
5. Se asume que un jugador adopta su posición en cualquier alineación.
6. Omitimos restricciones de posiciones en una alineación según su formación. (Puede haber 11 porteros 😆)
7. Las acciones son de un tipo (tarjeta amarilla o roja, gol/gol en propia puerta, asistencia). No es necesario incluir ninguna más.
8. Las acciones ocurren en un minuto concreto del partido.
9. Las acciones van asociadas a un jugador alineado.
9. Omitimos la gestión se cambios de jugadores en la alineación.

### Funcionalidad
1. Poder crear, editar y eliminar una alineación.
2. Poder crear, editar y eliminar un jugador.
3. Poder crear o eliminar una acción.
4. Obtener una alineación, con la posibilidad de añadir los jugadores alineados y las acciones que se han producido.
5. Listar los jugadores. Incluir filtro por posición. Paginación requerida.
6. Listar el total de acciones por tipo. Incluir filtro por alineación o jugador.


### Requisitos
* Requerido usar Docker y Docker Compose para crear los diferentes servicios.
* Se puede usar el lenguaje que se desee, aunque valoramos preferiblemente NodeJS o Go.
* Se puede usar cualquier motor base de datos, aunque valoramos preferiblemente cualquier SQL.
* Se puede hacer uso de ORM o QueryBuilder.
* Se puede hacer uso de frameworks y librerías de terceros.
* Requerido implementar un sistema de caching. Se valorará preferiblemente Redis. En caso de no abordar la solución por desconocimiento o tiempo, describir en el `archivo.md` cómo implementariais la solución, cuál sería la política de invalidación y qué tiempos de expiración otorgarías según el tipo de dato y el uso que creeis que puede tener.
* Requerido implementar tests.
* Se valorará un correcto control de errores.
* Total libertad para añadir cualquier funcionalidad extra que considereis interesante, ya sea para extender o mejorar la descrita. Siempre bienvenida.