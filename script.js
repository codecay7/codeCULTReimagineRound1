
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
  // Select all navbar items
  const navbarItems = document.querySelectorAll('.navbar-item');

  // Select all content sections
  const contents = document.querySelectorAll('.content');

  // Set the first content section to be active by default
  contents[0].classList.add('active');

  // Add click event listener to each navbar item
  navbarItems.forEach(item => {
      item.addEventListener('click', function() {
          // Remove active class from all navbar items
          navbarItems.forEach(navItem => navItem.classList.remove('active'));
          // Add active class to the clicked navbar item
          item.classList.add('active');

          // Hide all content sections
          contents.forEach(content => content.classList.remove('active'));

          // Show the corresponding content section
          const target = item.getAttribute('data-target');
          document.getElementById(target).classList.add('active');

          // Check if the content section is content1-B and activate it
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
