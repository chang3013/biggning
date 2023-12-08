// const box_one = document.querySelector("#1section");
const box_two = document.getElementById("sec2");
const img_two = document.getElementById("img2");
const p_two = document.getElementById("p2");
const img_three = document.getElementById("img3");
const p_three = document.getElementById("p3");
const img_test = document.querySelector("#img3");
// import "./network.css";
// let animation2 = document.styleSheets[0].cssRules[10];
// const animation3 =

window.addEventListener("scroll", function () {
  console.log(this.scrollY);
  if (this.screenY < 300) {
    img_two.style.opacity = "0";
    img_two.style.transition = "all 1.3s ease";
  }
  if (this.scrollY > 300) {
    img_two.style.opacity = "1";
    img_two.style.transition = "all 1.3s ease";
  }
  if (this.scrollY < 830) {
    p_two.style.opacity = "0";
    p_two.style.transition = "all 1.3s ease";
  }
  if (this.scrollY > 830) {
    p_two.style.opacity = "1";
    p_two.style.transition = "all 1.3s ease";
  }
  if (this.scrollY > 1250) {
    img_three.style.display = "block";
    img_test.classList.remove("test");
    img_test.classList.remove("remove");
    img_test.classList.add("add");
    // img_three.style.opacity = "1";
  }
  if (this.scrollY < 1250) {
    img_test.classList.remove("add");
    img_test.classList.add("remove");
    img_three.style.display = "none";
    // img_three.style.opacity = "1";
  }

  //   console.log(img_test.classList);
});
