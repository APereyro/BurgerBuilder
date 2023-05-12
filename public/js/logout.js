 const signoutButton = document.getElementById("signout-button");
  signoutButton.addEventListener("click", async () => {
    const response = await fetch("/signout", { method: "GET" });
    if (response.ok) {
      window.location.href = "/";
    }
  });
  