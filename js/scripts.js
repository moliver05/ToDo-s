//business logic
function Place(placeName, landmarks, restaurants, peopleVisited) {
  this.placeName = placeName;
  this.landmarks = landmarks;
  this.restaurants = restaurants;
  this.peopleVisited = peopleVisited;
}

Place.prototype.bongo = function() {
  return "Result: " + this.placeName; this.landmarks; this.restaurants; this.peopleVisited;
}

Place.prototype.delete = function() {

}
    };
// user interface logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place").val();
    var inputtedLandmarks = $("input#new-landmark").val();
    var inputtedRestaurants = $("input#new-restaurant").val();
    var inputtedPeople = $("input#new-people-visited").val();

    if (inputtedPlaceName !== "" && inputtedLandmarks !== "" && inputtedRestaurants !== "" && inputtedPeople !== "") {

    var newPlace = new Place(inputtedPlaceName, inputtedLandmarks, inputtedRestaurants, inputtedPeople);


    $("ul#allPlaces").append("<li><span class='onePlace'>" + newPlace.bongo() + "</span></li>");
} else {
  alert("Enter Text pls");
}
    $(".onePlace").last().click(function() {
      $("#show-place").show();
      $(".new-place").text(newPlace.placeName);
      $(".new-landmark").text(newPlace.landmarks);
      $(".new-restaurant").text(newPlace.restaurants);
      $(".new-people-visited").text(newPlace.peopleVisited);
});
    $("input#new-location").val("");
    $("input#show-place").val("");

  });
});
