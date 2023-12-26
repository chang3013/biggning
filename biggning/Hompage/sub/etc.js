// function urldown() {
//   const input_url = document.getElementById("URLinput").value;
//   console.log(input_url);
// }
const len = document.querySelectorAll(".testbtn");
const imgbox = document.getElementById("img_target");
const targetfile = "/biggning/Hompage/img/reference/Project";
// console.log(len);
function btn_test(e) {
  const targetid = document
    .getElementById(e.getAttribute("id"))
    .getAttribute("id");
  // console.log(targetid);
  if (targetid != "") {
    for (var i = 0; i < len.length; i++) {
      //   console.log("통과");
      if (targetid == "btn" + i)
        imgbox.src =
          "/biggning/Hompage/img/reference/Project" + i + "_detail.png";
    }
  }
}
const category = ["cateall", "cate1", "cate2"];
const all = document.getElementsByClassName("testbtn");
function cate_function(e) {
  const targetid2 = document
    .getElementById(e.getAttribute("id"))
    .getAttribute("id");
  // console.log(targetid2);
  // for (var j = 0; j < category.length; j++) {
  if (targetid2 == category[0]) {
    document.getElementById("btn0").style.display = "block";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "block";
    document.getElementById("btn3").style.display = "block";
  }
  if (targetid2 == category[1]) {
    document.getElementById("btn0").style.display = "block";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
  }
  if (targetid2 == category[2]) {
    document.getElementById("btn0").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";
    document.getElementById("btn3").style.display = "block";
  }
}
// }

function link_down() {
  fetch("https://source.unsplash.com/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .then((blob) => {
      const imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(blob);
      document.body.appendChild(imgElement);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
