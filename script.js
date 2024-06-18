




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
  