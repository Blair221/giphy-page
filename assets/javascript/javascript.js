$(function() {
  var animeArray = ["luffy", "naruto", "goku", "Deku"];
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
  var search = $("input")
    .val()
    .trim();
  var apiKey = "&api_key=7kDTo2sTD91Ik3wn177f3iUtDZAPeUvy&limit=10";

  var createButtons = function() {
    $("#anime-buttons").empty();
    for (let i = 0; i < animeArray.length; i++) {
      var newCharacter = $("<button class='mx-2 btn-outline-danger'>");
      newCharacter.text(animeArray[i]);
      $("#anime-buttons").append(newCharacter);
    }
    $('input').text('');
  };
  $("#submit-button").on("click", function() {
    event.preventDefault();
    var search = $("input")
      .val()
      .trim();
    if (animeArray.includes(search)) {
      alert("This anime character already has a button!")
    }
    else if ((search !== "") && (search.length > 1)) {
      animeArray.push(search);
    }

    createButtons();
    
  });
  createButtons();
  $.ajax({
    url: queryURL + search + apiKey,
    method: "GET"
  }).then(function(response) {
    var gifs = response.data;
    console.log(gifs);
    var gifDiv = $("#gifs");
    for (let i = 0; i < gifs.length; i++) {
      if (gifs.ratings !== "r" && gifs.ratings !== "pg-13") {
        var animatedImgUrl = gifs[i].images.fixed_width.url;
        console.log(animatedImgUrl);

        var newGif = $("<img class='card-img-top'>");
        newGif.attr("src", animatedImgUrl);
        newGif.attr('data-state', 'animated');
        gifDiv.append(newGif);
      }
    }
  });
});
