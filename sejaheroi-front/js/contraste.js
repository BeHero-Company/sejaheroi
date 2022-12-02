document.addEventListener("DOMContentLoaded", function(){

    let url1 = "css/style.css"
    let url2 = "../css/contraste.css"
    let contraste = document.getElementById("contraste")
    let semcontraste = document.getElementById("semcontraste")

    function createTag(url){
        let estilo = document.createElement("link")
        estilo.href = url
        estilo.rel = "stylesheet"
        estilo.type = "text/css"
        estilo.className = "acess"
        
        document.body.appendChild(estilo)
    }

    let tag = document.getElementsByClassName("acess") //<link  href=url rel="stylesheet" type="text/css">

    contraste.onclick = function(){
        tag[0].href = url2
        localStorage.setItem("css", url2)
    }

    semcontraste.onclick = function(){
        tag[0].href = url1
        localStorage.setItem("css", url1)
    }

    let css = localStorage.getItem("css")

    if(!css){
        createTag(url1)
    }else{
        createTag(css)
    }
})

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