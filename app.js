document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 900)
})

gsap.ticker.lagSmoothing(0)

const sliderImgs = ["landing1.jpg", "landing2.jpg", "landing3.jpg", "landing4.jpg", "landing5.jpg", "landing6.jpg"];
let sliderImage = document.querySelector('.background-image');

let currentImage = 0;

setInterval(changeSliderImage, 5000);

function changeSliderImage() {
    sliderImage.style.opacity = 0; // Плавно делаем изображение невидимым

    setTimeout(() => {
        if (currentImage >= sliderImgs.length - 1) {
            currentImage = 0;
        } else {
            currentImage++;
        }

        sliderImage.src = `img/${sliderImgs[currentImage]}`;

        // Задаем таймер для плавного показа изображения после загрузки
        setTimeout(() => {
            sliderImage.style.opacity = 1;
        }, 100);
    }, 500); // Дополнительная задержка для плавного перехода
}

var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };
    init();
  }();

  document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav__list-item a');
  
    // Обработчик события клика на ссылки навигации
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Отмена стандартного действия ссылки
        var targetId = this.getAttribute('href'); // Получаем ID целевой секции
        var currentActive = document.querySelector('.nav__list-item.active-nav'); // Находим текущий активный элемент навигации
  
        if (currentActive) {
          currentActive.classList.remove('active-nav');
        }
  
        this.parentElement.classList.add('active-nav');
      });
    });
  });

  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
  });