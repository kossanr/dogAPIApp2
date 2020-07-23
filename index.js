function getImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`) //user input inserted into URL
    .then((res) => res.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong"));
}

function displayResults(responseJson) {
  $(".error p").text("");
  if (responseJson.status === "success") {
    $(".results img").replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    );
    //display the results section
    $(".results").removeClass("hidden");
  } else {
    $(".results").addClass("hidden");
    $(".error p").text("Breed not found");
  }
}

function watchForInput() {
  //watchiong for submit event

  $("form").submit((event) => {
    event.preventDefault();
    getImage($(".breed").val()); //runs getImage with the value of the user's input
  });
}

$(function () {
  console.log("App loaded, waiting for submit!");
  watchForInput();
});
