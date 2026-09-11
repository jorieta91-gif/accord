const productos = {
    fakhar: {
        nombre: "Fakhar Black",
        marca: "Lattafa",
        precio: "$52.000",
        imagen: "img/Black.webp",
        descripcion: "Fragancia masculina intensa con notas amaderadas y especiadas."
    },
    Khamrah: {
        nombre: "Khamrah",
        marca: "Lattafa",
        precio: "$60.000",
        imagen: "img/Khamrah.webp",
        descripcion: "Fragancia Unisex. Se destaca por su perfil sumamente cálido, dulce y adictivo, ideal para climas fríos y ocasiones nocturnas."
    },

    bleu: {
        nombre: "Bleu de Chanel",
        marca: "Chanel",
        precio: "$145.000",
        imagen: "img/bleu.jpg",
        descripcion: "Perfume elegante y fresco ideal para cualquier ocasión."
    },

    invictus: {
        nombre: "Invictus",
        marca: "Paco Rabanne",
        precio: "$125.000",
        imagen: "img/invictus.jpg",
        descripcion: "Aroma deportivo y moderno con excelente duración."
    },

    AcquaDiGioHP: {
        nombre: "Acqua Di Gio Homme Perfume",
        marca: "Armani",
        precio: "$449.000",
        imagen: "img/AcquaH.jpg",
        descripcion: "Fragancia masculina intensa con notas frescas, acuáticas y amaderadas."
    },
    Yaramoi: {
        nombre: "Yara Moi",
        marca: "Lattafa",
        precio: "$112.000",
        imagen: "img/Yaramoi.jpg",
        descripcion: "Fragancia Femenina destaca por su combinación equilibrada de notas florales, frutales y un fondo gourmand amaderado."
    },
    Chanel5: {
        nombre: "Chanel 5",
        marca: "Chanel",
        precio: "$540.000",
        imagen: "img/Chanel5.webp",
        descripcion: "Su aroma no imita a una flor en específico, sino que evoca la composición de un ramo de flores misterioso y sumamente pulcro, asociado desde hace más de un siglo a la máxima elegancia, madurez y sofisticación femenina."
    },
    Allure: {
        nombre: "Allure homme sport",
        marca: "Chanel",
        precio: "$233.000",
        imagen: "img/Allure.webp",
        descripcion: "Fragancia veraniega definitiva, versátil y perfecta para el día a día o actividades casuales."
    },
    Phantom: {
        nombre: "Phantom Edt",
        marca: "Paco Rabanne",
        precio: "$150.000",
        imagen: "img/Phantom.webp",
        descripcion: "Fragancia masculina de la familia olfativa Amaderada Aromática."
    },
    MyWay: {
        nombre: "My Way",
        marca: "Armani",
        precio: "$285.000",
        imagen: "img/MyWay.jpg",
        descripcion: "My Way de Giorgio Armani es un perfume floral y luminoso, Femenino, moderno, fresco y elegante."
    },
    Stronger: {
        nombre: "Stronger with you Intesely",
        marca: "Armani",
        precio: "$344.000",
        imagen: "img/Stronger.webp",
        descripcion: "fragancia masculina de la familia olfativa Oriental Fougère, famosa por su perfil marcadamente dulce, cálido, especiado y altamente adictivo."
    },
    Fame: {
        nombre: "Fame",
        marca: "Paco Rabanne",
        precio: "$199.000",
        imagen: "img/Fame.jpg",
        descripcion: "Es una fragancia femenina lanzada en 2022 que rinde homenaje a una nueva era de feminidad: juguetona, sensual y empoderada"
    }
};


// Obtener ID del producto
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");


// Buscar producto
const producto = productos[id];


// Mostrar producto
if (producto) {

    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("marca").textContent = producto.marca;
    document.getElementById("precio").textContent = producto.precio;
    document.getElementById("descripcion").textContent = producto.descripcion;
    document.getElementById("imagen").src = producto.imagen;

}


// AGREGAR AL CARRITO
function agregarAlCarrito() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Buscar el producto por ID
    const indice = carrito.findIndex(function(item) {
        return item.id === id;
    });

    if (indice !== -1) {

        // Ya existe → aumentar cantidad
        carrito[indice].cantidad = (carrito[indice].cantidad || 1) + 1;

        alert(
            "Ya tenías este perfume en el carrito.\n" +
            "Cantidad: " + carrito[indice].cantidad
        );

    } else {

        // No existe → agregarlo
        carrito.push({
            id: id,
            nombre: producto.nombre,
            marca: producto.marca,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });

        alert("¡Producto agregado al carrito!");
    }

    // Guardar carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));
}