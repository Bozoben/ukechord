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

  function drawNote(i,j) {
   ctx.beginPath();
   ctx.strokeStyle = "#369";
   ctx.fillStyle="#c00";
   var center = getCenter(i,j);
   ctx.arc(center[0],center[1],6,0,Math.PI*2,false);
   ctx.fill();
   ctx.closePath();
  }

  function writeChord(txt) {
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

    writeChord(note);
    for (var i=0; i < 4, i++) {
      drawNote(i+1,positions[i]);
    }
  }

  return {
    init: init
  };
};
