"use strict";

var baseNum = 3;
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  var html = "<div class=\"row\">";
  $.each(carsJSON, function(index, car) {
    html += "<div class=\"col-md-4 car\">";
    html += "<h2>" + car.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + car.Model + "</p>";
    html += "<p><strong>Year:</strong> " + car.Year + "</p>";
    html += "</div>";
  });
  html += "</div>"
  return html;
}

function addCarsToDOM(carsJSON) {
  var carsHTML = formatCars(carsJSON);
  $("#cars").append(carsHTML);
}

function fetchJSON() {
  var url = baseUrl + baseNum + "/3";
  baseNum += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars) {
      addCarsToDOM(cars);
    },
    error: function(response) {
      $('body').text("There was an error. Please refresh the page.")
    }
  });
}
