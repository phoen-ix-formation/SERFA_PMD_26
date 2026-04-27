// Script partie 3 - Animations
const elCanvas = document.getElementById('drawing');
const ctx = elCanvas.getContext('2d');

// Position en X du carré
let intX = 0;

// Flag qui indique le sens de déplacement
let blDirection = true; //< Vrai = G=>D, Faux = D=>G

ctx.fillStyle = 'black';

function animate() {
    // Reset du canvas
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);

    // Dessin du rectangle
    ctx.fillRect(intX, 100, 30, 30);

    // On teste la direction
    if(blDirection) {
        intX += 4; //< Incrément de la position en X
    }
    else {
        intX -= 4; //< Décrémente
    }
    
    if(intX + 30 >= elCanvas.width) {
        blDirection = false;
    }
    else if(intX <= 0) {
        blDirection = true;
    }

    // Appeler la frame suivante
    requestAnimationFrame(animate);
}

animate(); // Lancement initial