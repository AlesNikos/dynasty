(function(){

  document.addEventListener("DOMContentLoaded", function(event) {
      var links = document.querySelectorAll(".hidden-dlink");
      links.forEach(function(i){
          let href = i.getAttribute("data-al");
          i.setAttribute("href", href);
      });
  });

})(); 