import '../scss/style.scss';
// navbar
const bars = document.querySelector('#menu-bars');
const barsIcon = bars.querySelector('i');
const navbars = document.querySelector('.navbars');
bars.addEventListener('click', () => {
    navbars.classList.toggle('active');
    if(barsIcon.classList.contains('fa-bars')) {
        barsIcon.classList.remove('fa-bars');
        barsIcon.classList.add('fa-xmark');
    } else {
        barsIcon.classList.remove('fa-xmark');
        barsIcon.classList.add('fa-bars');
    }
});
// phone & ipad
const navMenu = document.querySelector('.navbars');
const mediaSize = 1024;    
function collapseSubMenu() {
    navMenu.querySelector('.menu-item.active .sub-menu').removeAttribute('style');
    navMenu.querySelector('.menu-item.active').classList.remove('active');
};
navMenu.addEventListener('click', (e) => {
    if(e.target.hasAttribute('data-toggle') && window.innerWidth <= mediaSize) {
        const menuItmeHasChildren = e.target.parentElement;
        if(menuItmeHasChildren.classList.contains('active')) {
            collapseSubMenu();
        } else {
            if(navMenu.querySelector('.menu-item.active')) {
                collapseSubMenu();
            };
            menuItmeHasChildren.classList.add('active');
            const subMenu = menuItmeHasChildren.querySelector('.sub-menu');
            subMenu.style.height = subMenu.scrollHeight + 'px';
        };
    };
});
// language
const languageBtn = document.querySelector('#language-nav');
const language = document.querySelector('#language-dropdown');
languageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    language.classList.toggle('show');
});
document.body.addEventListener('click', (e) => {
    if(e.target.matches('#language-nav') === false) {
        language.classList.remove('show');
    }
});
// footer
const year = document.querySelector('.year');
const dateYear = new Date().getFullYear();
year.textContent = dateYear;
// go to top
const backToTopButton = document.querySelector('.gotop');
function scrollFunction(){
    const startPosition = window.pageYOffset;
    if(startPosition > 50) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    };
};
window.addEventListener('scroll', scrollFunction);
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});