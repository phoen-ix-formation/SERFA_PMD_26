// Script Partie 1 - Introduction
const elCanvas = document.getElementById('drawing');
const ctx = elCanvas.getContext('2d');

// La taille du canvas
const intCanvasWidth    = elCanvas.width;
const intCanvasHeight   = elCanvas.height;


ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 200, 100);

// Deuxième rectangle de même taille en rouge, 
// colé à droite de l'autre
ctx.fillStyle = 'red';
ctx.fillRect(300, 100, 200, 100);

ctx.fillRect(100, 200, 200, 100);

