const box = document.getElementById('box-svg');

const lid = document.getElementById('box-lid');

const bows = document.getElementById('box-bows');

const confetti = document.getElementById('confetti');

const init = () => {
    addAnimations();


}
const addConfetti = () => {
    confetti.click()
}

const addAnimations = () => {
    setTimeout(() => {
        bows.style.animation = 'pop  1s  ease'
        lid.style.animation = 'pop  1s  ease'
        bows.style.animationFillMode = 'forwards'
        lid.style.animationFillMode = 'forwards'
        addConfetti();
    }, 3500);
}

init();