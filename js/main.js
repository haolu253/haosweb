$(document).ready(function () {
    $('.load-animation').addClass('load-rotate');
    setTimeout(function () {
        $('.load-animation').addClass('d-none');
    }, 1001);
    setTimeout(function () {
        $('.load-background .red').addClass('load-left');
        $('.load-background .purple').addClass('load-right');
    }, 1001);
    setTimeout(function () {
        $('.load-background').addClass('d-none');
    }, 2001);
})