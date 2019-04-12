const occupation_marker = "%occupation%";
const occupations = ['Java Developer', 'Bot Programmer', 'Full-Time Student'];
const colors = ['#90bc16', '#41a1d8', '#e8bb4c']
var rawText = "error";
var index = 0;

window.onload = function () {
    rawText = document.getElementById("intro-text").innerHTML;
    swapIntroWords();
    window.setInterval(swapIntroWords, 3000);
};

function swapIntroWords() {
    var element = document.getElementById("intro-text");
    element.innerHTML = rawText.replace(occupation_marker, occupations[index]);
    element.style.color = colors[index];
    index = index + 1;
    if (index >= occupations.length) {
        index = 0;
    }
}