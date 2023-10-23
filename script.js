const body = document.body;
const box = document.getElementById("box");
function mouseMoved(e) {
  box.style.display = "block";
  box.style.transform =
    "translate(" + e.pageX + "px" + "," + e.pageY + "px" + ")";
}
body.addEventListener("mousemove", mouseMoved);
