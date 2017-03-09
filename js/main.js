'use strict';

// Создаём таймер
// Таймер возвращает промис
// Если время выходит до загрузки шрифта, то происходит событие reject

function timer(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(reject, time);
  });
}

// Определяем шрифты
var Garamond = new FontFaceObserver('EB Garamond');
var FuturaBook = new FontFaceObserver('Futura Book');
var FuturaMedium = new FontFaceObserver('Futura Medium');

// Определяем переменную с объектом документа
var html = document.documentElement;
// Добавляем к документу класс fonts-loadins
html.classList.add('fonts-loading');

// Загружаем группу шрифтов,
// если это занимает меньше 1 секунды
Promise.race([
// Promise.race возвращает resolve или reject в
// зависимости от того, что происхойдёт первым
timer(1000), // Запускаем таймер, по окончанию происходит reject
Garamond.load(), FuturaBook.load(), FuturaMedium.load()]).then(function () {
  // Ловим resolve
  console.log('Шрифты загружены меньше, чем за 1 секунду');
  html.classList.remove('fonts-loading');
  html.classList.add('fonts-loaded');
}).catch(function () {
  // Ловим reject
  console.log('Загрузка шрифтов занимает больше 1 секунды. Не будем их грузить.');
  html.classList.remove('fonts-loading');
  html.classList.add('fonts-failed');
});

// Анимаия кнопки бронирования стола
jQuery('#bookTheTable').hover(function () {
  jQuery(this).removeClass('bookTheTableHoverOut');
  jQuery(this).addClass('bookTheTableHover');
}, function () {
  jQuery(this).removeClass('bookTheTableHover');
  jQuery(this).addClass('bookTheTableHoverOut');
});

