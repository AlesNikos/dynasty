// Инициализация свайпера
(function(){

    // Основной слайдер на главной странице
    if(document.querySelector(".js-main-slider")){

        let mainSwiper = new Swiper(".js-main-slider", {
            init: true,
            //centeredSlides: true,
            speed: 1200,
            slidesPerView: 1,
            loop: false,
            parallax: true,
            autoHeight: true,
            direction: "horizontal",
            watchOverflow: true,
            pagination: {
                el: ".js-main-slider-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".js-main-slider-arrow-right",
                prevEl: ".js-main-slider-arrow-left",
            },
        });
    
        /*if(mainSwiper.wrapperEl.children.length > 1){
            mainSwiper.params.loop = true;
            mainSwiper.init();
        }else{
            mainSwiper.init();
        };*/

    };

    // Основной слайдер на главной странице
    if(document.querySelector(".js-reviews-slider")){

        let reviewsSwiper = new Swiper(".js-reviews-slider", {
            breakpoints: {
                320: {
                    spaceBetween: 32
                },
                1480: {
                    spaceBetween: 36,
                },
            },
            speed: 1200,
            slidesPerView: "auto",
            loop: false,
            parallax: true,
            direction: "horizontal",
            watchOverflow: true,
            navigation: {
                nextEl: ".js-reviews-slider-arrow-right",
                prevEl: ".js-reviews-slider-arrow-left",
            },
        });

    };
    
})();


// Валидация форм
(function () {

    //Валидация форм
    function validationCheck(){

        // Проверка на обязательность заполнения
        function reqCheck(elem){
            if(elem.hasAttribute("data-req")){
                validErrors.push(elem);
            };
        };

        // Убрать указание об ошибке
        function noErrors(elem){
            let elemParent = elem.parentElement;
            while(!elemParent.classList.contains("form__group")){
                elemParent = elemParent.parentElement;
            };
            if(elemParent.classList.contains("js-valid-error")){
                elemParent.classList.remove("js-valid-error");
            };
        };

        // Проверка прилагаемого файла
        function fileCheck(elem, file){
            if(file.size > 5000000){
                validErrors.push(elem);
            }else{
                noErrors(elem);
            };
        };

        // Проверка вводимых данных через регулярное выражение
        function valueCheck(elem, val, patrn){
            if(!patrn.test(val)){
                validErrors.push(elem); 
            }else{
                noErrors(elem);
            };
        };

        // Ищем форму, к которой относится кнопка
        let form = this.parentElement;
        while(form.tagName != "FORM"){
            form = form.parentElement
        };

        // Ищем все элементы данной формы
        let formElems = form.querySelectorAll("input, select, textarea");
        
        // Создаем массив для полей с ошибками
        let validErrors = [];

        // Основной цикл проверки на правильность заполнения формы
        for(let i = 0; i < formElems.length; i++){

            let elemType;
            if(formElems[i].hasAttribute("type")){
                elemType = formElems[i].getAttribute("type");
            }else{
                elemType = formElems[i].getAttribute("data-type");
            }

            switch(elemType){

                // Для инпутов
                case "text":
                    if(formElems[i].value == ""){ 
                        reqCheck(formElems[i]);
                    }else{
                        switch(formElems[i].getAttribute("name")){
                            case "surname":
                            case "name":
                                let namePattern = new RegExp("^[a-zа-яё -]{1,}$","i");
                                valueCheck(formElems[i], formElems[i].value, namePattern);
                                break;
                            case "phone":   
                                let phonePattern = new RegExp("^[0-9 ]{7,}$");
                                valueCheck(formElems[i], formElems[i].value, phonePattern);
                                break;
                            case "date":   
                                let datePattern = new RegExp("^[0-9]{1,4}[.]{1}[0-9]{1,4}[.]{1}[0-9]{1,4}$");
                                valueCheck(formElems[i], formElems[i].value, datePattern);
                                break;
                            case "mail":
                                let mailPattern = new RegExp("^[a-z0-9_-]{1,}@{1}[a-z]{1,}[.]{1}[a-z]{2}$","i");
                                valueCheck(formElems[i], formElems[i].value, mailPattern);
                                break;
                        };
                    };
                    break;

                // Для текстовых полей
                case "textarea":
                    if(formElems[i].value == ""){ 
                        reqCheck(formElems[i]);
                    }else{
                        noErrors(formElems[i]);
                    };
                    break;

                // Для селектов
                case "select":
                    if(formElems[i].value == "choice-1"){
                        reqCheck(formElems[i]);
                    }else{
                        noErrors(formElems[i]);
                    };
                    break;

                // Для чекбоксов
                case "checkbox":
                    if(!formElems[i].checked){
                        reqCheck(formElems[i]);
                    }else{
                        noErrors(formElems[i]);
                    };
                    break;

                // Для файлов
                case "file":
                    if(!formElems[i].files[0]){
                        reqCheck(formElems[i]);
                    }else if(formElems[i].files[0]){
                        fileCheck(formElems[i], formElems[i].files[0]);
                    };
                    break;
            };
        };

        // Проверка, есть ли поля с ошибками заполнения, отмена отправки, и назначение подсказок об ошибках
        if(validErrors.length){
            event.preventDefault();
            for(let i = 0; i < validErrors.length; i++){

                let elemParent = validErrors[i].parentElement;
                while(!elemParent.classList.contains("form__group")){
                    elemParent = elemParent.parentElement;
                };
                if(!elemParent.classList.contains("js-valid-error")){
                    elemParent.classList.add("js-valid-error");
                };
            };
        };
    };

    // Кнопки отправки форм
    const submitButtons = document.querySelectorAll(".js-submit");

    // Если кнопки найдены, по клику на них проверяем относящуюся к ним форму на валидность
    if(submitButtons){
        for(let i = 0; i < submitButtons.length; i++){
            submitButtons[i].addEventListener("click", validationCheck);
        };  
    };


    // Маска для телефона imask.js
    let phoneInputs = document.querySelectorAll(".js-imask-phone");
    let phoneMaskOptions = {
        mask: "+{7}(000)000-00-00"
    };
    for(let i = 0; i < phoneInputs.length; i++){
        let phoneMask = IMask(phoneInputs[i], phoneMaskOptions);
    };

})();


