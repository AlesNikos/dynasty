(function(){

    if(document.querySelector('.js-close-cookie') && document.body.classList.contains('cookie-show')) {
      document.querySelector('.js-close-cookie').addEventListener('click', function() {
        document.body.classList.remove('cookie-show');
      });
    }

})();