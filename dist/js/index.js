

document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper(".mySwiper", {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      keyboard: true,
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
  
  // Menu

  const openMenu = document.querySelector('.open__menu'),
        closeMenu = document.querySelector('.close__btn'),
        menu = document.querySelector('.menu__list'),
        menuLinks = document.querySelectorAll('.menu__link');

    const OpenMenu = () => {
      openMenu.addEventListener('click', () => {
        menu.classList.add('active');
        closeMenu.classList.add('active');
      });
    };
    OpenMenu();

    const CloseMenu = () => {
      closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
        closeMenu.classList.remove('active');
      });
      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('active');
          closeMenu.classList.remove('active');
        });
      });
    };
    CloseMenu();
    // Touches
    const menuOpenTouch = () => {
      openMenu.addEventListener('targetTouches', () => {
        menu.classList.add('active');
        closeMenu.classList.add('active');
      });
    };

    const menuCloseTouch = () => {
      closeMenu.addEventListener('targetTouches', () => {
        menu.classList.remove('active');
        closeMenu.classList.remove('active');
      });
      menuLinks.forEach(link => {
        link.addEventListener('targetTouches', () => {
          menu.classList.remove('active');
          closeMenu.classList.remove('active');
        });
      });
    };
    menuOpenTouch();
    menuCloseTouch();
});