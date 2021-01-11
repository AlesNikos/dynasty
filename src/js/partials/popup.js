(function(){

    function showPopup(){

        let targetPopup = document.querySelector("[data-popup=" + this.getAttribute("data-popup-for") + "]");

        if(targetPopup){
            document.body.classList.add("js-popup-is-open");
            targetPopup.classList.add("js-active-popup");
        };
    }

    function hidePopup(){
        document.querySelector(".js-active-popup").classList.remove("js-active-popup");
        document.body.classList.remove("js-popup-is-open");
    }

    document.body.addEventListener('click', function(e) {
        let target = e.target;
        if (!target.classList.contains('js-close-popup')) return;
		
		hidePopup();
    })

    if(document.querySelector(".js-popup-button") && document.querySelector(".js-close-popup-button")){

        document.querySelectorAll(".js-popup-button").forEach(function(item){
            item.addEventListener("click", showPopup);
        });
        document.querySelectorAll(".js-close-popup-button").forEach(function(item) {
            item.addEventListener("click", hidePopup);
        })
    }

})();