# TP Bases HTML CSS JS

## Récupérer les sources et créer votre branche personnelle
- Cloner le projet git : 
`git clone http://gitlab.isima.fr/bcaure/td0-basic-html-css-js.git`
- Créer une branche :
`cd td0-basic-html-css-js`
`git branch 2019-<nom de famille>`
`git checkout 2019-<nom de famille>`
- Soumettre la branche :
`git push -u origin 2019-<nom de famille>`

## Etapes du TD

Le but est de reproduire la scène bonhomme.gif avec des éléments HTML uniquement.

### Créer un cercle avec Chrome devtools
  - ouvrir une page blanche Chrome et ouvrir les outils de développement (F12)
  - insérer une div HTML
  - modifier le CSS pour ajouter une taille fixe et une bordure
  - arrondir la div
  - positionner le cercle en bas au centre avec flex-box (https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Structurer le code
  - séparer le code en 3 fichiers : .html, .css et .js
  - le fichier `bonhomme.html` importe le fichier `bonhomme.css` avec la balise `<link>`
  - le fichier `bonhomme.html` importe le fichier `bonhomme.js` avec la balise `<script>`
  - ouvrir `bonhomme.html` avec Chrome pour vérifier que la page s'affiche correctement

### Créer les autres éléments
  - ajout fond d'écran `background.jpg`
  - ajouter les différentes parties du bonhomme à l'aide de div
    - bonus : certains éléments complexes peuvent être faits avec `<canvas>` ou `<svg>`

### Ajouter dynamiquement des flocons avec Javascript

#### Sous Chrome devtools
  - ouvrez la console javascript
  - récupérer votre élément body et ajouter-lui des flocons dynamiquement

#### Dans un éditeur
  - recopier votre code dans le fichier javascript
  - faire en sorte que les flocons aient une position aléatoire
    - bonus : éviter que les flocons se chevauchent
    - bonus 2 : certains flocons passent devant, d'autres derrière le bonhomme

### Animer le contenu en javascript
  - utiliser `setInterval` pour effectuer une animation régulière


