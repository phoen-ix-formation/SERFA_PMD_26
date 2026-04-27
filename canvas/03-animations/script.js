// Script partie 3 - Animations
const elCanvas = document.getElementById('drawing');
const ctx = elCanvas.getContext('2d');

// Poisition en X du carré
let intX = 0;

ctx.fillStyle = 'black';

function animate() {

    // Reset du canvas
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);

    // Dessin du rectangle
    ctx.fillRect(intX, 100, 30, 30);

    intX++; //< Incrément de la position en X

    // Appeler la frame suivante
    requestAnimationFrame(animate);
}

animate(); // Lancement initial