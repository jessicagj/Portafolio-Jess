console.log("¡Proyecto cargado correctamente!");

document.addEventListener("DOMContentLoaded", () => {
  alert("Bienvenida a tu proyecto local, Jessi 😊");
});


  // Cambia color de navbar al hacer scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Cierra el menú al hacer clic en un enlace (versión móvil)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    });
  });

  AOS.init({
    duration: 1000,
    once: true,
  });

  
