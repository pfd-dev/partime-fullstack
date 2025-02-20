# Git Hooks

Los [Git Hooks] nos sirven para automatizar nuestro proyecto localmente (aunque también se pueden usar en __CI__).
Básicamente son piezas de código que se ejecutadan cuando se disparan determinados eventos en el ciclo de vida de git, por ejemplo:

* __pre-commit__ para validar los archivos modificados antes de crear el commit.
* __commit-msg__ para modificar el texto del mensaje de commit.
* __pre-push__ para ejecutar los tests unitarios y cancelar el push en caso de que no se ejecuten correctamente.

Por defecto se encuentran en la carpeta ```.git/hooks``` del proyecto, pero se puede modificar dicha ubicación en la variable ```core.hooksPath``` de git.
Verás que hay unos archivos con la extensión ```.sample``` en esa carpeta, puedes usarlos de plantilla para tus propios hooks quitándoles la extensión.

## ¿Qué es mejor usar Husky o Git Hooks?

Se ha extendido mucho el uso de la librería [Husky] para facilitar la gestión de hooks, pero en realidad no es más que un _wrapper_ de los Git Hooks con algún que otro extra.

A favor puedo decir que [Husky] está bastante al día, pero si echas un ojo a su github verás que en realidad necesita de ayuda para su mantenimiento y va arrastrando algún bug que otro desde hace tiempo.

Personalmente creo que cuantas menos dependencias tenga el proyecto más fácil será de mantener, así que en mi opinión creo que es mejor aprender a usar los [Git Hooks], pero por facilidad a la hora de compartir los hooks con el equipo de desarrollo te puede resultar más cómodo apoyarte en Husky (o tener una configuración de git compartida).

### Con Husky

* Se pueden compartir los hooks ya que se suben al repositorio desde la carpeta ```.husky```.
* Tienes que acordarte de ejecutar ```npx husky install``` para cambiar la ubicación por defecto de los Hit Hooks.

### Con Git Hooks

* No es necesario utilizar otra librería adicional.
* Es más práctico si vemos la carpeta ```.git``` del proyecto, se puede hacer de dos maneras:
  * Hacerla visible desde la configuración de ```VS Code > file.exclude``` quitando ```**/.git```. Esto te hará visible toda la carpeta ```.git``` de tu proyecto, y a la larga puede resultar tedioso si te molesta ver todo el contenido desplegado todo el tiempo, aunque a cambio lo tendrás configurado para todos los proyectos de VS Code.
  * Añadirla como carpeta al workspace de tu proyecto en VS Code, de esta manera aunque esté oculta por defecto siempre la tendrás ahí a mano cuando la necesites.

## Ejemplo de uso con Git Hooks

Usaré la librería [lint-staged][lint-staged] para ejecutar los _linters_ de mi proyecto en los archivos modificados de cada commit según corresponda, y mostraré el resultado por la consola en caso de error.

```bash
npm install --save-dev lint-staged
```

A continuación creo el fichero de configuración local ```.lintstagedrc```, añadiendo una línea por cada uno de mis _linters_:

```json
{
  "*.{js,jsx,ts,tsx}": "eslint --fix",
  "*.css": "stylelint"
}
```

Esto hará que se ejecuten en orden, en primer lugar [ESLint] y a continuación [Stylelint]. Existe la opción de ejecutar en paralelo varios _linters_, para eso es mejor echarle un ojo a la configuración avanzada de [lint-staged].

En el archivo ```.git/hooks/pre-commit``` escribimos el siguiente código:

```bash
#!/usr/bin/env sh

echo PRE-COMMIT GIT HOOK
npx lint-staged
```

En el archivo ```.git/hooks/pre-push``` escribimos el siguiente código:

```bash
#!/usr/bin/env sh

echo PRE-PUSH GIT HOOK
npm run test
```

Para probarlo, crearemos desde la línea de comandos un commit con algún fichero js o css (en mi caso ```.eslintrc.js```), al ejecutar el ```git commit -m "COMMIT DE PRUEBA"``` nos mostrará algo parecido a ésto:

```bash
PRE-COMMIT HOOK
✔ Preparing lint-staged...
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
[TU_REPOSITORIO-version a78fe91] ESLint configuration
 1 file changed, 22 insertions(+)
 create mode 100644 .eslintrc.js
```

Con lo que podemos quedarnos tranquilos de que el código del archivo ```.git/hooks/pre-commit``` se ejecuta correctamente cuando queremos, y por lo tanto hemos eliminado la dependencia de [Husky].

[Git Hooks]: https://git-scm.com/docs/githooks
[lint-staged]: https://www.npmjs.com/package/lint-staged
[Husky]: https://typicode.github.io/husky/#/
[ESLint]: https://eslint.org/
[Stylelint]: https://stylelint.io/
