$('.home-section-show').on('click', function () {
  $('.section').addClass('section-fade');
  setTimeout(() => {
    $('.section').addClass('hidden-section').removeClass('show-section section-fade');
    $('.home-section').addClass('show-section').removeClass('hidden-section section-fade');
  }, 300);
})

$('.about-section-show').on('click', function () {
  $('.section').addClass('section-fade');
  setTimeout(() => {
    $('.section').addClass('hidden-section').removeClass('show-section section-fade');
    $('.about-section').addClass('show-section').removeClass('hidden-section section-fade');
  }, 300);
})

$('.projects-section-show').on('click', function () {
  $('.section').addClass('section-fade');
  setTimeout(() => {
    $('.section').addClass('hidden-section').removeClass('show-section section-fade');
    $('.projects-section').addClass('show-section').removeClass('hidden-section section-fade');
  }, 300);
})

$('.contact-section-show').on('click', function () {
  $('.section').addClass('section-fade');
  setTimeout(() => {
    $('.section').addClass('hidden-section').removeClass('show-section section-fade');
    $('.contact-section').addClass('show-section').removeClass('hidden-section section-fade');
  }, 300);
})