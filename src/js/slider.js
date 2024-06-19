import Swiper from 'swiper';

import 'swiper/swiper.css';

function getDirection() {
  let windowWidth = window.innerWidth;
  let direction = windowWidth <= 767 ? 'horizontal' : 'vertical';

  console.log(direction);
  return direction;
}

const swiperPillars = new Swiper('.swiper__pillars', {
  speed: 700,
  spaceBetween: 40,
});

const swiperJourney = new Swiper('.swiper__journey', {
  speed: 700,
  spaceBetween: 40,
});

const swiperHills = new Swiper('.swiper__hills', {
  direction: getDirection(),
  speed: 700,
  spaceBetween: 0,
});

const swiperTeam = new Swiper('.swiper__team', {
  speed: 700,
  spaceBetween: 40,
});
