"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function should return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"

  //var myArray = [];
  var myCounter = ($("#cars .row .col-md-4").length) + 1;

  if (carsJSON[myCounter] !== undefined) {
    var car1 = {};
    car1.make = carsJSON[myCounter]["Make"];
    car1.model = carsJSON[myCounter]["Model"];
    car1.year = carsJSON[myCounter]["Year"];
    //myArray.push(car1);
  };

  if (carsJSON[myCounter + 1] !== undefined) {
    var car2 = {};
    car2.make = carsJSON[myCounter + 1]["Make"];
    car2.model = carsJSON[myCounter + 1]["Model"];
    car2.year = carsJSON[myCounter + 1]["Year"];
    //myArray.push(car2);
  };

  if (carsJSON[myCounter + 2] !== undefined) {
    var car3 = {};
    car3.make = carsJSON[myCounter + 2]["Make"];
    car3.model = carsJSON[myCounter + 2]["Model"];
    car3.year = carsJSON[myCounter + 2]["Year"];
    //myArray.push(car3);
  };

  var myPageChunk = 

  `<div class='row'>
    <div class='col-md-4 car'> 
      <h2> ${car1.make}</h2>
      <p><strong>Model:</strong> ${car1.model}</p>
      <p><strong>Year:</strong> ${car1.year}</p>
    </div>

    <div class='col-md-4 car'>
      <h2> ${car2.make}</h2>
      <p><strong>Model:</strong> ${car2.model}</p>
      <p><strong>Year:</strong> ${car2.year}</p>
    </div>

    <div class='col-md-4 car'>
      <h2> ${car3.make}</h2>
      <p><strong>Model:</strong> ${car3.model}</p>
      <p><strong>Year:</strong> ${car3.year}</p>
    </div>
  </div>`;

  return myPageChunk;

}



//   function concatenatedHTML(myArray) { 
//     var addedHTML = `<div class='row'>`;
//     myArray.forEach(function(car) {    
//      addedHTML = addedHTML.concat(`<div class='col-md-4 car'> <h2> ${car.make}</h2><p><strong>Model:</strong> ${car.model}</p><p><strong>Year:</strong> ${car.year}</p></div>`);
//   });
//     addedHTML = addedHTML.concat(`</div>`);
//     return addedHTML;
//   }  
//   return concatenatedHTML(myArray); 
// }


function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"

  var carGroup = $("#cars");

  if (carsJSON) {
    var myHtml = formatCars(carsJSON);
    carGroup.append(myHtml);
  };
}

function fetchJSON(event) {   
// this function will make the ajax call
// on success of the ajax call, it will pass the returned data
// to addCarsToDOM()

  var url = "http://mimeocarlisting.azurewebsites.net/api/cars/"

  function logResults(json){
    console.log(json);
  }


  $.ajax({
    url: url,
    contentType: "application/json",
    dataType: "jsonp",
    jsonpCallback: "logResults",
    success: function(data) {
      addCarsToDOM(data);
    },
    error: function(xhr,status,error) {
      console.log(error);
      alert("fail");
      $('#msg').html("ERROR...! Please check the console (F12)");
    }
  });
}
  
