function btnManager(btn) {
    btn.classList.remove('bg-blue-600');
    btn.classList.add('bg-gray-500');

    btn.disabled = true;
    btn.style.cursor = "not-allowed";

    const incrementedValue = document.getElementById('increment-value').innerText;
    document.getElementById('increment-value').innerText = parseInt(incrementedValue) + 1;

    const decrementedValue = document.getElementById('decremented-value').innerText;
    document.getElementById('decremented-value').innerText = parseInt(decrementedValue) - 1;

    alert(`Button ${btn.id} has been clicked!`);

    if (btn.id === 'btn-1') {
        const value = document.getElementById("fix-mobile").querySelector("p.text-xl").innerText;
        createPara(value);
    } else if (btn.id === 'btn-2') {
        const value = document.getElementById("dark-mode").querySelector("p.text-xl").innerText;
        createPara(value);
    } else if (btn.id === 'btn-3') {
        const value = document.getElementById("home-page").querySelector("p.text-xl").innerText;
        createPara(value);
    } else if (btn.id === 'btn-4') {
        const value = document.getElementById("new-emoji").querySelector("p.text-xl").innerText;
        createPara(value);
    } else if (btn.id === 'btn-5') {
        const value = document.getElementById("openAI-API").querySelector("p.text-xl").innerText;
        createPara(value);
    } else if (btn.id === 'btn-6') {
        const value = document.getElementById("job-improve").querySelector("p.text-xl").innerText;
        createPara(value);
    } else {
        console.log('Unknown button clicked');
    }
}

function createPara(value) {
    console.log(value);
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const activityLog = document.getElementById("create-p-in-js");
    const newParagraph = document.createElement("p");
    newParagraph.innerText = `You have Complete The Task ${value} at ${hours}:${minutes}`;
    newParagraph.classList.add("text-lg", "font-semibold", "mt-2", "text-blue-600", "bg-blue-100", "border-none", "rounded-xl", "p-2");
    activityLog.appendChild(newParagraph);
}



document.getElementById('btn-1').addEventListener('click', function () {
    btnManager(this);
});
document.getElementById('btn-2').addEventListener('click', function () {
    btnManager(this);
});
document.getElementById('btn-3').addEventListener('click', function () {
    btnManager(this);
});
document.getElementById('btn-4').addEventListener('click', function () {
    btnManager(this);
});
document.getElementById('btn-5').addEventListener('click', function () {
    btnManager(this);
});
document.getElementById('btn-6').addEventListener('click', function () {
    btnManager(this);
});


document.getElementById("clear-history").addEventListener("click", function () {
    const clearHistory = document.getElementById("create-p-in-js");
    clearHistory.innerHTML = "";
    
});
