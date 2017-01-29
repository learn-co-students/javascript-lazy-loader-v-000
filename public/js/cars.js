"use strict";

// this is the base API url
var urlRefresh = "/3/3"
var baseUrl = `http://mimeocarlisting.azurewebsites.net/api/cars/${urlRefresh}`;
var $newDiv = $("<div class='row'>`${urlRefresh}`</div>")

 
// $( ".row" ).last().($newdiv1);
function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
}

    // <div class="col-md-4 car">
    //         <h2>Chevrolet</h2>
    //         <p><strong>Model:</strong> Tahoe</p>
    //         <p><strong>Year:</strong> 2012</p>
    //       </div>
    //       <div class="col-md-4 car">


function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  var i = 0 
  for (i = 0; i < carsJSON.length; i++){
    formatCars(carsJSON[i])
  }
}

// the object in the api call
// [
//   {
//     "Make": "Chevrolet",
//     "Model": "Tahoe",
//     "Year": "2012"
//   },
//   {
//     "Make": "Toyota",
//     "Model": "Camry",
//     "Year": "2002"
//   },
//   {
//     "Make": "Mercedes-Benz",
//     "Model": "E-Class",
//     "Year": "1998"
//   }
// ]
// [6] pry(main)> cars[0][:Make], cars[0][:Model], cars[0][:Year]
// => "Chevrolet" , "Tahoe", "2012"

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  $.ajax({
    url: baseUrl,
    method: 'get',
    dataType: 'jsonp',
    success: function(data){
      addCarsToDOM(data);
    } 
  }).fail(function(){
      console.log("Bad link provided");
    });
}

