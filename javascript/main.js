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
  
  // animacion de scroll
  
const sections = document.querySelectorAll('.section');
const images = [
  document.getElementById('img1'),
  document.getElementById('img2'),
  document.getElementById('img3'),
  document.getElementById('img4'),
  document.getElementById('img5')
];

function handleScroll() {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

    if (isVisible) {
      images.forEach((img, i) => {
        if (i === index) {
          img.classList.add('visible');
        } else {
          img.classList.remove('visible');
        }
      });
    }
  });
}

window.addEventListener('scroll', handleScroll);