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
        console.log("puede pasar")
    } else {
        console.log("no puede pasar")
    }
}

function main(genero = "h", edad = 1, dinero = 0) {
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

for (let index = 0; index < usuariosDiscoteca.length; index++) {
    console.log
    (
        usuariosDiscoteca[index].genero,
        usuariosDiscoteca[index].edad,
        usuariosDiscoteca[index].dinero
    )
    main(
        usuariosDiscoteca[index].genero,
        usuariosDiscoteca[index].edad,
        usuariosDiscoteca[index].dinero
    );
}



const caracterAleatorio = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
console.log(caracterAleatorio);