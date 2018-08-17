$(document).ready(function () {

   $(window).scroll(function() {
        $('.two').each(function() {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ) {
                $('.inview').addClass('inview-fade');
            } else {
                $('.inview').removeClass('inview-fade');
            }
        }); 
    });
    
});


