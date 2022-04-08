$(document).ready(function(){
    $('#slider').slick({
        slidesToShow:2,
        slidesToScroll:2,
        autoplay: true,
        prevArrow: "<button id='prev' style='font-size:20px; background-color: green; color:white;'>Previo</button>",
        nextArrow: "<button id='next' style='font-size:20px; background-color: green; color:white;'>Next</button>",
        responsive:[
            {
                breakpoint : 700,
                settings:{
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll:1,
                    speed: 1500,
                    arrows:false
                }
            }
        ]
    });
});

