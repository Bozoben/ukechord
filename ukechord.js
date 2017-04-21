const chordsList = {"G7":"0212","C":"0003","Cm":"0333"};

var chord = function(elementId, settings) {
  const x0 = 8;
  const w0 = 20;
  var c = document.getElementById(elementId);
  var ctx = c.getContext("2d");

  function getCenter(i,j) {
    var res = new Array();
    res[0] = 8 + (i-1) * 20;
    res[1] = 10 + j * 20;
    return res;
  }

  function drawX(j) {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.font = "10pt Verdana";
    ctx.fillText('x',4 + (j-1) * 20, 14);
    ctx.closePath();
  }

  /**
     Marque une note. i = numero corde, j = position.
     Si j == 'x' on marque x en haut de corde.
     Si j == '0' on marque un rond vide en haut de corde.
  **/
  function drawNote(i,j) {
    // Corde à ne pas jouer
    if (j =='x') {
        drawX(i);
        return;
    }

   ctx.beginPath();
   ctx.strokeStyle = "#369";
   ctx.fillStyle="#c00";
   var center = getCenter(i,j);
   // Corde vide : rond vide
   if (j == '0') {
     ctx.arc(center[0],center[1],4,0,Math.PI*2,false);
     ctx.stroke();
   } else { // Une note à marquer : rond plein
     ctx.arc(center[0],center[1],6,0,Math.PI*2,false);
     ctx.fill();
   }
   ctx.closePath();
  }

  function writeChordLabel(txt) {
   ctx.beginPath();
   ctx.fillStyle = "blue";
   ctx.font = "12pt Verdana";
   ctx.fillText(txt, 20, 12);
   ctx.closePath();
  }

  function drawGrid() {
    // Le reste du script ici...
    ctx.lineWidth=1;
    ctx.strokeStyle="black";
    ctx.beginPath();      // Début du chemin
    // Lignes horizontables
    for (var i=0; i < 4; i++) {
      ctx.moveTo(x0 + i * w0,20);
      ctx.lineTo(x0 + i * w0,100);
    }
    ctx.fillRect(x0 - 1,16, x0 + 3 * w0 - 6 ,4);

    for (var i=0; i < 5; i++) {
      ctx.moveTo(x0, (i+1) * w0);
      ctx.lineTo(x0 + 3*w0, (i+1) * w0);
    }
    ctx.closePath();
    ctx.stroke();
  }

  function init(positions,note) {
    drawGrid();
    writeChordLabel(note);
    for (var i=0; i < 4; i++) {
      drawNote(i+1,positions[i]);
    }
  }

  function initFromList(note) {
    var chordData = chordsList[note];
    drawGrid();
    writeChordLabel(note);
    if (chordData != null) {
      for (var i=0; i < 4; i++) {
        drawNote(i+1,chordData.charAt(i));
      }
    }
  }

  return {
    init: init,
    initFromList: initFromList
  };
};
