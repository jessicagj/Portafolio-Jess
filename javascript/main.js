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

  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const logo = document.getElementById('main-logo');
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
      logo.src = 'img/logo-mini.png'; // Logo pequeño
    } else {
      header.classList.remove('header-scrolled');
      logo.src = 'img/logo-grande.png'; // Logo grande
    }

    // Mostrar gatitos al hacer scroll
    const gatitos = document.querySelectorAll('.gato');
    gatitos.forEach((gato) => {
      const rect = gato.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        gato.classList.add('visible');
      }
    });
  });
    window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const logo = document.getElementById('main-logo');
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
      logo.src = 'img/logo-mini.png'; // Logo pequeño
    } else {
      header.classList.remove('header-scrolled');
      logo.src = 'img/logo-grande.png'; // Logo grande
    }

    // Mostrar gatitos al hacer scroll
    const gatitos = document.querySelectorAll('.gato');
    gatitos.forEach((gato) => {
      const rect = gato.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        gato.classList.add('visible');
      }
    });
  });