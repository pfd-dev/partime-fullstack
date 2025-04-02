// ===================== BASE DE DATOS ==========================

const usuariosDiscoteca = [
    {
        genero: String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
        edad: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
        dinero: 1000
    },
    {
        genero: String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
        edad: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
        dinero: 1000999
    },
    {
        genero: String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
        edad: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
        dinero: 1000
    },
    {
        genero: String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
        edad: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
        dinero: 500
    },
    {
        genero: String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
        edad: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
        dinero: 3000
    },
    {
        genero: String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
        edad: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
        dinero: 1500
    },
    {
        genero: String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
        edad: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
        dinero: 2000
    },
    {
        genero: String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
        edad: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
        dinero: 800
    }
];

// ====================== TU FUNCIONALIDAD =========================

function controlGenero(genero = "h") {
    return (genero === "h" || genero === "m" || genero === "o")
}

function primerControlEdad(edad = 1) {
    return (edad >= 18);
}

function preguntarDinero(dinero = 0) {
    return (dinero >= 1000)
}

function controlaMenoresEdad(genero = "h", edad = 1, dinero = 0) {
    if (genero === "h" && edad >= 17) {
        return preguntarDinero(dinero)
    } else if ((genero === "m" || genero === "o") && edad >= 16) {
        return preguntarDinero(dinero)
    } else {
        return false;
    }
}

function mensajeGuardia(permiso = false) {
    if (permiso) {
        return "puede pasar";
    } else {
        return "no puede pasar";
    }
}

function imprimirRespuestas() {
    const contenedorLista = document.getElementById("lista-permisos")

    for (let index = 0; index < usuariosDiscoteca.length; index++) {
        const itemLista = document.createElement("li");

        itemLista.innerHTML = `
            genero: ${usuariosDiscoteca[index].genero}
            edad: ${usuariosDiscoteca[index].edad}
            dinero: ${usuariosDiscoteca[index].dinero}
        `

        contenedorLista.appendChild(itemLista);
    }
}

imprimirRespuestas();

// ====================== SE EJECUTA EL PROGRAMA =========================

function main(genero = "x", edad = 1, dinero = 0) {
    let permiso = false;

    if (controlGenero(genero)) {
        if (primerControlEdad(edad)) {
            permiso = primerControlEdad(edad);
        } else {
            permiso = controlaMenoresEdad(genero, edad, dinero);
        }
    }

    mensajeGuardia(permiso)


}



