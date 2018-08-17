$(document).ready(function () {

//////////// Button Function ////////////
    
    $('#buttonshowroom').click(function() {
        $('img').toggleClass('grayscale');
        $('body').toggleClass('background-gray');
        $('#buttonshowroom').toggleClass('buttonred');
        $('.topnav').toggleClass('logowhite');
        $('.container-img a').children('img').toggleClass('grid-two');
        $('.data-hidden').toggle();
        $('.description').toggle();
    });
    
    $('a img').click(function() {
        $('img').removeClass('grayscale');
        $('body').removeClass('background-gray');
        $('#buttonshowroom').removeClass('buttonred');
        $('.topnav').removeClass('logowhite');
        $('.container-img a').children('img').removeClass('grid-two');
        $('.data-hidden').hide();
        $('.description').show();
    })
    
    $('#buttongrid').click(function() {
        $('#buttongrid').toggleClass('buttonred');
        $('.container-img').children('img').toggleClass('grid-two');
    });
    
//////////// Scroll Img FadeIn Inview ////////////
    
/*  
   $(window).scroll(function() {
        $('.container-img').children('img').each(function(i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ) {
                $(this).addClass('inview-fade');
            } else {
                $(this).removeClass('inview-fade');
            }
        }); 
    }).scroll();
*/    
    
    
});


