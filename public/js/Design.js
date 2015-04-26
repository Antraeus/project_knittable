$(function() {
  $('h4:not(.show-on-arrival)').hide();
  $('label:not(.show-on-arrival)').hide();
  $('p:not(.show-on-arrival)').hide();
  $('hr:not(.show-on-arrival)').hide()
  $('#go-to-pattern').hide();
  $('#save-design').hide();
});

$(function() {
  $('#first-step').click(function() {
    $('.choices').fadeIn(700);
    $('#first-step').hide();
  });
});

$(function() {
  $('#up').click(function() {
    $('.shoulder-construction').fadeIn(700);
    // KEEP THIS for future messing around
    // var el = $('#render')[0];
    // el.style.marginTop = "7em";
  });
  $('#down').click(function() {
    $('.shoulder-construction').fadeIn(700);
  });
});

$(function() {
  $('#yoke').click(function() {
    $('.collar').fadeIn(700);
  });
  $('#set-in').click(function() {
    $('.collar').fadeIn(700);
  });
  $('#raglan').click(function() {
    $('.collar').fadeIn(700);
  });
});

$(function() {
  $('#crew').click(function() {
    $('.waist-shape').fadeIn(700);
  });
  $('#vee').click(function() {
    $('.waist-shape').fadeIn(700);
  });
});

$(function() {
  $('#no-shape').click(function() {
    $('.torso-length').fadeIn(700);
  });
  $('#yes-shape').click(function() {
    $('.torso-length').fadeIn(700);
  });
});

$(function() {
  $('#no-hips').click(function() {
    $('.fit').fadeIn(700);
  });
  $('#yes-hips').click(function() {
    $('.fit').fadeIn(700);
  });
});

$(function() {
  $('#loose').click(function() {
    $('#save-design').fadeIn(700);
  });
  $('#close').click(function() {
    $('#save-design').fadeIn(700);
  });
});

$(function() {
  $('#save-design').click(function() {
    $('#go-to-pattern').fadeIn(700);
    $('#save-design').fadeOut(700);
  });
});

$(function() {
  $('#go-to-pattern').click(function() {
    window.location.href='pattern.html';
  });
});
