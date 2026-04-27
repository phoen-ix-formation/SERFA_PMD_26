// Script Partie 1 - Introduction
const elCanvas = document.getElementById('drawing');
const ctx = elCanvas.getContext('2d');

// La taille du canvas
const intCanvasWidth    = elCanvas.width;
const intCanvasHeight   = elCanvas.height;

/*
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 200, 100);

// Deuxième rectangle de même taille en rouge, 
// colé à droite de l'autre
ctx.fillStyle = 'red';
ctx.fillRect(300, 100, 200, 100);

ctx.fillRect(100, 200, 200, 100);
*/

// Créer un damier de carrés de 50px
// Noir et blanc

// Première case, en haut à gauche

// j => l'incrément en Y
for(let j = 0; j <= intCanvasHeight; j++) {

    // lignes paires => première case noire
    // lignes impaires => en blanc
    // nombre % 2 == 0 => pair
    // nombre % 2 != 0 => impair

    if(j % 2 == 0) {
        // Ligne paires

        ctx.fillStyle = 'black';
        // i => l'incrément en X
        for(let i = 0; i <= intCanvasWidth; i += 100) {
            ctx.fillRect(i, j * 50, 50, 50);
        }

        ctx.fillStyle = 'white';
        for(let i = 50; i <= intCanvasWidth; i += 100) {
            ctx.fillRect(i, j * 50, 50, 50);
        }
    }
    else {
        // Ligne impaire

        ctx.fillStyle = 'white';
        // i => l'incrément en X
        for(let i = 0; i <= intCanvasWidth; i += 100) {
            ctx.fillRect(i, j * 50, 50, 50);
        }

        ctx.fillStyle = 'black';
        for(let i = 50; i <= intCanvasWidth; i += 100) {
            ctx.fillRect(i, j * 50, 50, 50);
        }
    }

}