// Script partie 4 - Zone de dessin
const elCanvas = document.getElementById('canvas');
const ctx = elCanvas.getContext('2d');

// Ecoute des évènements de la souris
// La souris se déplace dans le canvas
elCanvas.addEventListener('mousemove', (e) => {
    console.log(e);
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