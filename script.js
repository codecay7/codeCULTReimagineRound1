
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  const showImage = (index) => {
    images[currentIndex].classList.remove('active');
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add('active');
  };

  const nextImage = () => showImage(currentIndex + 1);
  const prevImage = () => showImage(currentIndex - 1);

  document.getElementById('next').addEventListener('click', nextImage);
  document.getElementById('prev').addEventListener('click', prevImage);

  setInterval(nextImage, 1000);

  // window.addEventListener('wheel', (e) => {
  //   if (e.deltaY > 0) {
  //     nextImage();
  //   } else {
  //     prevImage();
  //   }
  // });
});

// Sudhanshu feature toggle card

document.addEventListener("DOMContentLoaded", function() {
  const navbarItems = document.querySelectorAll('.navbar-item');
  const contents = document.querySelectorAll('.contentsudo');
  contents[0].classList.add('active');
  navbarItems.forEach(item => {
      item.addEventListener('click', function() {

          navbarItems.forEach(navItem => navItem.classList.remove('active'));
          item.classList.add('active');
          contents.forEach(content => content.classList.remove('active'));
          const target = item.getAttribute('data-target');
          document.getElementById(target).classList.add('active');
          if (target === 'content1-B') {
              document.getElementById(target).classList.add('active');
          }
      });
  });
});

/* Keyframe animation of full page*/
document.addEventListener("DOMContentLoaded", function() {
  const animatedElements = document.querySelectorAll(".fullpart > *");
  const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
  };

  function intersectionCallback(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animated"); 
              observer.unobserve(entry.target); 
          }
      });
  }
  const observer = new IntersectionObserver(intersectionCallback, observerOptions);
  animatedElements.forEach(element => {
      observer.observe(element);
  });
});
 
// h1 of new arrival changing in three colors
const heading = document.getElementById('vid-lat');
const tl = gsap.timeline({ repeat: -1 });
tl.to(heading, { duration: 2, color: 'red' })
  .to(heading, { duration: 2, color: 'white' })
  .to(heading, { duration: 2, color: 'blue' });


 // Sliding image of content1
 document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('#content1 .slider-item');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;

  function changeSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide or loop back to the first slide
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? 'block' : 'none';
    });

    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  setInterval(changeSlide, 5000); // Change slide every 5 seconds
});

