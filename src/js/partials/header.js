(function(){

    let header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 1) {
        header.classList.add('header__fixed');
      } else {
        header.classList.remove('header__fixed');
      }
    });


    let servicesMenu = document.querySelector('.js-service-menu');
    let servicesInfo = document.querySelector('.service__info-hero')
    let blockPosition = window.pageYOffset + servicesMenu.getBoundingClientRect().top;

    if (document.documentElement.clientWidth > 1365) {
      window.addEventListener('scroll', function() {
        let position = window.pageYOffset;
        if (position > blockPosition - 96) {
          servicesMenu.classList.add('service__menu--fixed');
          servicesInfo.classList.add('service__info-hero--position');
        } else {
          servicesMenu.classList.remove('service__menu--fixed');
          servicesInfo.classList.remove('service__info-hero--position');
        }
      });

    }
    
})();