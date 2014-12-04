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

  $("a.spec_link").click(function(){
    $("div#description p").html("");
    $("div#description p").append(spec);
  });//ends onClick listener for Spec

  $("a.about_link").click(function(){
    $("div#description p").html("");
    $("div#description p").append(about);
  });//ends onClick listener for About

  $("div#description").on("mouseenter", "span.bird", function () {
    $(this).html("<div class='smallbird_pic'></div>");
  });

  $("div#description").on("mouseleave", "span.bird", function () {
    $(this).html("bird");
  });


});//ends entire function