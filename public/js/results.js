const container = document.getElementById("resultsContainer");

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
    console.log(data.message)
    if ((data.message == 1)) {
      console.log("200 response");
    } else {
      console.log("400 response");
    }
  }
};

container.addEventListener("click", findFavorite);
