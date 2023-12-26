const menu = document.getElementById("col");
const img_menu = document.getElementById("icon_ex");
const text = document.getElementById("col");
const form = document.getElementById("form_area");
function col_click() {
  if (text.textContent == "펼치기") {
    menu.innerText = "접기";
    img_menu.src = "/biggning/Hompage/img/center/collapse.png";
    // form.style.display = "block";
    form.style.opacity = "1";
    form.style.visibility = "visible";
    form.style.height = "500px";
  } else {
    menu.innerText = "펼치기";
    img_menu.src = "/biggning/Hompage/img/center/expand.png";
    // form.style.display = "none";
    form.style.opacity = "0";
    form.style.visibility = "hidden";
    form.style.height = "0vh";
  }
}
