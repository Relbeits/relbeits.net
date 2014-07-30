var blinker = function({
    $('.loading').fadeOut(500);
    $('.loading').fadeIn(500);
});

setInterval(blinker, 1000);

var vanish = function(){
    $(document).ready( function(){
        $('.intro').animate({
            top: '-100%'
        }, 4000);
        $('.body').animate({
            left: '-100%'
        }, 4000);
    });

$(document).ready(vanish);