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

    // Cлайдер на детальной странице новостей
    if(document.querySelector(".js-news-element-slider")){

        let newsElementSwiper = new Swiper(".js-news-element-slider", {
            init: true,
            //centeredSlides: true,
            speed: 1000,
            slidesPerView: 1,
            loop: false,
            parallax: true,
            autoHeight: true,
            direction: "horizontal",
            watchOverflow: true,
            spaceBetween: 20,
            pagination: {
                el: ".js-news-slider-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".js-news-slider-arrow-right",
                prevEl: ".js-news-slider-arrow-left",
            },
        });
    

    };
    
})();

// Инициализация glightbox
(function(){
  
      const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
    
})();


// Валидация форм
(function () {

    if(document.querySelector("form")){
        document.querySelectorAll("form").forEach(function(item){
            item.addEventListener("submit", validationCheck);
        })
    }

    function validationCheck(event){

        let elems = this.querySelectorAll("input, select, textarea");
        let errors = [];

        elems.forEach(function(item){
            let type;

            if(item.hasAttribute("type")){
                type = item.getAttribute("type");
            }else{
                type = item.getAttribute("data-type");
            }

            switch(type){

                case "text":
                    if(item.value == ""){ 
                        reqCheck(item);
                    }else{
                        let pattern;

                        switch(item.getAttribute("data-content")){
                            case "surname":
                            case "name":
                                pattern = new RegExp("^[a-zа-яё -]{1,}$","i");
                                contentCheck(item, item.value, pattern);
                                break;
                            case "phone":   
                                pattern = new RegExp("^[0-9 ]{7,}$");
                                contentCheck(item, item.value, pattern);
                                break;
                            case "date":   
                                pattern = new RegExp("^[0-9]{1,4}[.]{1}[0-9]{1,4}[.]{1}[0-9]{1,4}$");
                                contentCheck(item, item.value, pattern);
                                break;
                            case "mail":
                                pattern = new RegExp("^[a-z0-9_-]{1,}@{1}[a-z]{1,}[.]{1}[a-z]{3}$","i");
                                contentCheck(item, item.value, pattern);
                                break;
                        }
                    }
                    break;

                case "textarea":
                    if(item.value == ""){ 
                        reqCheck(item);
                    }else{
                        removeErrorMarks(item);
                    }
                    break;

                case "checkbox":
                    if(!item.checked){
                        reqCheck(item);
                    }else{
                        removeErrorMarks(item);
                    }
                    break;
            }
        })

        function reqCheck(elem){
            if(elem.hasAttribute("data-req")){
                errors.push(elem);
            }
        }

        function removeErrorMarks(item){
            if(item.classList.contains("error")){
                item.classList.remove("error");
            }
        }

        function contentCheck(elem, content, patrn){
            if(!patrn.test(content)){
                errors.push(elem); 
            }else{
                removeErrorMarks(elem);
            }
        }

        if(errors.length){
            event.preventDefault();

            errors.forEach(function(item){
                if(!item.classList.contains("error")){
                    item.classList.add("error");
                }
            })
        }
    }
    // 


    // Маска для телефона imask.js
    let phoneInputs = document.querySelectorAll(".js-imask-phone");
    let phoneMaskOptions = {
        mask: "+{7}(000)000-00-00",
        lazy: false,
    };
    for(let i = 0; i < phoneInputs.length; i++){
        let phoneMask = IMask(phoneInputs[i], phoneMaskOptions);
    };

    // Маска для даты imask.js
    let dateInputs = document.querySelectorAll(".js-imask-date");
    let dateMaskOptions = {
        mask: Date,
        lazy: false,
        min: new Date(1930, 0, 1),
        max: new Date(2030, 0, 1),
    };
    for(let i = 0; i < dateInputs.length; i++){
        let dateMask = IMask(dateInputs[i], dateMaskOptions);
    };

})();


// Показывает и скрывает попапы
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
            iconImageHref: "./images/pin.png",
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
            iconImageHref: "./images/pin.png",
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


    if(document.querySelector('.js-service-menu')) {

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
    }
    
})();

