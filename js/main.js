$(document).ready(function () {
    $('.menu-item').on('mouseenter', function () {
        var hoverEff = $(this).find('.menu-hover');
        hoverEff.addClass('hover-eff').removeClass('hover-noeff').css('height', '100%');
    });

    $('.menu-item').on('mouseleave', function () {
        var hoverEff = $(this).find('.menu-hover');
        hoverEff.removeClass('hover-eff').addClass('hover-noeff').css('height', '0%');
    });

    $('.float-menu').on('click', function () {
        if($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $('.small-menu').removeClass('is-active')
        } else {
            $(this).addClass('is-active');
            $('.small-menu').addClass('is-active')
        }
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
})

