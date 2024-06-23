
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


//GSAP Animation
gsap.from(".video-latest h1",{
  opacity:0,
  duration:1,
  y:10,
  duration:2,
  delay:1
})

gsap.from(".image-container",{
  duration:1,
  y:10,
  x:10,
  duration:1,
  delay:1
})

