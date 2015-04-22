$(function() {
  $('label:not(#guage, #your-sweater)').hide();
  $('legend:not(#guage)').hide();
  $('p:not(.design-instructions)').hide();
  $('#your-sweate')
  $('.save-design').hide();
});

  $(function() {
    $('#first-step').on('click', function() {
      $('#make').fadeIn(700);
      $('.reminder').fadeIn(700);
      $('.how').fadeIn(700);
      $('#direcciones1, #direcciones2').fadeIn(700);
    });
  });

$(function() {
  $('#up').on('click', function() {
    $('.styling').fadeIn(700);
    $('#espalda1, #espalda2, #espalda3').fadeIn(700);
  });
});

$(function() {
  $('#yoke').on('click', function() {
    $('.cuello').fadeIn(700);
    $('#cuello1, #cuello2').fadeIn(700);
  });
});
