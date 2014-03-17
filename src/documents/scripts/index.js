var d3 = require('d3');
var topojson = require('topojson');

var globe = require('./globe');

var width = 960;
var height = 500;

var projection = d3.geo.orthographic()
  .scale(248)
  .clipAngle(90);

var canvas = d3.select("main").append("canvas")
  .attr("width", width)
  .attr("height", height);

var c = canvas.node().getContext("2d");

var path = d3.geo.path()
  .projection(projection)
  .context(c);

var title = d3.select("h2");

globe(function (land, countries, borders) {

  var select = d3.select("main").append("select");

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
            c.clearRect(0, 0, width, height);
            c.fillStyle = "#bbb", c.beginPath(), path(land), c.fill();
            c.fillStyle = "#f00", c.beginPath(), path(selection), c.fill();
            c.strokeStyle = "#fff", c.lineWidth = .5, c.beginPath(), path(borders), c.stroke();
            c.strokeStyle = "#000", c.lineWidth = 2, c.beginPath(), path(globe), c.stroke();
          };
        })
      .transition()
        .each("end", transition);
  };

  select.on("change", transition);
});