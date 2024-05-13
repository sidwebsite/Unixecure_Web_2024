// vue
let app = Vue.createApp({
    data() {
        return {
            banner: '',
        };
    },
    mounted() {
        axios.get('../jsons/banner.json')
        .then(response => (this.banner = response.data))
        .catch(function(error) {
            console.log(error);
        });
    }
});
app.mount("#app");
// Swiper
import Swiper from "swiper/bundle";

var swiper = new Swiper(".bannerSwiper", {
    lazy: true,
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
});

// counting
let started = false;
function countersFun() {
    const counters = document.querySelectorAll(".animate-number");
    let interval = 2000;
    counters.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-target"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
}
// counting
const counting = document.querySelector(".counting");
window.addEventListener("scroll", () => {
    let winScrollY = window.scrollY;
    let countingOffsetTop = counting.offsetTop;
    if (winScrollY >= countingOffsetTop) {
        if (!started) {
            countersFun();
        }
        started = true;
    }
});
// parallax scrolling
const hexagonRight = document.querySelector(".hexagon-bg-right"),
    hexagonLeft = document.querySelector(".hexagon-bg-left");
const parallax = () => {
    let value = window.scrollY;
    hexagonRight.style.top = `${value * 0.5 - 155}px`;
    hexagonLeft.style.bottom = `-${value * 0.5 + 145}px`;
};
window.addEventListener("scroll", parallax);
