'use strict';
$(function() {
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
  var retrievedHemCO = JSON.parse(localStorage.getItem('castOn'));
  var retrievedTorsoR = JSON.parse(localStorage.getItem('torsoR'));
  var retrievedTorsoIn = JSON.parse(localStorage.getItem('torsoIn'));
  var retrievedCuffCO = JSON.parse(localStorage.getItem('cuffCO'));
  var retrievedIncNum = JSON.parse(localStorage.getItem('incNum'));
  var retrievedIncInt = JSON.parse(localStorage.getItem('incInt'));
  var retrievedSlvGusset = JSON.parse(localStorage.getItem('sleeveGusset'));
  var retrievedSlvSts = JSON.parse(localStorage.getItem('liveSleeveSts'));
  var el = $('#directions');
  el.append('<p>CO ' + retrievedHemCO + ' sts and join in the round. Work even for ' + retrievedTorsoR + ' rows (' + retrievedTorsoIn + ' inches) to complete the body of the sweater. Place all sts on a st holder.</p><h4>Sleeves (make 2)</h4><p>Cast on ' + retrievedCuffCO + ' sts and join in the round.  Work in 1x1 ribbing for 1.5 inches. In next round, begin increasing:</p><p><sup>*</sup>Increase Round: K1, m1, k to last 2 sts, m1, k1.</p><p>Work ' + retrievedIncInt + ' rows. Repeat from <sup>*</sup> until you have worked the increase round a total of ' + retrievedIncInt + ' times. Work without increasing until sleeve measures ' + retrievedSizes[sizeIndex].sleeve + 'inches from cast-on edge. Place last ' + retrievedSlvGusset + ' sts from the final round onto a st holder. These will form the underarm gusset.</p><h4>Yoke</h4><p>To begin, place ' + retrievedSlvGusset + ' sts from the body onto a holder.  Work across X sts for the back of the body, ' + retrievedSlvSts + ' sts from sleeve #1, X sts for the front of the body, place next ' + retrievedSlvGusset + ' sts from the body onto a holder, and work ' + retrievedSlvSts + ' sts from sleeve #2.  You should have BLAH live sts, with BLAH sts reserved on st holders at the underams.</p>');
});