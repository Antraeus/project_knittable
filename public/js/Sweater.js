$(function() {
  var stGauge;
  var rGauge;
  var sweaterTitle;
  var direction;
  var shoulders;
  var crew;
  var shaped;
  var hemLong;
  var ease;
  var retrievedUser = JSON.parse(localStorage.getItem('user'));
  var retrievedSizes = JSON.parse(localStorage.getItem('sizes'));
  var sizeIndex;
    if (retrievedUser.size === 'XS') {
      sizeIndex = 0;
    }
    if (retrievedUser.size === 'S') {
      sizeIndex = 1;
    }
    if (retrievedUser.size === 'M') {
      sizeIndex = 2;
    }
    if (retrievedUser.size === 'L') {
      sizeIndex = 3;
    }
    if (retrievedUser.size === 'XL') {
      sizeIndex = 4;
    }
    if (retrievedUser.size === 'XXL') {
      sizeIndex = 5;
    }
  var patternLibrary = [];
  var counter = 0;
  var arrayIndex;
  var Sweater = function(sweaterName, knitter, options) {
    this.sweaterName = sweaterTitle;
    this.knitter = knitter;
    this.stGauge = stGauge;
    this.rGauge = rGauge;
    this.directionUp = direction;
    this.shoulderStyle = shoulders;
    this.neckStyle = crew;
    this.shaping = shaped;
    this.length = hemLong;
    this.fit = ease;
    this.stsPerInch = Math.round(stGauge / 4); //these values are correct
    this.rowsPerInch = Math.round(rGauge / 4);
  };
  Sweater.prototype.castOn = function() {
    arrayIndex = counter - 1;
    console.log('Sts per inch: ' + patternLibrary[arrayIndex].stsPerInch);
    var stsPerInch = patternLibrary[arrayIndex].stsPerInch;
    var chest = retrievedSizes[sizeIndex].chest;
    var hemCO = ((ease + chest) * stsPerInch);
    localStorage.setItem('castOn', JSON.stringify(hemCO));
  };
  Sweater.prototype.noShapeTorso = function() {
    arrayIndex = counter - 1;
    var rowsPerInch = patternLibrary[arrayIndex].rowsPerInch;
    var backLength = retrievedSizes[sizeIndex].backLength;
    var armHole = retrievedSizes[sizeIndex].armHole;
    var torsoLengthR = ((backLength - armHole + 6) * rowsPerInch);
    var torsoLengthIn = backLength - armHole + 6;
    localStorage.setItem('torsoR', JSON.stringify(torsoLengthR));
    localStorage.setItem('torsoIn', JSON.stringify(torsoLengthIn));
  };
  Sweater.prototype.yokeSleeves = function() {
    arrayIndex = counter - 1;
    var rowsPerInch = patternLibrary[arrayIndex].rowsPerInch;
    var stsPerInch = patternLibrary[arrayIndex].stsPerInch;
    var upperArm = retrievedSizes[sizeIndex].upperArm;
    var sleeve = retrievedSizes[sizeIndex].sleeve;
    var finalArmCirc = upperArm + ease;
    var cuffCO = (Math.round(0.65 * (finalArmCirc))) * stsPerInch;
    var toAdd;
      if ((stsPerInch * finalArmCirc - cuffCO) % 2 === 0) {
        toAdd = stsPerInch * finalArmCirc - cuffCO;
      } else {
        toAdd = stsPerInch * finalArmCirc - cuffCO + 1;
      } 
    var incNum = toAdd / 2;
    var incInterval = Math.floor((sleeve * rowsPerInch) / incNum);
    var underarmGusset = Math.floor((0.2 * (finalArmCirc)) * stsPerInch);
    var liveSleeveSts = finalArmCirc * stsPerInch - underarmGusset;
    localStorage.setItem('cuffCO', JSON.stringify(cuffCO));
    localStorage.setItem('incNum', JSON.stringify(incInterval));
    localStorage.setItem('incInt', JSON.stringify(incInterval));
    localStorage.setItem('sleeveGusset', JSON.stringify(underarmGusset));
    localStorage.setItem('liveSleeveSts', JSON.stringify(liveSleeveSts));
  };
  Sweater.prototype.yokeShoulders = function() {
    arrayIndex = counter - 1;
    var rowsPerInch = patternLibrary[arrayIndex].rowsPerInch;
    var stsPerInch = patternLibrary[arrayIndex].stsPerInch;
    var upperArm = retrievedSizes[sizeIndex].upperArm;
    var finalArmCirc = upperArm + ease;
    var underarmGusset = Math.floor((0.2 * (finalArmCirc)) * stsPerInch);
    var chest = retrievedSizes[sizeIndex].chest;
    var hemCO = ((ease + chest) * stsPerInch);
    var backSts = (hemCO - 2 * underarmGusset) / 2;
    console.log(backSts);
    // localStorage.setItem('cuffCO', JSON.stringify(cuffCO));
    // localStorage.setItem('incNum', JSON.stringify(incInterval));
    // localStorage.setItem('incInt', JSON.stringify(incInterval));
  };
  $("#save-new-design").submit(function () { // listens for the form to submit
    event.preventDefault(); //prevents page refresh
    sweaterTitle = $('#project-name').val();
    if ($('#up').prop('checked')) {
      direction = true;
    } else {
      direction = false;
    }
    if ($('#yoke').prop('checked')) {
      shoulders = 'yoke';
    } 
    if ($('#set-in').prop('checked')) {
      shoulders = 'set-in';
    }
    if ($('#raglan').prop('checked')) {
      shoulders = 'raglan';
    }
    if ($('#crew').prop('checked')) {
      crew = true;
    } 
    if ($('#vee').prop('checked')) {
      crew = false;
    }
    if ($('#yes-shape').prop('checked')) {
      shaped = true;
    } else {
      shaped = false;
    }
    if ($('#yes-hips').prop('checked')) {
      hemLong = true;
    } else {
      hemLong = false;
    }
    if ($('#close').prop('checked')) {
      ease = 2;
    } else {
      ease = 4;
    }
    counter++
    stGauge = Number.parseInt($('#stitch-gauge').val());
    rGauge = Number.parseInt($('#row-gauge').val());
    console.log('St Gauge: ' + stGauge);
    console.log('St Gauge type: ' + typeof(stGauge));
    console.log('Row Gauge: ' + rGauge);
    console.log('Row Gauge type: ' + typeof(rGauge));
    console.log('Sweater Title: ' + sweaterTitle);
    console.log('Direction Up: ' + direction);
    console.log('Shoulders: ' + shoulders);
    console.log('Crew neck: ' + crew);
    console.log('Shaped: ' + shaped);
    console.log('Long: ' + hemLong);
    console.log('Fit: ' + ease);
    console.log('Counter: ' + counter);
    patternLibrary.push(new Sweater(sweaterTitle, retrievedUser.name));
    Sweater.prototype.castOn();
    Sweater.prototype.noShapeTorso();
    Sweater.prototype.yokeSleeves();
    Sweater.prototype.yokeShoulders();
  })
  
});