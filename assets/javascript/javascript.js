$(function() {
  var animeArray = ["luffy", "naruto", "goku", "deku"];
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
  var search = $(this).attr('data-anime');
  var apiKey = "&api_key=7kDTo2sTD91Ik3wn177f3iUtDZAPeUvy&limit=10";

  var createButtons = function() {
    $("#anime-buttons").empty();
    for (var i = 0; i < animeArray.length; i++) {
      var newCharacter = $("<button class='mx-2 btn-outline-danger'>");
      newCharacter.addClass("anime-button");
      newCharacter.attr('data-anime', animeArray[i]);
      newCharacter.text(animeArray[i]);
      $("#anime-buttons").append(newCharacter);
    }
    $("input").text("");
  };
  $("#submit-button").on("click", function() {
    event.preventDefault();
    var inputValue = $("input")
      .val()
      .trim();
    if (animeArray.includes(inputValue)) {
      alert("This anime character already has a button!");
    } else if (inputValue !== "" && inputValue.length > 1) {
      animeArray.push(inputValue);
    }

    createButtons();
  });

  createButtons();
  $(".anime-button").on("click", function() {
    $("#gifs").empty();
    $('.anime-button').removeClass('active');
    $(this).addClass('active');
    var search = $(this).attr('data-anime');
    $.ajax({
      url: queryURL + search + apiKey,
      method: "GET"
    }).then(function(response) {
      
      var gifs = response.data;

      console.log(gifs);
      

      var gifDiv = $("#gifs");

      for (var i = 0; i < gifs.length; i++) {
        var animatedImgUrl = gifs[i].images.fixed_width.url;
        var stillImgUrl = gifs[i].images.fixed_width_still.url;
        
          
          

          var newGif = $("<img class='card-img-top'>");
          newGif.attr("src", animatedImgUrl);
          newGif.attr("data-state", "animated");
          gifDiv.append(newGif);
        }
      
    });
  });
});
