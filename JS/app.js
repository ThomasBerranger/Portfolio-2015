
//Gère le magnifique scroll !
$(document).ready(function() {
    $('.scrollTo').click( function() { // Lorsque que l'on clic
        var page = $(this).attr('href'); // Cible un endroit sur la page/un id
        var speed = 1500; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    });
});