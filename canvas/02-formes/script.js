// Script Partie 2 - Formes
const elCanvas = document.getElementById('drawing');
const ctx = elCanvas.getContext('2d');

ctx.beginPath(); // Début du tracé
ctx.moveTo(100, 100); // Place le "stylo" aux coordonées
ctx.lineTo(100, 200); // Trace un trait de (100,100) à (100,200)

ctx.lineTo(200, 200);
ctx.closePath(); // Ferme le tracé, en reliant le dernier point au premier

ctx.strokeStyle = 'red';
ctx.lineWidth = 3;

ctx.fillStyle = 'blue';
ctx.fill(); // Remplir la forme

ctx.stroke(); // Trace le trait sur le canvas

ctx.beginPath();
ctx.moveTo(400, 400);
ctx.arc(400, 400, 100, Math.PI, 0);
ctx.fill();

ctx.beginPath();
ctx.moveTo(400, 200);                          // Centre
ctx.arc(400, 200, 80, 0.2 * Math.PI, 1.8 * Math.PI); // Arc
ctx.closePath();                               // Retour au centre
ctx.fillStyle = '#f1c40f';
ctx.fill();