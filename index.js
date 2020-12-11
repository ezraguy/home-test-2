const box = document.getElementById('box-svg');

const lid = document.getElementById('box-lid');

const bows = document.getElementById('box-bows');

setTimeout(() => {

    bows.style.animation = 'pop  1s  ease'
    lid.style.animation = 'pop  1s  ease'
    bows.style.animationFillMode = 'forwards'
    lid.style.animationFillMode = 'forwards'
}, 3500);