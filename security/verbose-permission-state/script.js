function triggerLocation() {
  var lockIcon = document.getElementById("lock-icon");
  lockIcon.classList.add("lock-icon-animation");

  var url = document.getElementById("url")
  url.classList.add("url-animation");
  setTimeout(function() {
    lockIcon.classList.remove("lock-icon-animation");
    url.classList.remove("url-animation");
  }, 6000);
}

function togglePageInfo() {
  var elem = document.getElementById("page-info");
  if (!elem.classList.contains("page-info-animation-down")) {
    elem.classList.toggle("page-info-animation-down");
  } else {
    elem.classList.toggle("page-info-animation-up");
  }
}
