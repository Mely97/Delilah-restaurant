# FinalProject_Delilah_Resto
## PROYECTO FINAL ACAMICA -DESARROLLO WEB FULL STACK

Api de pedidos para un restaurante creada con Nodejs y mySQL.

## Requerimientos 
Para utilizarlo se necesitará Node.js, Postman y xampp.

### Node
- #### Instalar Node en Windows
  Dirigirse a  [official Node.js website](https://nodejs.org/) y descargar el instalador.
  
- #### Instalar Node en Ubuntu

  Se puede instalar node.js y npm fácilmente con apt install con los siguientes comandos.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Instalar Node en otro sistema operativo 
  Podría  encontrar más información en [official Node.js website](https://nodejs.org/) y [official NPM website](https://npmjs.org/).

Si la instalación fue exitosa debería poder ejecutar los siguientes comandos.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0
### Postman
Para instalar Postman diríjase a [la página principal de Postman](https://www.postman.com/downloads/) y siga las instrucciones para su sistema operativo.


### Xampp
Para instalar Xampp diríjase a [la siguiente página](https://www.apachefriends.org/es/index.html) y siga las instrucciones para su sistema operativo.

---

## Empezando 
- Clonar el repositorio
```
https://github.com/Mely97/Delilah-restaurant

```

## Instalación 
Ejecutar ``npm install`` para instalar las dependencias.

### Creación de tablas en mySQL

En el archivo ``create_tables.sql`` encontrará las estructuras de las tablas para la utilización de la API, junto con la creación del administrador. Este usuario podrá crear, modificar y borrar productos, usuarios y pedidos, así como también podrá visualizar toda la información sobre los usuarios y los pedidos realizados.

### Iniciar el servidor
- Ejecutar ```node server.js``` en  consola
- Abrir el navegador de preferencia y escribir la dirección ```http://localhost:3000```
- Debería aparecer el mensaje * Servidor iniciado *
- Dirígase a Xampp, una vez en el panel de inicio, en la seccion Modules, hacer click en los botones ``` start``` de la fila correspondiente a Apache y MySQL.
- **Ready!** ya se pueden hacer todas las pruebas que se desee en Postman

### Endpoints

Encontrarás los posibles endpoints en el documento ``spec.yaml``. Puede abrirlo en el [editor de Swagger](https://editor.swagger.io/) para visualizarlo mejor.

#### Formatos 
- Para ingresar un pedido

```
{
    "productos" : [{
        "id" : "1"
        "nombre" : "ejemplo1",
        "cantidad" : "5"
    },{
        "id" : "2"
        "nombre" : "ejemplo2",
        "cantidad" : "5"
    }],
    "mododepago" : "Efectivo/tarjeta"
}

```









