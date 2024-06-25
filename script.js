
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

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetCard = document.getElementById(button.dataset.target);
    if (targetCard.style.display !== 'block') {
      document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
      targetCard.style.display = 'block';
    }
  });
});

document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.card').style.display = 'none';
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
