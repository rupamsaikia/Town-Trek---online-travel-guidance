// Select main elements
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');




let current = 0;

// Function to move slides
function updateSlide() {
  slides.style.transform = `translateX(-${current * 100}%)`;
}

// Next button
nextBtn.addEventListener('click', () => {
  current = (current + 1) % images.length;
  updateSlide();
});

// Prev button
prevBtn.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  updateSlide();
});

const menuToggle=document.getElementById('menu-icon');
const navlinks = document.getElementById('nav-links');

 menuToggle.addEventListener('click',()=>{
  navlinks.classList.toggle('active');
})


