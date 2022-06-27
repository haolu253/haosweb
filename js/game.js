var character = document.getElementsByClassName('character');

$(document).ready(function () {
    $('.game').on('click', function () {
        if ($('.character').hasClass != 'jump') {
            $('.character').addClass('jump');
        }
        setTimeout(function(){
            $('.character').removeClass('jump');
        },500);
    });
});