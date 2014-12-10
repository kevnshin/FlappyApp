$(function() {

  var footerLinkTitles = [];

  //When Page Initiall LOADS, do the following
  //get about description and load it onto page
  get_description("/api/about.json");

  //GET request for footer data
  $.get( "http://beta.json-generator.com/api/json/get/AydVk97", function (data) {
    
    //Put footer link titles in an array
    data.forEach(function (element) {
      footerLinkTitles.push(element.title);
    });

    column_length = get_footercolumnLength(footerLinkTitles);

    console.log(column_length);

    for (var i = 0, j = i+column_length, k = j+column_length; i < column_length; i++, j++, k++) {
      
      add_column(i, 1);
      add_column(j, 2);
      if(footerLinkTitles[k]){
        add_column(k ,3);
      }
    }
  });

  //spec link click function
  $("a.spec_link").click(function(){
    get_description("/api/spec.json");
  });

  //about link click function
  $("a.about_link").click(function(){
    get_description("/api/about.json");
  });

  //Hover on bird(entering)
  $("div#description").on("mouseenter", "span.bird", function () {
    $(this).html("<div class='smallbird_pic'></div>");
  });

  //Hover on bird(leaving)
  $("div#description").on("mouseleave", "span.bird", function () {
    $(this).html("bird");
  });

  //Funcions
  //GET request for description area
  function get_description (url) {
    $.get( url, function( data ) {
      $("div#description p").html(data.body);
    });
  }

  function get_footercolumnLength (array) {

    switch (array.length%3) {

      case 0:
        return array.length/3;

      case 1:
        return (array.length+2)/3;

      case 2:
        return (array.length+1)/3;

      default:
        return array.length/3;
    }
  }

  function add_column (listNum, columnNum) {

    var link = $("<a href='#'></a>");
    var list_item = $("<li>");
    link.html(footerLinkTitles[listNum]);
    list_item.html(link);

    //first column
    if(columnNum === 1){
      var totalNum = column_length;
      var target = "ul#footer_firstcolumn";

      if (listNum === totalNum - 1){
        list_item.addClass("last_link");
      }
    } else if (columnNum === 2) {// second column
      var totalNum = column_length * 2;
      var target = "ul#footer_secondcolumn";

      if (listNum === totalNum - 1){
        list_item.addClass("last_link");
      }
    } else if (columnNum === 3) {//third column
      var target = "ul#footer_thirdcolumn";  
      
      if (!footerLinkTitles[listNum+1]){
        list_item.addClass("last_link");
      }
    }//ends else if

    $("div#footer " + target).append(list_item);
  }//ends add_column

});//ends entire function