$(function() {
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
  var search = "rick+and+morty";
  var apiKey = "&api_key=7kDTo2sTD91Ik3wn177f3iUtDZAPeUvy&limit=10";
  $.ajax({
    url: queryURL + search + apiKey,
    method: "GET"
  }).then(function(response) {
    var gifs = response.data;
    console.log(gifs);
    var gifDiv = $("#gifs");
    for (let i = 0; i < gifs.length; i++) {
      if (gifs.ratings !== "r" && gifs.ratings !== "pg-13") {
        var stillImgUrl = gifs[i].images.fixed_height_still.url;
        console.log(stillImgUrl);

        var newGif = $("<img class='card-img-top'>");
        newGif.attr("src", stillImgUrl);
        gifDiv.append(newGif);
      }
    }
  });
});
