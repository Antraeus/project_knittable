$(function(){
  var sweaterSize;
  var sizes = [];
  var Knitter = function(name, options){
    this.name = knitterName;
    this.size = sizes[0].label;
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

$("#nameSave").submit(function () {
  event.preventDefault();
  console.log('You\'ve hit submit!');
  console.log(sizes);
    if ($('#XS').prop('checked')){
      sweaterSize = sizes[0].label;
    }
    if ($('#S').prop('checked')){
      sweaterSize = sizes[1].label;
    }
    if ($('#M').prop('checked')){
      sweaterSize = sizes[2].label;
    }
    if ($('#L').prop('checked')){
      sweaterSize = sizes[3].label;
    }
    if ($('#XL').prop('checked')){
      sweaterSize = sizes[4].label;
    }
    if ($('#XXL').prop('checked')){
      sweaterSize = sizes[5].label;
    }
    console.log(sweaterSize);
});

});

