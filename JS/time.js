var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
setTimeout(() => {  newTime(); }, 500);
function newTime() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
  setTimeout(() => {  newTime(); }, 500);
}
