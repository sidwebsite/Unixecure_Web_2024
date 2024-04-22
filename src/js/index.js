// Swiper
import Swiper from "swiper/bundle";

var swiper = new Swiper(".bannerSwiper", {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});
