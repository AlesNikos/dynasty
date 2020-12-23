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