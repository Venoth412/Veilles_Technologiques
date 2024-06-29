// Fonction pour ajouter un commentaire
function ajouterCommentaire() {
    // Récupérer le contenu du champ de saisie
    var commentaire = document.getElementById('commentInput').value;

    // Créer un élément pour afficher le commentaire
    var nouveauCommentaire = document.createElement('p');
    nouveauCommentaire.textContent = commentaire;

    // Ajouter le commentaire à la liste de commentaires
    var listeCommentaires = document.getElementById('listeCommentaires');
    listeCommentaires.appendChild(nouveauCommentaire);

    // Effacer le champ de saisie après avoir ajouté le commentaire
    document.getElementById('commentInput').value = "";
}
