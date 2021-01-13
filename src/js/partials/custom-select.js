(function(){

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