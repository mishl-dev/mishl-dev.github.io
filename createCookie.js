function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  var cookieValue = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 10000; i++) {
    cookieValue += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  document.cookie = name + "=" + cookieValue + expires + "; path=/";
}
