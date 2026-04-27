// Script partie 4 - Zone de dessin
const elCanvas = document.getElementById('canvas');
const ctx = elCanvas.getContext('2d');

// Champs de personnalisation du stylo / gomme
const elColorInput      = document.getElementById('colorInput');
const elPenSizeInput    = document.getElementById('penSize');
const elEraserSizeInput = document.getElementById('eraserSize');

let intLastMouseX = 0;
let intLastMouseY = 0;

let blIsDrawing = false; //< Stocke l'état : en dessin ou non

let strCurrentTool = 'pen'; //< Stylo = 'pen', Gomme = 'eraser'

// Ecoute des évènements de la souris
// La souris se déplace dans le canvas
elCanvas.addEventListener('mousemove', (e) => {

    if(blIsDrawing) {

        // 1. on récupère la position du canvas à l'écran
        const posCanvas = elCanvas.getBoundingClientRect();

        // 2. On soustrait la position du canvas à la position de la souris dans l'écran
        const intMouseX = e.clientX - posCanvas.left;
        const intMouseY = e.clientY - posCanvas.top;
        
        if(strCurrentTool === 'pen') {

            ctx.beginPath();

            // Bords arrondis
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Récupère de manière dynamique l'épaisseur et la couleur
            ctx.strokeStyle = elColorInput.value;
            ctx.lineWidth = elPenSizeInput.value;

            ctx.moveTo(intLastMouseX, intLastMouseY);
            ctx.lineTo(intMouseX, intMouseY);
            
            ctx.stroke();
        }
        else if(strCurrentTool === 'eraser') {

            ctx.clearRect(intMouseX, intMouseY, 
                elEraserSizeInput.value, elEraserSizeInput.value);
        }

        intLastMouseX = intMouseX;
        intLastMouseY = intMouseY;
    }
});

// La souris sort du canvas - sort de l'état dessin
elCanvas.addEventListener('mouseleave', (e) => {
    
    blIsDrawing = false;
});

// On presse le clic-gauche - état de dessin
elCanvas.addEventListener('mousedown', (e) => {
    const posCanvas = elCanvas.getBoundingClientRect();

    // On défini l'ancienne position de la souris à la position du clic
    // Evite que le tracé ne commence là où il s'est arrete juste avant
    // mais débute bien à l'emplacement du clic
    intLastMouseX = e.clientX - posCanvas.left;
    intLastMouseY = e.clientY - posCanvas.top;

    blIsDrawing = true;
});

// On lache le clic-gauche - sort de l'état dessin
elCanvas.addEventListener('mouseup', (e) => {
    
    blIsDrawing = false;
});

// Lors du clic sur le bouton reset
document.getElementById('btnClear').addEventListener('click', (e) => {
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);
});

// On récupère le bon outil (style / gomme)
const elBtnPen = document.getElementById('btnPen');
const elBtnEraser = document.getElementById('btnEraser');

elBtnPen.addEventListener('click', (e) => {
    strCurrentTool = 'pen';
    elBtnPen.classList.toggle('active');
    elBtnEraser.classList.toggle('active');
});

elBtnEraser.addEventListener('click', (e) => {
    strCurrentTool = 'eraser';
    elBtnPen.classList.toggle('active');
    elBtnEraser.classList.toggle('active');
});