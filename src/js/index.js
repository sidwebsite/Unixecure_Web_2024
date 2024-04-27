// Swiper
import Swiper from "swiper/bundle";

var swiper = new Swiper(".bannerSwiper", {
    lazy: true,
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    }
});
