(function(){

    if(document.querySelector('.js-close-cookie') && document.body.classList.contains('js-cookie-is-show')) {
      document.querySelector('.js-close-cookie').addEventListener('click', function() {
        document.body.classList.remove('js-cookie-is-show');
      });
    }

})();