const slider = document.querySelector('.slider');
const items = slider.querySelectorAll('.list .item');
const next = slider.querySelector('#next');
const prev = slider.querySelector('#prev');

let countItem = items.length;
let itemActive = 0;
let refreshInterval;

const nextSlide = () => {
  itemActive = (itemActive + 1) % countItem;
  showSlider();
};

const prevSlide = () => {
  itemActive = (itemActive - 1 + countItem) % countItem;
  showSlider();
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// показ активного слайда
const showSlider = () => {
  const itemActiveOld = slider.querySelector('.list .item.active');
  itemActiveOld.classList.remove('active');
  items[itemActive].classList.add('active');
};

refreshInterval = setInterval(nextSlide, 6000);