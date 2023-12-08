const button = document.querySelectorAll(".btn");
const button2 = document.querySelectorAll(".mbtn");
const s = document.getElementsByClassName("btn");
const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
const txt1 = document.querySelector("#b0");
const txt2 = document.querySelector("#b1");
const txt3 = document.querySelector("#b2");
const txt4 = document.querySelector("#b3");
const line = document.querySelector("nnav ul li:hover a:after");
const btnhover = document.querySelector("li a:hover");
const menubtn = document.querySelectorAll("label > span");
//contents1 = 메인화면, sec0~4 색션

//헤더 메뉴 섹션
var menu1 = document.getElementById("sec0");
var menu2 = document.getElementById("sec1");
var menu3 = document.getElementById("sec2");
var menu4 = document.getElementById("sec3");
var menu0 = document.getElementById("main_sec");
// document.getElementById("ckbox").checked = false;

var chk = document.getElementsByTagName("input");

function btn1Function() {
  menu0.style.display = "none";
  menu1.style.display = "block";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "none";
  document.getElementById("icon").checked = false;
}

function btn2Function() {
  menu0.style.display = "none";
  menu1.style.display = "none";
  menu2.style.display = "block";
  menu3.style.display = "none";
  menu4.style.display = "none";
  document.getElementById("icon").checked = false;
}
function btn3Function() {
  menu0.style.display = "none";
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "block";
  menu4.style.display = "none";
  document.getElementById("icon").checked = false;
}
function btn4Function() {
  menu0.style.display = "none";
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "block";
  document.getElementById("icon").checked = false;
}
//헤더 선택메뉴 유지
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", act);
  function act() {
    for (var j = 0; j < button.length; j++) {
      button[j].removeAttribute("class", "active");
    }
    this.setAttribute("class", "active");
  }
}

for (var i = 0; i < button2.length; i++) {
  button2[i].addEventListener("click", act2);
  function act2() {
    for (var j = 0; j < button2.length; j++) {
      button2[j].removeAttribute("class", "active");
    }
    this.setAttribute("class", "active");
  }
}

// window.onload = function deviceCheck() {
// const user = navigator.userAgent;
// if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
//모바일 스크롤 조건문 영역
// } else {
//PC 스크롤 조건문 영역
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > headerHeight) {
//         header.setAttribute("style", "background: white; opacity:0.7;");
//         txt1.setAttribute("style", "color:black;");
//         txt2.setAttribute("style", "color:black;");
//         txt3.setAttribute("style", "color:black;");
//         txt4.setAttribute("style", "color:black;");
//       } else {
//         header.setAttribute("style", "background: transparent;");
//         txt1.setAttribute("style", "color:white;");
//         txt2.setAttribute("style", "color:white;");
//         txt3.setAttribute("style", "color:white;");
//         txt4.setAttribute("style", "color:white;");
//       }
//     });
//   }
// };
