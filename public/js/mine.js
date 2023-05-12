//update burger redirect based on what burger id is pressed.
const updateBurger = async (e) => {
  const { dataset } = e.target;
  try {
    console.log(dataset.id);
    document.location.replace(`/update/${dataset.id}`);
  } catch (error) {}
};

const updates = document.querySelectorAll("button[data-id]");
console.log(updates);
updates.forEach((update) => {
  update.addEventListener("click", updateBurger);
});

// delete recipe logic.

const cardDiv = document.getElementById("cardDiv");

const deleteBurger = async (e) => {
  let selectedBurger = e.target.getAttribute("name");
  console.log(selectedBurger);
  if (selectedBurger) {
    const response = await fetch(`api/recipe/${selectedBurger}`, {
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

