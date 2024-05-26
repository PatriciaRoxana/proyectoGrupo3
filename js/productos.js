document.addEventListener("DOMContentLoaded", function () {
  var productos = document.querySelectorAll(".producto");
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  var modalTitulo = document.getElementById("modal-titulo");
  var modalDescription = document.getElementById("modal-description");
  var modalPrecio = document.getElementById("modal-precio");
  var cerrarModal = document.querySelector(".cerrar");

  function openModal(producto) {
    modal.style.display = "block";
    modalImg.src = producto.querySelector("img").src;
    modalTitulo.textContent =
      producto.querySelector(".titulo-producto").textContent;
    modalPrecio.textContent =
      producto.querySelector(".producto-precio").textContent;
    modalDescription.textContent = producto.getAttribute(
      "data-descripcion-producto"
    );
  }

  productos.forEach(function (producto) {
    producto.addEventListener("click", function () {
      openModal(producto);
    });
  });

  cerrarModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Función para cargar el contenido del navbar
  fetch("../../html/home/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbarContainer").innerHTML = data;
    });

  // Función para cargar el contenido del footer
  fetch("../../html/home/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footerContainer").innerHTML = data;
    });
});
