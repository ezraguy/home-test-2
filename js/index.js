var box = document.getElementById("box-svg");
var lid = document.getElementById("box-lid");
var bows = document.getElementById("box-bows");
var confetti = document.getElementById("confetti");
var productBox = document.getElementById("product-wrap");
var light = document.getElementById("light-wrap");
var desc = document.getElementById("product-desc");

var init = function init() {
    addAnimations();
};

var addConfetti = function addConfetti() {
    productBox.style.animation = " rise 1s ease forwards 300ms";
    light.style.animation = " shine 1.5s ease forwards 100ms";
    desc.style.animation = " showText 1s ease forwards 700ms";
    confetti.click();
};

var addAnimations = function addAnimations() {
    setTimeout(function () {
        bows.style.animation = "pop  1s  ease forwards";
        lid.style.animation = "pop  1s  ease forwards";
        addConfetti();
    }, 4000);
};

init();
