"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var counter = 3;

function formatCars(carsJSON) {
  var carshtml = '<div class="row">';
  $.each(carsJSON, function(index, car) {
    carshtml += '<div class="col-md-4 car">';
    carshtml += '<h2>' + car.Make + '</h2>';
    carshtml += '<p><strong>Model:</strong> ' + car.Model + '</p>';
    carshtml += '<p><strong>Year:</strong> ' + car.Year + '</p>';
    carshtml += '</div>';
  });
  carshtml += '</div>';
  return carshtml;
}

function addCarsToDOM(carsJSON) {
  var html = formatCars(carsJSON);
  $("#cars").append(html);
}

function fetchJSON() {
  $.ajax({
    url: baseUrl + counter + "/3",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });
  counter++;
}
