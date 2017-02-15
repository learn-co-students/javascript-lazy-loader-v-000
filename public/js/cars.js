"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function should return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"


  // redone version without outside counter.  Fails on identical car;
  var myArray = [];

  var lastCar = $("#cars .row .col-md-4").last()[0].innerText;
  var jsonLength = carsJSON.length;


  for (var i = 0; i < jsonLength; i++) {
    
    var make = carsJSON[i]["Make"];
    var model = carsJSON[i]["Model"];
    var year = carsJSON[i]["Year"];
    if ((lastCar.includes(make)) && (lastCar.includes(model)) && (lastCar.includes(year))) {
      var counter = i + 1;
      console.log(lastCar);
      console.log("they match!");
      console.log(model);
      console.log(counter);
      break;    
    } 
  }


  if (carsJSON[counter] !== undefined) {
    var car1 = {};
    car1.make = carsJSON[counter]["Make"];
    car1.model = carsJSON[counter]["Model"];
    car1.year = carsJSON[counter]["Year"];
    myArray.push(car1);
  };

  if (carsJSON[counter + 1] !== undefined) {
    var car2 = {};
    car2.make = carsJSON[counter + 1]["Make"];
    car2.model = carsJSON[counter + 1]["Model"];
    car2.year = carsJSON[counter + 1]["Year"];
    myArray.push(car2);
  };

  if (carsJSON[counter + 2] !== undefined) {
    var car3 = {};
    car3.make = carsJSON[counter + 2]["Make"];
    car3.model = carsJSON[counter + 2]["Model"];
    car3.year = carsJSON[counter + 2]["Year"];
    myArray.push(car3);
  };


  function concatenatedHTML(myArray) { 
    var addedHTML = `<div class='row'>`;
    myArray.forEach(function(car) {    
     addedHTML = addedHTML.concat(`<div class='col-md-4 car'> <h2> ${car.make}</h2><p><strong>Model:</strong> ${car.model}</p><p><strong>Year:</strong> ${car.year}</p></div>`);
  });
    addedHTML = addedHTML.concat(`</div>`);
    return addedHTML;
  }  


  //myCounter = myCounter + 3;
  return concatenatedHTML(myArray); 

}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"

  var carGroup = $("#cars");
  //var lastCar = $("#cars .row .col-md-4").last();

  if (carsJSON) {
    //console.log(lastCar);
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
  


//var url = "http://mimeocarlisting.azurewebsites.net/api/cars/"