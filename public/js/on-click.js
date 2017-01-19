"use strict";

  // add click listener here
  // it should call on fetchJSON()

$(document).ready(function() {
  $("#load-cars").on("click", function() {
    fetchJSON();
  });
});
