import Swiper from "swiper";

import { Navigation, Autoplay, Scrollbar } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation'; 'swiper/css/autoplay'; 'swiper/css/scrollbar';

// 初始化 swiper
const swiper = new Swiper('#swiper', {
  // 套用模組
  modules: [Navigation, Autoplay],
  speed: 700,
  autoplay: {
    delay: 1500,
  },
  navigation: {
    nextEl: '.swipter-next',
    prevEl: '.swipter-prev',
  },
});



const swiperUser = new Swiper('#swiperUser', {
  // configure Swiper to use modules
  modules: [Scrollbar],
  loop: false,
  direction: "vertical",
  slidesPerView: "auto",
  noSwiping: true,
  breakpoints: {
    992: {
      direction: "horizontal",
      noSwiping: false,
      spaceBetween: 24,
      slidesPerView: 3,
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  mousewheel: {
    invert: true,
  }
});

const swiperProduct = new Swiper('.swiper-product', {
  // 套用模組
  modules: [Navigation, Autoplay],
  speed: 700,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-pre',
  },
});