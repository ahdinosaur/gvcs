var d3 = require('d3');
var topojson = require('topojson');

var globe = require('./globe');

var radius = 200;

var projection = d3.geo.orthographic()
  .scale(radius - 2)
  .clipAngle(90)
  .translate([radius, radius]);

var canvas = d3.select(".market .info").append("canvas")
  .attr("width", radius * 2)
  .attr("height", radius * 2);

var c = canvas.node().getContext("2d");

var path = d3.geo.path()
  .projection(projection)
  .context(c);

var title = d3.select(".market .info .title");

globe(function (globe, land, countries, borders) {

  var select = d3.select(".market .field .input").append("select");

  var options = select.selectAll("option")
    .data(countries)
    .enter()
    .append("option");

  options
    .text(function (d) { return d.name });

  var transition = function transition() {

    if (!this.selectedIndex) { return; }

    var selection = countries[this.selectedIndex];

    d3.transition()
    .duration(1250)
    .each("start", function() {
      title.text(selection.name);
    })
    .tween("rotate", function() {
      var p = d3.geo.centroid(selection),
          r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
      return function(t) {
        projection.rotate(r(t));
        c.clearRect(0, 0, radius * 2, radius * 2);
        c.fillStyle = "#bbb", c.beginPath(), path(land), c.fill();
        c.fillStyle = "#f00", c.beginPath(), path(selection), c.fill();
        c.strokeStyle = "#fff", c.lineWidth = .5, c.beginPath(), path(borders), c.stroke();
        c.strokeStyle = "#000", c.lineWidth = 2, c.beginPath(), path(globe), c.stroke();
      };
    });
  };

  select.on("change", transition);
});