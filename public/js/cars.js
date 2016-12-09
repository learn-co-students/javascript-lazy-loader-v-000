"use strict";

// this is the base API url
var pageNumber = 3;
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(cars) {
  // turns car JSON into Bootstrapped HTML
  var html = "<div class=\"row\">";
  // loop through each car
  $.each(cars, function(index, car) {
    // this function shold return a string of properly formatted html
  // to format three cars, each in a div with a class "col-md-4", in a
    html += "<div class=\"col-md-4 car\">";
    html += "<h2>" + car.Make + "</h2>";
    html += "<p><strong>Model:</strong> " + car.Model + "</p>";
    html += "<p><strong>Year:</strong> " + car.Year + "</p>";
    html += "</div>";
  });
  html += "</div>"
  return html;

}



function addCarsToDOM(cars) {
  // this function should pass carsJSON to formatCars() and then
  var carsHTML = formatCars(cars);
  // add the resulting HTML to the div with an id of "cars"
  $("#cars").append(carsHTML);
}

function fetchJSON() {
  // this function will make the ajax call

  var url = baseUrl + pageNumber + "/3";
  pageNumber += 1;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    // on success of the ajax call, it will pass the returned data
    // to addCarsToDOM()
    success: function(cars) {
      addCarsToDOM(cars);
    },
    error: function(response) {
      $('body').text("Sorry, there was an error with the request. Please refresh the page.")
    }
  });
}
