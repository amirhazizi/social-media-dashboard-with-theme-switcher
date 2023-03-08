// variables
const switcher = document.querySelector(".theme-switcher")
// LOAD event listener
window.addEventListener("load", () => {
  document.body.classList.add("light")
})

// switcher event listener
switcher.addEventListener("change", () => {
  if (switcher.checked) {
    document.body.classList.remove("light")
    document.body.classList.add("dark")
  } else {
    document.body.classList.add("light")
    document.body.classList.remove("dark")
  }
})
