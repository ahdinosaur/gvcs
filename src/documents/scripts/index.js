var d3 = require('d3');
var topojson = require('topojson');
var $ = jQuery = require('jquery');
require('./vendor/jquery-easing');
require('semantic/src/modules/accordion');
require('semantic/src/modules/dimmer');
require('semantic/src/modules/modal');

$(function () {
  $('.ui.accordion').accordion();
  $('.ui.login.modal').modal('attach events', '.login.button', 'show');
  $('.ui.login.modal .actions .submit').click(function () {
    window.location.href = "./compass.html";
  });
  $('.ui.signup.modal').modal('attach events', '.signup.button', 'show');
  $('.ui.signup.modal .actions .submit').click(function () {
    window.location.href = "./compass.html";
  });
  $('body').attr("style",
    "background: -webkit-linear-gradient(to left, #444, #fff, #444); " +
    "background: -moz-linear-gradient(to left, #444, #fff, #444); " +
    "background: -ms-linear-gradient(to left, #444, #fff, #444); " +
    "background: -o-linear-gradient(to left, #444, #fff, #444); " +
    "background: linear-gradient(to left, #444, #fff, #444); " +
    "background: -webkit-radial-gradient(circle, #fff, #444); " +
    "background: -moz-radial-gradient(circle, #fff, #444); " +
    "background: -o-radial-gradient(circle, #fff, #444); " +
    "background: radial-gradient(circle, #fff, #444);"
  );
});

var globe = require('./globe');

var projection = d3.geo.orthographic()
  .clipAngle(90);

var t0 = Date.now();

var canvas = d3.select("body").insert("canvas", ":first-child")
  .attr("class", "background");

var updateWindow = function () {
  var w = window;
  var d = document;
  var e = document.documentElement;
  var g = d.getElementsByTagName('body')[0];
  var x = w.innerWidth || e.clientWidth || g.clientWidth;
  var y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  var cx = (x / 2);
  var cy = (y / 2);
  var r = Math.min(cx, cy);
  
  canvas.attr("width", r * 2).attr("height", r * 2);
  canvas.attr("style", "left: " + ((x / 2 ) - r) + "px;");
  projection.translate([r, r]);
  projection.scale(r);
};
window.onresize = updateWindow;
updateWindow();

var path = d3.geo.path()
  .projection(projection);

var velocity = 0.002;

globe(function (globe, land, countries, borders) {

  d3.timer(function () {
    var t = Date.now() - t0;

    var c = canvas.node().getContext("2d");
    var p = path.context(c);

    var angle = velocity * t;
    projection.rotate([angle, 0, 0]);
    c.clearRect(0, 0, canvas.attr('width'), canvas.attr('height'));
    c.fillStyle = "#d4ffff", c.lineWidth = 2, c.beginPath(), p(globe), c.fill();
    c.fillStyle = "#d4c4aa", c.beginPath(), p(land), c.fill();
    c.strokeStyle = "#fff", c.lineWidth = .5, c.beginPath(), p(borders), c.stroke();
    c.strokeStyle = "#666", c.lineWidth = 2, c.beginPath(), p(globe), c.stroke();
  });
});