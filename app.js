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
  

    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute('href'); 
        var currentActive = document.querySelector('.nav__list-item.active-nav'); 
  
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