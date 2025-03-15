function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.getElementById("change-body-bg").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomHexColor();
});

document.getElementById('switch-to-blog').addEventListener('click',function(){
    window.location.href = "./AnswerBLog.html";
})