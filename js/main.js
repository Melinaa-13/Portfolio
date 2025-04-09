// Carousel about me
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const carouselContent = document.querySelector('.carousel-content');
  carouselContent.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function nextSlide() {
  showSlide(currentSlide + 1);
}
function previousSlide() {
  showSlide(currentSlide - 1);
}
// Selecteur tab skills
const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  tabLinks.forEach((btn) => {
    btn.addEventListener('click', () => {
     
      tabLinks.forEach(link => link.classList.remove('active'));
     
      btn.classList.add('active');

     
      tabContents.forEach(content => content.classList.remove('active'));
     
      const target = btn.getAttribute('data-tab');
      document.getElementById(target).classList.add('active');
    });
});