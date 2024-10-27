const precio = 400000;

// Obtener elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const botones = document.querySelectorAll("button");

// Inicializar el precio base en el DOM
precioSpan.innerHTML = precio;

// Inicializar la cantidad
let cantidad = 0;

// Función para calcular y actualizar el total
function actualizarTotal() {
    const total = precio * cantidad;
    valorTotalSpan.innerHTML = total;
    cantidadSpan.innerHTML = cantidad;
}

// Agregar eventos a los botones
botones[0].addEventListener("click", () => {
    // Botón de suma (+)
    cantidad++;
    actualizarTotal();
});

botones[1].addEventListener("click", () => {
    // Botón de resta (-)
    if (cantidad > 0) {
        cantidad--;
        actualizarTotal();
    }
});