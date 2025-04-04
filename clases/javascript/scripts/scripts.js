/*  ==================================================
=== DECLARACION DE DATOS (locales, base de datos) ===
================================================== */

const datosClases = [
    {
        id: "introduccion",
        titulo: "Introducción a JavaScript",
        contenido: "JavaScript es un lenguaje de programación que permite agregar interactividad y dinamismo a las páginas web. Se ejecuta en el navegador y es utilizado para crear efectos visuales, validar formularios, manipular elementos HTML y mucho más."
    },
    {
        id: "EjecutarJavaScript",
        titulo: "¿Cómo ejecutar JavaScript?",
        contenido: "JavaScript se puede ejecutar en una página web de tres maneras:",
        lista: [
            {
                titulo: "En línea",
                descripcion: "Dentro de etiquetas HTML usando el atributo <code>onclick</code> u otros eventos."
            },
            {
                titulo: "Interno",
                descripcion: "Dentro de la etiqueta <script> en el mismo archivo HTML."
            },
            {
                titulo: "Externo",
                descripcion: "En un archivo .js separado y enlazado con <script src=\"archivo.js\"></script>."
            }
        ],
        nota: "Se recomienda escribir JavaScript en un archivo externo para mantener el código organizado y reutilizable."
    },
    {
        id: "sintaxis_basica",
        titulo: "Sintaxis básica",
        contenido: "JavaScript tiene una sintaxis simple y flexible. Aquí algunos aspectos clave:",
        lista: [
            {
                titulo: "Sentencias",
                descripcion: "Cada instrucción suele terminar con un punto y coma (;), aunque no es obligatorio."
            },
            {
                titulo: "Comentarios",
                descripcion: "Se pueden escribir comentarios con // para una línea o /* */ para varias líneas."
            },
            {
                titulo: "Case sensitive",
                descripcion: "JavaScript distingue entre mayúsculas y minúsculas. miVariable y mivariable son diferentes."
            },
            {
                titulo: "Indentación",
                descripcion: "Se refiere a la técnica de agregar un espacio inicial al principio de las líneas de código, facilitando la lectura y organización."
            }
        ],
        nota: "Respetar estas reglas es fundamental para escribir código limpio y funcional."
    }
]

/*  ==================================================
====== DECLARACION DE CONSTANTES CONFIGURACION ======
================================================== */

const rutaAssets = './assets/icons/';

/*  ==================================================
============== DECLARACION DE FUNCIONES ==============
================================================== */

/* ===== FUNCIONES DE INTERFAZ DE USUARIO ===== */

function controlarMenuModalOpciones() {
    if (document.querySelector('.my-modal').classList.toggle('show')) {
        document.querySelector('#BtnMenuModalOpciones span').textContent = 'cerrar';
        document.querySelector('#BtnMenuModalOpciones img').src = `${rutaAssets}menu_close.svg`;
    } else {
        document.querySelector('#BtnMenuModalOpciones span').textContent = `menú`;
        document.querySelector('#BtnMenuModalOpciones img').src = `${rutaAssets}menu_open.svg`;
    }
}

function controlarModoOscuro() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');

        document.querySelector('#BtnModoOscuro span').textContent = 'modo oscuro';
        document.querySelector('#BtnModoOscuro img').src = `${rutaAssets}moon.svg`;
    } else {
        document.body.classList.add('dark');

        document.querySelector('#BtnModoOscuro span').textContent = 'modo claro';
        document.querySelector('#BtnModoOscuro img').src = `${rutaAssets}sun.svg`;
    }
}

/*  ===== FUNCIONES PAGINA INICIO (index.html) ===== */

