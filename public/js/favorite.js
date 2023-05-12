const cardDiv = document.getElementById("cardDiv");
const deleteFav = async (e) => {
  let selectedBurger = e.target.getAttribute("name");
  console.log(selectedBurger);
  if (selectedBurger) {
    const response = await fetch(`api/recipe/fav/${selectedBurger}`, {
      method: "DELETE",
    });
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson == 1) {
      window.location.reload();
    } else {
      console.log("No burger found");
    }
  }
};

cardDiv.addEventListener("click", deleteFav);
