// On attend le chargement du DOM
document.addEventListener('DOMContentLoaded', e => {

    const arrElDots = document.getElementsByClassName('dot');

    // Ecoute l'évènement input sur l'élément du DOM ayant l'id = speed
    document.getElementById('speed')
        .addEventListener('input', ev => {

        // Récupère la valeur de l'input dans une variable
        const flDuration = ev.target.value;

        // Boucle pour chaque div .dot de mon tableau
        for(const elDot of arrElDots) {

            // Modifie la propriété CSS animation-duration
            // avec la valeur flDuration 
            elDot.style.animationDuration = `${flDuration}s`;
        }
    });
});