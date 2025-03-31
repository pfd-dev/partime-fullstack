function controlarMostrarMenu() {
    const iconShowMenu = document.querySelector("#BtnShowMenu span");
    const textShowMenu = document.querySelector("#BtnShowMenu img");

    const menu = document.querySelector(".my-modal");
    const changeClassMenu = menu.classList.toggle('show');

    if (changeClassMenu) {
        iconShowMenu.textContent = 'cerrar';
        textShowMenu.src = "./assets/icons/menu_close.svg";
    } else {
        iconShowMenu.textContent = 'menú';
        textShowMenu.src = "./assets/icons/menu_open.svg";
    }
}

const btnShowMenu = document.querySelector("#BtnShowMenu");
if (btnShowMenu) {
    btnShowMenu.addEventListener("click", controlarMostrarMenu);
}

/* ================================================== */

function controlarModoOscuro() {
    const textThemeMode = document.querySelector("#BtnBtnChangeTheme span");
    const iconThemeMode = document.querySelector("#BtnBtnChangeTheme img");

    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');

        iconThemeMode.src = "./assets/icons/moon.svg";
        textThemeMode.textContent = "modo oscuro";
    } else {
        iconThemeMode.src = "./assets/icons/sun.svg";
        textThemeMode.textContent = "modo claro";
        document.body.classList.add('dark');
    }
}

const btnChangeTheme = document.querySelector("#BtnBtnChangeTheme");
if (btnShowMenu) {
    btnChangeTheme.addEventListener("click", controlarModoOscuro);
}


/* ================================================== */
