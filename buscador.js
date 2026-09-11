document.addEventListener("DOMContentLoaded", function () {

    const buscador = document.getElementById("buscador");
    const resultados = document.getElementById("resultados-busqueda");

    if (!buscador || !resultados) {
        return;
    }

    const productos = [
        {
            nombre: "Fakhar Black",
            marca: "Lattafa",
            precio: "$52.000",
            imagen: "img/Black.webp",
            link: "producto.html?id=fakhar"
        },

        {
            nombre: "Bleu de Chanel",
            marca: "Chanel",
            precio: "$145.000",
            imagen: "img/bleu.jpg",
            link: "producto.html?id=bleu"
        },

        {
            nombre: "Invictus",
            marca: "Paco Rabanne",
            precio: "$125.000",
            imagen: "img/invictus.jpg",
            link: "producto.html?id=invictus"
        },

        {
            nombre: "Acqua Di Gio Homme Perfume",
            marca: "Armani",
            precio: "$449.000",
            imagen: "img/AcquaH.jpg",
            link: "producto.html?id=AcquaDiGioHP"
        },
        {
            nombre: "Khamrah",
            marca: "Lattafa",
            precio: "$60.000",
            imagen: "img/khamrah.webp",
            link: "producto.html?id=Khamrah"
        },
        {
            nombre: "Yara Moi",
            marca: "Lattafa",
            precio: "$112.000",
            imagen: "img/Yaramoi.jpg",
            link: "producto.html?id=Yaramoi"
        },
        {
            nombre: "Chanel N5",
            marca: "Chanel",
            precio: "$540.000",
            imagen: "img/Chanel5.webp",
            link: "producto.html?id=Chanel5"
        },
        {
            nombre: "Allure homme sport",
            marca: "Chanel",
            precio: "$233.000",
            imagen: "img/Allure.webp",
            link: "producto.html?id=Allure"
        },
        {
            nombre: "Phantom EDT",
            marca: "Paco Rabanne",
            precio: "$150.000",
            imagen: "img/Phantom.webp",
            link: "producto.html?id=Phantom"
        },
        {
            nombre: "My Way",
            marca: "Armani",
            precio: "$285.000",
            imagen: "img/Myway.jpg",
            link: "producto.html?id=MyWay"
        },
        {
            nombre: "Stronger with you Intesely",
            marca: "Armani",
            precio: "$344.000",
            imagen: "img/Stronger.webp",
            link: "producto.html?id=Stronger"
        },
        {
            nombre: "Fame EDP",
            marca: "Paco Rabanne",
            precio: "$199.000",
            imagen: "img/Fame.jpg",
            link: "producto.html?id=Fame"
        }
    ];


    buscador.addEventListener("input", function () {

        const texto = buscador.value.toLowerCase().trim();

        resultados.innerHTML = "";

        if (texto === "") {
            resultados.style.display = "none";
            return;
        }


        const encontrados = productos.filter(function (producto) {

            return (
                producto.nombre.toLowerCase().includes(texto) ||
                producto.marca.toLowerCase().includes(texto)
            );

        });


        if (encontrados.length === 0) {

            resultados.innerHTML = `
                <div class="sin-resultados">
                    No se encontraron perfumes.
                </div>
            `;

            resultados.style.display = "block";

            return;
        }


        encontrados.forEach(function (producto) {

            const resultado = document.createElement("a");

            resultado.href = producto.link;

            resultado.className = "resultado-producto";

            resultado.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">

                <div class="resultado-info">

                    <h3>${producto.nombre}</h3>

                    <p>${producto.marca}</p>

                    <strong>${producto.precio}</strong>

                </div>
            `;

            resultados.appendChild(resultado);

        });


        resultados.style.display = "block";

    });


    // Ocultar resultados al hacer clic afuera

    document.addEventListener("click", function (evento) {

        if (
            !buscador.contains(evento.target) &&
            !resultados.contains(evento.target)
        ) {

            resultados.style.display = "none";

        }

    });

});