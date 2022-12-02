$(document).ready(function () {
    $('.menu-item').on('mouseenter', function () {
        var hoverEff = $(this).find('.menu-hover');
        hoverEff.addClass('hover-eff').css('height', '100%');
    });

    $('.menu-item').on('mouseleave', function () {
        var hoverEff = $(this).find('.menu-hover');
        hoverEff.removeClass('hover-eff').css('height', '0%');
    });
})