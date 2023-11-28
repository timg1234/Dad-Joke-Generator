document.getElementById("next-joke-btn").addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (isJokeTooLong(data.joke)) {
        fetchJoke(); // Fetch another joke if the current one is too long
      } else {
        document.getElementById("joke").textContent = data.joke;
      }
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      document.getElementById("joke").textContent =
        "Failed to load joke. Please try again.";
    });
}

function isJokeTooLong(joke) {
  // Assuming each line has around 50 characters
  return joke.length > 200;
}

// Load a joke on initial page load
window.onload = fetchJoke;
