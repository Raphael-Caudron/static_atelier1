# ASI1-statique

Voici la version statique de la page web du jeu de plateau.\

## Le home
* Affichage de 3 cartes de bases (les trois premières de la liste que l'on a récupéré de l'API)\
Les cartes se ressemblent car l'API nous offrent des duplications avec quelques informations qui différent.
* Les likes affichés sont le prix et les commentaires un nombre aléatoire en 0 et le prix-1 car les données récupérées ne possédaient pas ces attributs.\
Le bouton + avec Buy ou Read et aléatoire également.
* Dans le header on peut voir "Home" qui est la page card.html qui sert de page d'accueil, on peut aussi voir "searchCard" où on peut rechercher des cartes grâce à leur nom et enfin "Add Card" où on peut ajouter des cartes. Le petit Onglet search est relié à la page searchCard.

## Search Card

Cette page sert pour la recherche des cartes selon son nom. Elle affiche la carte si le nom existe avec son image, sa description, sa defense, son attaque, son énergie et son hp. Si le nom n'existe pas dans la base de données, la page affiche l'exemple qu'il y avait à l'origine.

## Add Card

Cette page sert à ajouter une carte aux données pour la session courante (tant qu'on ne se redirige pas vers "card.html" en écrivant card.html dans la barre de recherche ou qu'on redémarrage le serveur, les cartes ajoutées restent en mémoire). Toutes les sections sont obligatoires pour envoyer les formulaire.


