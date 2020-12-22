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