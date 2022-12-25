// ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .menu__body').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.menu__body')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.menu__body').toggleClass('active');
   })
})


new Swiper('.clients__slider', {
   slidesPerView: 1,
   autowidth: true,
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev'
   // },
   nested: true,
   speed: 800,
   loop: true,
   pagination: {
      el: '.clients__swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      320: {
         slidesPerView: 1.25,
      },
      368: {
         slidesPerView: 1,
      }
   }

});