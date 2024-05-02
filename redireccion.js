const array = ['index.html', 'nosotros.html', 'servicios.html', 'trabajos.html', 'blog.html', 'contacto.html']
const opciones = document.querySelectorAll(".menu_item");
opciones.forEach((opcion, index) => {
    opcion.addEventListener("click", () => {
        window.location.href = array[index];
    });
});