"use strict";

$(document).ready(function() {
  $('#load-cars').on('click', function() {
    console.log("clicked!");
    fetchJSON();
  });
});
