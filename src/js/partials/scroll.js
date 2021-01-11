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