function controlarGrillaClases() {
    function crearItemLista(lista = []) {
        const contenedorLista = document.createElement('ul');

        for (let index = 0; index < lista.length; index++) {
            const nuevoElementoLista = document.createElement('li');

            nuevoElementoLista.innerHTML = `
                <h3>${lista[index].titulo}</h3>
                <p>${lista[index].descripcion}</p>
            `;

            contenedorLista.append(nuevoElementoLista);
        }

        return contenedorLista;
    }

    for (let index = 0; index < datosClases.length; index++) {
        const nuevoElemento = document.createElement("details");

        const summary = document.createElement("summary");
        if (datosClases[index].titulo) {
            const titulo = document.createElement("h3");
            titulo.textContent = datosClases[index].titulo;
            summary.appendChild(titulo);
        }

        const article = document.createElement("article");

        if (datosClases[index].contenido) {
            const contenido = document.createElement("p");
            contenido.textContent = datosClases[index].contenido;
            article.appendChild(contenido);
        }

        if (datosClases[index].lista) {
            article.appendChild(crearItemLista(datosClases[index].lista));
        }

        if (datosClases[index].nota) {
            const nota = document.createElement("p");
            nota.textContent = datosClases[index].nota;
            article.appendChild(nota);
        }

        nuevoElemento.appendChild(summary);
        nuevoElemento.appendChild(article);

        document.querySelector(".grid-clases").appendChild(nuevoElemento);
    }
}

/* ===== FUNCIONES PAGINA EJEMPLO CRUD (page-crud.html) ===== */
function mainFunctionCrudPage() {
    let items = [];
    let idEditando = null;

    const elementoCrear = document.getElementById("formCrear");

    if (elementoCrear) {
        elementoCrear.addEventListener("submit", function (event) {
            event.preventDefault();
            crear();
        });
    }

    document.getElementById("formEditar").addEventListener("submit", function (event) {
        event.preventDefault();
        guardarEdicion();
    });

    document.getElementById("cancelarEdicion").addEventListener("click", cancelarEdicion);

    function generarId() {
        return Math.floor(Math.random() * 1000000);
    }

    function render() {
        const lista = document.getElementById("lista");
        lista.innerHTML = "";
        items.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `${item.nombre} - ${item.numero} (ID: ${item.id})`;

            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.addEventListener("click", () => editar(item.id));

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.addEventListener("click", () => eliminar(item.id));

            li.appendChild(btnEditar);
            li.appendChild(btnEliminar);
            lista.appendChild(li);
        });
    }

    function crear() {
        const nombre = document.getElementById("nombre").value;
        const numero = document.getElementById("numero").value;
        if (nombre && numero) {
            items.push({ id: generarId(), nombre, numero });
            document.getElementById("nombre").value = "";
            document.getElementById("numero").value = "";
            render();
        }
    }

    function editar(id) {
        const item = items.find(item => item.id === id);
        if (item) {
            idEditando = id;
            document.getElementById("editNombre").value = item.nombre;
            document.getElementById("editNumero").value = item.numero;
            document.getElementById("formEditar").style.display = "block";
        }
    }

    function guardarEdicion() {
        const nuevoNombre = document.getElementById("editNombre").value;
        const nuevoNumero = document.getElementById("editNumero").value;
        if (nuevoNombre && nuevoNumero && idEditando !== null) {
            const item = items.find(item => item.id === idEditando);
            if (item) {
                item.nombre = nuevoNombre;
                item.numero = nuevoNumero;
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
        items = items.filter(item => item.id !== id);
        render();
    }

    render();
}

/* ===== FUNCIONES CARGAR ELEMENTOS DE DOM ===== */

function mainDOMContentLoaded() {
    if (document.querySelector('#BtnMenuModalOpciones')) {
        document.querySelector('#BtnMenuModalOpciones').addEventListener('click', controlarMenuModalOpciones);
    }

    if (document.querySelector('#BtnModoOscuro')) {
        document.querySelector('#BtnModoOscuro').addEventListener('click', controlarModoOscuro);
    }

    if (document.querySelector(".grid-clases2")) {
        controlarGrillaClases();
    }

    if (document.querySelector("#page-crud")) {
        mainFunctionCrudPage();
    }
}

document.addEventListener('DOMContentLoaded', mainDOMContentLoaded);