const pageBtn = document.querySelectorAll('.fa-circle');
const slideAll = document.querySelectorAll('.slide-container');
const slide = document.querySelector('.slide-container');
const container = document.querySelectorAll('.container');

let pos = 0;

let pass = setInterval(_ => {
    slideAll[pos].classList.remove('activity');
    pageBtn[pos].classList.remove('toggle');
    pos = (pos + 1) % slideAll.length;
    slideAll[pos].className += ' activity';
    pageBtn[pos].className += ' toggle';
}, 4000)

function slideOne() {
    for (let i = 0; i < slideAll.length; i++) {
        slideAll[i].classList.remove('activity');
        pageBtn[i].classList.remove('toggle');
    }
    pageBtn[0].removeEventListener('click', slideOne);
    pageBtn[1].addEventListener('click', slideTwo);
    pageBtn[2].addEventListener('click', slideThree);
    pageBtn[3].addEventListener('click', slideFour);
    if (slideAll[0].classList[1] !== 'activity') {
        slideAll[0].className += " activity";
        pageBtn[0].className += " toggle";
    }
    clearInterval(pass);
}

function slideTwo() {
    for (let i = 0; i < slideAll.length; i++) {
        slideAll[i].classList.remove('activity');
        pageBtn[i].classList.remove('toggle');
    }
    pageBtn[1].removeEventListener('click', slideTwo);
    pageBtn[0].addEventListener('click', slideOne);
    pageBtn[2].addEventListener('click', slideThree);
    pageBtn[3].addEventListener('click', slideFour);
    if (slideAll[1].classList[1] !== 'activity') {
        slideAll[1].className += " activity";
        pageBtn[1].className += " toggle";
    }
    clearInterval(pass);
}

function slideThree() {
    for (let i = 0; i < slideAll.length; i++) {
        slideAll[i].classList.remove('activity');
        pageBtn[i].classList.remove('toggle');
    }
    pageBtn[2].removeEventListener('click', slideThree);
    pageBtn[0].addEventListener('click', slideOne);
    pageBtn[1].addEventListener('click', slideTwo);
    pageBtn[3].addEventListener('click', slideFour);
    if (slideAll[2].classList[1] !== 'activity') {
        slideAll[2].className += " activity";
        pageBtn[2].className += " toggle";
    }
    clearInterval(pass);
}

function slideFour() {
    for (let i = 0; i < slideAll.length; i++) {
        slideAll[i].classList.remove('activity');
        pageBtn[i].classList.remove('toggle');
    }
    pageBtn[3].removeEventListener('click', slideFour);
    pageBtn[0].addEventListener('click', slideOne);
    pageBtn[1].addEventListener('click', slideTwo);
    pageBtn[2].addEventListener('click', slideThree);
    if (slideAll[3].classList[1] !== 'activity') {
        slideAll[3].className += " activity";
        pageBtn[3].className += " toggle";
    }
    clearInterval(pass);
}

pageBtn[0].addEventListener('click', slideOne);
pageBtn[1].addEventListener('click', slideTwo);
pageBtn[2].addEventListener('click', slideThree);
pageBtn[3].addEventListener('click', slideFour);