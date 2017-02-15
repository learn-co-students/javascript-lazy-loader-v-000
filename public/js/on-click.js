"use strict";

$(document).ready(function() {
  // add click listener here
  $("#load-cars").on("click", function(){
  // it should call on fetchJSON()
    fetchJSON();
  });
});