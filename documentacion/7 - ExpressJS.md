# [ExpressJS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)

## Instalación

```bash
npm install --save express
```

Ejemplo de uso:

```js
// /server/index.express.js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

[Habilitar reinicio del servidor tras los cambios con Nodemon](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes)

```bash
npm install --save-dev nodemon
```

Modificar los scripts de inicio, para Linux/MAC:

```json
"scripts": {
  "start": "node ./bin/www",
  "devstart": "nodemon ./bin/www",
  "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
}
```

Y para Windows:

```json
"scripts": {
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
}
```

## [Gestión de rutas](https://expressjs.com/en/guide/routing.html)

```js
// /server/router.express.js
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
```

## [Middlewares](https://expressjs.com/en/guide/writing-middleware.html)

Identificación de usuarios por medio del protocolo de autorización OAuth2

* [OpenID-Connect with Google](https://permify.co/post/oauth-20-implementation-nodejs-expressjs/)
  * [Check comments](https://www.reddit.com/r/node/comments/1aervdx/oauth_20_implementation_in_nodejs_express/)
* [OAuth2 with Express](https://merlino.agency/blog/step-by-step-how-to-implement-oauth2-server-in-expressjs)

## [Gestión de errores](https://expressjs.com/en/guide/error-handling.html)

## Creación de APIs como endpoints REST

Métodos de envío y recogida de datos:

* GET
* POST
* PUT
* DELETE

```js
// /server/index.express.js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// CREATE
app.post('/users', (req, res) => {
  res.send('User created!')
})
// READ
app.get('/users', (req, res) => {
  res.send('Users\' list')
})
// UPDATE
app.put('/users/:id', (req, res) => {
  res.send('User updated!')
})
// DELETE
app.delete('/users/:id', (req, res) => {
  res.send('User deleted!')
})
```

## [Uso de plantillas](https://expressjs.com/en/guide/using-template-engines.html)

* [Pug](https://www.npmjs.com/package/pug)
* [Handlebars](https://www.npmjs.com/package/handlebars)
* [EJS](https://www.npmjs.com/package/ejs)

## Cookies

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // "name" and "value"
  res.cookie('sessionId', '12345678', {
    // "expires" - The cookie expires in 24 hours
    expires: new Date(Date.now() + 86400000),
    // "path" - The cookie is accessible for APIs under the '/api' route
    path: '/api',
    // "domain" - The cookie belongs to the 'example.com' domain
    domain: 'example.com',
    // "secure" - The cookie will be sent over HTTPS only
    secure: true,
    // "HttpOnly" - The cookie cannot be accessed by client-side scripts
    httpOnly: true
  });

  // We can also use "maxAge" to specify expiration time in milliseconds
  res.cookie('preferences', 'dark_theme', {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    httpOnly: true // For security, also set "httpOnly" flag
  });

  res.send('Cookies are set with different attributes.');
});

const server = app.listen(3000, () => {
  console.log('Server running on port 3000...');
});
```

## Sesiones

```js
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'your_secret_key', // A secret key used to sign the session ID cookie
  resave: false, // Forces the session to be saved back to the session store
  saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store
  cookie: {
    maxAge: 3600000, // Sets the cookie expiration time in milliseconds (1 hour here)
    httpOnly: true, // Reduces client-side script control over the cookie
    secure: true, // Ensures cookies are only sent over HTTPS
  }
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome to this page for the first time!');
  }
});


app.get('/store', (req, res) => {
  // Save some data in the session
  req.session.customData = 'This is saved in session.';
  res.send('Data has been saved in the session.');
});

app.get('/retrieve', (req, res) => {
  // Check if the session data exists before trying to access it
  if (req.session.customData) {
    res.send(`Here's your session data: ${req.session.customData}`);
  } else {
    res.send('No session data found.');
  }
});

const server = app.listen(3000, () => {
  console.log('Server running on port 3000...');
});
```