// Показывает и скрывает попапы
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


// Показывает и скрывает главное меню
(function(){

    const burgerButton = document.querySelector(".burger");
    if(burgerButton){
        burgerButton.addEventListener("click", changeMenuState);
    };

    function changeMenuState(){
        document.body.classList.toggle("js-burger-menu-is-open");

        /*if(!burgerButton.classList.contains("js-burger-is-open")){
            burgerButton.classList.add("js-burger-is-open");
        }else if(burgerButton.classList.contains("js-burger-is-open")){
            burgerButton.classList.remove("js-burger-is-open");
        };*/
    };
    
})();


// Инициализация Яндекс-карты
// Инициализация карты Яндекс
if(document.getElementById("map-1")){
    ymaps.ready(init);
    function init(){ 
        let locationMap = new ymaps.Map("map-1", {
            center: [56.831886, 60.620480],
            zoom: 15,
            controls: [],
        }),
        
        mainPin = new ymaps.Placemark([56.831886, 60.620480], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: "default#image",
            iconImageHref: "../images/pin.png",
            iconImageSize: [32, 37],
            iconImageOffset: [-16, -37]
        });
 
        locationMap.geoObjects
            .add(mainPin)
    };    
};
if(document.getElementById("map-2")){
    ymaps.ready(init);
    function init(){ 
        let locationMap = new ymaps.Map("map-2", {
            center: [56.795475, 60.624631],
            zoom: 15,
            controls: [],
        }),
        
        mainPin = new ymaps.Placemark([56.795475, 60.624631], {
            hintContent:"",
            balloonContent:""
        }, {
            iconLayout: "default#image",
            iconImageHref: "../images/pin.png",
            iconImageSize: [32, 37],
            iconImageOffset: [-16, -37]
        });
 
        locationMap.geoObjects
            .add(mainPin)
    };    
};


