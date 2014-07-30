function blink() {
    $('.loading').fadeToggle('slow', function () {
        // Done.
    });
}

setInterval(blink, 500);
