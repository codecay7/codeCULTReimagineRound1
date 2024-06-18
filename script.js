//script is here

const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
let currentImageIndex = 0;

// Carousel animation
setInterval(() => {
  images[currentImageIndex].style.opacity = '0';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = '1';
}, 100); // Change image every 100ms

// Scroll animation
window.addEventListener('scroll', () => {
  const scrollText = document.getElementById('scrollText');
  const value = window.scrollY;
  
  scrollText.style.left = value * 0.5 + 'px'; // Adjust speed as needed
});
