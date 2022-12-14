function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 60 * 1000); // 1 gün algılıyor
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var modalAnnouncement = document.getElementById("announcement");
modalAnnouncement.addEventListener("hidden.bs.modal", function (event) {
  setCookie("modal", "true");
});
console.log(getCookie("modal"));
if (getCookie("modal") == "") {
  var announcement = new bootstrap.Modal(modalAnnouncement);
  announcement.show();
}
