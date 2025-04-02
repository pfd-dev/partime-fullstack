// datos de la base de datos,
let listaAlbumes = [
    {
        nombreAlbum: "Artaud",
        imgAlbum: "Artaud.jpg",
        parrafo: "content....",
    },
    {
        nombreAlbum: "Amor Amarillo",
        imgAlbum: "Amor_Amarillo.jpg",
        parrafo: "contenido 2...."
    }
]

listaAlbumes.push({
    nombreAlbum: "Agua Ardiente",
    imgAlbum: "Agua_Ardiente.jpg",
})

const rutasDefinidas = "./../assets/"
const imagenPredeterminada = "logo-neoland.png"

// mi logica de negocio
function crearArticuloAlbum(grillaAlbumes, albumInfo) {
    const articuloAlbum = document.createElement("article")

    articuloAlbum.innerHTML = `
        <h4>${albumInfo.nombreAlbum}<h4>
        <img src="${rutasDefinidas}/images/${albumInfo.imgAlbum || imagenPredeterminada}" alt="">
        <p>${albumInfo.parrafo ? albumInfo.parrafo : "esperando nueva descripcion"} </p>
    `

    grillaAlbumes.append(articuloAlbum)
}

// funcion principal de mi programa
function main() {
    const grillaAlbumes = document.getElementById('grilla-albumes');

    if (grillaAlbumes) {
        for (let index = 0; index < listaAlbumes.length; index++) {
            crearArticuloAlbum(grillaAlbumes, listaAlbumes[index])
        }
    }
}

main();
