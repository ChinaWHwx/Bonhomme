# TD0 : Evaluation bases HTML-CSS-JS

Le but est de ce TD est d'évaluer le niveau de chacun sur les bases de chaque langage.

Le but est de reproduire la scène _bonhomme.gif_ avec des éléments HTML, des styles CSS et de l'animer en Javascript.

Nous n'utilisons pas de framework ni d'outils comme NPM dans ce TD.

### Exercice 1 : Récupérez les sources et créer votre branche personnelle
- Clonez le projet git : 
`git clone https://gitlab.isima.fr/bcaure/td0-basic-html-css-js.git`
- Créez une branche :
`cd td0-basic-html-css-js`
`git branch 2019-<nom(s) de famille>`
`git checkout 2019-<nom(s) de famille>`
- Poussez votre branche sur Gitlab :
`git push -u origin 2019-<nom(s) de famille>`


### Démonstration

> Nous allons créer du contenu HTML/CSS dans Chrome devtools
>
> Sur une page blanche Chrome, devtools (menu outils de développement ou F12) vont nous permettre d'insérer une div HTML directement dans notre page et de modifier le CSS pour créer une forme 
>
> Le positionnement serait fait avec flexbox ([aide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))


### Exercice 2 : Structurez le code
- récupérez le code HTML depuis Chrome devtools
- séparez le code en 3 fichiers : .html, .css et .js
  - le fichier `bonhomme.html` importe le fichier `bonhomme.css` avec la balise `<link>` ([aide](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link))
  - le fichier `bonhomme.html` importe le fichier `bonhomme.js` avec la balise `<script>` ([aide](https://developer.mozilla.org/fr/docs/Web/HTML/Element/script#Exemples))
- ouvrir `bonhomme.html` avec Chrome pour vérifier que la page s'affiche correctement
- n'oubliez pas de rafraichir la page sous Chrome pour recharger vos modifications (utilisez ctrl+F5 pour être sûr)

### Exercice 3 : Créez les autres éléments du bonhomme
- ajout du fond d'écran `background.jpg` ([aide](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Scaling_background_images#Valeurs_sp%C3%A9ciales_contain_et_cover))
- ajouter les différentes parties du bonhomme à l'aide de `<div>`
- bonus : certains éléments complexes peuvent être faits avec `<canvas>` ou `<svg>`


### Démonstration

> Nous allons rendre notre page dynamique en Javascript
>
> Dans Chrome devtools, onglet Console, toutes les commandes Javascript que nous taperons seront interprétées sur notre page
>
> Nous allons voir ensemble comment récupérer notre élément body et lui ajouter des flocons dynamiquement


### Exercice 4 : Améliorez le code dans le fichier bonhomme.js
- recopier le code de la démonstration dans le fichier bonhomme.js
- faire en sorte que les flocons aient une position aléatoire
  - bonus : éviter que les flocons se chevauchent
  - bonus 2 : certains flocons passent devant, d'autres derrière le bonhomme

### Exercice 5 : Animez le contenu en javascript
- utiliser `setInterval` pour effectuer une animation régulière


