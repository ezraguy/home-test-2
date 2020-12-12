const box = document.getElementById('box-svg');
const lid = document.getElementById('box-lid');
const bows = document.getElementById('box-bows');
const confetti = document.getElementById('confetti');
const productBox = document.getElementById('product-wrap');
const light = document.getElementById('light-wrap');
const desc = document.getElementById('product-desc');
const init = () => {
    addAnimations();
}
const addConfetti = () => {
    productBox.style.animation = ' rise 1s ease forwards 300ms'
    light.style.animation = ' shine 1.5s ease forwards 100ms'
    desc.style.animation = ' showText 1s ease forwards 700ms'
    confetti.click()

}

const addAnimations = () => {
    setTimeout(() => {
        bows.style.animation = 'pop  1s  ease forwards'
        lid.style.animation = 'pop  1s  ease forwards'
        addConfetti();
    }, 4000);
}

init();