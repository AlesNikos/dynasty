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