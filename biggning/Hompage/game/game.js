var imgArray = [
  "/biggning/Hompage/game/game/bawi_choice.png",
  "/biggning/Hompage/game/game/gawi_choice.png",
  "/biggning/Hompage/game/game/bo_choice.png",
];
var imgtarget = document.getElementById("ai_result");
var result_text = document.getElementById("result_txt");
const btn_bawi = document.getElementById("bawi_btn");
const btn_gawi = document.getElementById("gawi_btn");
const btn_bo = document.getElementById("bo_btn");
var Player_targetimg = document.getElementById("player_result");
localStorage.setItem("ai", "");
localStorage.setItem("player", "");
//스크롤 위치 값
// window.addEventListener("scroll", function () {
//   console.log(this.scrollY);
// });

//게임시작 버튼 클릭
function start_click() {
  const addr_target = "/biggning/Hompage/game/game/";
  if (localStorage.getItem("ai") == "") {
    var imgNum = Math.round(Math.random() * 2);
    imgtarget.src = imgArray[imgNum];
    setTimeout(start_click, 150);
    result_text.innerText = "아래에서 선택해주세요!";
  } else {
    imgtarget.src = addr_target + localStorage.getItem("ai") + "_choice.png";
  }
}
//게임시작 스크롤 이동
function scroll_function() {
  window.scrollTo(0, 750);
}
//플레이어 선택 로직
function btn_select(e) {
  const targetid = document
    .getElementById(e.getAttribute("id"))
    .getAttribute("id");
  const addr_target = "/biggning/Hompage/game/game/";

  if (targetid == "bawi_btn") {
    btn_bawi.src = addr_target + "bawi_click.png";
    btn_gawi.src = addr_target + "gawi_btn.png";
    btn_bo.src = addr_target + "bo_btn.png";
    Player_targetimg.src = addr_target + "bawi_choice.png";
    localStorage.setItem("player", "bawi");
  }
  if (targetid == "gawi_btn") {
    btn_bawi.src = addr_target + "bawi_btn.png";
    btn_gawi.src = addr_target + "gawi_click.png";
    btn_bo.src = addr_target + "bo_btn.png";
    Player_targetimg.src = addr_target + "gawi_choice.png";
    localStorage.setItem("player", "gawi");
  }
  if (targetid == "bo_btn") {
    btn_bawi.src = addr_target + "bawi_btn.png";
    btn_gawi.src = addr_target + "gawi_btn.png";
    btn_bo.src = addr_target + "bo_click.png";
    Player_targetimg.src = addr_target + "bo_choice.png";
    localStorage.setItem("player", "bo");
  }
}
var resultArray = ["bawi", "gawi", "bo"];
//결과보기 클릭
function submit_function() {
  var randomValue = resultArray[Math.floor(Math.random() * imgArray.length)];
  var result_ai = randomValue;
  const addr_target = "/biggning/Hompage/game/game/";
  localStorage.setItem("ai", result_ai);
  imgtarget.src = addr_target + result_ai + "_choice.png";
  console.log(addr_target + result_ai + "_choice.png");
  if (localStorage.getItem("player") == "bawi") {
    if (localStorage.getItem("ai") == "bawi") {
      result_text.innerText = "비겼네요! 무승부입니다!";
    } else if (localStorage.getItem("ai") == "gawi") {
      result_text.innerText = "Player가 승리하였습니다!";
    } else {
      result_text.innerText = "AI 가 승리하였습니다ㅠㅠㅠ";
    }
  }
  if (localStorage.getItem("player") == "gawi") {
    if (localStorage.getItem("ai") == "bawi") {
      result_text.innerText = "AI 가 승리하였습니다ㅠㅠㅠ";
    } else if (localStorage.getItem("ai") == "gawi") {
      result_text.innerText = "비겼네요! 무승부입니다!";
    } else {
      result_text.innerText = "Player가 승리하였습니다!";
    }
  }
  if (localStorage.getItem("player") == "bo") {
    if (localStorage.getItem("ai") == "bawi") {
      result_text.innerText = "Player가 승리하였습니다!";
    } else if (localStorage.getItem("ai") == "gawi") {
      result_text.innerText = "AI 가 승리하였습니다ㅠㅠㅠ";
    } else {
      result_text.innerText = "비겼네요! 무승부입니다!";
    }
  }
}

//메인으로 가기

function gomain() {
  localStorage.removeItem("ai");
  localStorage.removeItem("player");
  window.location.href = "/biggning/Hompage/sub/etc.html";
}
