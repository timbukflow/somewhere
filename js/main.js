$(document).ready(function () {

   $(window).scroll(function() {
        $('img').each(function(i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ) {
                $(this).addClass('inview-fade');
            } else {
                $(this).removeClass('inview-fade');
            }
        }); 
    }).scroll();
    
    $('.button').click(function() {
        $('img').toggleClass('grayscale')
        $('body').toggleClass('black')
        $('.button').toggleClass('button-white')
        $('img').toggleClass('grid-two')
    })
    
});


