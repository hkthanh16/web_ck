const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide-item');
let currentIndex = 0;

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 100;
  slider.style.transform = `translateX(${translateValue}%)`;
}

if(slider && slides) {
  setInterval(nextSlide, 3000);
}


const closeMenu = document.querySelector('#collapse-button')
const openMenu = document.querySelector('#open-menu')
const sidebar = document.querySelector('#sidebar')

openMenu.addEventListener('click', function() {
  sidebar.classList.add('active')
})

closeMenu.addEventListener('click', function() {
  sidebar.classList.remove('active')
})