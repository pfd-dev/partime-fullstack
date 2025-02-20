# NodeJS

* [Instalación de Node, npm/x y nvm](../README.md#programas-necesarios)
* [Desarrollando para el servidor](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side)

## El motor V8 de Google y Node

* [El motor V8 de Google](https://v8.dev/)
* [Documentación de V8 en NodeJS](https://nodejs.org/docs/latest/api/v8.html)

## Creación de un paquete con node (package.json)

* [Versionado de librerías](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)
* [Publicación en npm](https://www.npmjs.com/)

## Creación de un servidor simple de http

```js
// /server/index.js
import * as http from "node:http";
import * as url from "node:url";

http.createServer(function server_onRequest (request, response) {
    var pathname = url.parse(request.url).pathname;

    console.log("Request for " + pathname + " received.");

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>Hello World</h1>");
    response.end();
}).listen(process.env.PORT, process.env.IP);

console.log('Server running at http://' + process.env.IP + ':' + process.env.PORT + '/');
```

Creación del archivo .env:

```yaml
PORT=1337
IP=127.0.0.1
```

Ejecución con el archivo de configuración de entornos:

```bash
node --env-file=.env --watch server/index.js
```

Solución de problemas de CORS: añadir las cabeceras a la response.

```js
response.setHeader('Access-Control-Allow-Origin', '*');
response.setHeader('Content-Type', 'application/json');
response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
response.setHeader("Access-Control-Allow-Headers", "*");
response.setHeader('Access-Control-Max-Age', 2592000); // 30 days
response.writeHead(200);
```

## El sistema de ficheros

[Módulo filesystem (fs)](https://nodejs.org/api/fs.html)

* [Buffer](https://nodejs.org/api/buffer.html)
* [Stream](https://nodejs.org/api/stream.html)
* [Watch](https://nodejs.org/api/fs.html#fswatchfilename-options-listener)

Ejemplo de uso de **fs**: [CRUD de BBDD en archivo local al servidor](https://www.freecodecamp.org/espanol/news/como-crear-una-aplicacion-crud-de-linea-de-comandos-con-node-js/)

## Servidor de archivos estáticos

[Tipos de archivos](https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types) de cara a la gestión de archivos estáticos.

```js
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";

const PORT = 8000;

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "application/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const STATIC_PATH = path.join(process.cwd(), "./static");

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url];
  if (url.endsWith("/")) paths.push("index.html");
  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : STATIC_PATH + "/404.html";
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { found, ext, stream };
};

http
  .createServer(async (request, response) => {
    const file = await prepareFile(request.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    response.writeHead(statusCode, { "Content-Type": mimeType });
    file.stream.pipe(response);
    console.log(`${request.method} ${request.url} ${statusCode}`);
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

Consideraciones adicionales, cabeceras adicionales según necesitemos:

```js
// Sitios web que se pueden conectar a nuestro servidor
response.setHeader('Access-Control-Allow-Origin', '*');

// Métodos de la solicitud que deseas permitir
response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Cabeceras de la solicitud que deseas permitir
response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Establecer a true si deseas que las cookies sean compartidas
response.setHeader('Access-Control-Allow-Credentials', true);
```

## [Modificando archivos](https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs)

```js
import * as fs from "node:fs";

const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
```

## Cookies

Estructura de una cookie

* name: nombre de la cookie
* value: valor de la cookie
* expires: fecha de expiración de la cookie
* path: ruta de la cookie
* domain: dominio de la cookie
* secure: indica si la cookie es segura
* httpOnly: indica si la cookie es HttpOnly, para evitar accesos no autorizados

```js
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Set-Cookie': [
      'name=example; Max-Age=9000; HttpOnly',
      'preferences=dark; Expires=Wed, 09 Jun 2021 10:18:14 GMT',
      'sessionToken=abc123; Path=/; Secure; HttpOnly',
      'shoppingCart=12345; Domain=example.com;',
      'logged_in=true; Secure; Path=/; Domain=example.com; HttpOnly'
    ]
  });

  res.end('Cookie set!');
}).listen(8080);

console.log('Server started on http://localhost:8080');
```

* **Exposición de datos confidenciales**: las cookies suelen contener datos confidenciales, como tokens de sesión o información personal. Si las cookies no se protegen adecuadamente, estos datos podrían quedar expuestos a terceros no autorizados, lo que podría provocar violaciones de la privacidad o robo de identidad.

* **Cross-Site Scripting (XSS)**: si una cookie no tiene el atributo HttpOnly establecido, JavaScript puede acceder a ella, lo que significa que si un atacante puede inyectar scripts maliciosos en sus páginas web (por ejemplo, a través de una vulnerabilidad XSS), podría leer y robar datos de cookies, incluidas las cookies de sesión.

* **Falsificación de solicitud entre sitios (CSRF)**: los atacantes pueden explotar las cookies para realizar acciones en nombre de un usuario conectado sin su consentimiento. Si un atacante puede engañar al navegador de un usuario para que realice una solicitud a un sitio en el que está autenticado, las cookies adjuntas a ese sitio se incluirán automáticamente, lo que podría dar lugar a acciones no autorizadas.

* **Secuestro de sesión**: si un atacante intercepta las cookies de un usuario (especialmente las cookies de sesión), puede hacerse pasar por el usuario en el sitio web. La bandera segura ayuda a mitigar este riesgo al garantizar que las cookies solo se envíen a través de conexiones HTTPS cifradas, pero no es infalible, especialmente si se puede engañar al usuario para que utilice una conexión insegura.

* **Cookie Tossing**: es cuando un atacante instala una cookie de un subdominio para interferir con las cookies del dominio principal. Esto puede provocar que se sobrescriban las cookies legítimas con cookies maliciosas, lo que podría secuestrar las sesiones de los usuarios o llevar a cabo otros ataques.

* **Cookies de terceros**: estas cookies las establecen dominios distintos del que el usuario está visitando en ese momento y pueden rastrear a un usuario en varios sitios para crear un perfil detallado de sus hábitos de navegación. Se trata de una cuestión de privacidad que se está abordando con nuevas regulaciones y funciones del navegador.

En general, no podemos tener un 100% de seguridad en el mundo virtual, pero los desarrolladores podemos seguir estas instrucciones para reducir los problemas de seguridad:

* Utiliza _Secure_ para garantizar que las cookies sólo se envíen a través de conexiones HTTPS seguras.
* Utiliza _HttpOnly_ para evitar que JavaScript acceda a cookies confidenciales.
* Establece el atributo _SameSite_ para restringir cómo se envían las cookies con solicitudes entre sitios.
* Si es posible, manten los datos confidenciales fuera de las cookies y, si es necesario, asegúrate de que estén encriptados y tengan controles de integridad.
* Establezce claramente los atributos _Domain_ y _Path_ para restringir dónde se utilizan las cookies.
* Utiliza mecanismos de gestión de sesiones sólidos, como la regeneración de los ID de sesión después de iniciar sesión.
* Considera otros mecanismos de almacenamiento como _Secure_, _HttpOnly_, sesiones del lado del servidor basadas en tokens de usuario, que pueden mitigar algunos de los riesgos mencionados anteriormente.

## Sesiones

En el mundo web, una sesión funciona así:

1. **El comienzo**: cuando visitas un sitio web por primera vez, el servidor proporciona una identificación de sesión única, que se almacena en una cookie en tu navegador.
2. **Durante la visita**: con cada solicitud que realizas al servidor (haciendo clic en enlaces, enviando formularios, etc.), el navegador envía esa cookie de sesión para recordarle al servidor quién eres. El servidor utiliza este ID para recuperar los datos de su sesión de su memoria o base de datos.
3. **Almacenamiento de información**: estos datos de sesión pueden almacenar cualquier cosa, desde los artículos que ha agregado a un carrito de compras hasta si has iniciado sesión.
4. **Finalización de la sesión**: cuando cierras la sesión, cierras el navegador o después de un período de inactividad, la sesión finaliza. Los datos de visita únicos que se encuentran en el servidor pueden borrarse.

## Sockets

* [TCP](https://nodejs.org/api/net.html): [ejemplo de servicor TCP y cliente](https://gist.github.com/tedmiston/5935757)
* [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
  * [Ejemplo de uso con la librería ws](https://dev.to/hamzakhan/built-in-websockets-in-nodejs-2024-a-comprehensive-guide-2236)
  * [Ejemplo de uso con la librería express-ws](https://www.scaler.com/topics/expressjs-tutorial/express-websocket/)
