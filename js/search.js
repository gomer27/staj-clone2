var urlSearchParams = new URLSearchParams(window.location.search);
var searchTerm = Object.fromEntries(urlSearchParams.entries()).searchTerm;
var notFoundTemplateArray = document.getElementsByClassName("notFoundPage");
var searchResultRowArray = document.getElementsByClassName("searchResultRow");

if (searchTerm == null || searchTerm === "") {
  for (var array of notFoundTemplateArray) {
    array.classList.remove("d-none");
  }
  for (var array of searchResultRowArray) {
    array.classList.add("d-none");
  }
} else {
  document.getElementById("searchTermHolder").innerHTML = searchTerm;

  for (var array of notFoundTemplateArray) {
    array.classList.add("d-none");
  }
  for (var array of searchResultRowArray) {
    array.classList.remove("d-none");
  }
}
