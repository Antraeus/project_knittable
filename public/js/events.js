$(function() {
  $('h4:not(#guage-legend)').hide();
  $('label:not(#for-project-name, #for-row-guage, #for-needle-size, #for-stitch-guage)').hide();
  $('p:not(.design-instructions)').hide();
  $('.save-design').hide();
  $('hr:not(#first-break)').hide();
});

  $(function() {
    $('#first-step').on('click', function() {
      $('#make').fadeIn(700);
      $('#second-break').fadeIn(700);
      $('.reminder').fadeIn(700);
      $('.how').fadeIn(700);
      $('#for-up, #for-down').fadeIn(700);
    });
  });

$(function() {
  $('#up').on('click', function() {
    $('.shoulder-construction').fadeIn(700);
    $('#for-yoke, #for-set, #for-raglan').fadeIn(700);
  });
});

$(function() {
  $('#yoke').on('click', function() {
    $('.collar').fadeIn(700);
    $('#for-crew, #for-vee').fadeIn(700);
  });
});

$(function() {
  $('#crew').on('click', function() {
    $('.waist-shape').fadeIn(700);
    $('#for-yes-shape, #for-no-shape'). fadeIn(700);
  });
});

$(function() {
  $('#no-shape').on('click', function() {
    $('.torso-length').fadeIn(700);
    $('#for-yes-hips, #for-no-hips').fadeIn(700);
  });
});

$(function() {
  $('#no-hips').on('click', function() {
    $('.fit').fadeIn(700);
    $('#for-loose, #for-close').fadeIn(700);
  });
});

$(function() {
  $('#close').on('click', function() {
    $('.save-design').fadeIn(700);
  });
});
