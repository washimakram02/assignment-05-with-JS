function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.getElementById("change-body-bg").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomHexColor();
});