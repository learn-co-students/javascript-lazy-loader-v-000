"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;
function formatCars(data) {
  var row = '<div class="row">';
  var column = '<div class="col-md-4 car">';
  var model = '<p><strong>Model:</strong> ';
  var year = '<p><strong>Year:</strong> ';

  $.each(data, function(index, car) {
    row += column
    row += '<h2>' + car.Make + '</h2>'
    row += model + car.Model + '</p>';
    row += year + car.Year + '</p>'
    row += '</div>';
  });
  row += '</div>';
  return row;
  
}

function addCarsToDOM(data) {
  var carsData = formatCars(data);
  $('#cars').append(carsData);
}

function fetchJSON() {
var url = baseUrl + page + '/3'
 page ++;
 $.ajax({
 	url: url,
 	content_type: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }, 
    error: function(response) {
      $('body').text("Sorry, there was an error with the request. Please refresh the page.")
    }
 });
}