const pageBtn = document.querySelectorAll('.fa-circle');
const slideAll = document.querySelectorAll('.slide-container');
const slide = document.querySelector('.slide-container');

if (slideAll[0].classList[1] == 'activity') {
    setTimeout(function() {
        slideTwo();
    }, 2000)
}
if (slideAll[1].classList[1] == 'activity') {
    setTimeout(function() {
        slideThree();
    }, 2000)
}
console.log(slideAll[1].classList);

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
}

pageBtn[0].addEventListener('click', slideOne);
pageBtn[1].addEventListener('click', slideTwo);
pageBtn[2].addEventListener('click', slideThree);
pageBtn[3].addEventListener('click', slideFour);


// let i = slideAll.length - 1;

// pageBtn[0].addEventListener('click', ()=>{
//     pageBtn[0].style.color = '#fff';
//     slideAll[0].style.opacity = '1';
//     slideAll[1].style.opacity = '0';
//     slideAll[0].style.transition = '.3s';
// })

// pageBtn[1].addEventListener('click', ()=>{
//     pageBtn[1].style.color = '#fff';
//     slideAll[1].style.opacity = '1';
//     slideAll[2].style.opacity = '0';
//     slideAll[1].style.transition = '.3s';
// })

// pageBtn[2].addEventListener('click', ()=>{
//     pageBtn[2].style.color = '#fff';
//     slideAll[2].style.opacity = '1';
//     slideAll[3].style.opacity = '0';
//     slideAll[2].style.transition = '.3s';
// })

// pageBtn[3].addEventListener('click', ()=>{
//     pageBtn[3].style.color = '#fff';
//     slideAll[3].style.opacity = '1';
//     slideAll[0].style.opacity = '0';
//     slideAll[3].style.transition = '.3s';
// })