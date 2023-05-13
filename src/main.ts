/* function resizeIframe() {
  const iframe = document.getElementById('form');
  iframe!.style.height = window.innerHeight + 'px';
  iframe!.style.width = window.innerWidth + 'px';
}

window.addEventListener('resize', resizeIframe);
document.addEventListener('DOMContentLoaded', resizeIframe); */

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
  document.title = `R${'_'.repeat(randomWord.length - 2)}QuantoBasta`;
  setTimeout(() => {
      document.title = `${randomWord}QuantoBasta`;
  }, 1000);
}

setRandomTitle();
setInterval(setRandomTitle, 5000);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const scrollH = document.documentElement.scrollHeight;
    console.log(scrollH);
    const bgEl = document.getElementById('bg');
    if (bgEl) {
      bgEl.style.height = `${scrollH}px`;
    }
  }, 100);
});