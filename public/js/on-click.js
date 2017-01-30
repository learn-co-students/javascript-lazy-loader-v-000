"use strict";


var button = $('button#load-cars')

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
    $('button').on('click', fetchJSON);
});

