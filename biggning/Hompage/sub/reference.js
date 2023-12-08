const modal = document.getElementById("modal_pop");
const modal2 = document.getElementById("modal_div");
const modal_img = document.getElementById("targetimg");
const len2 = document.querySelectorAll(".thumb-box");
const targettitle = document.getElementById("title");
const targettext = document.getElementById("text");

const title2 = [
  "미래에셋대우",
  "신세계",
  "대한항공",
  "유니세프",
  "제네시스",
  "미래에셋페이",
  "롯데면세점",
  "하이마트",
  "카사미아",
  "더현대",
  "신세계아카데미",
  "현대캐피탈",
  "롯데백화점",
];

const text2 = [
  "미래에셋대우 증권에서 진행한 프로젝트입니다.",
  "신세계 백화점에서 진행한 프로젝트로 앱 내 컨텐츠 제작하였습니다.(게임, 이벤트 등)",
  "대한항공에서 진행한 프로젝트로 매거진 컨텐츠 제작하였습니다.(카탈로그 형식의 페이지)",
  "유니세프코리아에서 진행한 프로젝트로 뉴스레터 제작하였습니다.",
  "현대자동차 그룹에서 진행한 프로젝트로 제네시스 시승 예약 시스템 제작하였습니다.",
  "미래에셋증권에서 진행한 프로젝트로 미래에셋페이(NFC) AOS/iOS 앱을 제작하였습니다.",
  "롯데면세점에서 진행한 프로젝트로 뉴스레터,매거진을 제작하였습니다.",
  "하이마트에서 진행한 프로젝트로 각종 참여 게임 이벤트, 카탈로그 제작하였습니다.",
  "카사미아에서 진행한 프로젝트로 웹페이지 제작을 하였습니다.",
  "더현대에서 진행한 프로젝트로 현대백화점 앱 게임 또는 참여형 이벤트 제작하였습니다.",
  "신세계 아카데미에서 진행한 프로젝트로 매달 직원들에게 전달하는 카탈로그 제작하였습니다.",
  "현대캐피탈에서 진행한 프로젝트로 대리점별 차량 보유 및 판매실적등 정보 전달용 앱/웹 제작하였습니다.",
  "롯데백화점에서 진행한 프로젝트로 롯데백화점 앱 게임/참여형 이벤트 제작하였습니다.",
];

// console.log(len2);
function click_function(btnid) {
  const targetid = document
    .getElementById(btnid.getAttribute("id"))
    .getAttribute("id");
  if (targetid != "") {
    for (var i = 0; i < len2.length; i++) {
      if (targetid == "box" + i) {
        modal_img.src =
          "/biggning/Hompage/img/reference/Project" + i + "_detail.png";
        targettitle.innerHTML = title2[i];
        targettext.innerHTML = text2[i];
        // console.log(title[i]);
      }
    }
  }

  modal.style.display = "flex";
  modal.style.zIndex = "10";
  modal.style.transform = "translateZ(0)";
  modal.style.animation = "fadeInUp 1s";
  modal2.style.zIndex = "10";
  modal2.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

function close_btn() {
  modal.style.display = "none";
  modal.style.zIndex = "0";
  modal2.style.zIndex = "0";
}

const category2 = ["catebtn0", "catebtn1", "catebtn2"];
const btn00 = document.querySelector("#box0");

function cate_btn(e) {
  const targetid3 = document
    .getElementById(e.getAttribute("id"))
    .getAttribute("id");
  if (targetid3 == category2[0]) {
    document.getElementById("img-box0").style.display = "block";
    document.getElementById("img-box1").style.display = "block";
    document.getElementById("img-box2").style.display = "block";
    document.getElementById("img-box3").style.display = "block";
    document.getElementById("img-box4").style.display = "block";
    document.getElementById("img-box5").style.display = "block";
    document.getElementById("img-box6").style.display = "block";
    document.getElementById("img-box7").style.display = "block";
    document.getElementById("img-box8").style.display = "block";
    document.getElementById("img-box9").style.display = "block";
    document.getElementById("img-box10").style.display = "block";
    document.getElementById("img-box11").style.display = "block";
    document.getElementById("img-box12").style.display = "block";
  }
  if (targetid3 == category2[1]) {
    document.getElementById("img-box0").style.display = "none";
    document.getElementById("img-box1").style.display = "block";
    document.getElementById("img-box2").style.display = "none";
    document.getElementById("img-box3").style.display = "none";
    document.getElementById("img-box4").style.display = "none";
    document.getElementById("img-box5").style.display = "none";
    document.getElementById("img-box6").style.display = "none";
    document.getElementById("img-box7").style.display = "block";
    document.getElementById("img-box8").style.display = "block";
    document.getElementById("img-box9").style.display = "block";
    document.getElementById("img-box10").style.display = "none";
    document.getElementById("img-box11").style.display = "none";
    document.getElementById("img-box12").style.display = "block";
  }
  if (targetid3 == category2[2]) {
    document.getElementById("img-box0").style.display = "block";
    document.getElementById("img-box1").style.display = "none";
    document.getElementById("img-box2").style.display = "block";
    document.getElementById("img-box3").style.display = "block";
    document.getElementById("img-box4").style.display = "block";
    document.getElementById("img-box5").style.display = "block";
    document.getElementById("img-box6").style.display = "block";
    document.getElementById("img-box7").style.display = "none";
    document.getElementById("img-box8").style.display = "none";
    document.getElementById("img-box9").style.display = "none";
    document.getElementById("img-box10").style.display = "block";
    document.getElementById("img-box11").style.display = "block";
    document.getElementById("img-box12").style.display = "none";
  }
}
