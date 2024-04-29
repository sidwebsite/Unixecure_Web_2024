// tabs
const tabsNav = document.querySelectorAll('.tabs-nav button');
const tabPane = document.querySelectorAll('.tab-pane');
const delay = 5000;
let counter = 0;
function tabsAutoPlay() {
    counter++;
    tabsNav.forEach(btn =>{
        btn.classList.remove('active');
    });
    tabPane.forEach(pane => {
        pane.classList.remove('show', 'active');
    });
    if(counter === tabsNav.length) counter = 0;
    tabsNav[counter].classList.add('active');
    tabPane[counter].classList.add('show', 'active');
};
const intervalId = setInterval(tabsAutoPlay, delay);

tabsNav.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        // stop play
        clearInterval(intervalId);
        tabsNav.forEach(btn =>{
            btn.classList.remove('active');
        });
        tabPane.forEach(pane => {
            pane.classList.remove('show', 'active');
        });
        if(e.target) {
            btn.classList.add('active');
            if(e.target.dataset.target === tabPane[index].getAttribute('id')) {
                tabPane[index].classList.add('show', 'active');
            }
        }
    })
});

// Swiper
import Swiper from "swiper/bundle";

var swiper = new Swiper(".albumSwiper", {
    lazy: true,
    loop:true,
    slidesPerView: 1.3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});
