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
      $('body').toggleClass('lock');
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



$('.back-to-top').click(function () {
   $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
   let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

   if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back-to-top').addClass('active');
   } else {
      $('.back-to-top').removeClass('active');
   }
});



"use strick"

// ждем загрузку контента, потом срабатывает функция
window.onload = function () {
   // ищем класс параллакс
   const parallax = document.querySelector('.page');

   // добавляем проверку, если есть класс параллакс значит работаем

   if (parallax) {
      // обращение к опред. элементам сайта
      const content = document.querySelector('.header-block__content');
      const item1 = document.querySelector('.images-header-block__item-1');
      const item2 = document.querySelector('.images-header-block__item-2');
      const item3 = document.querySelector('.images-header-block__item-3');
      const item4 = document.querySelector('.images-header-block__item-4');
      const services = document.querySelector('.services__item');
      const services1 = document.querySelector('.item-services-1');
      const services2 = document.querySelector('.item-services-2');
      const services3 = document.querySelector('.item-services-3');

      // коэффециенты, каждый соотв своему паралакс элементу, измен кол-во пикселей, на кот. будет изменять свое положение элемент 
      const forItem1 = 10;
      const forItem2 = 5;
      const forItem3 = 8;
      const forItem4 = 5;
      const forServices = 5;
      const forServices1 = 12;
      const forServices2 = 3;
      const forServices3 = 7;

      // скорость анимации в зав от движения мыши
      const speed = 0.1;

      // начальные значения переменных, котю будут получать некие координаты
      let positionX = 0, positionY = 0;
      let coordXprocent = 0, coordYprocent = 0;

      // функция, кот отвечает за анимацию движений объектов при измен положения курсора мыши
      function setMouseParallaxStyle() {
         // высчитываем положение по оси X и Y
         const distX = coordXprocent - positionX;
         const distY = coordYprocent - positionY;

         positionX = positionX + (distX * speed);
         positionY = positionY + (distY * speed);

         // передаем стили  внуть объекта
         item1.style.cssText = `transform: translate(${positionX / forItem1}%,${positionY / forItem1}%);`;
         item2.style.cssText = `transform: translate(${positionX / forItem2}%,${positionY / forItem2
            }%);`;
         item3.style.cssText = `transform: translate(${positionX / forItem3}%,${positionY / forItem3}%);`;
         item4.style.cssText = `transform: translate(${positionX / forItem4}%,${positionY / forItem4}%);`;
         services.style.cssText = `transform: translate(${positionX / forServices}%,${positionY / forServices}%);`;
         services1.style.cssText = `transform: translate(${positionX / forServices1}%,${positionY / forServices1}%);`;
         services2.style.cssText = `transform: translate(${positionX / forServices2}%,${positionY / forServices2}%);`;
         services3.style.cssText = `transform: translate(${positionX / forServices3}%,${positionY / forServices3}%);`;

         requestAnimationFrame(setMouseParallaxStyle);

      }
      setMouseParallaxStyle();

      // вешаем событие движение мыши на объект parallax
      parallax.addEventListener("mousemove", function (e) {
         // получаем ширины и высоты блока
         const parallaxWidth = parallax.offsetWidth;
         const parallaxHeight = parallax.offsetHeight;

         // когда курсор посередине полноэкранного блока параллакс элементы должны быть в начале своей позиции. от текущего полож. мыши отнимаем ширину высоту / 2
         const coordX = e.pageX - parallaxWidth / 2;
         const coordY = e.pageY - parallaxHeight / 2;

         // получаем проценты 
         coordXprocent = coordX / parallaxWidth * 100;
         coordYprocent = coordY / parallaxHeight * 100;

      });

   }
}
