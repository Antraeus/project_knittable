$(function() {
  var stGauge;
  var rGauge;
  var needles;
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
    this.needles = needles;
    this.directionUp = direction;
    this.shoulderStyle = shoulders;
    this.neckStyle = crew;
    this.shaping = shaped;
    this.length = hemLong;
    this.fit = ease;
    this.stsPerInch = Math.round(stGauge / 4); //these values are correct
    this.rowsPerInch = Math.round(rGauge / 4);
    this.arrayIndex = counter - 1;
  };
  Sweater.prototype.castOn = function() {
    arrayIndex = counter - 1;
    var stsPerInch = patternLibrary[arrayIndex].stsPerInch;
    var rowsPerInch = patternLibrary[arrayIndex].rowsPerInch;
    var chest = retrievedSizes[sizeIndex].chest;
    var hemCO = ((ease + chest) * stsPerInch);
    console.log(sweaterTitle);
    localStorage.setItem('castOn', JSON.stringify(hemCO));
    localStorage.setItem('stsPerInch', JSON.stringify(stsPerInch));
    localStorage.setItem('rowsPerInch', JSON.stringify(rowsPerInch));
    localStorage.setItem('ease', JSON.stringify(ease));

  };
  Sweater.prototype.noShapeTorso = function() {
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
    var liveSleeveSts = finalArmCirc * stsPerInch - underarmGusset;
    var backSts = (hemCO - 2 * underarmGusset) / 2;
    var frontSts = (hemCO - 2 * underarmGusset) / 2;
    var liveSts = backSts + frontSts + 2 * liveSleeveSts;
    var heldSts = underarmGusset * 4;
    var startYoke = stsPerInch * 4;
    // yoke decrease ratios
    var dec0 = liveSts;
    var dec1 = Math.round((1/8) * dec0);
    var afterDec1 = dec0 - dec1;
    var dec2 = Math.round(0.143 * afterDec1);
    var afterDec2 = afterDec1 - dec2;
    var dec3 = Math.round(0.167 * afterDec2);
    var afterDec3 = afterDec2 - dec3;
    var dec4 = Math.round(0.2 * afterDec3);
    var afterDec4 = afterDec3 - dec4;
    var dec5 = Math.round(0.25 * afterDec4);
    var afterDec5 = afterDec4 - dec5;
    var decInt1 = Math.round(1.8 * rowsPerInch);
    var decInt2 = Math.round(0.9 * decInt1);
    var decInt3 = Math.round(0.6 * decInt2);
    var decInt4 = Math.round(0.8 * decInt3);
    localStorage.setItem('backSts', JSON.stringify(backSts));
    localStorage.setItem('frontSts', JSON.stringify(frontSts));
    localStorage.setItem('liveSts', JSON.stringify(liveSts));
    localStorage.setItem('heldSts', JSON.stringify(heldSts));
    localStorage.setItem('startYoke', JSON.stringify(startYoke));
    localStorage.setItem('dec1', JSON.stringify(dec1)); 
    localStorage.setItem('afterDec1', JSON.stringify(afterDec1));
    localStorage.setItem('dec2', JSON.stringify(dec2)); 
    localStorage.setItem('afterDec2', JSON.stringify(afterDec2));
    localStorage.setItem('dec3', JSON.stringify(dec3)); 
    localStorage.setItem('afterDec3', JSON.stringify(afterDec3));
    localStorage.setItem('dec4', JSON.stringify(dec4)); 
    localStorage.setItem('afterDec4', JSON.stringify(afterDec4));
    localStorage.setItem('dec5', JSON.stringify(dec5)); 
    localStorage.setItem('afterDec5', JSON.stringify(afterDec5));  
    localStorage.setItem('decInt1', JSON.stringify(decInt1));
    localStorage.setItem('decInt2', JSON.stringify(decInt2));
    localStorage.setItem('decInt3', JSON.stringify(decInt3));
    localStorage.setItem('decInt4', JSON.stringify(decInt4));  
  };
  $("#save-new-design").submit(function () { 
    event.preventDefault(); 
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
    needles = Number.parseInt($('#needles').val());
    patternLibrary.push(new Sweater(sweaterTitle, retrievedUser.name));
    Sweater.prototype.castOn();
    Sweater.prototype.noShapeTorso();
    Sweater.prototype.yokeSleeves();
    Sweater.prototype.yokeShoulders();
    var sweaterNumber = 'sweater' + counter + ': ' + sweaterTitle;
    var sweaterProject = patternLibrary[counter-1];
    localStorage.setItem('sweaterNumber', JSON.stringify(sweaterProject));
  })
  
});