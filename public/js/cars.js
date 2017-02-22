"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function should return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"

  var startingIndex = ($("#cars .row .col-md-4").length);

  if (typeof(startingIndex) === "undefined" || !startingIndex) {
    startingIndex = 0;
  }

  var myString = "";

  if (typeof(carsJSON[startingIndex]) !== "undefined") {
    var car = {};
    car.make = carsJSON[startingIndex]["Make"];
    car.model = carsJSON[startingIndex]["Model"];
    car.year = carsJSON[startingIndex]["Year"];
    myString = myString.concat("<div class='row'>" + "<div class='col-md-4 car'><h2>" + car.make + "</h2><p><strong>Model:</strong> " + car.model + "</p><p><strong>Year:</strong> " + car.year + "</p></div>");
  }

  if (typeof(carsJSON[startingIndex + 1]) !== "undefined") {
    var car = {};
    car.make = carsJSON[startingIndex + 1]["Make"];
    car.model = carsJSON[startingIndex + 1]["Model"];
    car.year = carsJSON[startingIndex + 1]["Year"];
    myString = myString.concat("<div class='col-md-4 car'><h2>" + car.make + "</h2><p><strong>Model:</strong> " + car.model + "</p><p><strong>Year:</strong> " + car.year + "</p></div>");
  }  

  if (typeof(carsJSON[startingIndex + 2]) !== "undefined") {
    var car = {};
    car.make = carsJSON[startingIndex + 2]["Make"];
    car.model = carsJSON[startingIndex + 2]["Model"];
    car.year = carsJSON[startingIndex + 2]["Year"];
    myString = myString.concat("<div class='col-md-4 car'><h2>" + car.make + "</h2><p><strong>Model:</strong> " + car.model + "</p><p><strong>Year:</strong> " + car.year + "</p></div>");
  } 

  myString = myString.concat("</div>");

  return myString;
}


function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"

  var carGroup = $("#cars");

  if (carsJSON) {
    var myHtml = formatCars(carsJSON);
    //console.log(myHtml);
    carGroup.append(myHtml);
  };
}


function fetchJSON(event) {   
// this function will make the ajax call
// on success of the ajax call, it will pass the returned data
// to addCarsToDOM()

  var url = "http://mimeocarlisting.azurewebsites.net/api/cars/"

  // function logResults(json){
  //   console.log(json);
  // }

  $.ajax({
    url: url,
    contentType: "application/json",
    dataType: "jsonp",
    //jsonpCallback: "logResults",
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


// function formatCars(carsJSON) {
//   // this function should return a string of properly formatted html
//   // refer to app/views/index.erb lines 16 - 22 for an example of how
//   // to format three cars, each in a div with a class "col-md-4", in a 
//   // div with a class "row"

//   var myArray = [];
//   var myCounter = ($("#cars .row .col-md-4").length);

//   for (var i = 0; i < 3; i++ ) {
//     if (carsJSON[myCounter] !== undefined) {
//       var car = {};
//       car.make = carsJSON[myCounter]["Make"];
//       car.model = carsJSON[myCounter]["Model"];
//       car.year = carsJSON[myCounter]["Year"];
//       myArray.push(car);
//       myCounter = myCounter + 1;
//     }
//   };

//   function concatenatedHTML(myArray) { 
//     var addedHTML = "<div class='row'>";
//     myArray.forEach(function(car) {    
//      addedHTML = addedHTML.concat("<div class='col-md-4 car'><h2>" + car.make + "</h2><p><strong>Model:</strong> " + car.model + "</p><p><strong>Year:</strong> " + car.year + "</p></div>");
//     });
//     addedHTML = addedHTML.concat("</div>");
//     return addedHTML;
//   }

//   return concatenatedHTML(myArray);
//}

// function formatCars(carsJSON) {
//   // this function should return a string of properly formatted html
//   // refer to app/views/index.erb lines 16 - 22 for an example of how
//   // to format three cars, each in a div with a class "col-md-4", in a 
//   // div with a class "row"

//   var myArray = [];
//   var myCounter = 0;
//   var jsonLength = carsJSON.length;
//   var trippler = 0;
  
//   for (var i = 0; i < jsonLength; i++ ) {
//     if (carsJSON[myCounter] !== undefined) {
//       var car = {};
//       car.make = carsJSON[myCounter]["Make"];
//       car.model = carsJSON[myCounter]["Model"];
//       car.year = carsJSON[myCounter]["Year"];

//       if (trippler == 0) {
//         myArray[myCounter] = "<div class='row'>" + "<div class='col-md-4 car'><h2>" + car.make + "</h2><p><strong>Model:</strong> " + car.model + "</p><p><strong>Year:</strong> " + car.year + "</p></div>";
//         trippler = trippler + 1;
//       } else if  (trippler == 2) {
//           myArray[myCounter] = "<div class='col-md-4 car'><h2>" + car.make + "</h2><p><strong>Model:</strong> " + car.model + "</p><p><strong>Year:</strong> " + car.year + "</div>";
//           trippler = 0;
//       } else {
//           myArray[myCounter] = "<div class='col-md-4 car'><h2>" + car.make + "</h2><p><strong>Model:</strong> " + car.model + "</p><p><strong>Year:</strong> " + car.year;
//           trippler = trippler + 1;
//       }
//       myCounter = myCounter + 1;
//     };
      
//   };

//   return myArray.split(" ");
// }
