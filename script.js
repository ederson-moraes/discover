function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/eder-light.png")
    img.setAttribute("alt", "Foto Avatar Light usando óculos escuros")
  } else {
    img.setAttribute("src", "./assets/eder-dark.png")
    img.setAttribute("alt", "Foto Avatar")
  }
}
