const albumData = {
    "albums": [
        {
            "title": "Amor Amarillo",
            "artist": "Gustavo Cerati",
            "release_date": "1993-11-01",
            "genre": ["Rock alternativo", "Neo-psicodelia", "Dream pop"],
            "tracklist": [
                "Amor Amarillo", "Lisa", "Te llevo para que me lleves", "Pulsar", "Cabeza de Medusa",
                "Av. Alcorta", "Bajan", "Rombos", "Ahora es nunca", "A merced", "Torteval"
            ]
        },
        {
            "title": "Artaud",
            "artist": "Pescado Rabioso",
            "release_date": "1973-10-06",
            "genre": ["Art rock", "Folk"],
            "tracklist": [
                "Todas las hojas son del viento", "Cementerio Club", "Por", "Superchería", "La sed verdadera",
                "Cantata de puentes amarillos", "Bajan", "A Starosta, el idiota", "Las habladurías del mundo"
            ]
        }
    ]
};

const albumsSection = document.getElementById("albums");

for (let i = 0; i < albumData.albums.length; i++) {
    const album = albumData.albums[i];
    const albumElement = document.createElement("article");
    albumElement.innerHTML = `
        <h2>${album.title}</h2>
        <p><strong>Artista:</strong> ${album.artist}</p>
        <p><strong>Fecha de lanzamiento:</strong> ${album.release_date}</p>
        <p><strong>Género:</strong> ${album.genre.join(", ")}</p>
        <h3>Lista de canciones:</h3>
        <ul>
            ${album.tracklist.map(track => `<li>${track}</li>`).join("")}
        </ul>
    `;
    albumsSection.appendChild(albumElement);
}