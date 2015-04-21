// 'use strict';
$(function() {
  $('#down').prop('disabled', true);
  $('#set-in').prop('disabled', true);
  $('#raglan').prop('disabled', true);
  $('#vee').prop('disabled', true);
  $('#yes-shape').prop('disabled', true);
  $('#yes-hips').prop('disabled', true);

  var $canvas1 = $('#canvas1')[0];
  var ctx1 = $canvas1.getContext('2d');
  var $canvas2 = $('#canvas2')[0];
  var ctx2 = $canvas2.getContext('2d');
  var $canvas3 = $('#canvas3')[0];
  var ctx3 = $canvas3.getContext('2d');
  var $canvas4 = $('#canvas4')[0];
  var ctx4 = $canvas4.getContext('2d');
  var hemLX = 158;
  var hemLY = 300;
  var hemRX = 343;
  var hemRY = 300;
  var armpitLX = 158;
  var armpitLY = 106;
  var armpitRX = 343;
  var armpitRY = 106;
  var shouldLX = 158;
  var shouldLY = 35;
  var shouldRX = 343;
  var shouldRY = 35;
  var cuffLX = 11;
  var cuffLY = 150;
  var cuffRX = 490;
  var cuffRY = 150;
  var wristLX = 30;
  var wristLY = 178;
  var wristRX = 471;
  var wristRY = 178;
  var neckLX = 218;
  var neckLY = 20;
  var neckRX = 283;
  var neckRY = 20;

  function drawCrew() {
    ctx3.strokeStyle = "#000";
    ctx3.beginPath();
    ctx3.moveTo(neckLX, neckLY);
    ctx3.bezierCurveTo(238, 30, 263, 30, neckRX, neckRY);
    ctx3.closePath();
    ctx3.stroke();
  };
  function drawVee() {
    ctx3.strokeStyle = "#000";
    ctx3.beginPath();
    ctx3.moveTo(neckLX, neckLY);
    ctx3.bezierCurveTo(251, 80, 251, 80, neckRX, neckRY);
    ctx3.closePath();
    ctx3.stroke();
  };
  function drawRaglanShoulders() {
    ctx4.strokeStyle = "#000";
    ctx4.beginPath();
    ctx4.moveTo(cuffLX,cuffLY);
    ctx4.bezierCurveTo(100, 70, 165, 18, neckLX, neckLY);
    ctx4.moveTo(cuffRX,cuffRY);
    ctx4.bezierCurveTo(401, 70, 336, 18, neckRX, neckRY);
    ctx4.stroke();
  };
  function drawSetShoulders() {
    ctx4.strokeStyle = "#000";
    ctx4.beginPath();
    ctx4.moveTo(shouldRX,shouldRY);
    ctx4.lineTo(neckRX,neckRY);
    ctx4.closePath();
    ctx4.moveTo(shouldLX,shouldLY);
    ctx4.lineTo(neckLX,neckLY);
    ctx4.closePath();
    ctx4.stroke();
  };
  function drawYokeShoulders() {
    ctx4.strokeStyle = "#000";
    ctx4.beginPath();
    ctx4.moveTo(cuffLX, cuffLY);
    ctx4.bezierCurveTo(90, 70, 140, 30, neckLX, neckLY);
    ctx4.moveTo(cuffRX, cuffRY);
    ctx4.bezierCurveTo(411, 70, 361, 30, neckRX, neckRY);
    ctx4.stroke();
  };
  function drawRaglanSeams() {
    ctx4.strokeStyle = "#999";
    ctx4.beginPath();
    ctx4.moveTo(armpitLX,armpitLY);
    ctx4.lineTo(neckLX,neckLY);
    ctx4.closePath();
    ctx4.moveTo(armpitRX,armpitRY);
    ctx4.lineTo(neckRX,neckRY);
    ctx4.closePath();
    ctx4.stroke();
  };
  function drawSetSeams() {
    ctx4.strokeStyle = "#999";
    ctx4.beginPath();
    ctx4.moveTo(armpitLX,armpitLY);
    ctx4.lineTo(shouldLX,shouldLY);
    ctx4.closePath();
    ctx4.moveTo(armpitRX,armpitRY);
    ctx4.lineTo(shouldRX,shouldRY);
    ctx4.closePath();
    ctx4.stroke();
  };
  function drawRaglanSleeves() {
    ctx4.strokeStyle = "#000";
    ctx4.beginPath();
    ctx4.moveTo(armpitRX,armpitRY);
    ctx4.lineTo(wristRX,wristRY);
    ctx4.lineTo(cuffRX,cuffRY);
    ctx4.moveTo(cuffLX,cuffLY);
    ctx4.lineTo(wristLX,wristLY);
    ctx4.lineTo(armpitLX,armpitLY);
    ctx4.stroke();
  };
  function drawSetSleeves() {
    ctx4.strokeStyle = "#000";
    ctx4.beginPath();
    ctx4.moveTo(armpitRX,armpitRY);
    ctx4.lineTo(wristRX,wristRY);
    ctx4.lineTo(cuffRX,cuffRY);
    ctx4.lineTo(shouldRX,shouldRY);
    ctx4.moveTo(armpitLX,armpitLY);
    ctx4.lineTo(wristLX,wristLY);
    ctx4.lineTo(cuffLX,cuffLY);
    ctx4.lineTo(shouldLX,shouldLY);
    ctx4.stroke();
  };
  function drawYokeSleeves() {
    ctx4.strokeStyle = "#000";
    ctx4.beginPath();
    ctx4.moveTo(armpitRX,armpitRY);
    ctx4.lineTo(wristRX,wristRY);
    ctx4.lineTo(cuffRX,cuffRY);
    ctx4.moveTo(armpitLX,armpitLY);
    ctx4.lineTo(wristLX,wristLY);
    ctx4.lineTo(cuffLX,cuffLY);
    ctx4.stroke();
  };
  function drawShaping() {
    ctx2.strokeStyle = "#000";
    ctx2.beginPath();
    ctx2.moveTo(armpitLX,armpitLY);
    ctx2.bezierCurveTo(170, 200, 170, 220, hemLX, hemLY);
    ctx2.moveTo(armpitRX,armpitRY);
    ctx2.bezierCurveTo(331, 200, 331, 220, hemRX, hemRY);
    ctx2.stroke();
  };
  function drawNoShaping() {
    ctx2.strokeStyle = "#000";
    ctx2.beginPath();
    ctx2.moveTo(armpitLX,armpitLY);
    ctx2.lineTo(hemLX,hemLY);
    ctx2.closePath();
    ctx2.moveTo(armpitRX,armpitRY);
    ctx2.lineTo(hemRX,hemRY);
    ctx2.closePath();
    ctx2.stroke();
  };
  function drawHem() {
    ctx1.beginPath();
    ctx1.moveTo(hemLX,hemLY);
    ctx1.lineTo(hemRX,hemRY);
    ctx1.closePath();
    ctx1.stroke();
  };
  function drawLongHem() {
    ctx1.beginPath();
    ctx1.moveTo(hemLX,hemLY);
    ctx1.lineTo(hemLX,hemLY + 30);
    ctx1.closePath();
    ctx1.moveTo(hemLX,hemLY + 30);
    ctx1.lineTo(hemRX,hemRY + 30);
    ctx1.closePath();
    ctx1.moveTo(hemRX,hemRY + 30);
    ctx1.lineTo(hemRX,hemRY);
    ctx1.closePath();
    ctx1.stroke();
  };
  function drawRaglan() {
    drawRaglanSeams();
    drawRaglanSleeves();
    drawRaglanShoulders();
  };
  function drawYoke() {
    drawYokeShoulders();
    drawYokeSleeves();
  };
  function drawSetIn() {
    drawSetSleeves();
    drawSetShoulders();
    drawSetSeams();
  };
  function clearCanvas1() {
    ctx1.clearRect(0,0,501,501);
  }
  function clearCanvas2() {
    ctx2.clearRect(0,0,501,501);
  }
  function clearCanvas3() {
    ctx3.clearRect(0,0,501,501);
  }
  function clearCanvas4() {
    ctx4.clearRect(0,0,501,501);
  }

  drawYoke();
  drawCrew();
  drawNoShaping();
  drawHem();
  
  $('#no-hips').click(function() {
    if ($('#no-hips').is(':checked'))
      {  
        clearCanvas1();
        drawHem(); 
      }
  });
  $('#yes-hips').click(function() {
    if ($('#yes-hips').is(':checked'))
      {  
        clearCanvas1();
        drawLongHem(); 
      }
  });
  $('#no-shape').click(function() {
    if ($('#no-shape').is(':checked'))
      {  
        clearCanvas2();
        drawNoShaping(); 
      }
  });
  $('#yes-shape').click(function() {
    if ($('#yes-shape').is(':checked'))
      {  
        clearCanvas2();
        drawShaping(); 
      }
  });
  $('#crew').click(function() {
    if ($('#crew').is(':checked'))
      {  
        clearCanvas3();
        drawCrew(); 
      }
  });
  $('#vee').click(function() {
    if ($('#vee').is(':checked'))
      {  
        clearCanvas3();
        drawVee(); 
      }
  });
  $('#raglan').click(function() {
    if ($('#raglan').is(':checked'))
      {  
        clearCanvas4();
        drawRaglan(); 
      }
  });
  $('#set-in').click(function() {
    if ($('#set-in').is(':checked'))
      { 
        clearCanvas4();
        drawSetIn(); 
      }
  });
  $('#yoke').click(function() {
    if ($('#yoke').is(':checked'))
      {
        clearCanvas4();
        drawYoke();
      }
  });
});