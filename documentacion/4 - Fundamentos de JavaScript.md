# Fundamentos de JavaScript

* [Práctica de JS con Katas](https://jskatas.org/katas/groups/level-easy/)

## Conceptos básicos de programación

* [Pseudocódigo](https://kinsta.com/es/base-de-conocimiento/que-es-pseudocodigo/)
  * INPUT: pides información al usuario
  * SET: guardas información en una variable
  * PRINT: muestras un valor o mensaje en la pantalla
  * READ: lees un archivo o documento
  * DISPLAY: muestras una ventana nueva
  * SHOW / HIDE: muestras u ocultas un elemento de interfaz
  * CALCULATE: realiza un cálculo
  * IF-ELSE: ejecuta una acción si se cumple una condición (o en el caso de que no se cumpla)
  * CASE: realiza acciones a partir de una lista de preguntas sobre un mismo valor
  * FOR: realiza acciones sobre una lista de elementos, o a partir de ellos
  * WHILE: realiza acciones mientras se cumpla una condición
  * DO-WHILE / REPEAT-UNTIL: realiza una acción, y luego continúa haciéndolo mientras se cumpla una condición (o deje de cumplirse)

* [Diagramas de flujo](https://www.canva.com/es_es/pizarra-online/diagramas-flujo/)
* [Documentación](https://jsdoc.app/about-getting-started)

## [Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

* Number
  * [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN): validar si una variable es numérica usando isNaN
* String
  * [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split): convertir en Array una cadena de texto usando las comas como separador, de forma que si introducimos varios artículos separados por comas en la caja de texto se añadan varios elementos a la lista de la compra
  * [toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase): convertir a texto en mayúsculas el nombre del artículo antes de añadirlo a la lista de la compra
  * [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll): reemplazar todos los caracteres numéricos por texto, dentro de una cadena de texto
  * [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* Array
  * [isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray): comprobar si la variable recibida es un Array o no, y luego mostrar el número de elementos del Array
  * [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach): mostrar por consola cada elemento de un array
  * [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join): usando un Array de artículos, unirlos en una cadena de texto usando una coma como separador
  * [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): usar map para recorrer la lista de la compra y devolver el nombre del artículo en mayúsculas
  * [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice): devolver el tercer elemento de una lista de tipo Array
  * [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice): borrar de una lista el segundo elemento del Array
* Object
  * [assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign): copiar un atributo de un objeto a otro
  * [entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries): convertir a Array las propiedades de un objeto y mostrarlo por consola
  * [keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys): obtener la lista de claves de un objeto y mostrarla por consola
* [Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

## [Expresiones y Operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)

## [Estructuras y condicionales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

* [Falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

## [Bucles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

* [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement). Ejemplo de uso:

```js
let condicion = ''
while (condicion !== 'he terminado') {
  // lanzar peticion
  condicion = API.getCondicion('https://API_URL')
}
```

* [For...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement). Ejemplo de uso:

```js
for (let typeIndex in POKEMONS[i].type) {
  let typeValue = POKEMONS[i].type[typeIndex]
  console.log(typeIndex, typeValue)
}
```

* [For...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement). Ejemplo de uso:

```js
for (let typeValue of POKEMONS[i].type) {
  console.log(typeValue)
}
```

## [Funciones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

## Listas

* [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [Desestructuración](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## [Objetos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## [Eventos](https://developer.mozilla.org/en-US/docs/Web/API/Event)

## Trabajando con el navegador

* [LocalStorage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local)
* [SessionStorage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/session)
* [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie)

## Asíncronía

* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
* [Promesas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
