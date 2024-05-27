/*-- PRELOADER --*/
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loading");
  
    const scrollBlocker = document.createElement('div');
    scrollBlocker.classList.add('scroll-blocker');
    document.body.appendChild(scrollBlocker);
  
    setTimeout(function () {
      document.body.classList.remove("loading");

      fadeOut(document.querySelector('.preloader'), 500); // 
  
      document.body.removeChild(scrollBlocker);
    }, 1000); 
  });
  
  function fadeOut(element, duration) {
    element.style.transition = `opacity ${duration / 1000}s ease-out`;
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  }