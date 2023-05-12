const updateBurgerFormHandler = async (event) => {
  event.preventDefault();
  console.log("Inside updateBurgerFormHandler");

  const id = document.getElementById("burger-id").value.trim();
  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  console.log(name, description, ingredients);

  try {
    // window.location.href = "/mine";
    const response = await fetch(`/api/recipe/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        description: description,
        ingredients: ingredients,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("END OF FUN()");
    window.location.href = '/mine';
  } catch (error) {
    console.log("Error", error);
    if (error.response) {
      console.log("Response status:", error.response.status);
      const errorMessage = await error.response.text();
      console.log("Response body:", errorMessage);
    }
};
}
// To pre-populate the form with existing burger data:
const populateUpdateForm = (burger) => {
  // const idField = document.getElementById("burger-id");
  const nameField = document.getElementById("name");
  const descriptionField = document.getElementById("description");
  const ingredientsField = document.getElementById("ingredients");

  // idField.value = burger.id;
  nameField.value = burger.name;
  descriptionField.value = burger.description;
  ingredientsField.value = burger.ingredients;
};

// To fetch the existing burger data and populate the form:
const getBurgerById = async (id) => {
  try {
    const response = await fetch(`/api/recipe/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const burger = await response.json();
    populateUpdateForm(burger);
  } catch (error) {
    console.log("Error", error);
  }
};

document
  .getElementById("update")
  .addEventListener("submit", updateBurgerFormHandler);
