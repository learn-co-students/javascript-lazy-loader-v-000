"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var carsPerRow = 3;

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  //var make = carsJSON[0]["Make"]
  var outhtml = '<div class="row">';

    $.each(carsJSON, function(index) {
      outhtml = outhtml + '<div class="col-md-4 car">';
      outhtml = outhtml + '<h2>' + carsJSON[index]["Make"] + '</h2>';
      outhtml = outhtml + '<p><strong>Model:</strong> ' + carsJSON[index]["Model"] + '</p>';
      outhtml = outhtml + '<p><strong>Year:</strong> ' + carsJSON[index]["Year"] + '</p></div>';
    });
    outhtml = outhtml + '</div>' ;


  return outhtml;
}

function addCarsToDOM(carsJSON) {

  alert("hello2   "+ carsJSON.length)
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
//  if(carsJSON.length == 0) {
//    $("#cars").append('<div><p>End of list</p></div>');
//  }
//  else {
    $("#cars").append(formatCars(carsJSON));
//  }
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()

  var nextRow = $('#cars').children().length;
  alert(nextRow);
  nextRow = nextRow+1;
  //http://mimeocarlisting.azurewebsites.net/api/cars/1/6
  var url = baseUrl + '/' + nextRow + '/' + carsPerRow;


  alert (url);
      $.ajax({
        url: url,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          addCarsToDOM(data);
        }
      });
}
