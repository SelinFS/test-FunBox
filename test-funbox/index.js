
// 'use strict';

(function () {
  const cardsProduct = document.getElementsByClassName('card');
  for(var i = 0; i < cardsProduct.length; i++) {
    var elem = cardsProduct[i];
    elem.addEventListener("click", function() {
        this.classList.toggle("card--select");
    })
  }
})();

(function () {
  const btncards = document.getElementsByClassName('button-buy');
  for(var i = 0; i < btncards.length; i++) {
    var elem = btncards[i];
    elem.addEventListener("click", function() {
        this.classList.toggle("container__content");
    })
  }
})();



