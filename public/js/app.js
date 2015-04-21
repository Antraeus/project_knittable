'use strict';
$(function() {

$("#nameSave").submit(function () { // listens for the form to submit
  event.preventDefault(); //prevents page refresh
  localStorage.clear(); //clears localStorage
  var $userName = $('#knitter-name').val(); // sets entered name to $userName
  localStorage.setItem('knitter', $userName); // puts $userName in localStorage with a key of 'knitter'
  $('#knitter-name').val(''); // removed entered text from form input
});


});