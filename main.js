
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    // tener el scroll del doc
    if(currentScroll > 0){
        window.scrollTo(0, 0);
       //mover en Y
    }
}

///

buttonUp = document.getElementById("button-up");
window.onscroll = function(){
    //detectar la pos del scroll
    var scroll = document.documentElement.scrollTop;

    if (scroll > 200){
        buttonUp.style.transform = "scale(1)";
        //desaparece al principio pero no cuando vuelve aa pulsar
    }else if (scroll < 200){
        buttonUp.style.transform = "scale(0)";
    }
}
