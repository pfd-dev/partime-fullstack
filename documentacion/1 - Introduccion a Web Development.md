# Introducción a Web Development

## Instalaciones necesarias

* [VS Code](https://code.visualstudio.com/) es la herramienta que usaremos para programar, y las extensiones que usaremos:
  * [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) nos ayudará a documentar cada cambio de código que subamos al repositorio. Podéis leer la documentación oficial en [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  * [commitlint](https://marketplace.visualstudio.com/items?itemName=joshbolduc.commitlint) se asegurará de que escribamos bien los comentarios de los cambios en el repositorio
  * [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) nos facilita la tarea a la hora de gestionar los cambios en el código dentro de nuestro repositorio
* [Git](http://git-scm.com/) será nuestro sistema de control de versiones
  * Asegúrate de elegir la opción **Git Bash** durante la instalación

## Configuraciones particulares

**Git** necesita identificar nuestro usuario a la hora de recibir nuestro código, así que tenemos que ejecutar estos dos comandos en el terminal para poder subir el código local al repositorio, **usa el email que tengas configurado en github.com**:

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

En nuestro caso vamos a trabajar con archivos que el sistema oculta habitualmente, así que tenemos que habilitar su visualización:

* En Windows: abre el explorador de archivo, en el menú selecciona **Opciones**, luego en la pestaña **Ver** desmarca la opción "Ocultar las extensiones de archivo para archivos conocidos".
* En Mac: ejecuta en el Terminal el comando: ```defaults write com.apple.finder AppleShowAllFiles true; killall Finder```
  * Si en algún momento el Mac te muestra este error: **Fix 'xcrun: error: invalid active developer path, missing xcrun'**, tendrás que ejecutar en el Terminal el comando ```xcode-select --install``` y seguir los pasos que te indique

## [Control de versiones con GIT](https://git-scm.com/book/ms/v2/Getting-Started-About-Version-Control)

## Crear repositorios en GitHub

* [Documentación de Github.com](https://docs.github.com/es)

## Crear y trabajar con ramas

## [Submódulos de Git](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

Primero entras en la carpeta de tu proyecto principal desde el terminal, donde quieres que se clone el submódulo, y a continuación:

```bash
git submodule add [--name <submodule-name>] <repository> [<submodule-path>]
```

Luego hay que asegurarse de que se creó correctamente el archivo ```/.gitmodules```, de otro modo hay que crearlo a mano. Asegúrate de que haya un espacio en blanco entre los símbolos ```=``` y el texto por delante y por detrás de éstos:

```yaml
[submodule "submodule-name"]
path = submodule-path
url = https://github.com/user/repository.git
```

Para eliminar un submódulo usa:

```bash
git submodule deinit -f submodule-path
rm -rf .git/modules/submodule-name
git rm -f submodule-path
```

Cuando clones un proyecto con submódulos, has de usar la opción:

```bash
git clone --recurse-submodules https://github.com/user/repository.git
```

Si los submódulos no se están descargando al hacer checkout del proyecto, tendrás que lanzar un fetch recursivo:

```bash
git submodule update --init --recursive
```

Otras opciones también son (según la versión de Git):

```bash
git submodule update --recursive --remote
git submodule update --recursive
git pull --recurse-submodules
```

Recuerda que cada submódulo tiene sus propios git hooks, así que no le afectan los del repositorio donde se encuentra y tendrás que configurar su propio _lintstaged_ si quieres integrar herramientas de este tipo dentro de los submódulos.

Es muy probable que necesites habilitar las opciones de ejecución recursiva en tus comandos, revisa la documentación de tu _CI_ específico para más información.

Para más información, mejor [leer la referencia](https://git-scm.com/docs/gitmodules).

## Pensando en el usuario

* [Accesibilidad](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
* [Usabilidad](https://www.nngroup.com/articles/usability-101-introduction-to-usability/)
* [Posicionamiento web](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es)

## Ideas para desarrollar

* [Catálogo de componentes](https://www.opencells.dev/)
* [Material Design](https://m3.material.io/)
