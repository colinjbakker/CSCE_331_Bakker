function toggleStyleSheet() {
  let i = document.getElementById("mainStyleSheet");
  let name = i.getAttribute("href");
  if (name == "styles1.css") {
    localStorage.setItem("stylesheet", "styles2.css");
    i.setAttribute("href", "styles2.css");
  } else {
    localStorage.setItem("stylesheet", "styles1.css");
    i.setAttribute("href", "styles1.css");
  }
}

window.onload = function () {
  let page_style = localStorage.getItem("stylesheet");
  if (page_style === null) {
    page_style = "styles1.css";
  }
  document.getElementById("mainStyleSheet").setAttribute("href", page_style);
};
