document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');
    const showMoreButton = document.querySelector('.btn-mostrar-mas');

    // Ocultar todas las imágenes excepto las primeras 8
    for (let i = 8; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    // Mostrar más imágenes cuando se hace clic en el botón
    showMoreButton.addEventListener('click', function() {
        for (let i = 8; i < images.length; i++) {
            images[i].style.display = 'block';
        }
        // Ocultar el botón después de mostrar todas las imágenes
        showMoreButton.style.display = 'none';
    });
});