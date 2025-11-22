const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'slide',
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // start autoplay
  autoplay: {
    delay: 5000,
  },

});


document.querySelectorAll('.swiper-slide').forEach(slide => {
  slide.style.cursor = 'pointer';  // optional: shows pointer cursor on hover

  slide.addEventListener('click', () => {
    swiper.slideNext();
  });
});