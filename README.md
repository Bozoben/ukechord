# ukechord

Une librairie javascript pour générer un accord au ukulele.

Demo : https://bozoben.github.io/ukechord/test.html

Pour le moment c'est très rustique

Exemple d'utilisation :
```javascript
chord("chord1").init(['x',3,4,3],'G#');
chord("chord2").initFromListe(['x',3,4,3],'G#');
```
Le 1er paramètre est un tableau des positions à marquer sur chaque corde : la valeur 'x' correspond à corde non jouée.
Le 2eme paramètre le libellé de l'accord.

Exemple à partir d'un accord connu :
```javascript
chord("chord2").initFromListe('G7');
```
Dans ce cas, un seul paramètre, l'identifiant de l'accord.

Todos :
* ajouter la position du manche
* préparer une bibliothèque d'accords
* avoir plusieurs tailles (xsmall, small, medium)
