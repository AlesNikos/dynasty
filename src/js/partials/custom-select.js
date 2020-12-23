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
  choicesDependent1 = document.getElementById('doctors-select');
  if(choicesDependent1){
      sShort = new Choices(choicesDependent1, {
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