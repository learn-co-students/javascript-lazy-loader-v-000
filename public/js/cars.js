"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var page = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  var result = '<div class="row">'
  for(var i=0; i<carsJSON.length; i++){
    result += '<div class="col-md-4 car"><h2>' + carsJSON[i].Make + "</h2><p><strong>Model:</strong> " + carsJSON[i].Model + "</p><p><strong>Year:</strong> " + carsJSON[i].Year + "</p></div>"
  }
  result += "</div>"
  return result
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  $('#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
  console.log('I');
  $.ajax({
    url: (baseUrl + page + "/3"),
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
    }
  })
  page += 1;
}
