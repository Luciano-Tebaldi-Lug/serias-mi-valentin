const messages = [
    "Comooo que noooo??",
    "Segura????",
    "lo pensaste bien?",
    "Porfiii piensa ",
    "podemos viivr juntos",
    "si pones que no ya no te pido skins",
    "nos pondriamos tites los dos",
    "NOOOOOOOOOO HAY OTRO BOTONNNNNN",
    "esta bien ya es la ultima vez",
    "jaja no te queda de otra ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "si_pagina.html";
}