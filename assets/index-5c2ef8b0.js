(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const r=["Radiazione","Raffinato","Ragazzo","Ragnatela","Ragione","Rallegrato","Rampicante","Rapidità","Raro","Raschiato","Rassicurato","Razzo","Reagito","Realizzato","Rebus","Recente","Reciproco","Redatto","Referendum","Regalo","Registro","Relazione","Remato","Rendersi","Renna","Reparto","Reputazione","Resistenza","Respiro","Rettangolo","Revocato","Ricambio","Ricetta","Richiesta","Ridotto","Rigenerato","Rilassato","Rimasto","Rincorso","Rinforzato","Riparato","Riservato","Rispetto","Ristorante","Ritmo","Ritornato","Ritratto","Rivista","Roccia","Rondine","Reso","Resiliente","Rinato","Renato","Resuscitato"];function s(){const i=Math.floor(Math.random()*r.length),o=r[i];document.title=`R${"_".repeat(o.length-2)}QuantoBasta`,setTimeout(()=>{document.title=`${o}QuantoBasta`},1e3)}s();setInterval(s,5e3);document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{const i=document.documentElement.scrollHeight;console.log(i);const o=document.getElementById("bg");o&&(o.style.height=`${i}px`)},100)});
