// Script partie 4 - Zone de dessin
const elCanvas = document.getElementById('canvas');
const ctx = elCanvas.getContext('2d');

let intLastMouseX = 0;
let intLastMouseY = 0;

// Ecoute des évènements de la souris
// La souris se déplace dans le canvas
elCanvas.addEventListener('mousemove', (e) => {
    // On calcule la position relative de la souris dans le canvas

    // 1. on récupère la position du canvas à l'écran
    const posCanvas = elCanvas.getBoundingClientRect();

    // 2. On soustrait la position du canvas à la position de la souris dans l'écran
    const intMouseX = e.clientX - posCanvas.left;
    const intMouseY = e.clientY - posCanvas.top;

    ctx.beginPath();
    ctx.strokeStyle = "black";

    ctx.moveTo(intLastMouseX, intLastMouseY);
    ctx.lineTo(intMouseX, intMouseY);
    
    ctx.stroke();

    intLastMouseX = intMouseX;
    intLastMouseY = intMouseY;
});

// La souris sort du canvas - sort de l'état dessin
elCanvas.addEventListener('mouseleave', (e) => {
    
    
});

// On presse le clic-gauche - état de dessin
elCanvas.addEventListener('mousedown', (e) => {
    
    
});

// On lache le clic-gauche - sort de l'état dessin
elCanvas.addEventListener('mouseup', (e) => {
    
    
});

// Lors du clic sur le bouton reset
document.getElementById('btnClear').addEventListener('click', (e) => {

})