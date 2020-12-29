(function(){

  let accordionOpen = document.querySelectorAll('.js-accordion-open');

  accordionOpen.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      let target = e.target;
      if (target.closest('.js-accordion-open')) {
        target.closest('.js-accordion').classList.toggle('opened');
      }
    });
  });

})();