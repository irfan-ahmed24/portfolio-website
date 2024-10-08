/*variable declaration starts here*/

var menoList = document.getElementById("meno-list");
var menoIcon = document.getElementById("meno-icon");
var crossIcon = document.getElementById("cross-icon");
//variable declaration end here
menoIcon.addEventListener("click", () => {
  menoList.classList.remove("meno-dispay");
  menoIcon.classList.add("meno");
  crossIcon.classList.remove("cross");
});
crossIcon.addEventListener("click", () => {
  menoList.classList.add("meno-dispay");
  menoIcon.classList.remove("meno");
  crossIcon.classList.add("cross");
});
