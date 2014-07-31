function blink() {
    $('.loading').fadeToggle('slow', function () {
        // Done.
    });
}

setInterval(blink, 500);

$(document).ready( function(){
        $('.intro').animate({
            top: '-100%'
        },4000);
      
        $('.body').animate({
            top: '-100%'
        },4000);
    });
