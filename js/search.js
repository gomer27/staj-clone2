let urlSearchParams = new URLSearchParams(window.location.search);
let searchTerm = Object.fromEntries(urlSearchParams.entries()).searchTerm;
let notFoundTemplateArray = document.getElementsByClassName("notFoundPage");
let searchResultRowArray = document.getElementsByClassName("searchResultRow");

if (searchTerm == null || searchTerm === "") {
  for (let array of notFoundTemplateArray) {
    array.classList.remove("d-none");
  }
  for (let array of searchResultRowArray) {
    array.classList.add("d-none");
  }
} else {
  document.getElementById("searchTermHolder").innerHTML = searchTerm;

  for (let array of notFoundTemplateArray) {
    array.classList.add("d-none");
  }
  for (let array of searchResultRowArray) {
    array.classList.remove("d-none");
  }
}
