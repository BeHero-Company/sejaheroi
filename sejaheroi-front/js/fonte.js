//$(document).ready(function(){
//    let titleSize = 20
//    let textSize = 16

//    $("#increase").click(function(){
//        if(titleSize < 28){
//            $("#text h1").css({"font-size": ++titleSize + "px"})
//        }
//        if(textSize < 24){
//            $("body").css({"font-size": ++textSize + "px"})
//        }
//    })
    
//    $("#decrease").click(function(){
//        if(titleSize > 12){
//            $("#text h1").css({"font-size": --titleSize + "px"})
//        }
//        if(textSize > 8){
//            $("body").css({"font-size": --textSize + "px"})
//        }
//    })
//})

// let increase = document.getElementById('increase');
// let decrease = document.getElementById('decrease');
// let main = document.querySelector('main');

// let getfontsize = (el) => {
//  let size = window.getComputedStyle(el, null)
//                   .getPropertyValue('font-size');
//  return parseFloat(size);
//}

//increase.addEventListener('click', () => {
//  main.style.fontSize = (getfontsize(main) + 1) + 'px';
//})

//decrease.addEventListener('click', () => {
//  main.style.fontSize = (getfontsize(main) - 1) + 'px';
//})

window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}