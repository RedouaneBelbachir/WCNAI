
// Sélectionner le bouton hamburger et le menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Ajouter un gestionnaire d'événements pour basculer la classe 'active'
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Ajouter un gestionnaire d'événements pour masquer le menu lorsqu'un lien est cliqué
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active'); // Ferme le menu
    });
});