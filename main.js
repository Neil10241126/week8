import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// 匯入 swiper 核心跟 分頁、自動播放 js、css
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 'swiper/css/autoplay';

// 初始化 swiper
const swiper = new Swiper('.swiper', {
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