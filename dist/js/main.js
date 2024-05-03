/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");

// cookies
const cookiesBox = document.querySelector('.cookies-box'),
acceptBtn = document.querySelector(".consentButton"),
rejectBtn = document.querySelector(".rejectButton"); 

acceptBtn.addEventListener('click', () => {
    document.cookie = "CookieBy=GeeksForGeeks; max-age="+ 60 * 60 * 24; 
    if(document.cookie) {
        cookiesBox.classList.add('d-none');
    } else {
        alert('無法設定cookie！ 請從您瀏覽器的 cookie 設定中取消封鎖該網站。');
    }
});
rejectBtn.addEventListener('click', () => {
    alert('Cookie 被拒絕。某些功能可能會受到限制。');
    cookiesBox.classList.add('d-none');
});

let checkCookie = document.cookie.indexOf("CookieBy=GeeksForGeeks"); 
checkCookie !== -1 ? cookiesBox.classList.add('d-none') : cookiesBox.classList.remove('d-none');
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
})();

/******/ })()
;
//# sourceMappingURL=main.js.map