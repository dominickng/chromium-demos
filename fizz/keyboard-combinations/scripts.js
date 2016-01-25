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
  window.onkeydown = function(e) {
    // Only fire on [0-9], [a-z].
    if (e.keyCode >= 48 && e.keyCode <= 90) {
      var elem = document.getElementById("message");
      var msg = "";
      if (e.ctrlKey) {
        msg += "Ctrl-";
      }
      if (e.metaKey) {
        if (navigator.platform.indexOf("Mac") == -1) {
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
}

mapKeys();
