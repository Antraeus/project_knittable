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
    console.log('sizeIndex: ' + sizeIndex);


  


  console.log('retrievedUser: ' + retrievedUser);
  console.log('retrievedSizes[sizeIndex].chest: ' + retrievedSizes[sizeIndex].chest);
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
    var CO = ((ease + chest) * stsPerInch);
    localStorage.setItem('castOn', JSON.stringify(CO));
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
  })
  
  // console.log(this.rowsPerInch); 
});