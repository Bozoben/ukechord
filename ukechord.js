var chord = function(elementId, settings) {
  const x0 = 8;
  const w0 = 20;
  const paddingTop = 10;
  var c = document.getElementById(elementId);
  var ctx = c.getContext("2d");

  function getCenter(i,j) {
    var res = new Array();
    res[0] = 8 + (i-1) * 20;
    res[1] = 10 + j * 20 + paddingTop;
    return res;
  }

  function drawX(j) {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.font = "10pt Verdana";
    ctx.fillText('x',4 + (j-1) * 20, 14 + paddingTop);
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
   ctx.fillText(txt, w0, 2 + paddingTop);
   ctx.closePath();
  }

  function drawGrid() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.lineWidth=1;
    ctx.strokeStyle="black";
    ctx.fillStyle="black";
    ctx.beginPath();      // Début du chemin
    // Lignes horizontables
    for (var i=0; i < 4; i++) {
      ctx.moveTo(x0 + i * w0,20 + paddingTop);
      ctx.lineTo(x0 + i * w0,100 + paddingTop);
    }

    ctx.fillRect(x0 - 1,16 + paddingTop, x0 + 3 * w0 - 6 ,4);

    for (var i=0; i < 5; i++) {
      ctx.moveTo(x0, (i+1) * w0 + paddingTop);
      ctx.lineTo(x0 + 3*w0, (i+1) * w0 + paddingTop);
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

// Désolé la liste est .... longue ....
const chordsList = {"C":"0003",
"C7":"0001",
"Cm":"0333",
"Cm7":"3333",
"Cdim":"2323",
"Caug":"1003",
"C6":"0000",
"CM7":"0002",
"C9":"0201",
"Db":"1114",
"Db7":"1112",
"Dbm":"6444",
"Dbm7":"4444",
"Dbdim":"0101",
"Dbaug":"2110",
"Db6":"1111",
"DbM7":"1113",
"Db9":"1312",
"D":"2220",
"D7":"2223",
"Dm":"2210",
"Dm7":"2213",
"Ddim":"1212",
"Daug":"3221",
"D6":"2222",
"DM7":"2224",
"D9":"2423",
"Eb":"3331",
"Eb7":"3334",
"Ebm":"3321",
"Ebm7":"3324",
"Ebdim":"2323",
"Ebaug":"2114",
"Eb6":"3333",
"EbM7":"3330",
"Eb9":"0111",
"E":"4442",
"E7":"1202",
"Em":"x432",
"Em7":"0202",
"Edim":"0101",
"Eaug":"1003",
"E6":"4444",
"EM7":"4446",
"E9":"1222",
"F":"2010",
"F7":"2313",
"Fm":"1013",
"Fm7":"1313",
"Fdim":"1212",
"Faug":"2110",
"F6":"2213",
"FM7":"2413",
"F9":"2333",
"Gb":"3121",
"Gb7":"3424",
"Gbm":"2120",
"Gbm7":"2424",
"Gbdim":"2323",
"Gbaug":"4322",
"Gb6":"3324",
"GbM7":"0111",
"Gb9":"1101",
"G":"0232",
"G7":"0212",
"Gm":"0231",
"Gm7":"0211",
"Gdim":"0101",
"Gaug":"4332",
"G6":"0202",
"GM7":"0222",
"G9":"2212",
"Ab":"5343",
"Ab7":"1323",
"Abm":"1342",
"Abm7":"0322",
"Abdim":"1212",
"Abaug":"1000",
"Ab6":"1313",
"AbM7":"1333",
"Ab9":"3323",
"A":"2100",
"A7":"0100",
"Am":"2000",
"Am7":"0433",
"Adim":"2323",
"Aaug":"2111",
"A6":"2424",
"AM7":"1100",
"A9":"0102",
"Bb":"3211",
"Bb7":"1211",
"Bbm":"2111",
"Bbm7":"1111",
"Bbdim":"0101",
"Bbaug":"3221",
"Bb6":"0211",
"BbM7":"3210",
"Bb9":"1213",
"B":"4322",
"B7":"2322",
"Bm":"4222",
"Bm7":"2222",
"Bdim":"1212",
"Baug":"4332",
"B6":"1322",
"BM7":"3322",
"B9":"2324"
};
