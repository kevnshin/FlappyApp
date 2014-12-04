$(function() {

$.get( "/api/about.json", function( data ) {
  
  $("div#description p").append(data.body);

});

});