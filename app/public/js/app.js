$(function() {

  var about;
  var spec;

  $.get( "/api/about.json", function( data ) {
    about = data.body;
    $("div#description p").append(about);
  });

  $.get( "/api/spec.json", function( data ) {
    spec = data.body;
  });//ends GET request for spec

  $("div#large_navbar ul.links_list li.spec_link a").click(function(){
    $("div#description p").html("");
    $("div#description p").append(spec);
  });//ends onClick listener for Spec

  $("div#large_navbar ul.links_list li.about_link a").click(function(){
    $("div#description p").html("");
    $("div#description p").append(about);
  });//ends onClick listener for About
});//ends entire function