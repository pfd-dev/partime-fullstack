/* ============================== CONSTANTES ============================== */
const DATOS_ALBUMES = [
    { id: 100, titulo: "Artaud", autor: "Luis Spinetta", imagen: "Artaud.jpg", canciones: "content..." },
    { id: 101, titulo: "Amor Amarillo", autor: "Gustavo Cerati", imagen: "Amor_Amarillo.jpg", canciones: "contenido 2..." }
];

const RUTA_IMAGENES = "./../../assets/images/";
const IMAGEN_DEFAULT = "logo-neoland.png";

/* ============================== VARIABLES ============================== */
let albumesLocal = [...DATOS_ALBUMES];
let idEditando = null;

/* ============================== UTILIDADES ============================== */

function generarId() {
    return Math.floor(Math.random() * 1000);
}

/* ============================== RENDER ============================== */
function renderGrilla() {
    const grilla = document.querySelector("#grilla-albumes");
    grilla.innerHTML = "";

    for (let index = 0; index < albumesLocal.length; index++) {
        const article = document.createElement("article");

        article.innerHTML = `
            <h4>${albumesLocal[index].titulo}</h4>
            <img src="${RUTA_IMAGENES}${albumesLocal[index].imagen || IMAGEN_DEFAULT}" alt="Imagen del álbum">
            <p><strong>Autor:</strong> ${albumesLocal[index].autor}</p>
            <p><strong>Canciones:</strong> ${albumesLocal[index].canciones}</p>
        `;

        const btnEditar = crearBoton("Editar", "my-btn my-btn-primary", function () {
            editar(albumesLocal[index].id)
        })
        const btnEliminar = crearBoton("Eliminar", "my-btn my-btn-secondary", function () {
            eliminar(albumesLocal[index].id)
        })

        article.append(btnEditar, btnEliminar);
        grilla.appendChild(article);
    }
}

const crearBoton = (texto, clase, handler) => {
    const btn = document.createElement("button");
    btn.textContent = texto;
    btn.className = clase;
    btn.addEventListener("click", handler);
    return btn;
};

/* ============================== CRUD ============================== */
function crearAlbum() {
    const titulo = document.querySelector("[name='name']").value.trim();
    const autor = document.querySelector("[name='author']").value.trim();
    const imagen = document.querySelector("[name='sounds']").value.trim();
    const canciones = document.querySelector("[name='image']").value.trim();

    if (!titulo || !autor || !canciones) return alert("Completa todos los campos requeridos");

    albumesLocal.push({ id: generarId(), titulo, autor, canciones, imagen });
    document.querySelector("#formAddAlbum").reset();
    renderGrilla();
}

function editar(id) {
    const album = albumesLocal.find(a => a.id === id);
    if (!album) return;

    idEditando = id;
    document.querySelector("#editTitulo").value = album.titulo;
    document.querySelector("#editAutor").value = album.autor;
    document.querySelector("#editCanciones").value = album.canciones;
    document.querySelector("#editImagen").value = album.imagen;
    document.querySelector("#formEditar").style.display = "block";
}

function guardarEdicion() {
    const album = albumesLocal.find(a => a.id === idEditando);
    if (!album) return;

    album.titulo = document.querySelector("#editTitulo").value.trim();
    album.autor = document.querySelector("#editAutor").value.trim();
    album.canciones = document.querySelector("#editCanciones").value.trim();
    album.imagen = document.querySelector("#editImagen").value.trim();

    idEditando = null;
    document.querySelector("#formEditar").style.display = "none";
    renderGrilla();
}

function cancelarEdicion() {
    idEditando = null;
    document.querySelector("#formEditar").style.display = "none";
};

function eliminar(id) {
    albumesLocal = albumesLocal.filter(a => a.id !== id);
    renderGrilla();
}

/* ============================== INICIO ============================== */
function main() {
    document.querySelector("#formAddAlbum")?.addEventListener("submit", function (event) {
        event.preventDefault();
        crearAlbum();
    });

    document.querySelector("#formEditar")?.addEventListener("submit", function (event) {
        event.preventDefault();
        guardarEdicion();
    });

    document.querySelector("#cancelarEdicion")?.addEventListener("click", cancelarEdicion);

    renderGrilla();
}

document.addEventListener("DOMContentLoaded", main);
