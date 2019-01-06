/**
 * Display visual error-indication.
 * @param {string} message Message to prompt user to reload.
 */
function showError(message) {
  document.getElementById('snackbar-message').innerHTML = message;
  document.getElementById('snackbar').classList.add('visible');
}

/**
 * Hide visual error-indication.
 */
function hideError() {
  if (document.getElementById('snackbar').classList.contains("visible")) {
    document.getElementById('snackbar').classList.remove('visible');
  }
}

/**
 * Get value from GET-parameter.
 * @param {string} parameterName GET-query parameter name.
 */
function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

/**
 * Start a visual clock indicator.
 */
function initClock() {
  var d = new Date();
  var nhour = d.getHours();
  var nmin = d.getMinutes();
  var nsec = d.getSeconds();
  if (nmin <= 9) {
    nmin = "0" + nmin;
  }
  if (nsec <= 9) {
    nsec = "0" + nsec;
  }
  var clocktext = "" + nhour + ":" + nmin + ":" + nsec + "";
  document.getElementById('clockbox').innerHTML = clocktext;
}

/**
 * Format a date in ISO-format
 * @param {Date} d Date-instance
 * 
 * @see https://stackoverflow.com/a/12550320/603387
 */
function ISODateString(d) {
  function pad(n) {
    return n < 10 ? '0' + n : n;
  }
  return pad(d.getHours()) + ':' +
    pad(d.getMinutes()) + ':' +
    pad(d.getSeconds());
}

/**
 * Get Slides
 */
function getSlides() {
  return document.querySelectorAll('.slides section section');
}

/* If printing, clear color and background*/
window.addEventListener("load", function (event) {
  if (findGetParameter('print-pdf')) {
    Array.prototype.forEach.call(getSlides(), function (element) {
      element.style.setProperty('color', 'unset', 'important');
      element.style.setProperty('background', 'unset', 'important');
    });
  }
}, false);