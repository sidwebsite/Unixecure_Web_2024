const ulTag = document.querySelector('.pagination > ul');
const totalPages = 10;
const initPages = 1;

const pagination = (totalPages, page) => {
    let liTag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;

    if(page > 1) {
        liTag += `<li class="prev" onclick="pagination(totalPages, ${page - 1})"><span><i class="fa-solid fa-chevron-left"></i></span></li>`
    }
    if(page > 2) {
        liTag += `<li class="numb" onclick="pagination(totalPages, 1)"><span>1</span></li>`;
        if(page > 3) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    };
    if(totalPages >= 6 ) {
        if(page === totalPages) {
            beforePages -= 2;
        } else if(page === totalPages -1) {
            beforePages -= 1;
        }

        if(page === 1) {
            afterPages += 2; 
        } else if(page === 2) {
            afterPages += 1;
        }
    }
    
    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if(pageLength > totalPages) {
            continue;
        }
        if(pageLength === 0) {
            pageLength += 1;
        }
        if(page === pageLength) {
            activeLi = 'active';
        } else {
            activeLi = '';
        }
        liTag += `<li class="numb ${activeLi}" onclick="pagination(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }
    if(page < totalPages - 1) {
        if(page < totalPages - 2) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb" onclick="pagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;        
    }

    if(page < totalPages) {
        liTag += `<li class="next" onclick="pagination(totalPages, ${page + 1})"><span><i class="fa-solid fa-chevron-right"></span></li>`;
    }
    ulTag.innerHTML = liTag;
}
pagination(totalPages, initPages);