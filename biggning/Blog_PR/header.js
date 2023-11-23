const button = document.querySelectorAll(".btn");
const button2 = document.querySelectorAll(".mbtn")
const s = document.getElementsByClassName("btn")
const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
const txt1 = document.querySelector("#b0");
const txt2 = document.querySelector("#b1");
const txt3 = document.querySelector("#b2");
const txt4 = document.querySelector("#b3");
const line = document.querySelector("nnav ul li:hover a:after");
const btnhover = document.querySelector("li a:hover");
const menubtn = document.querySelectorAll("label > span")
//contents1 = 메인화면, sec0~4 색션



//헤더 메뉴 섹션 
var menu1 = document.getElementById("sec0");
var menu2 = document.getElementById("sec1");
var menu3 = document.getElementById("sec2");
var menu4 = document.getElementById("sec3");
var menu0 = document.getElementById("main_sec");
// document.getElementById("ckbox").checked = false;

var chk = document.getElementsByTagName("input")

function btn1Function() {
  menu0.style.display = "none";
  menu1.style.display = "block";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "none";
  document.getElementById("icon").checked=false;
}

function btn2Function() {
  menu0.style.display = "none";
  menu1.style.display = "none";
  menu2.style.display = "block";
  menu3.style.display = "none";
  menu4.style.display = "none";
  document.getElementById("icon").checked=false;
}
function btn3Function() {
  menu0.style.display = "none";
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "block";
  menu4.style.display = "none";
  document.getElementById("icon").checked=false;
}
function btn4Function() {
  menu0.style.display = "none";
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "block";
  document.getElementById("icon").checked=false;
}


//헤더 선택메뉴 유지
for(var i=0; i<button.length; i++){
  button[i].addEventListener("click",act);
  function act(){
    for(var j=0; j<button.length; j++){
      button[j].removeAttribute("class","active");
    }
    this.setAttribute("class", "active");
  }
}

for(var i=0; i<button2.length; i++){
  button2[i].addEventListener("click",act2);
  function act2(){
    for(var j=0; j<button2.length; j++){
      button2[j].removeAttribute("class","active");
    }
    this.setAttribute("class", "active");
  }
}

// const hover1 = document.querySelectorAll();

//헤더 스크롤 액션
// window.addEventListener("scroll", () => {

//       if (window.scrollY > headerHeight) {
//       header.setAttribute("style", "background: white;");
//       txt1.setAttribute("style","color:black;")
//       txt2.setAttribute("style","color:black;")
//       txt3.setAttribute("style","color:black;")
//       txt4.setAttribute("style","color:black;")
//       document.querySelector(".lb").style="background:black;";
//       document.querySelector("label > span:nth-child(2)").style="background:black;";
//       document.querySelector("label > span:nth-child(3)").style="background:black;";
//    } else {
//       header.setAttribute("style", "background: transparent;");
//       txt1.setAttribute("style","color:white;")
//       txt2.setAttribute("style","color:white;")
//       txt3.setAttribute("style","color:white;")
//       txt4.setAttribute("style","color:white;")
//       document.querySelector(".lb").style="background:white;";
//       document.querySelector("label > span:nth-child(2)").style="background:white;";
//       document.querySelector("label > span:nth-child(3)").style="background:white;";

//     }
// });
window.onload=function deviceCheck() {
 const user = navigator.userAgent; 
  if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
    //모바일 스크롤 조건문 영역
    



  }else{
    //PC 스크롤 조건문 영역
    window.addEventListener("scroll", () => {

      if (window.scrollY > headerHeight) {
      header.setAttribute("style", "background: white; opacity:0.7;");
      txt1.setAttribute("style","color:black;")
      txt2.setAttribute("style","color:black;")
      txt3.setAttribute("style","color:black;")
      txt4.setAttribute("style","color:black;")
   } else {
      header.setAttribute("style", "background: transparent;");
      txt1.setAttribute("style","color:white;")
      txt2.setAttribute("style","color:white;")
      txt3.setAttribute("style","color:white;")
      txt4.setAttribute("style","color:white;")
    }
});

  }

  // const button3=document.querySelector(".cap_btn");
  // var videoId = 'file_video2'
  // var scaleFactor = 0.25;
  // var snapshots = [];
  // const button3ClickHandler = () => {
  //     console.log("a")
      // function capture(file_video2,scaleFactor){
      //     if(scaleFactor == null){
      //         scaleFactor=1;
      //     }
      //     var w = file_video2.videoWidth*scaleFactor;
      //     var h = file_video2.videoHeight*scaleFactor;
      //     var canvas2 = document.createElement("canvas2");
      //         canvas2.width = w/4;
      //         canvas2.height = h/4;
      //     var ctx2 = canvas2.getContext("2d");
      //         ctx2.drawImage(file_video2,0,0,w/4,h/4);
      //     //return canvas2;

      //     var video_test = document.getElementById("file_video2");
      //     var output = document.getElementById("cap_img");
      //     var canvas2 = capture(video_test,scaleFactor);
      //         canvas2.onclick = function(){
      //             window.open(this.toDataURL());
      //         };
      //     snapshots.unshift(canvas2);
      //     output.innerHTML = '';
      //     for(var g=0;g<0; g++){
      //         cap_img.appendChild(snapshots[g]);
      //     }
      // }
  // }


  //동영상 캡쳐 스크립트 로직

  const capbtn = document.getElementById("cap_btn");
  const video_shot = document.querySelector("#file_video2");
  const canvas_shot = document.querySelector("#cap_img")
  capbtn.addEventListener('click', () => {


    video_shot.addEventListener("loadedmetadata",function(){
    canvas_shot_CTX = canvas_shot.getContext("2d");
    canvas_shot.width = video_shot.videoWidth;
    canvas_shot.height = video_shot.videoHeight;
    
    setTimeout(()=>{
      canvas_shot_CTX.drawImage(video_shot,0,0,canvas_shot.width,canvas_shot.height);
    },50)
  });
    // const dataURL = canvas_shot.toDataURL("image/png");





    // var snapshots = [];
    // console.log("a");
    // const video2 = document.getElementById("#file_video2");
    // const canvas3 = document.createElement("canvas");
    // canvas3.width = video2.videoWidth;
    // canvas3.height = video2.videoheight;
    // canvas3.getContext("2d").drawImage(video2,0,0,canvas3.width,canvas3.height);
    // const dataURL = canvas3.toDataURL("image/png");
    // const img = document.getElementById("cap_img")
    // snapshots.unshift(canvas3);
    // img.innerHTML = canvas3.getContext("2d").drawImage(video2,0,0,canvas3.width,canvas3.height);
    // // img.download = "capture.png";
    // // a.click();
  });




}

