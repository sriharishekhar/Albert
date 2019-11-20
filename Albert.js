var $ = function(elt) {
  return document.querySelector(elt);
}
var _ = function(elt, command, fn) {
  return elt.addEventListener(command, fn);
}

var albert = function() {
  if (localStorage.getItem("serviceStatus") == "read") {
    albert.readService();
  }
  console.log(localStorage.getItem("serviceStatus"));
}
albert.readService = function() {
  localStorage.setItem("serviceStatus", "read");
  chrome.storage.sync.set({
    serviceStatus: "read"
  });
}

_($("#readingMode"), "click", function() 
{
  albert.readService();
});

_(document, "DOMContentLoaded", function() {
  albert();
});
