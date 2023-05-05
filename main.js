function resizeIframe() {
    const iframe = document.getElementById('form');
    iframe.style.height = window.innerHeight + 'px';
    iframe.style.width = window.innerWidth + 'px';
}

window.addEventListener('resize', resizeIframe);
document.addEventListener('DOMContentLoaded', resizeIframe);

const rwords = [
    "Radiazione",
    "Raffinato",
    "Ragazzo",
    "Ragnatela",
    "Ragione",
    "Rallegrato",
    "Rampicante",
    "Rapidità",
    "Raro",
    "Raschiato",
    "Rassicurato",
    "Razzo",
    "Reagito",
    "Realizzato",
    "Rebus",
    "Recente",
    "Reciproco",
    "Redatto",
    "Referendum",
    "Regalo",
    "Registro",
    "Relazione",
    "Remato",
    "Rendersi",
    "Renna",
    "Reparto",
    "Reputazione",
    "Resistenza",
    "Respiro",
    "Rettangolo",
    "Revocato",
    "Ricambio",
    "Ricetta",
    "Richiesta",
    "Ridotto",
    "Rigenerato",
    "Rilassato",
    "Rimasto",
    "Rincorso",
    "Rinforzato",
    "Riparato",
    "Riservato",
    "Rispetto",
    "Ristorante",
    "Ritmo",
    "Ritornato",
    "Ritratto",
    "Rivista",
    "Roccia",
    "Rondine",
    "Reso",
    "Resiliente",
    "Rinato",
    "Renato",
    "Resuscitato"
];

function setRandomTitle() {
    const randomIndex = Math.floor(Math.random() * rwords.length);
    const randomWord = rwords[randomIndex];
    document.title = `${randomWord}QuantoBasta`;
}

setRandomTitle();
setInterval(setRandomTitle, 10000);