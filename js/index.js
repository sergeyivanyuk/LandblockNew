

document.addEventListener('DOMContentLoaded', () => {
    // Animation

    AOS.init(
    );

    let swiper = new Swiper(".mySwiper", {
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      mousewheel: true,
      keyboard: true,
    });
    
    // Header Color
    

    document.addEventListener('scroll', () => {
      const header = document.querySelector('.header');

      if(window.scrollY > 100) {
        header.classList.add('white');
      }
      if(window.scrollY < 100) {
        header.classList.remove('white');
      }
    });

    // Scroll
    document.querySelectorAll('a[href^="#"').forEach(link => {

      link.addEventListener('click', function(e) {
          e.preventDefault();
  
          let href = this.getAttribute('href').substring(1);
  
          const scrollTarget = document.getElementById(href);
  
          const topOffset = document.querySelector('.header').offsetHeight;
          // const topOffset = 0; // если не нужен отступ сверху 
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;
  
          window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
          });
      });
  });

  // Manu Mobile 
  const Menu = document.querySelector('.menu'),
        OpenMenuBtn = document.querySelector('.menu-open-btn'),
        CloseMenuBtn = document.querySelector('.close-btn');

        OpenMenuBtn.addEventListener('click', () => {
          Menu.classList.add('active');
          Menu.classList.add('animation');
          Menu.classList.remove('animation-close');
        });
        CloseMenuBtn.addEventListener('click', () => {
          Menu.classList.remove('active');
          Menu.classList.remove('animation');
          Menu.classList.add('animation-close');
        });
});