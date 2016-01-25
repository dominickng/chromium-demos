if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',
                registration.scope);
  })
  .catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

var mapKeys = function() {
  var elem = document.getElementById("message");
  window.onkeydown = function(e) {
    var msg = "";
    if (e.ctrlKey) {
      msg += "Ctrl-";
    }
    if (e.metaKey) {
      if (navigator.platform.find("Mac") == -1) {
        msg += "Meta-";
      } else {
        msg += "Cmd-";
      }
    }
    if (e.shiftKey) {
      msg += "Shift-";
    }
    msg += String.fromCharCode(e.keyCode) + " captured";

    elem.innerHTML = msg;
    e.preventDefault();
  }
}
