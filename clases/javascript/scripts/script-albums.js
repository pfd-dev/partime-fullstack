const listaAlbumes = [
    {
        id: 100,
        titulo: "Artaud",
        autor: "Luis Spinneta",
        imagen: "Artaud.jpg",
        canciones: "content....",
    },
    {
        id: 101,
        titulo: "Amor Amarillo",
        autor: "Gustavo Cerati",
        imagen: "Amor_Amarillo.jpg",
        canciones: "contenido 2...."
    }
]

const rutasDefinidas = "./../assets/images"
const imagenPredeterminada = "logo-neoland.png"


function mainFunctionCrudAlbumes() {
    let albumes = listaAlbumes;
    console.log(albumes)
    let idEditando = null;

    if (document.getElementById("formCrear")) {
        const formCrear = document.getElementById("formCrear");
        formCrear.addEventListener("submit", function (event) {
            event.preventDefault();
            crearAlbum();
        });
    }

    if (document.getElementById("formEditar")) {
        document.getElementById("formEditar").addEventListener("submit", function (event) {
            event.preventDefault();
            guardarEdicion();
        });
    }

    if (document.getElementById("cancelarEdicion")) {
        document.getElementById("cancelarEdicion").addEventListener("click", cancelarEdicion);
    }

    function generarId() {
        return Math.floor(Math.random() * 1000000);
    }

    function render() {
        const grilla = document.getElementById("grilla-albumes");
        grilla.innerHTML = "";
        albumes.forEach(album => {
            const article = document.createElement("article");
            console.log(album)
            article.innerHTML = `
                <h4>${album.titulo}</h4>
                <img src="./../assets/images/${album.imagen || 'logo-neoland.png'}" alt="Imagen del álbum">
                <p><strong>Autor:</strong> ${album.autor}</p>
                <p><strong>Canciones:</strong> ${album.canciones}</p>
            `;

            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.className = "my-btn my-btn-primary"
            btnEditar.addEventListener("click", () => editar(album.id));

            const btnEliminar = document.createElement("button");
            btnEliminar.className = "my-btn my-btn-secondary"
            btnEliminar.textContent = "Eliminar";
            btnEliminar.addEventListener("click", () => eliminar(album.id));

            article.appendChild(btnEditar);
            article.appendChild(btnEliminar);
            grilla.appendChild(article);
        });
    }

    function crearAlbum() {
        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const canciones = document.getElementById("canciones").value;
        const imagen = document.getElementById("imagen").value;

        if (titulo && autor && canciones) {
            albumes.push({ id: generarId(), titulo, autor, canciones, imagen });
            formCrear.reset();
            render();
        }
    }

    function editar(id) {
        const album = albumes.find(a => a.id === id);
        if (album) {
            idEditando = id;
            document.getElementById("editTitulo").value = album.titulo;
            document.getElementById("editAutor").value = album.autor;
            document.getElementById("editCanciones").value = album.canciones;
            document.getElementById("editImagen").value = album.imagen;
            document.getElementById("formEditar").style.display = "block";
        }
    }

    function guardarEdicion() {
        const nuevoTitulo = document.getElementById("editTitulo").value;
        const nuevoAutor = document.getElementById("editAutor").value;
        const nuevasCanciones = document.getElementById("editCanciones").value;
        const nuevaImagen = document.getElementById("editImagen").value;

        if (nuevoTitulo && nuevoAutor && nuevasCanciones && idEditando !== null) {
            const album = albumes.find(a => a.id === idEditando);
            if (album) {
                album.titulo = nuevoTitulo;
                album.autor = nuevoAutor;
                album.canciones = nuevasCanciones;
                album.imagen = nuevaImagen;
            }
            idEditando = null;
            document.getElementById("formEditar").style.display = "none";
            render();
        }
    }

    function cancelarEdicion() {
        idEditando = null;
        document.getElementById("formEditar").style.display = "none";
    }

    function eliminar(id) {
        albumes = albumes.filter(a => a.id !== id);
        render();
    }

    render();
}
document.addEventListener("DOMContentLoaded", function () {
    mainFunctionCrudAlbumes();
})
