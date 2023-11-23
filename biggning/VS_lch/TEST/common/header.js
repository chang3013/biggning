const menu = document.querySelectorAll("a");
//   const show = document.querySelectorAll("contents div");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", act);
  console.log("a");
  function act() {
    for (let j = 0; j < menu.length; j++) {
      console.log("b");
      menu[j].removeAttribute("class", "active");
    }

    this.setAttribute("class", "active");
  }
}
