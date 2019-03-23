$(function() {
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
  var search = "rick+and+morty"
  var apiKey = "&api_key=7kDTo2sTD91Ik3wn177f3iUtDZAPeUvy&limit=10";
  $.ajax({
    url: queryURL+ search + apiKey,
    method: "GET"
  }).then(function(response) {
    var gifs = response.data;    
    console.log(gifs);
    
    
  });
});
