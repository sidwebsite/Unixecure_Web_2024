/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/js/represent_lists.js ***!
  \***********************************/
const filterBtn = document.querySelectorAll('.represent-filter-nav > button');
const items = document.querySelectorAll('#representItems > .item');
const itemsArr = [...items];
// left nav type number function
const filterNum = (typrName, el) => {
    let filtered = itemsArr.filter(item => {
        return (item.dataset.type === typrName);
    });
    el.textContent = filtered.length;
}

filterBtn.forEach(btn => {
    const element = btn.querySelector('.num');
    // display nmuber
    filterNum(btn.dataset.filter, element);
    // all total number
    if(btn.dataset.filter === 'all') {element.textContent = items.length};
    // click item filter function
    btn.addEventListener('click', (e) => {
        let filter = e.target.dataset.filter;
        filterBtn.forEach(btn => btn.classList.remove('active'));
        if(e.target) {
            btn.classList.add('active');
        };
        items.forEach(item => {
            const type = item.dataset.type;
            if(filter === type || filter === 'all') {
                return item.classList.replace('hide', 'show'); 
            }
            item.classList.add('hide');
        });
    })
});
/******/ })()
;
//# sourceMappingURL=represent_lists.js.map