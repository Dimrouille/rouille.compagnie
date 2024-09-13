// Sélectionne l'icône du menu burger
document.getElementById('menu-icon').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    // Bascule la classe active pour afficher ou masquer le menu
    navLinks.classList.toggle('active');
});
