'use strict';
$(function() {
  var retrievedCO = JSON.parse(localStorage.getItem('castOn'));
  var el = $('#cast-on');
  el.append('CO ' + retrievedCO + 'sts and join in the round.');
});