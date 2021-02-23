const imgContainer = document.getElementById('images');

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const imgs = document.querySelectorAll('#images img');

let idx = 0;

let interval = setInterval(runSlider, 2000);

function runSlider() {
    idx++;

    changeImage();
}

function changeImage() {
    if (idx > imgs.length -1) {
        idx=0;
    } else if (idx < 0) {
        idx = imgs.length -1
    }

    imgContainer.style.transform = `translateX(${-idx *500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(runSlider, 2000);
}

rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
})

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
})