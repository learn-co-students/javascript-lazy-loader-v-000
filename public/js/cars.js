"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var car_set = 3;

function clicker() {
  $("#load-cars").on("click", function(){
    fetchJSON(car_set)
  });
};

function formatCars(carsJSON) {
  var html = ""
  carsJSON.forEach(function(car){
    html += '<div class="col-md-4 car">' + `<h2>${car.Make}</h2><p><strong>Model:</strong> ${car.Model}</p><p><strong>Year:</strong> ${car.Year}</p>` + '</div>'
  });

  return '<div class="row">' + html + '</div>'
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"

    //<div class="col-md-4 car">
    //  <h2>GMC</h2>
    //  <p><strong>Model:</strong> Acadia</p>
    //  <p><strong>Year:</strong> 2013</p>
    //</div>
}

function addCarsToDOM(carsJSON) {
  var formatted_html = formatCars(carsJSON);
  $("#cars").append(formatted_html);
  //var html = ""
  //carsJSON.forEach(function(car){
  //  html += formatCars(car);
  //});
  //$("#cars").append(html)

  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
  var url = baseUrl + car_set + "/3";
  car_set += 1;
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
// this function will make the ajax call
// on success of the ajax call, it will pass the returned data
// to addCarsToDOM()



//function handlebarsSetup(context) {
//  Handlebars.registerPartial($(carDetails"cars-row-details-partial").html())
//};
