$(function(){
  var sweaterSize;
  var knitterName;
  var currentUser;
  var sizeIndex;
  var sizes = [];
  var Knitter = function(name, options){
    this.name = knitterName;
    this.size = sizes[sizeIndex].label;
  }
  var Size = function(label, options){
    this.label = label;
    this.chest = options.chest;
    this.sleeve = options.sleeve;
    this.upperArm = options.upperArm;
    this.armHole = options.armHole;
    this.waist = options.waist;
    this.hips = options.hips;
    this.backLength = options.backLength;
    this.sideSeam = this.backLength - this.armHole;
  }
  sizes.push(new Size('XS', {
    chest: 30, sleeve:16.5, upperArm:9.75, armHole:6.5, waist:24, hips:34, backLength: 16.5}));
  sizes.push(new Size('S', {
    chest:34, sleeve:17, upperArm: 10.25, armHole: 7, waist: 26.5, hips: 36, backLength: 17}));
  sizes.push(new Size('M', {
    chest: 38, sleeve: 17, upperArm: 11, armHole: 7.5, waist: 30, hips: 40, backLength: 17.25}));
  sizes.push(new Size('L', {
    chest: 42, sleeve: 17.5, upperArm: 12, armHole: 8, waist: 34, hips: 44, backLength: 17.5}));
  sizes.push(new Size('XL', {
    chest: 46, sleeve: 17.5, upperArm: 13.5, armHole: 8.5, waist: 38, hips: 48, backLength: 17.75}));
  sizes.push(new Size('XXL', {
    chest: 50, sleeve: 18, upperArm: 15.5, armHole: 9, waist: 42, hips: 53, backLength: 18}));

  $(function() {
      $('#start-design').click(function(){
        window.location.href='design.html';
      });
    });

  $(function() {
    $('#start-design').hide();
  });

  $(function() {
    $("#knitter-name").focus(function(){
      $("#knitter-name").val('');
    })
  })

  $("#nameSave").submit(function () {
    event.preventDefault();
    sizeIndex = 0;
    if ($('#XS').prop('checked')){
      sweaterSize = sizes[0].label;
    }
    if ($('#S').prop('checked')){
      sizeIndex = 1;
      sweaterSize = sizes[1].label;
    }
    if ($('#M').prop('checked')){
      sizeIndex = 2;
      sweaterSize = sizes[2].label;
    }
    if ($('#L').prop('checked')){
      sizeIndex = 3;
      sweaterSize = sizes[3].label;
    }
    if ($('#XL').prop('checked')){
      sizeIndex = 4;
      sweaterSize = sizes[4].label;
    }
    if ($('#XXL').prop('checked')){
      sizeIndex = 5;
      sweaterSize = sizes[5].label;
    }
    knitterName = $('#knitter-name').val();
    currentUser = new Knitter (knitterName);
    localStorage.setItem('user', JSON.stringify(currentUser));
    localStorage.setItem('sizes', JSON.stringify(sizes)); 
    $('#submit').hide();
    $('#start-design').fadeIn();
  });

  var visited = JSON.parse(localStorage.getItem('visited'));
  var secondTime = function() {
    var $retrieveOldSweater = $('<p><span class="colorize">Hello! It looks like you\'ve been here before.</span></p><p id="secondTime">Want to retrieve the sweater you made last time?</p>');
    if (visited === true) {
      $('#enter-name').hide();
      var $newHomeSection = $('<section id="alternate-enter-name"></section>');
      $('.welcome').after($newHomeSection);
      $newHomeSection.append($retrieveOldSweater);
      var $homePatternButton = $('<button id="to-pattern">Yes, view pattern »</button>');
      $('p#secondTime').after($homePatternButton);
      var $startNewDesign = $('<p id="startNew">If you\'d like to make a new pattern clear your old pattern first.</p>');
      $('#alternate-enter-name').append($startNewDesign);
      var $clearButton = $('<button id="clearPattern">Clear old pattern</button>');
      $('p#startNew').after($clearButton);
    }
  }

   $(function() {
    $('#to-pattern').click(function() {
      window.location.href='pattern.html';
    });
  });

  $(function() {
    $('#clearPattern').click(function() {
      localStorage.clear();
      console.log('i hear you');
      $('#alternate-enter-name').hide();
      $('#enter-name').show();
    });
  });

  secondTime();
});

