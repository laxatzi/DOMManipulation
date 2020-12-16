(function () {
'use strict';

// for...in loop
  // example
         let lunch = {
            sandwich: 'ham',
            snack: 'chips',
            drink: 'soda',
            desert: 'cookie',
            guests: 3,
            alcohol: false,
      };
            for(let prop in lunch){
               if(lunch.hasOwnProperty(prop)){
                  console.log('Property: '+ prop);
                  console.log('Value: '+ lunch[prop]);
            }
         }// end loop

// Array.forEach()  method
 // example
  //? *forEach functions cannot be terminated before completed.

   let pets = ['dog', 'cat', 'donkey', 'canary'];
   pets.forEach(function(pet, index) {
      if(pet === 'cat') return;
      console.log(index);
      console.log(pet);
   });

// Computed Styles
  // example
  let element = document.querySelector('.firstClass');
  let bgColor = window.getComputedStyle(element).backgroundColor;
  console.log(bgColor);

})();

// accordion IIFE
(function () {
   'use strict';
   

})();