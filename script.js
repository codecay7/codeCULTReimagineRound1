
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






// Sudhanshu feature LATEST-ARRIVALS
document.addEventListener('DOMContentLoaded', () => {
  const imageCards = document.querySelectorAll('.image-container');

  imageCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      const img = card.querySelector('img');
      card.style.transform = 'translateX(0)';
      card.style.opacity = '1';
      img.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
      const img = card.querySelector('img');
      card.style.transform = 'translateX(-10px)';
      card.style.opacity = '0.9';
      img.style.transform = 'scale(1)';
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const latestArrival = document.querySelector('.latestArrival');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      latestArrival.style.transform = 'translateY(-10px)';
    } else {
      latestArrival.style.transform = 'translateY(0)';
    }
  });
});
