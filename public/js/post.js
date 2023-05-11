const burgerFormHandeler = async (event) => {
  event.preventDefault();
  console.log("Inside burgerFormHandeler");

  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  console.log(name, description, ingredients);


  try {
    window.location.href = "/mine";
    const response = await fetch("/api/recipe/", {
      method: "POST",
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

  } catch (error) {
    console.log("Error", error);
  }
};

document
  .getElementById("burger")
  .addEventListener("submit", burgerFormHandeler);
