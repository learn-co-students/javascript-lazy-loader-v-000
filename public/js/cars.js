"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var counter = 2

function formatCars(carsJSON) {
	var html = '<div class="row">'
	$.each(carsJSON, function(index, value){
		html += '<div class="col-md-4 car">'
		html += '<h2>' + value["Make"] + '</h2>'
		html += '<p><strong>Model:</strong> ' + value["Model"] + "</p>"
		html += '<p><strong>Year:</strong> ' + value["Year"] + "</p>"
		html += '</div>'
	})
	html += "</div>"
	return html
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
}

        // <div class="row">
        //   <div class="col-md-4 car">
        //     <h2>Chevrolet</h2>
        //     <p><strong>Model:</strong> Tahoe</p>
        //     <p><strong>Year:</strong> 2012</p>
        //   </div>
        //   <div class="col-md-4 car">
        //     <h2>Toyota</h2>
        //     <p><strong>Model:</strong> Camry</p>
        //     <p><strong>Year:</strong> 2002</p>
        //   </div>
        //   <div class="col-md-4 car">
        //     <h2>Mercedes-Benz</h2>
        //     <p><strong>Model:</strong> E-Class</p>
        //     <p><strong>Year:</strong> 1998</p>
        //   </div>
        // </div>

function addCarsToDOM(carsJSON) {
	var html = formatCars(carsJSON);
	$('#cars').append(html);
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  counter++;
  var searchTerm = baseUrl + counter + "/3"
  $.ajax( {
  	type: 'GET',
  	dataType: 'jsonp',
  	data: {},
  	crossDomain: 'true',
  	url: searchTerm,
  	success: function(response) {
  		addCarsToDOM(response)
  	}
  });
}