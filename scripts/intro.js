const occupations = ['Java Developer', 'Systems Administrator', 'Web Developer'];
const colors = ['#90bc16', '#41a1d8', '#e8bb4c']
let occupationsIndex = 0;
let colorsIndex = 0;

window.onload = function () {
    swapIntroWords();
    window.setInterval(swapIntroWords, 3000);
};

function swapIntroWords() {
    const element = document.getElementById("intro-text");
    element.innerHTML = occupations[occupationsIndex];
    element.style.color = colors[colorsIndex];

    occupationsIndex = incrementOrResetArrayIndex(occupationsIndex, occupations);
    colorsIndex = incrementOrResetArrayIndex(colorsIndex, colors);
}

function incrementOrResetArrayIndex(currentIndex, array) {
    return currentIndex < array.length - 1 ? currentIndex + 1 : 0;
}