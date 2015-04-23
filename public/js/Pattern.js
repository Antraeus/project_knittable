
'use strict';
$(function() {
  var retUser = JSON.parse(localStorage.getItem('user'));
  var retSizes = JSON.parse(localStorage.getItem('sizes'));
  var retCurrentSweater = JSON.parse(localStorage.getItem('sweaterNumber'));
  var retStsPerInch = JSON.parse(localStorage.getItem('stsPerInch'));
  var retRowsPerInch = JSON.parse(localStorage.getItem('rowsPerInch'));
  var retEase = JSON.parse(localStorage.getItem('ease'));
  var retNeedles = JSON.parse(localStorage.getItem('needles'));
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
  var retStartYoke = JSON.parse(localStorage.getItem('startYoke'));
  var retDec1 = JSON.parse(localStorage.getItem('dec1'));
  var retAfterDec1 = JSON.parse(localStorage.getItem('afterDec1'));
  var retDec2 = JSON.parse(localStorage.getItem('dec2'));
  var retAfterDec2 = JSON.parse(localStorage.getItem('afterDec2'));
  var retDec3 = JSON.parse(localStorage.getItem('dec3'));
  var retAfterDec3 = JSON.parse(localStorage.getItem('afterDec3'));
  var retDec4 = JSON.parse(localStorage.getItem('dec4'));
  var retAfterDec4 = JSON.parse(localStorage.getItem('afterDec4'));
  var retDec5 = JSON.parse(localStorage.getItem('dec5'));
  var retAfterDec5 = JSON.parse(localStorage.getItem('afterDec5'));
  var retDecInt1 = JSON.parse(localStorage.getItem('decInt1'));
  var retDecInt2 = JSON.parse(localStorage.getItem('decInt2'));
  var retDecInt3 = JSON.parse(localStorage.getItem('decInt3'));
  var retDecInt4 = JSON.parse(localStorage.getItem('decInt4'));
  var displaySize = retSizes[sizeIndex].label;
  var displayWidth = (retSizes[sizeIndex].chest + retEase) / 2;
  var displaySleeve = retSizes[sizeIndex].sleeve;
  var displayTorso = retSizes[sizeIndex].sideSeam;
  var displayArmhole = (retSizes[sizeIndex].armHole + 1);
  var displayFullLength = displayTorso + 6 + displayArmhole;
  var elTitle = $('#sweater-name');
  elTitle.html('Sweater: ' + retCurrentSweater.sweaterName);
  var elSetup = $('#setup');
  elSetup.html('Your sweater will be size ' + displaySize + '. Your working gauge is ' + retStsPerInch + ' sts per inch and ' + retRowsPerInch + ' rows per inch on size ' + retNeedles + ' needles.');
  $('.variable').each(function(i) {
    if ($(this).hasClass('retHemCO')) {
      $(this).html(retHemCO);
    }
    if ($(this).hasClass("retTorsoR")) {
    $(this).html(retTorsoR);
    }
    if ($(this).hasClass("retTorsoIn")) {
    $(this).html(retTorsoIn);
    }
    if ($(this).hasClass("retCuffCO")) {
    $(this).html(retCuffCO);
    }
    if ($(this).hasClass("retIncNum")) {
    $(this).html(retIncNum);
    }
    if ($(this).hasClass("retIncInt")) {
    $(this).html(retIncInt);
    }
    if ($(this).hasClass("retSlvGusset")) {
    $(this).html(retSlvGusset);
    }
    if ($(this).hasClass("retSlvSts")) {
    $(this).html(retSlvSts);
    }
    if ($(this).hasClass("retBackSts")) {
    $(this).html(retBackSts);
    }
    if ($(this).hasClass("retFrontSts")) {
    $(this).html(retFrontSts);
    }
    if ($(this).hasClass("retLiveSts")) {
    $(this).html(retLiveSts);
    }
    if ($(this).hasClass("retHeldSts")) {
    $(this).html(retHeldSts);
    }
    if ($(this).hasClass("retStartYoke")) {
    $(this).html(retStartYoke);
    }
    if ($(this).hasClass("retDec1")) {
    $(this).html(retDec1);
    }
    if ($(this).hasClass("retAfterDec1")) {
    $(this).html(retAfterDec1);
    }
    if ($(this).hasClass("retDec2")) {
    $(this).html(retDec2);
    }
    if ($(this).hasClass("retAfterDec2")) {
    $(this).html(retAfterDec2);
    }
    if ($(this).hasClass("retDec3")) {
    $(this).html(retDec3);
    }
    if ($(this).hasClass("retAfterDec3")) {
    $(this).html(retAfterDec3);
    }
    if ($(this).hasClass("retDec4")) {
    $(this).html(retDec4);
    }
    if ($(this).hasClass("retAfterDec4")) {
    $(this).html(retAfterDec4);
    }
    if ($(this).hasClass("retDec5")) {
    $(this).html(retDec5);
    }
    if ($(this).hasClass("retAfterDec5")) {
    $(this).html(retAfterDec5);
    }
    if ($(this).hasClass("retDecInt1")) {
    $(this).html(retDecInt1);
    }
    if ($(this).hasClass("retDecInt2")) {
    $(this).html(retDecInt2);
    }
    if ($(this).hasClass("retDecInt3")) {
    $(this).html(retDecInt3);
    }
    if ($(this).hasClass("retDecInt4")) {
    $(this).html(retDecInt4);
    }
    if ($(this).hasClass("retDecInt4")) {
    $(this).html(retDecInt4);
    }
    if ($(this).hasClass("retSizesSleeve")) {
    $(this).html(displaySleeve);
    }
    if ($(this).hasClass("displaySize")) {
    $(this).html(displaySize) + ' in.';
    }
    if ($(this).hasClass("displayWidth")) {
    $(this).html(displayWidth + ' in.');
    }
    if ($(this).hasClass("displaySleeve")) {
    $(this).html(displaySleeve + ' in.');
    }
    if ($(this).hasClass("displayTorso")) {
    $(this).html(displayTorso + ' in.');
    }
    if ($(this).hasClass("displayArmhole")) {
    $(this).html(displayArmhole + ' in.');
    }
    if ($(this).hasClass("displayFullLength")) {
    $(this).html(displayFullLength + ' in.');
    }
  });
  $('#print-this').click(function() {
  window.print();
  return false
  })
});