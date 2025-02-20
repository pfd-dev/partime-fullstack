# Bootcamp part-time Fullstack de Neoland - Febrero 2025

Repositorio para el Bootcamp part-time de Fullstack de Neoland, en su convocatoria de Febrero de 2025.

A continuación tenéis las instrucciones para configurar vuestro equipo, es un paso fundamental para poder trabajar con el código así que ve paso a paso y si tienes cualquier duda intenta [resolverla primero con tu squad](https://github.com/Neoland-School-es/bootcamp-fullstack/discussions/) o en caso de encontrar un problema puedes [crear una incidencia](https://github.com/Neoland-School-es/bootcamp-fullstack/issues) en el panel de control del repositorio.

## Programas necesarios

Necesitas instalar los siguientes programas para llevar a cabo el curso:

* [Google Chrome](https://www.google.com/intl/es_es/chrome/) será nuestro navegador de desarrollo
* [VS Code](https://code.visualstudio.com/) es la herramienta que usaremos para programar, y las extensiones que usaremos:
  * [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) es un servidor local para nuestras páginas html dentro de VS Code
  * [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) nos ayudará a documentar cada cambio de código que subamos al repositorio. Podéis leer la documentación oficial en [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  * [commitlint](https://marketplace.visualstudio.com/items?itemName=joshbolduc.commitlint) se asegurará de que escribamos bien los comentarios de los cambios en el repositorio
  * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) nos chivará los errores que cometamos en el código, es una herramienta fundamental para agilizar nuestro trabajo
  * [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) igualmente se encargará de guiarnos en la senda del buen programador, a la hora de editar estilos css
  * [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) nos facilita la tarea a la hora de gestionar los cambios en el código dentro de nuestro repositorio
  * [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) nos ayudará a escribir correctamente el marcado de los documentos de tipo _markdown_
  * [Postman](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode) nos permite trabajar con las APIs que desarrollemos localmente
* [Git](http://git-scm.com/) será nuestro sistema de control de versiones
  * Asegúrate de elegir la opción **Git Bash** durante la instalación
* [NodeJS](https://nodejs.org/en) es el lenguaje de programación que usaremos para el backend, y también para nuestras herramientas de automatización
  * Una vez instalado, tendrás que añadir a las variables del sistema la ruta para el ejecutable de node:
    * En Windows:
        1. Busca el programa "Editar las variables de entorno del sistema"
        2. Pulsa el botón "Variables de entorno"
        3. Haz doble click en la línea que indica **PATH**
        4. Pulsa en "Nueva" y añade esta dirección (o la ruta de tu instalación): ```"C:\Program Files\nodejs"```
        5. Modifica esta línea si te aparece ```C:\Users\<TU_USUARIO>\AppData\Roaming\npm``` a ```"C:\Program Files\nodejs\node_modules\npm\bin"```, o añádela si no está
    * En Mac:
        1. Abre VS Code
        2. Si no tienes abierta una ventana del terminal, ábrela desde el menú (View > Terminal)
        3. Ejecuta: ```cd ~/``` y luego ```code .bashrc```, se abrirá una ventana de edición en VS Code.
        4. Añade esta línea al archivo: ```PATH=/usr/bin/node:$PATH```, guárdalo y ciérralo
    * En Linux:
        1. Abre el Terminal
        2. Ejecuta export ```PATH=$PATH:/usr/local/nodejs/bin```
  * Recuerda que cada vez que modifiques las variables de entorno o rutas del sistema tienes que reiniciar todas las ventanas de terminal o VS Code que tengas abiertas para que recoja los cambios (en Windows tendrás que reiniciar el ordenador).
* [NVM](https://github.com/nvm-sh/nvm) es una herramienta que nos permite cambiar de versiones de NodeJS fácilmente
  * Crea el directorio ```C:\Users\<TU_USUARIO>\AppData\Roaming\npm```
  * Abre el Terminal **BASH** y ejecuta ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash```
  * **Si te indica algún tipo de error tipo "la función de revocación"**, usa este comando en su lugar: ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh --ssl-no-revoke | bash```
  * **SI nvm ls-remote devuelve N/A**, añade esta línea a tu .bashrc o .zshrc: ```export NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist```
  * Reinicia el Terminal
  * Ahora puedes ejecutar ```nvm install 22```, y cambiar fácilmente de versión de NodeJS a partir de ahora
* [WSL](https://github.com/microsoft/WSL) es el subsistema de Linux, que necesitaremos en Windows para alguna tarea en particular
  * Descarga la [última versión estable de WSL](https://github.com/microsoft/WSL/releases/download/2.3.26/wsl.2.3.26.0.x64.msi) y ejecuta el instalador
  * Abre Windows PowerShell **como administrador** y ejecuta los comandos:
    * ```wsl --set-default-version 2```
    * ```wsl --install -d Ubuntu```
  * Te preguntará por un nombre y contraseña para Ubuntu (**el usuario en minúsculas**), ¡apúntalos en un lugar seguro para no perderlos!
  * Notarás que el terminal "ha cambiado", ahora estás en la versión del terminal de Ubuntu, ejecuta este comando (te pedirá el usuario y la contraseña):
    * ```sudo apt update```
    * ```sudo apt upgrade```
    * Con ésto ya tenemos Ubuntu actualizado, ejecuta ```exit``` para salir de la consola de Ubuntu y luego puedes cerrar la ventana del Power Shell
    * A partir de ahora tendremos disponible el Terminal de Ubuntu directamente dentro de Windows
* [MongoDB](https://www.mongodb.com/docs/manual/installation/#std-label-tutorial-installation) es la base de datos documental que aprenderás durante el curso
  * [Usar este enlace para la descarga en caso de duda](https://www.mongodb.com/try/download/community)
  * Durante la instalación te preguntará si instalar **Compass**, es el editor visual para la base de datos, es importante instalarlo también
  * [MonghoDB Shell](https://www.mongodb.com/docs/mongodb-shell/install/) es el intérprete de comandos para interactuar con la base de datos de MongoDB, también será necesario instalarlo

## Configuraciones particulares

**Git** necesita identificar nuestro usuario a la hora de recibir nuestro código, así que tenemos que ejecutar estos dos comandos en el terminal para poder subir el código local al repositorio, **usa el email que tengas configurado en github.com**:

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

En nuestro caso vamos a trabajar con archivos que el sistema oculta habitualmente, así que tenemos que habilitar su visualización:

* En Windows: abre el explorador de archivo, en el menú selecciona **Opciones**, luego en la pestaña **Ver** desmarca la opción "Ocultar las extensiones de archivo para archivos conocidos".
* También es recomendable [activar la opción para desarrolladores](https://learn.microsoft.com/es-es/windows/dev-home/), que optimiza el sistema y te da herramientas de desarrollo.
* En Mac: ejecuta en el Terminal el comando: ```defaults write com.apple.finder AppleShowAllFiles true; killall Finder```
  * Si en algún momento el Mac te muestra este error: **Fix 'xcrun: error: invalid active developer path, missing xcrun'**, tendrás que ejecutar en el Terminal el comando ```xcode-select --install``` y seguir los pasos que te indique

## Dando una nota de color al código

Vamos a darle un poco de color a VS Code y al Terminal para hacerlos más ergonómicos y agradables a la vista.

_Nota: esta parte es opcional, puedes dejarla para otro momento si lo consideras conveniente._

* Instalamos las siguientes extensiones de VS Code:
  * [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) para unificar los iconos de los archivos
  * [Cascade theme](https://marketplace.visualstudio.com/items?itemName=rampus-bit.cascade) un theme de color personalizado, adecuado para el trabajo contínuo con el código
  * [GitHub Markdown Preview](https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview) para trabajar más cómodamente con los documentos de tipo _markdown_ con el formato de GitHub
* Tipografías adecuadas para el código: mi recomendación es usar [MesloLGS NF](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k)
* Instalamos [Oh My Zsh](https://ohmyz.sh/): ```sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"```
  * **Si tienes problemas de certificados**, usa esta versión del comando: ```sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" --ssl-no-revoke```
  * Puedes ajustar el theme como quieras, a mí me gusta usar el de Powerlevel10k: ```git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k```, añadiendo ```ZSH_THEME="powerlevel10k/powerlevel10k"``` a tu archivo ```~/.zshrc.```
  * No olvides ejecutar ```p10k configure``` después de estos cambios
  * Ejecuta estos comandos a continuación: ```autoload -U zsh-newuser-install``` y ```zsh-newuser-install -f```
  * Finalmente editamos el archivo ~/.bashrc añadiendo estas líneas:

```yaml
if [ -t 1 ]; then
  exec zsh
fi
```

Con ésto ya puedes cerrar las ventanas de Terminal y VS Code y volver a abrirlas, verás todos los cambios aplicados
