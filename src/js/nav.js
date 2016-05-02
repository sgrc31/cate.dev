$(document).ready(function () {
    $(".nav__trigger").click(function(){
        $(".nav").slideToggle();
    });
});

/*
preso dal sito agrinativa, era un fadeIn su scroll per la navigazione

$(document).ready(function(){                    
    $(window).scroll(function(){                          
        if ($(this).scrollTop() > 200) {
            $('.filledNav').fadeIn(500);
        } else {
            $('.filledNav').fadeOut(500);
        }
    });
});

*/

/* Altro esempio preso da http://stackoverflow.com/questions/14496240/how-can-i-stick-the-div-after-scrolling-down-a-little

$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('#stickyheader').offset().top;

        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('#stickyheader').css({position: 'fixed', top: '0px'});
                        $('#stickyalias').css('display', 'block');
                } else {
                        $('#stickyheader').css({position: 'static', top: '0px'});
                        $('#stickyalias').css('display', 'none');
                }
        });
  });
*/



//Dall'esempio precedente, vediamo se risco a fara la navigazione

$(document).ready(function(){

    //registro posizione iniziale della navigazione
    var stickyHeaderTop = $('.nav__container').offset().top;

    //eseguo lo script solo sul desktop, per non sminchiarmi la navigazione sul mobile
    if( $(window).width() >= 980 ) { 

    $(window).scroll(function() {
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('.nav__container').css({position: 'fixed', top: '0px', left: '0px', margin: '0 0 55px 0'});
            $('.nav__container').addClass('nav__container--shadowed');
            $('.img__photo').first().css({margin: '55px auto 45px auto'});
        } else {
            $('.nav__container').css({position: 'static', top: '0px'});
            $('.nav__container').removeClass('nav__container--shadowed');
        }
    });
    };
});
    
