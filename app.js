let thankyoupage = document.querySelector(".thankyoupage");
let ratingpage = document.querySelector("main");
let disp_rating = document.querySelector(".disp_rating");
let userRating;

function checkSubmit() {
  try {
    userRating = document.querySelector(
      'input[name="user_rating"]:checked'
    ).value;
    console.log(userRating);
    disp_rating.textContent = userRating;
    ratingpage.style.display = "none";
    thankyoupage.style.display = "grid";
    thankyoupage.style.placeItems = "center";
  } catch (e) {
    alert("Select a rating");
  }
}
