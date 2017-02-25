"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";


function formatCars(carsJSON) {
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"

  var startingIndex = ($("#cars .row .col-md-4").length);

  // if (typeof(startingIndex) === "undefined" || !startingIndex) {
  //   startingIndex = 0;
  // }

  var myString = "";

  if (typeof(carsJSON[startingIndex]) !== "undefined") {
    var car = {};
    car.make = carsJSON[startingIndex]["Make"];
    car.model = carsJSON[startingIndex]["Model"];
    car.year = carsJSON[startingIndex]["Year"];
    myString = myString.concat('<div class="row">' + '<div class="col-md-4 car"><h2>' + car.make + '</h2><p><strong>Model:</strong> ' + car.model + '</p><p><strong>Year:</strong> ' + car.year + '</p></div>');
  }

  if (typeof(carsJSON[startingIndex + 1]) !== "undefined") {
    var car = {};
    car.make = carsJSON[startingIndex + 1]["Make"];
    car.model = carsJSON[startingIndex + 1]["Model"];
    car.year = carsJSON[startingIndex + 1]["Year"];
    myString = myString.concat('<div class="col-md-4 car"><h2>' + car.make + '</h2><p><strong>Model:</strong> ' + car.model + '</p><p><strong>Year:</strong> ' + car.year + '</p></div>');
  }  

  if (typeof(carsJSON[startingIndex + 2]) !== "undefined") {
    var car = {};
    car.make = carsJSON[startingIndex + 2]["Make"];
    car.model = carsJSON[startingIndex + 2]["Model"];
    car.year = carsJSON[startingIndex + 2]["Year"];
    myString = myString.concat('<div class="col-md-4 car"><h2>' + car.make + '</h2><p><strong>Model:</strong> ' + car.model + '</p><p><strong>Year:</strong> ' + car.year + '</p></div>');
  } 

  myString = myString.concat('</div>');

  return myString;
}


function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"

  var carGroup = $("#cars");

  if (carsJSON) {
    var myHtml = formatCars(carsJSON);
    var myCars = document.getElementById("cars");
    var l1 =  myCars.children.length;
    var l2 = myCars.last.children.length;
    console.log(l1 + "," + l2);

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
    //jsonpCallback: "logResults",
    success: function(data) {
      addCarsToDOM(data);
    },
    error: function(xhr, status, error) {
      //console.log(error);
      alert("Something failed!");
    }
  });
}


