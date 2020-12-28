(function(){

    let header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 1) {
        header.classList.add('header__fixed');
      } else {
        header.classList.remove('header__fixed');
      }
    });


    // let servicesMenu = document.querySelector('.js-service-menu');
    // // let blockPosition = servicesMenu.getBoundingClientRect().top;
    // // console.log(blockPosition + pageYOffset);

    // window.addEventListener('scroll', function() {
    //   let position = window.pageYOffset;
    //   console.log(position);
    //   let blockPosition = servicesMenu.getBoundingClientRect();
    //   console.log(blockPosition.top + pageYOffset);
    //   if (position > (blockPosition.top + pageYOffset - 96)) {
    //     servicesMenu.classList.add('services-element__menu--fixed');
    //   } else {
    //     servicesMenu.classList.remove('services-element__menu--fixed');
    //   }
    // });
    
})();