let p = "";
$(document).ready(function(){
    
    $('#setGreenColor').hover(cambiarVerde);
    $('#setRedColor').click(cambiarRojo);
    $('#toggleVisible').mouseleave(visibleSiNo);
    $('#decSize').click(decremento);
    $('#movContinuo').click(movimientoContinuo);
    //$('.mover').click(parar);
    
});

function cambiarVerde(color){
    $('#divTarget').css('background-color','green');
}

function cambiarRojo(){
    $('#divTarget').css('background-color','red');
}

function visibleSiNo(){
    $('#divTarget').toggle();
}

function decremento() {
    $('#divTarget').animate(
        {
            height: '-=50',
            width: '-=100'           
        },{
            duration: 1500
        }
    );
}



let n;
function movimientoContinuo(){
    if(n==0){
        derecha();
        n =1;
    }else{
        stp();
    }
}

function derecha(){
    n=1;
    let ancho = $(window).width() - $('#divTarget').width(); 
    $('#divTarget').animate(
        {left: ancho},
        {duration:2000,
            //start: n=0  
        complete: izquierda
        }
    ) 
}

function izquierda(){
    $('#divTarget').animate(
        {left: 0},
        {duration:2000,
        complete: derecha
        }
    ) 
}

function stp(){
    $('#divTarget').stop();
    n = 0;
}