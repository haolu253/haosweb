$(document).ready(function () {
    $('.menu-item').on('mouseenter', function () {
        var hoverEff = $(this).find('.menu-hover');
        hoverEff.addClass('hover-eff').removeClass('hover-noeff').css('height', '100%');
    });

    $('.menu-item').on('mouseleave', function () {
        var hoverEff = $(this).find('.menu-hover');
        hoverEff.removeClass('hover-eff').addClass('hover-noeff').css('height', '0%');
    });
})