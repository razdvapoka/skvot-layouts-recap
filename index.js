var redRotatingGuy = document.querySelector(".red-rotating-guy");
var scrollHeight = document.body.scrollHeight - window.innerHeight;
function handleScroll(e) {
  var fraction = window.scrollY / scrollHeight;
  var angle = 360 * fraction + "deg";
  redRotatingGuy.style.transform = "rotate(" + angle + ")";
  redRotatingGuy.style.backgroundColor = "rgba(138,43,226," + fraction + ")";
}
window.addEventListener("scroll", handleScroll);
