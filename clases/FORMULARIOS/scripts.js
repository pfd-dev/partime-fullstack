/* ==== DATOS (locales, Base de Datos, archivos) ==== */

const listaUsuariosLocal = [
    {
        id: 1,
        nombre: 'Carlos',
        edad: 50
    },
    {
        id: 2,
        nombre: 'Diego',
        edad: 40
    }
]


function mainDOMLoaded() {
    let valorNombre = "";
    let valorEdad = 0;
    /* ================ FUNCIONES ================ */
    function imprimirElementoUsuario(usuario) {
        const elementoList = document.createElement("li");

        elementoList.innerHTML = `
            <span>nombre: ${usuario.nombre}</span>
            <span>edad es ${usuario.edad}</span>
            <button class="btnEditar">editar</buttom>
            <button class="btnEliminar">eliminar</buttom>
        `

        return elementoList;
    }

    function imprimirListaUsuarios() {
        const ulContenedor = document.querySelector(".lista-contenedor");

        ulContenedor.innerHTML = "";

        for (let index = 0; index < listaUsuariosLocal.length; index++) {
            ulContenedor.append(imprimirElementoUsuario(listaUsuariosLocal[index]));
        }
    }

    function crearUsuario(pNombre, pEdad) {
        console.log("resultado " + pNombre)
        console.log("resultado " + pEdad)
        listaUsuariosLocal.push({
            id: Math.random(),
            nombre: pNombre,
            edad: pEdad
        })

        imprimirListaUsuarios(listaUsuariosLocal)
    }

    function editarUsuario(usuario) {
        document.querySelector(".seccion-editar-usuario").style = "display: block;"
        console.log(usuario)
    }

    function eliminarUsuario(usuario) {
        document.querySelector(".seccion-eliminar-usuario").style = "display: block;"
        console.log(usuario)
    }

    /* ================ ELEMENTOS DOM ================ */

    if (document.querySelector(".lista-contenedor")) {
        imprimirListaUsuarios()
    }

    if (document.querySelectorAll(".btnEditar")) {
        const botonesEditar = document.querySelectorAll(".btnEditar")

        for (let index = 0; index < botonesEditar.length; index++) {
            botonesEditar[index].addEventListener('click', function () {
                editarUsuario(listaUsuariosLocal[index])
            })
        }
    }

    if (document.querySelector("#btn-guardar-usuario")) {
        document.querySelector("#btn-guardar-usuario").addEventListener('click', function (event) {
            event.preventDefault();
            crearUsuario(valorNombre, valorEdad)
        })
    }

    if (document.querySelector(".btnEliminar")) {
        const botonesEliminar = document.querySelectorAll(".btnEliminar")

        for (let index = 0; index < botonesEliminar.length; index++) {
            botonesEliminar[index].addEventListener('click', function () {
                eliminarUsuario(listaUsuariosLocal[index])
            })
        }
    }

    if (document.querySelector("#btn-cerrar-seccion-editar")) {
        document.querySelector("#btn-cerrar-seccion-editar").addEventListener('click', function () {
            document.querySelector(".seccion-editar-usuario").style = "display: none;"
        })
    }

    if (document.querySelector("#btn-cerrar-seccion-eliminar")) {
        document.querySelector("#btn-cerrar-seccion-eliminar").addEventListener('click', function () {
            document.querySelector(".seccion-eliminar-usuario").style = "display: none;"
        })
    }

    if (document.querySelector("[name='name']")) {
        const inputNombre = document.querySelector("[name='name']")

        inputNombre.addEventListener('input', function (event) {
            valorNombre = event.target.value
        })
    }

    if (document.querySelector("[name='edad']")) {
        const inputEdad = document.querySelector("[name='edad']")

        inputEdad.addEventListener('input', function (event) {
            valorEdad = event.target.value
        })
    }


}

/* ================ JAVASCRIPT FUNCION PRINCIPAL ================ */
document.addEventListener("DOMContentLoaded", mainDOMLoaded)