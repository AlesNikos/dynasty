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