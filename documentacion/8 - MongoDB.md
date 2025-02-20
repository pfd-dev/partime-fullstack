# MongoDB

* ¿Qué es el [NoSQL](https://cloud.google.com/discover/what-is-nosql?hl=en#what-is-a-nosql-database)?
* [Modelo de datos en MongoDB](https://www.mongodb.com/docs/manual/data-modeling/)
* Modelo de query en MongoDB
  * [Búsqueda textual](https://www.mongodb.com/docs/manual/core/link-text-indexes/#std-label-text-search-on-premises)
* [Indexado de datos](https://www.mongodb.com/docs/drivers/node/current/fundamentals/indexes/#overview)
* [Colecciones](https://www.mongodb.com/docs/manual/reference/method/js-collection/)
* Operaciones con los datos
  * [read](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/retrieve/)
    * [sort](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/sort/)
    * [skip](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/skip/)
    * [limit](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/limit/)
    * [specify fields](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/project/)
  * [insert](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/insert/)
  * [update](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/modify/#update-documents)
  * [delete](https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/delete/)
* [Operadores de búsqueda](https://www.mongodb.com/docs/manual/reference/operator/query/)
* [Operaciones en grupo](https://www.mongodb.com/docs/drivers/node/current/fundamentals/aggregation/#std-label-node-aggregation)
* [Búsquedas agregadas](https://www.mongodb.com/docs/drivers/node/current/aggregation-tutorials/one-to-one-join/)

## Conexión con MongoDB

Instalación de la librería:

```bash
npm install --save-dev mongodb@6.13
```

Conexión con la instancia local de MongoDB:

```js
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => {
  if (err) throw err;

  const db = client.db("animals");
  db.collection("mammals")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});
```

## Certificación oficial

[Programa GitHub Studen Developer Program con MongoDB](https://www.mongodb.com/students?utm_source=LINKEDIN&utm_medium=ORGANIC_SOCIAL_ADVOCACY).
