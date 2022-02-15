var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementByClassName("nav_bar").style.top = "6em";
  } else {
    document.getElementByClassName("nav_bar").style.top = "-6em";
  }
  prevScrollpos = currentScrollPos;
}