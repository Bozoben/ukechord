# ukechord

Une librairie javascript pour générer un accord au ukulele.

Pour le moment c'est très rustique, il faut créer un élément html de type canvas, et utiliser ce genre de code :
```javascript
chord("chord1").init([1,3,4,3],'G#');
```
Le 1er paramètre est un tableau des positions à marquer sur chaque corde. Le 2eme paramètre le libellé de l'accord.
