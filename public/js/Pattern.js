'use strict';
$(function() {
  var retUser = JSON.parse(localStorage.getItem('user'));
  var retSizes = JSON.parse(localStorage.getItem('sizes'));
  var sizeIndex;
    if (retUser.size === 'XS') {
      sizeIndex = 0;
    }
    if (retUser.size === 'S') {
      sizeIndex = 1;
    }
    if (retUser.size === 'M') {
      sizeIndex = 2;
    }
    if (retUser.size === 'L') {
      sizeIndex = 3;
    }
    if (retUser.size === 'XL') {
      sizeIndex = 4;
    }
    if (retUser.size === 'XXL') {
      sizeIndex = 5;
    }
  var retHemCO = JSON.parse(localStorage.getItem('castOn'));
  var retTorsoR = JSON.parse(localStorage.getItem('torsoR'));
  var retTorsoIn = JSON.parse(localStorage.getItem('torsoIn'));
  var retCuffCO = JSON.parse(localStorage.getItem('cuffCO'));
  var retIncNum = JSON.parse(localStorage.getItem('incNum'));
  var retIncInt = JSON.parse(localStorage.getItem('incInt'));
  var retSlvGusset = JSON.parse(localStorage.getItem('sleeveGusset'));
  var retSlvSts = JSON.parse(localStorage.getItem('liveSleeveSts'));
  var retBackSts = JSON.parse(localStorage.getItem('backSts'));
  var retFrontSts = JSON.parse(localStorage.getItem('frontSts'));
  var retLiveSts = JSON.parse(localStorage.getItem('liveSts'));
  var retHeldSts = JSON.parse(localStorage.getItem('heldSts'));
  console.log('Back sts: ' + retBackSts);
  console.log('Front sts: ' + retFrontSts);
  var el = $('#directions');
  el.append('<p>CO ' + retHemCO + ' sts and join in the round. Work even for ' + retTorsoR + ' rows (' + retTorsoIn + ' inches) to complete the body of the sweater. Place all sts on a st holder.</p><h4>Sleeves (make 2)</h4><p>Cast on ' + retCuffCO + ' sts and join in the round.  Work in 1x1 ribbing for 1.5 inches. In next round, begin increasing:</p><p><sup>*</sup>Increase Round: K1, m1, k to last 2 sts, m1, k1.</p><p>Work ' + retIncInt + ' rows. Repeat from <sup>*</sup> until you have worked the increase round a total of ' + retIncInt + ' times. Work without increasing until sleeve measures ' + retSizes[sizeIndex].sleeve + 'inches from cast-on edge. Place last ' + retSlvGusset + ' sts from the final round onto a st holder. These will form the underarm gusset.</p><h4>Yoke</h4><p>To begin, place ' + retSlvGusset + ' sts from the body onto a holder.  Work across ' + retBackSts + ' sts for the back of the body, ' + retSlvSts + ' sts from sleeve #1, ' + retFrontSts + ' sts for the front of the body, place next ' + retSlvGusset + ' sts from the body onto a holder, and work ' + retSlvSts + ' sts from sleeve #2.  You should have ' + retLiveSts + ' live sts, with ' + retHeldSts + ' sts reserved on st holders at the underams.</p><p></p>');
});