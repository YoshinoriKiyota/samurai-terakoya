$(function(){
    $('.point_bar').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass('slide_left');
        }
    });
    
    $('.point_bar').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass('slide_right');
        }
    });
});