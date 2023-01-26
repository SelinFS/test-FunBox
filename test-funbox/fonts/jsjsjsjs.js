'use strict';

(function() {
  var cardsProduct = document.querySelectorAll('.catalog__item-card');
  var btncardsProduct = document.querySelectorAll('.catalog__btn-text');
  var soldProduct = document.querySelector('.catalog__item-card--disabled');

  for (var i = 0; i < cardsProduct.length; i++) {
    cardsProduct[i].addEventListener('click', onCardProductClick);
    cardsProduct[i].addEventListener('keydown', onCardProductKeyDown);
    btncardsProduct[i].addEventListener('click', btncardsProductClick);
  }

  function btncardsProductClick(evt) {
    var element = evt.target.parentNode.previousElementSibling;
    element.classList.toggle('catalog__item-card--selected');
  }

  function onCardProductClick(evt) {
    this.classList.toggle('catalog__item-card--selected');
  }

  function onCardProductKeyDown(evt) {
    var KEY_CODE = {
      TAB: 9,
      ENTER: 13
    };

    if (evt.keyCode === KEY_CODE.TAB) return;
    if (evt.keyCode === KEY_CODE.ENTER) {
      this.classList.toggle('catalog__item-card--selected');
    }
  }
})();



// document.querySelectorAll('.packing-block').forEach((packing) => {
//   packing.addEventListener('click', () => { packing.classList.toggle('packing-block--select') });
// });







// (function() {
//   var cardProduct = document.querySelector('.card ');
//   var btnBuy = document.querySelector('.button-buy');

// for (var i = 0; i < cardProduct.length; i++ ) {
//   cardProduct[i].addEventListener('click', onContainerCardClick);
//   cardProduct[i].addEventListener('keydown', onContainerKeyDown);
//   btnBuy[i].addEventListener('click', btnBuyClick);
// }

//   function btnBuyClick(evt) {
//     var element = evt.target.parentNode.previousElementSibling;
//     element.classList.toggle('card--select');
//   }


//   function onContainerCardClick(evt) {
//     this.classList.toggle('card--select');
//   }

//   function onContainerKeyDown(evt) {
//     var KEY_CODE = {
//       TAB: 9,
//       ENTER: 13
//     };

//     if (evt.keyCode === KEY_CODE.TAB) return;
//     if (evt.keyCode === KEY_CODE.ENTER) {
//       this.classList.toggle('card--select');
//     }
//   }


// })();

// let card = document.querySelectorAll('.card')
// document.addEventListener('DOMContentLoaded', function() {
//  card.addEventListener('click', function()  {
//    card.classList.toggle('card--select')
//   })
// })






// document.querySelectorAll('.card').forEach((card) => {
//   card.addEventListener('click', () => { card.classList.toggle('card--select', ) });
// });

  // const elNodes = document.querySelectorAll(".catalog__item-wrapper");
