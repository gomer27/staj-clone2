var counter = 11;
function saniyeBaslat() {
  counter--;
  if (counter >= 0) {
    document.getElementById("counter").innerHTML = counter;
  } else {
    window.clearInterval(modalClose);
    document.getElementById("modalClose").click();
    alert("Süreniz bitti!");
  }
}
var modalClose = window.setInterval("saniyeBaslat()", 1000);
