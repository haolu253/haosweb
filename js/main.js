let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function () {
    $('body').css('overflow', 'hidden');
    $('.load-animation').addClass('load-rotate');
    setTimeout(function () {
        $('.load-animation').addClass('d-none');
    }, 1501);
    setTimeout(function () {
        $('.load-background .main-color-2').addClass('load-left');
        $('.load-background .main-color-1').addClass('load-right');
    }, 1501);
    setTimeout(function () {
        $('.load-background').addClass('d-none');
        $('body').css('overflow', 'unset');
    }, 2501);

    $('.svg-menu').on('click', function () {
        $('.svg-menu').addClass('menu-rotate');
        $('.header-nav-menu').addClass('open-menu').removeClass('d-none');
        $('.menu-title').addClass('d-none');
        $('.close-title').removeClass('d-none');
        setTimeout(function () {
            $('.svg-menu').addClass('d-none').removeClass('menu-rotate');
            $('.svg-close').removeClass('d-none');
        }, 400);
        setTimeout(function () {
            $('.header-nav-menu').css('width', '280px');
        }, 1000);
    });

    $('.svg-close').on('click', function () {
        $('.svg-close').addClass('menu-rotate-revert');
        $('.menu-title').removeClass('d-none');
        $('.close-title').addClass('d-none');
        $('.header-nav-menu').addClass('d-none').removeClass('open-menu').css('width', '0');
        setTimeout(function () {
            $('.svg-close').addClass('d-none').removeClass('menu-rotate-revert');
            $('.svg-menu').removeClass('d-none');
        }, 400);
    });
})