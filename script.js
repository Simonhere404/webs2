// Productos que se van a mostrar
const productos = [
  { id: 1, nombre: "Audífonos", precio: 350, img: "IMG/Audifonos.png" },
  { id: 2, nombre: "Mouse Gamer", precio: 220, img: "IMG/Mausgamer.png" },
  { id: 3, nombre: "Teclado Mecánico", precio: 900, img: "IMG/Tecladomecanico.png" },
  { id: 4, nombre: "Memoria USB 64GB", precio: 150, img: "IMG/USB.png" },
  { id: 5, nombre: "Bocina Bluetooth", precio: 450, img: "IMG/Bocinabluethoot.png" },
  { id: 6, nombre: "Cargador rápido", precio: 280, img: "IMG/Cargadorrapido.png" },
  { id: 7, nombre: "Cable HDMI", precio: 120, img: "IMG/HDMI.png" },
  { id: 8, nombre: "Laptop Lenovo", precio: 11000, img: "IMG/Laptoop.png" },
  { id: 9, nombre: "Micrófono USB", precio: 650, img: "IMG/Micorfono.png" },
  { id: 10, nombre: "Monitor 24''", precio: 3400, img: "IMG/Monitor.png" }
];

let carrito = [];

// Mostrar los productos
function mostrarProductos(lista = productos) {
    const contenedor = document.getElementById("listaProductos");
    contenedor.innerHTML = "";
    lista.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${p.img}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
            <button onclick="agregarAlCarrito(${p.id})">Agregar</button>
        `;
        contenedor.appendChild(div);
    });
}

// Agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

// Mostrar productos en el carrito
function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("total");
    lista.innerHTML = "";

    let totalPagar = 0;
    carrito.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(div);
        totalPagar += item.precio;
    });

    total.textContent = `Total: $${totalPagar}`;
}

// Vaciar carrito
document.getElementById("vaciarCarrito").addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
});

// Buscador
document.getElementById("buscar").addEventListener("input", e => {
    const texto = e.target.value.toLowerCase();
    const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
    mostrarProductos(filtrados);
});

mostrarProductos();
