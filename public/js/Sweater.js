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
  var counter = 0;
  $("#save-new-design").submit(function () { // listens for the form to submit
    event.preventDefault(); //prevents page refresh
    stGauge = $('#stitch-gauge').val();
    rGauge = $('#row-gauge').val();
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
    console.log('St Gauge: ' + stGauge);
    console.log('Row Gauge: ' + rGauge);
    console.log('Sweater Title: ' + sweaterTitle);
    console.log('Direction Up: ' + direction);
    console.log('Shoulders: ' + shoulders);
    console.log('Crew neck: ' + crew);
    console.log('Shaped: ' + shaped);
    console.log('Long: ' + hemLong);
    console.log('Fit: ' + ease);
    console.log('Counter: ' + counter);

    var sweater = new Sweater(sweaterTitle, );
    console.log(sweater);
    // localStorage.setItem('sweater1', $userName); // puts sweater in localStorage with a key of 'sweater1'
    // $('#knitter-name').val(''); // removed entered text from form input
  })

  var Sweater = function(sweaterName, knitter, options) {
    this.sweaterName = sweaterTitle;
    this.directionUp = direction;
    this.shoulderStyle = shoulders;
    this.neckStyle = crew;
    this.shaping = shaped;
    this.length = hemLong;
    this.fit = ease;
    this.stsPerInch = stGauge / 4;
    this.rowsPerInch = rGauge / 4;
  };
  Sweater.prototype.Body = function() {
    var CO = this.stsPerInch * ()
    var el = $('#body');
    el.text('CO ' +  + '')
  };
  console.log(rowsPerInch);

  
});