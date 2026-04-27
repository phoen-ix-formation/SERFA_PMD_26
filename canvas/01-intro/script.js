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



    // lignes paires => première case noire
    // lignes impaires => en blanc
    // nombre % 2 == 0 => pair
    // nombre % 2 != 0 => impair

// j => l'incrément en Y
const intCellHeight = 50; // Hauteur d'une case
const intCellWidth  = 50; // Largeur d'une case

const intLinesNbr   = intCanvasHeight / intCellHeight; // Nbre de lignes au total
const intColmsNbr   = intCanvasWidth / intCellWidth; // Nbr de colonnes par ligne

for(let j = 0; j < intLinesNbr; j++) {

    if(j % 2 == 0) {
        // Ligne paires
        /*
        ctx.fillStyle = 'black';
        // i => l'incrément en X
        for(let i = 0; i <= intCanvasWidth; i += 100) {
            ctx.fillRect(i, j * 50, 50, 50);
        }

        ctx.fillStyle = 'white';
        for(let i = 50; i <= intCanvasWidth; i += 100) {
            ctx.fillRect(i, j * 50, 50, 50);
        }*/

        for(let i = 0; i < intColmsNbr; i++) {

            if(i % 2 == 0) {
                ctx.fillStyle = 'black';
            }
            else {
                ctx.fillStyle = 'white';
            }

            ctx.fillRect(i * intCellWidth, j * intCellHeight, 
                intCellWidth, intCellHeight);
        }
    }
    else {
        // Ligne impaire

        for(let i = 0; i < intColmsNbr; i++) {

            if(i % 2 == 0) {
                ctx.fillStyle = 'white';
            }
            else {
                ctx.fillStyle = 'black';
            }

            ctx.fillRect(i * intCellWidth, j * intCellHeight, 
                intCellWidth, intCellHeight);
        }
    }

}