// Переключение табов
(function () {

    let tabsContainers = document.querySelectorAll(".js-tabs");
    if(tabsContainers){
        for(let i = 0; i < tabsContainers.length; i++){
            let tabs = new TabsInit(tabsContainers[i]);
        };
    };

    // Инициализирует табы
    function TabsInit(tabsContainer){

        let tabButtons = tabsContainer.querySelectorAll("[data-tab]");
        if(tabButtons){
            for(let i = 0; i < tabButtons.length; i++){
                tabButtons[i].addEventListener("click", changeTabState.bind(null, tabsContainer, tabButtons[i]));
            };
        };

        // Находим кнопку активного таба
        let activeTabButton = tabsContainer.querySelector(".tabs__item--active").firstElementChild;

        // Выводим контент активного таба
        changeContent(activeTabButton, tabsContainer);
    };

    // Меняет активный таб
    function changeTabState(tabsContainer, tabButton){

        // Находим в корневой группе текущий активный таб и переназначаем
        tabsContainer.querySelector(".tabs__item--active").classList.remove("tabs__item--active");
        tabButton.parentElement.classList.add("tabs__item--active");
        

        // Выводим контент активного таба
        changeContent(tabButton, tabsContainer)
    };

    // Выводит контент активного таба
    function changeContent(tabButton, tabsContainer){

        // Находим контент для текущей группы табов
        let tabsContent = document.querySelector("[data-tabs-content=" + tabsContainer.getAttribute("data-tabs") + "]");
        
        // Если контент найден
        if(tabsContent){

            // Находим все группы или элементы контента
            let tabsContentItems = tabsContent.querySelectorAll("[data-tab-content]");

            if(tabButton.getAttribute("data-tab") == "all"){
                for(let i = 0; i < tabsContentItems.length; i++){
                    if(tabsContentItems[i].classList.contains("js-content-is-hidden")){
                        tabsContentItems[i].classList.remove("js-content-is-hidden");
                    };  
                };
            }else{
                // Проверяем принадлежность каждого элемента к текущему активному табу
                for(let i = 0; i < tabsContentItems.length; i++){

                    // Если элемент относится к текущему табу, делаем его видимым
                    if(tabsContentItems[i].getAttribute("data-tab-content").includes(tabButton.getAttribute("data-tab"))){
                        if(tabsContentItems[i].classList.contains("js-content-is-hidden")){
                            tabsContentItems[i].classList.remove("js-content-is-hidden");
                        };
                    // Если элемент не относится к текущему табу, скрываем
                    }else{
                        if(!tabsContentItems[i].classList.contains("js-content-is-hidden")){
                            tabsContentItems[i].classList.add("js-content-is-hidden");
                        };
                    };
                    
                };
            };

        };
    };

})();


// Header
(function(){

    let header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 1) {
        header.classList.add('header__fixed');
      } else {
        header.classList.remove('header__fixed');
      }
    });
    
})();

// Кастомизация селекта
(function(){

  let choicesDependent = document.getElementById('popup-clinic');
  if(choicesDependent){
      sShort = new Choices(choicesDependent, {
        silent: false,
        searchEnabled: false,
        resetScrollPosition: true,
        placeholder: false,
        classNames: {
            containerOuter: 'choices',
            containerInner: 'choices__inner',
            item: 'choices__item',
          },
      });
    };

  choicesDependent = document.getElementById('popup-services');
  if(choicesDependent){
      sShort = new Choices(choicesDependent, {
        silent: false,
        searchEnabled: false,
        resetScrollPosition: true,
        placeholder: false,
        classNames: {
            containerOuter: 'choices',
            containerInner: 'choices__inner',
            item: 'choices__item',
          },
      });
    };
    
})();

// Ховер в виде пузыря
(function(){

    let bubbleCards = document.querySelectorAll(".js-bubble-hover");
    if(bubbleCards){
        bubbleCards.forEach(item => {
            item.addEventListener("mouseenter", createBubble);
            item.addEventListener("mouseleave", function(){
                generateBubbles = true;
            });
        });
    }

    let generateBubbles = true;

    function createBubble(event){

        if(!generateBubbles){
            return;
        }

        generateBubbles = false;

        let bubbleSize = this.offsetWidth;
        if(this.offsetWidth > this.offsetHeight){
            bubbleSize = this.offsetHeight;
        }

        let bubbleContainer = document.createElement("div");
        bubbleContainer.className = "bubble-container";
        bubbleContainer.style.width = bubbleSize + "px";
        bubbleContainer.style.height = bubbleSize + "px";
        bubbleContainer.style.left = event.clientX - this.getBoundingClientRect().left - bubbleSize / 2 + "px";
        bubbleContainer.style.top = event.clientY - this.getBoundingClientRect().top - bubbleSize / 2 + "px";

        let bubble = document.createElement("div");
        bubble.className = "bubble";

        bubbleContainer.append(bubble);
        this.prepend(bubbleContainer);
        setTimeout(function(){
            bubbleContainer.remove();
        }, 500);

    }

})();