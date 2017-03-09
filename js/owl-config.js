'use strict';

// Настройки слайдера

jQuery('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
    dotsSpeed: 200,
    animateOut: 'fadeOut',
    smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyLoad: true
});