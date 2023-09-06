// JavaScript para el funcionamiento del carrusel
const carousel = document.querySelector('.carousel');
const carouselContent = document.querySelector('.carousel-content');
const carouselItems = document.querySelectorAll('.carousel-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentIndex = 0;
let transformValue = 0;
let autoMoveInterval;

function updateCarousel() {
  carouselContent.style.transform = `translateX(${transformValue}%)`;
}

function prevItem() {
  clearInterval(autoMoveInterval);
  currentIndex--;
  transformValue += 15;
  
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
    transformValue = -15 * (carouselItems.length - 1);
  }
  
  updateCarousel();
  startAutoMove();
}

function nextItem() {
  clearInterval(autoMoveInterval);
  currentIndex++;
  transformValue -= 15;
  
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
    transformValue = 0;
  }
  
  updateCarousel();
  startAutoMove();
}

function startAutoMove() {
  clearInterval(autoMoveInterval);
  autoMoveInterval = setInterval(nextItem, 3000);
}

// Asignar los eventos a los botones "Prev" y "Next"
btnPrev.addEventListener('click', prevItem);
btnNext.addEventListener('click', nextItem);

// Actualizar el carrusel al cargar la página
updateCarousel();
startAutoMove();

