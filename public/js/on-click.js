"use strict";


var button = $('button#load-cars')

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
    $('button').on('click', fetchJSON);
      $('button').on('click', updateBaseUrl);
});

function updateBaseUrl(){
  console.log(urlRefresh)
  urlRefresh = `/${parseInt(urlRefresh[1])+1}/3`
  console.log(urlRefresh)
}