// Мягкий скроллинг для якорных ссылок
jQuery(function () {
  jQuery('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Появление кнопки ЗАБРОНИРОВАТЬ СТОЛ на боковом меню
// при скролле главной страницы

// Функция появления кнопки
var makeButtonVisible = function makeButtonVisible(buttonSelector) {
  jQuery(buttonSelector).removeClass('bookTheTableOnNav_invisible');
  jQuery(buttonSelector).addClass('bookTheTableOnNav_visible');
};
// Функция скрытия кнопки
var makeButtonInvisible = function makeButtonInvisible(buttonSelector) {
  jQuery(buttonSelector).removeClass('bookTheTableOnNav_visible');
  jQuery(buttonSelector).addClass('bookTheTableOnNav_invisible');
};

var screenBreakpoints = [1600, 1200, 900, 600];
var appearBreakpoints = [425, 375, 300, 250];

if (jQuery('bookTheTableOnNav').hasClass() !== 'bookTheTableOnNav_alwaysVisible') {
  jQuery(window).scroll(function () {
    for (var i = 0; i < screenBreakpoints.length; i++) {
      if (jQuery(this).width() > screenBreakpoints[i]) {
        if (jQuery(this).scrollTop() > appearBreakpoints[i]) {
          makeButtonVisible('#bookTheTableOnNav');
        } else {
          makeButtonInvisible('#bookTheTableOnNav');
        }
      }
    }
  });
}

// Состояние меню навигации с гамбургером (true - гамбургер и лого, false - полное меню)
var hamburgerMenu = true;
// Состояние гамбургер скрыт, только лого (true - только лого, false - гамбургер и лого)
var noHamburgerMenu = false;

// Функция сворачивает или разворачивает меню до логотипа и гамбургера
var toggleHamburgerMenu = function toggleHamburgerMenu() {
  var selectorsToToggle = [// Для этих селектором меняется display
  '.main-nav-container__nav', // Контейнер со ссылками навигации
  '#bookTheTableOnNav', // Кнопка бронирования
  '#toggleMobileNav__hamburger', // Гамбургер (изначально скрыта)
  '#toggleMobileNav__line'];
  for (var i = 0; i < selectorsToToggle.length; i++) {
    jQuery(selectorsToToggle[i]).toggleClass('hidden'); // Тоггл класса hidden для всех селекторов в массиве
  }
  jQuery('.main-nav-container').toggleClass('main-nav-container_closed-with-hamburger');
  jQuery('.news-header-nav-mobile').removeClass('news-header-nav-mobile_hide');
};
// Функция адаптирует блок контента под меню с гамбургером
var contentToFitHamburger = function contentToFitHamburger() {
  jQuery('.main-content-wrapper').toggleClass('main-content-wrapper-fixed-hamburger');
  jQuery('.content-wrapper').toggleClass('content-wrapper-fixed-hamburger');
};
// Функция сворачиваем или разворачиваем меню до лого и адаптирует блок контента
var toogleNoHamburgerMenu = function toogleNoHamburgerMenu() {
  var seletorsToToggle = ['#toggleMobileNav', '.main-nav-container', '.main-content-wrapper', '.main-nav-container', '.main-content-wrapper', '.main-nav-container__logo', '.logo-and-nav-wrapper', '.content-wrapper', '.content-wrapper', '.menu-nav-mobile-wrapper'];
  var classesToToggle = ['hidden', 'main-nav-container_closed-with-hamburger', 'main-content-wrapper-fixed-hamburger', 'main-nav-container_closed-no-hamburger', 'main-content-wrapper-no-hamburger', 'main-nav-container__logo_small', 'logo-and-nav-wrapper_small', 'content-wrapper-fixed-hamburger', 'content-wrapper-no-hamburger', 'menu-nav-mobile-wrapper-no-hamburger'];
  // Анимация логотипа
  if (jQuery('.main-nav-container__logo').hasClass('main-nav-container__logo_small') == false) {
    jQuery('.main-nav-container__logo').animate({ width: "100px" }, { duration: 250 });
  } else {
    jQuery('.main-nav-container__logo').animate({ width: "168px" }, { duration: 250 });
  }
  // Тоггл классов
  for (var i = 0; i < seletorsToToggle.length; i++) {
    jQuery(seletorsToToggle[i]).toggleClass(classesToToggle[i]);
  }
  jQuery('.news-header-nav-mobile').removeClass('news-header-nav-mobile_hide');
  if (jQuery('.content-wrapper').hasClass('content-wrapper-menu-fixed-hamburger') == true || jQuery('.content-wrapper').hasClass('content-wrapper-menu-no-hamburger') == true) {
    jQuery('.content-wrapper').removeClass('content-wrapper-fixed-hamburger');
    jQuery('.content-wrapper').removeClass('content-wrapper-no-hamburger');
    jQuery('.content-wrapper').toggleClass('content-wrapper-menu-fixed-hamburger');
    jQuery('.content-wrapper').toggleClass('content-wrapper-menu-no-hamburger');
  }
};

jQuery(document).ready(function () {
  if (jQuery(this).width() < 600) {

    // Поведение при клике на гамбургер или полоску

    jQuery('#toggleMobileNav').click(function () {
      toggleHamburgerMenu(); // Функция сворачивает/разворачивает меню до логотипа и гамбургера
      contentToFitHamburger(); // Функция адаптирует блок контента под меню с гамбургером
      jQuery('.news-header-nav-mobile').toggleClass('news-header-nav-mobile_hide');
      if (hamburgerMenu == false) {
        hamburgerMenu = true;
      } else {
        hamburgerMenu = false;
      }
    });

    // Поведение при скролле на раскрытом меню навигации

    jQuery(window).scroll(function () {
      if (hamburgerMenu == false) {
        if (jQuery(window).scrollTop() > 10) {
          toggleHamburgerMenu(); // Функция сворачивает/разворачивает меню до логотипа и гамбургера
          contentToFitHamburger(); // Функция адаптирует блок контента под меню с гамбургером
          // Меню скрыто
          hamburgerMenu = true;
        }
      }
    });

    // Поведение при скролле контента

    jQuery(window).scroll(function () {
      if (hamburgerMenu == true) {
        // Скрывать гамбургер при скролле вниз > 300
        if (jQuery(this).scrollTop() > 50 && noHamburgerMenu == false) {
          toogleNoHamburgerMenu();
          jQuery('.news-header-nav-mobile').css('margin-top', 0);
          noHamburgerMenu = true;
        }
        // Скрывать гамбургер при скролле вверх < 0.01
        if (jQuery(this).scrollTop() < 0.1 && noHamburgerMenu == true) {
          toogleNoHamburgerMenu();
          jQuery('.news-header-nav-mobile').css('margin-top', '1.5rem');
          noHamburgerMenu = false;
        }
      }
    });

    // Поведение при клике на ссылку "О проекте"

    jQuery('#history-link').click(function () {
      jQuery('.main-content-wrapper').animate({
        scrollTop: jQuery('#history').offset().top
      }, 300);
    });

    // Поведение при клике на лого в noHamburgerMenu

    jQuery('#show-hamburger').click(function (event) {
      if (noHamburgerMenu == true) {
        event.preventDefault();
        toogleNoHamburgerMenu();
        jQuery('.news-header-nav-mobile').css('margin-top', '1.5rem');
        noHamburgerMenu = false;
      }
    });

    // Скрывать гамбургер при клике по блоку контента

    jQuery('.main-content-wrapper').click(function () {
      if (jQuery(this).scrollTop() > 100 && noHamburgerMenu == false) {
        toogleNoHamburgerMenu();
        jQuery('.news-header-nav-mobile').css('margin-top', 0);
        noHamburgerMenu = true;
      }
    });
  }
});