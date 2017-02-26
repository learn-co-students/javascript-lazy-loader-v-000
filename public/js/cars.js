"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var dataIndex = 6;
var dataArray = [];
//var testr = [{"Make":"Dodge","Model":"Avenger","Year":"2013"},{"Make":"Nissan","Model":"Maxima","Year":"2009"},{"Make":"Subaru","Model":"Impreza WRX","Year":"2013"}];

function formatCars(carsJSON) {
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"


  var myString = "";
  //console.log(carsJSON[startingIndex]);

  if (typeof(carsJSON[0]) !== "undefined") {
    var car = {};
    car.make = carsJSON[0]["Make"];
    car.model = carsJSON[0]["Model"];
    car.year = carsJSON[0]["Year"];
    myString = myString.concat('<div class="row">' + '<div class="col-md-4 car"><h2>' + car.make + '</h2><p><strong>Model:</strong> ' + car.model + '</p><p><strong>Year:</strong> ' + car.year + '</p></div>');
  }

  if (typeof(carsJSON[1]) !== "undefined") {
    var car = {};
    car.make = carsJSON[1]["Make"];
    car.model = carsJSON[1]["Model"];
    car.year = carsJSON[1]["Year"];
    myString = myString.concat('<div class="col-md-4 car"><h2>' + car.make + '</h2><p><strong>Model:</strong> ' + car.model + '</p><p><strong>Year:</strong> ' + car.year + '</p></div>');
  }  

  if (typeof(carsJSON[2]) !== "undefined") {
    var car = {};
    car.make = carsJSON[2]["Make"];
    car.model = carsJSON[2]["Model"];
    car.year = carsJSON[2]["Year"];
    myString = myString.concat('<div class="col-md-4 car"><h2>' + car.make + '</h2><p><strong>Model:</strong> ' + car.model + '</p><p><strong>Year:</strong> ' + car.year + '</p></div>');
  } 

  myString = myString.concat('</div>');
  dataArray = [];
  return myString;
}


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
    //jsonpCallback: "logResults",
    success: function(data) {
      var counter = dataIndex;
      for (var i = 0; i < 3; i++) {
        if (data[counter]) {
          dataArray.push(data[counter]);
          counter += 1;
        };
      } 
      dataIndex = dataIndex + (dataArray.length);
      console.log(dataArray);
      addCarsToDOM(dataArray);
    },
    error: function(xhr, status, error) {
      //console.log(error);
      alert("Something failed!");
    }
  });
}

