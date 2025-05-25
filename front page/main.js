// Mobile Menu

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Reveal

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
document.addEventListener("DOMContentLoaded", () => {


  // 3D Carousel
  const items = document.querySelectorAll('.carousel-item');
  let current = 0;
  const total = items.length;

  function updateCarousel() {
    items.forEach((item, i) => {
      item.classList.remove('active', 'left', 'right', 'far');
      item.style.transform = '';
      let diff = (i - current + total) % total;
      if (diff === 0) {
        item.classList.add('active');
        item.style.transform = 'translateZ(120px) scale(1.08)';
      } else if (diff === 1 || (diff === -(total-1))) {
        item.classList.add('right');
        item.style.transform = 'translateX(140px) rotateY(-35deg) scale(0.92)';
      } else if (diff === total-1 || (diff === -1)) {
        item.classList.add('left');
        item.style.transform = 'translateX(-140px) rotateY(35deg) scale(0.92)';
      } else {
        item.classList.add('far');
        item.style.transform = 'translateZ(-200px) scale(0.8)';
      }
    });
  }

  updateCarousel();
  setInterval(() => {
    current = (current + 1) % total;
    updateCarousel();
  }, 3000);
});

sr.reveal('.text', { delay: 200, origin: 'top'})
sr.reveal('.form-container form', { delay: 400, origin: 'left'})
sr.reveal('.heading', { delay: 400, origin: 'top'})
sr.reveal('.ride-container .box', { delay: 200, origin: 'top'})
sr.reveal('.services-container .box', { delay: 200, origin: 'top'})
sr.reveal('.about-container', { delay: 200, origin: 'top'})
sr.reveal('.reviews-container', { delay: 200, origin: 'top'})
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom'})