# TD0 : Evaluation bases HTML-CSS-JS

Le but est de ce TD est d'évaluer le niveau de chacun sur les bases de chaque langage.

On va reproduire la scène _bonhomme.gif_ de ce repo avec des éléments HTML, des styles CSS et ensuite l'animer en Javascript.

Nous n'utilisons pas de framework ni d'outil comme NPM dans ce TD.

### Exercice 1 : Récupérez les sources et créer votre branche personnelle
- Clonez le projet git : 
`git clone https://gitlab.isima.fr/bcaure/td0-basic-html-css-js.git`
- Créez une branche :
`cd td0-basic-html-css-js`
`git branch 2021-<nom de famille>`
`git checkout 2021-<nom de famille>`
- Poussez votre branche sur Gitlab :
`git push -u origin 2021-<nom de famille>`


### Démonstration

Nous allons créer du contenu HTML/CSS dans votre navigateur préféré, parmi Chrome, Firefox ou Edge. Je ne recommande pas Safari pour les TD, à cause de son incompatibilité avec certains standards W3C. 

> Sur une page blanche de votre navigateur, ouvrir les _devtools_ (menu "outils de développement" ou F12) pour insérer une div HTML directement dans la page.  
> Modifier le CSS pouar créer un rectangle. 
> Positionner ce rectangle tout en bas de la page, au centre. Utilisez flexbox pour cela ([aide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))


### Exercice 2 : Structurez le code

1. Récupérez le code HTML que vous avez créé avec les _devtools_

2. Séparez le code en 3 fichiers : .html, .css et .js
  - le fichier `bonhomme.html` importe le fichier `bonhomme.css` avec la balise `<link>` ([aide](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link))
  - le fichier `bonhomme.html` importe le fichier `bonhomme.js` avec la balise `<script>` ([aide](https://developer.mozilla.org/fr/docs/Web/HTML/Element/script#Exemples))

3. Ouvrir `bonhomme.html` avec votre navigateur pour vérifier que la page s'affiche correctement
4. N'oubliez pas de rafraichir la page de votre navigateur pour recharger vos modifications (utilisez ctrl+F5 pour être sûr)

### Exercice 3 : Créez les autres éléments du bonhomme

1. Ajouter le fond d'écran `background.jpg` ([aide](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Scaling_background_images#Valeurs_sp%C3%A9ciales_contain_et_cover))

2. Ajouter les différentes parties du bonhomme à l'aide de `<div>`

3. Bonus : certains éléments complexes peuvent être faits avec `<canvas>` ou `<svg>`


### Démonstration

> Nous allons rendre notre page dynamique en Javascript
>
> Dans les _devtools_, onglet Console, toutes les commandes Javascript que nous taperons seront interprétées sur notre page
>
> Nous allons voir ensemble comment récupérer notre élément body et lui ajouter des flocons dynamiquement grâce aux fonctions [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) et [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)


### Exercice 4 : Améliorez le code dans le fichier bonhomme.js

1. Recopier le code de la démonstration dans le fichier _bonhomme.js_ et constater que les flocons s'affichent bien
  - en cas de problème, utiliser l'onglet _Console_ pour les messages d'erreur et l'onglet _Source_ pour mettre des points d'arrêt

2. Faire en sorte que les flocons aient une position aléatoire en utilisant _Math.random_

3. Certains flocons passent devant, d'autres derrière le bonhomme

4. Eviter que les flocons se chevauchent en les positionnant les uns par rapport aux autres

### Exercice 5 : Animez le contenu en javascript

1. Utiliser `setInterval` pour faire tomber les flocons par terre
  - chaque flocon aura une position _top_ qui augmentera jusqu'à dépasser la hauteur de l'écran (par exemple on peut utiliser comme unité [_vh_](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS#Viewport_units)) 
  - quand la hauteur est dépassée, les repositionner en haut pour générer une neige qui tombe à l'infini

