let p = "";
$(document).ready(function(){
    
    $('#setGreenColor').hover(cambiarVerde);
    $('#setRedColor').click(cambiarRojo);
    $('#toggleVisible').mouseleave(visibleSiNo);
    $('#decSize').click(decremento);
    $('#movContinuo').click(movimientoContinuo);
    $('#addDiv').click(creaDiv);
    $('#addSpan').click(creaSpan);
    $('#addSetContent').click(creaSetContent);
    $('#addDelNodePrev').click(delNode);
    
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
        if(mover === "d"){
            derecha();
        }else{
            izquierda();
        }
        n =1;
    }else{
        stp();
    }
}

let mover ="";
function derecha(){
    n=1;
    let ancho = $(window).width() - $('#divTarget').width(); 
    $('#divTarget').animate(
        {left: ancho
           },
        {duration:2000,
         progress: mover = "d",   //start: n=0  
        complete: izquierda
        }
    ) 
}

function izquierda(){
    $('#divTarget').animate(
        {left: 0},
        {duration:2000,
            progress: mover = "i",
        complete: derecha
        }
    ) 
}

function stp(){
    $('#divTarget').stop();
    n = 0;
}

let contadorDiv = 0;
function creaDiv(){
    if(contadorDiv == 0){ 
        let text = $('#text').val();
       
        let miDiv= $(`<div>${text}</div>`);
        miDiv.addClass('addDiv');
        $('#domNodes').append(miDiv);
        contadorDiv++;
    }
}


let contadorSpan = 0
function creaSpan(){
    if(contadorSpan == 0){ 
        let text = $('#text').val();       
        let miSpan= $(`<span>${text}</span>`);
        miSpan.addClass('addSpan');
        $('#domNodes').append(miSpan);
        contadorSpan++;
    }
}

let nDivs=0;
function creaSetContent(){
    nDivs++;
    //let textoEscrito = $('#text').val();
    let text = "SET CONTENT";
    let miSet= $(`<div>${text}</div>`);
    miSet.addClass('setContent');
    $('#domNodes').append(miSet);

    $('.setContent').on('click',function(){
        if($(this).prev().hasClass('setContent')){
            let text = $('#text').val();
            let previo = $(this).prev()
            //alert(previo.text())
            previo.text(text);
        };
    });
}

function delNode(){
    let text = "DEL NODE PREV";
    let miNode= $(`<div>${text}</div>`);
    miNode.addClass('delNode');
    $('#domNodes').append(miNode);

    $('.delNode').on('click',function(){
        if($(this).prev().hasClass('delNode') || $(this).prev().hasClass('setContent')){
            
            let previo = $(this).prev()
            previo.remove()
            
        };
    });
}