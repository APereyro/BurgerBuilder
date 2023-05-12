const container = document.getElementById("resultsContainer");
const popUp = document.getElementById("resultPopUp");
const popUpText = document.getElementById("popUpText");
console.log("connected");

const findFavorite = async (e) => {
  console.log("clicking");
  let selectedBurger = e.target.getAttribute("name");
  console.log(selectedBurger);
  if (selectedBurger) {
    const response = await fetch("api/users/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ burgerId: selectedBurger }),
    });
    const data = await response.json();
    console.log(data);
    console.log(data.message);
    if (data.message == 1) {
      //   console.log("200 response");
      popUpText.innerHTML = "Burger Favorited!";
      popUp.classList.remove("resultHidden");
      setTimeout(popUpTimer, 3000);
    } else {
      //   console.log("400 response");
      popUpText.innerHTML = "Burger already in favorites!";
      popUp.classList.remove("resultHidden");
      setTimeout(popUpTimer, 3000);
    }
  }
};

const popUpTimer = () => {
  popUp.classList.add("resultHidden");
};

container.addEventListener("click", findFavorite);
