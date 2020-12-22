(function(){

    const popupButtons = document.querySelectorAll(".js-popup-button");

    if(popupButtons){

        for(let i = 0; i < popupButtons.length; i++){
            popupButtons[i].addEventListener("click", showPopup);
        };

    };

    function showPopup(){

        let targetPopupName = this.getAttribute("data-popup-for");
        let targetPopup = document.querySelector("[data-popup=" + targetPopupName + "]");

        if(targetPopup){
            document.body.classList.add("js-popup-is-open");
            targetPopup.classList.add("js-popup-is-active");
        };

    };

    const closePopupButton = document.querySelectorAll(".js-close-popup-button");

    if(closePopupButton){
        for (let i = 0; i < closePopupButton.length; i++) {
            closePopupButton[i].addEventListener("click", closePopup);
        }
    };

    function closePopup(){

        let openedPopup = document.querySelector(".js-popup-is-active");

        if(openedPopup){
            openedPopup.classList.remove("js-popup-is-active");
        };
        
        document.body.classList.remove("js-popup-is-open");
    };

})();