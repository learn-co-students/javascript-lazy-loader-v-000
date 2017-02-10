"use strict";

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = "3";

function formatCars(carsJSON) {
  var html = '<div class="row">';
  $.each(carsJSON, function(i,v){
    html += '<div class="col-md-4 car">';
    html += `<h2>${v["Make"]}</h2>`;
    html += `<p><strong>Model:</strong> ${v["Model"]}</p>`;
    html += `<p><strong>Year:</strong> ${v["Year"]}</p>`;
    html += '</div>';
  });
  return html += '</div>';
}

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
  var url = baseUrl + page +"/3";
  page += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });
}
