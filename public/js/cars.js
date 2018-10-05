"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
//start at the third group of 3
var increment = 3; 
//groups of 3
var grouping = 3;  

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  var htmlString = '<div class="row">';  
  carsJSON.forEach(function(carObject){
    htmlString += '<div class="col-md-4 car">'; 
    htmlString += '<h2>' + carObject["Make"] + '</h2>';  
    htmlString += '<p><strong>Model:</strong> ' + carObject["Model"] + '</p>'; 
    htmlString += '<p><strong>Year:</strong> ' + carObject["Year"] + '</p>'; 
    htmlString += '</div>'; 
  }); 
  htmlString += '</div>'; 
  return htmlString; 
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var carsHTML = formatCars(carsJSON); 
  $("#cars").append(carsHTML); 
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  //
  $.ajax({
    url: baseUrl + "/" + increment + "/" + grouping, 
    contentType: 'application/json', 
    dataType: 'jsonp', 
    success: function(data) {
      addCarsToDOM(data);     
    } 
  }); 
  increment ++;   
}