// Кастомизация селекта
(function(){

  // let choicesDependent = document.getElementById('popup-clinic');
  // if(choicesDependent){
  //     sShort = new Choices(choicesDependent, {
  //       silent: false,
  //       searchEnabled: false,
  //       resetScrollPosition: true,
  //       placeholder: false,
  //       classNames: {
  //           containerOuter: 'choices',
  //           containerInner: 'choices__inner',
  //           item: 'choices__item',
  //         },
  //     });
  //   };

  // choicesDependent = document.getElementById('popup-services');
  // if(choicesDependent){
  //     sShort = new Choices(choicesDependent, {
  //       silent: false,
  //       searchEnabled: false,
  //       resetScrollPosition: true,
  //       placeholder: false,
  //       classNames: {
  //           containerOuter: 'choices',
  //           containerInner: 'choices__inner',
  //           item: 'choices__item',
  //         },
  //     });
  //   };

  // choicesDependent1 = document.getElementById('doctors-select');
  // if(choicesDependent1){
  //     sShort = new Choices(choicesDependent1, {
  //       silent: false,
  //       searchEnabled: false,
  //       resetScrollPosition: true,
  //       placeholder: false,
  //       classNames: {
  //           containerOuter: 'choices',
  //           containerInner: 'choices__inner',
  //           item: 'choices__item',
  //         },
  //     });
  //   };

  // let choicesDependent2 = document.getElementById('clinic');
  // if(choicesDependent2){
  //     sShort = new Choices(choicesDependent2, {
  //       silent: false,
  //       searchEnabled: false,
  //       resetScrollPosition: true,
  //       placeholder: false,
  //       classNames: {
  //           containerOuter: 'choices',
  //           containerInner: 'choices__inner',
  //           item: 'choices__item',
  //         },
  //     });
  //   };

  // let choicesDependent3 = document.getElementById('services');
  // if(choicesDependent3){
  //     sShort = new Choices(choicesDependent3, {
  //       silent: false,
  //       searchEnabled: false,
  //       resetScrollPosition: true,
  //       placeholder: false,
  //       classNames: {
  //           containerOuter: 'choices',
  //           containerInner: 'choices__inner',
  //           item: 'choices__item',
  //         },
  //     });
  //   };

  let choicesDependentAll = document.querySelectorAll(".js-choices-dependent");
  if(choicesDependentAll){
    for(let i = 0; i < choicesDependentAll.length; ++i){
      serviceChoices = new Choices(choicesDependentAll[i], {
        silent: false,
        searchEnabled: false,
        resetScrollPosition: true,
        classNames: {
            containerOuter: 'choices',
            containerInner: 'choices__inner',
            item: 'choices__item',
          },
      });
    };
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

// Замена data-al на href для Seo
(function(){

  document.addEventListener("DOMContentLoaded", function(event) {
      var links = document.querySelectorAll(".hidden-dlink");
      links.forEach(function(i){
          let href = i.getAttribute("data-al");
          i.setAttribute("href", href);
      });
  });

})();

// Фильтрация специалистов
(function () {
    
    function SelectFilter(elem){
        let filter = {};

        filter.theme = elem.getAttribute("data-for");
        let filteredContent = document.querySelectorAll(".js-filtered-content");
        if(filteredContent){
            for(let i = 0; i < filteredContent.length; i++){
                if(filteredContent[i].getAttribute("data-content") == filter.theme){
                    filter.for = filteredContent[i];
                    break;
                };
            };
        };

        let filterController = elem.querySelector(".js-choice");

        changeFilterContent(filterController, filter.for);

        
        filterController.addEventListener("change", changeFilterContent.bind(null, filterController, filter.for));
    };

    
    function changeFilterContent(controller, filterContent){

        
        let filteredElems = filterContent.querySelectorAll("[data-filter-group]");
        if(filteredElems){

            
            switch(controller.value){
                case "all-branches":
                    for(let i = 0; i < filteredElems.length; i++){
                        if(filteredElems[i].classList.contains("js-content-is-hidden")){
                            filteredElems[i].classList.remove("js-content-is-hidden");
                        };
                    };
                    break;
                default:
                    for(let i = 0; i < filteredElems.length; i++){
                        let match = false;
                        let filterGroupArr = filteredElems[i].getAttribute("data-filter-group").split(" ");
                        for(let i = 0; i < filterGroupArr.length; i++){
                            if(filterGroupArr[i] == controller.value){
                                match = true;
                            };
                        };

                        switch(match){
                            case true:
                                if(filteredElems[i].classList.contains("js-content-is-hidden")){
                                    filteredElems[i].classList.remove("js-content-is-hidden");
                                };
                                break;
                            case false:
                                if(!filteredElems[i].classList.contains("js-content-is-hidden")){
                                    filteredElems[i].classList.add("js-content-is-hidden");
                                };
                                break;
                        };
                    };
                    break;
            };
        };
    };

    
    let filters = document.querySelectorAll(".js-select-filter");
    if(filters){
        for(let i = 0; i < filters.length; i ++){
            let filter = new SelectFilter(filters[i]);
        };
    };

})();

// Аккордеон
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

// Плавный скролл до элемента
(function(){

    // Конструктор якорной кнопки
    function ScrollButton(elem){

      // Находит блок, который нужно привязать к кнопке
        let target = document.querySelector("[data-anchor=" + elem.getAttribute("data-target") + "]");

      // Добавляем событие скроллирования по клику
        if(target){
            elem.addEventListener("click", function(e){
                e.preventDefault();
                if(!inScrollNow){
                    scrollTo(target);
                }
            });
        };
        
    };

    let inScrollNow = false;

    // Скроллировать к блоку
    function scrollTo(target){
        inScrollNow = true;

        // Получаем высоту страницы
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        // Получаем положение целевого блока
        let targetYPosition = window.pageYOffset + target.getBoundingClientRect().top;

        // Скорость скроллирования
        let speed = 60;

        if(targetYPosition > window.pageYOffset){

            let distance = targetYPosition - window.pageYOffset - 200;
            if(distance > speed){
                window.scrollTo(0, window.pageYOffset + speed);
                setTimeout(function(){
                    scrollTo(target);
                }, 15)
            }else{
                window.scrollTo(0, window.pageYOffset + distance);
                inScrollNow = false;
            };

        }else{

            let distance = window.pageYOffset - targetYPosition + 200;

            if(distance > speed){
                window.scrollTo(0, window.pageYOffset - speed);
                setTimeout(function(){
                    scrollTo(target);
                }, 15)    
            }else{
                window.scrollTo(0, window.pageYOffset - distance);
                inScrollNow = false;
            };
        };

    };

    // Находим все скроллирующие кнопки и инициализируем
    let buttons = document.querySelectorAll(".js-scroll-button");
    if(buttons){
        for(let i = 0; i < buttons.length; i++){
            let bunch = new ScrollButton(buttons[i]);
        };
    };

})();

// Cookie
(function(){

    if(document.querySelector('.js-close-cookie') && document.body.classList.contains('js-cookie-is-show')) {
      document.querySelector('.js-close-cookie').addEventListener('click', function() {
        document.body.classList.remove('js-cookie-is-show');
      });
    }

})();