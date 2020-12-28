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

  let choicesDependent2 = document.getElementById('clinic');
  if(choicesDependent){
      sShort = new Choices(choicesDependent2, {
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

  let choicesDependent3 = document.getElementById('services');
  if(choicesDependent){
      sShort = new Choices(choicesDependent3, {
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