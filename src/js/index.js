// Swiper
import Swiper from "swiper/bundle";

var swiper = new Swiper(".bannerSwiper", {
    lazy: true,
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    }
});
