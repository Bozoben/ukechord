# ukechord

Une librairie javascript pour générer un accord au ukulele.

Demo : https://bozoben.github.io/ukechord/test.html

Pour le moment c'est très rustique, il faut créer un élément html de type canvas, et utiliser ce genre de code :
```javascript
chord("chord1").init([1,3,4,3],'G#');
```
Le 1er paramètre est un tableau des positions à marquer sur chaque corde. Le 2eme paramètre le libellé de l'accord.

Todos :
* marquer les cordes non jouées
* marquer les cordes vides
* ajouter la position du manche
* préparer un bibliothèque d'accords
* avoir plusieurs tailles (xsmall, small, medium)
