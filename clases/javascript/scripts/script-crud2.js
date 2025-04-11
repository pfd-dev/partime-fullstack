/* ==== DATOS (locales, Base de Datos, archivos) ==== */

const usuariosBBDD = [
    { id: 1, nombre: 'Cardlos', edad: 50 },
    { id: 2, nombre: 'Diego', edad: 40 }
];

let idEditar = null;
let idEliminar = null;

/* ==== FUNCIONES ==== */

function crearElementoListaUsuario(usuario, indice) {
    const li = document.createElement("li");

    li.innerHTML = `
        <span><strong>Indice:</strong> ${indice}</span>
        <span><strong>Id:</strong> ${usuario.id}</span>
        <span><strong>Nombre:</strong> ${usuario.nombre}</span>
        <span><strong>Edad:</strong> ${usuario.edad}</span>
        <button class="btn-editar my-btn">Editar ${usuario.id}</button>
        <button class="btn-eliminar my-btn">Eliminar ${usuario.id}</button>
    `;

    return li;
}

function mostrarListaUsuarios() {
    // console.log("funcion mostrar Lista Usuarios");
    // console.log(usuariosBBDD);

    const contenedorLista = document.querySelector(".seccion-usuarios-lista ul");
    contenedorLista.innerHTML = "";

    for (let i = 0; i < usuariosBBDD.length; i++) {
        const usuario = crearElementoListaUsuario(usuariosBBDD[i], i);
        contenedorLista.appendChild(usuario);
    }

    activarEventosBotonesUsuario();
}

function activarEventosBotonesUsuario() {
    const botonesEditar = document.querySelectorAll(".seccion-usuarios-lista .btn-editar");

    const botonesEliminar = document.querySelectorAll(".seccion-usuarios-lista .btn-eliminar");

    for (let i = 0; i < botonesEditar.length; i++) {
        botonesEditar[i].addEventListener("click", function () {
            activarModoActualizacion(usuariosBBDD[i].id);
        });
    }

    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener("click", function () {
            eliminarUsuario(usuariosBBDD[i].id);
        });
    }
}

function guardarNuevoUsuario(nombre, edad) {
    usuariosBBDD.push({
        id: Date.now(),
        nombre: nombre,
        edad: edad
    });

    document.querySelector(".seccion-form-crear input[name='nombre']").value = "";

    mostrarListaUsuarios();
}

function activarModoActualizacion(id) {
    idEditar = id;

    const usuarioEncontrado = usuariosBBDD.find(function (usuario) {
        console.log("buscando" + usuario.id)
        return usuario.id === id;
    });

    const seccionEditar = document.querySelector(".seccion-editar-usuario");
    seccionEditar.style.display = "block";

    document.querySelector(".seccion-editar-usuario [name='nombre']").value = usuarioEncontrado.nombre;
    document.querySelector(".seccion-editar-usuario [name='edad']").value = usuarioEncontrado.edad;
}

function actualizarUsuario(nombre, edad) {
    console.log(idEditar)
    for (let i = 0; i < usuariosBBDD.length; i++) {
        if (usuariosBBDD[i].id === idEditar) {
            usuariosBBDD[i].nombre = nombre;
            usuariosBBDD[i].edad = edad;
        }
    }

    document.querySelector(".seccion-editar-usuario").style.display = "none";
    mostrarListaUsuarios();
}

function activarModoEliminacion() {
    for (let i = 0; i < usuariosBBDD.length; i++) {
        if (usuariosBBDD[i].id === idEliminar) {
            usuariosBBDD.splice(i, 1);
            break;
        }
    }

    document.querySelector(".seccion-eliminar-usuario").style.display = "none";
    mostrarListaUsuarios();
}

function eliminarUsuario(id) {
    idEliminar = id;
    document.querySelector(".seccion-eliminar-usuario").style.display = "block";
    const parrafo = document.querySelector(".seccion-eliminar-usuario p");
    parrafo.innerHTML = id
}

function activarEventosIniciales() {
    document.querySelector("#btn-guardar-usuario").addEventListener("click", function (event) {
        event.preventDefault();

        const nombre = document.querySelector(".seccion-form-crear [name='nombre']").value;
        const edad = document.querySelector(".seccion-form-crear [name='edad']").value;

        guardarNuevoUsuario(nombre, edad);
    });

    document.querySelector("#btn-cerrar-seccion-editar").addEventListener("click", function () {
        document.querySelector(".seccion-editar-usuario").style.display = "none";
    });

    document.querySelector("#btn-cerrar-seccion-eliminar").addEventListener("click", function () {
        document.querySelector(".seccion-eliminar-usuario").style.display = "none";
    });

    document.querySelector("#btn-guardar-edicion").addEventListener("click", function (event) {
        event.preventDefault();

        const nombre = document.querySelector(".seccion-editar-usuario [name='nombre']").value;
        const edad = document.querySelector(".seccion-editar-usuario [name='edad']").value;

        actualizarUsuario(nombre, edad);
    });

    document.querySelector("#btn-confirmar-eliminar").addEventListener("click", function () {
        activarModoEliminacion();
    });
}

/* ==== FUNCION PRINCIPAL ==== */

function mainDOMLoaded() {
    activarEventosIniciales();
    mostrarListaUsuarios();
}

document.addEventListener("DOMContentLoaded", mainDOMLoaded);