new fullpage('#fullpage', {
    autoScrolling: true,
    dragAndMove: true,
    fitToSection: true,
    // Navigation bar custom
    navigation: true,
    navigationPosition: 'left',
    responsiveSlides: true,
    afterRender: function () {
        $('video').get(0).play();
    }
})