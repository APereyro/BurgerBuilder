const burgerFormHandeler = async (event) => {
  event.preventDefault();
  console.log("hello");
  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  console.log(name, description, ingredients);
  const recipe = {
    name: name,
    description: description,
    ingredients: ingredients,
  };
  const response = await fetch("/api/recipe/", {
    method: "POST",
    body: JSON.stringify(recipe),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log(response);
    // document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document
  .getElementById("burger")
  .addEventListener("submit", burgerFormHandeler);
