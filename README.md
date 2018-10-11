# Memory-Game

## Présentation 
J'ai réalisé un jeu de mémoire avec en tout 8 paires sans utiliser Jquery ( On essaye de plus en plus de faire disparaitre Jquery et utiliser JS vanilla). Le principe est simple, on doit trouver les différentes paires avec un nombre de coup limité dans un temps amoindrie. 

## La Programme Objet :
Ce jeu à été réalisé entièment en programmation Objet. Nous avons 9 méthodes: 
_ **le constructeur** : définie le deck du jeu, initialise les varibale du temps et le nombre de coup. 
_ **start** : commence le Jeu. Ici, tout se joue au clics, à chaque clic l'utilisateur déclanche les différents événements.
_ **match** : C'est la méthode qui permet d'itenfier les cartes identique.
_ **unmatch** : le contraire de match
_ **resetChoices** : le joueur peut reéssayer de selectionner deux cartes.
_ **gg** : et la méthode qui gère et affiche la victoire. 
_ **Restard** : recommence le jeu.
_ **startTimer** : la méthode qui gère le timer.
_ **fnbHit** : méthode qui compte le nombre de coups joué. 

## Les éléments Dom
Ce jeu est un exellent exercice pour modifier et intéragir avec les éléments du dom.
