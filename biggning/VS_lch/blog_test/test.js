window.onload = function () {
  const menu = document.querySelectorAll("a");

  //메뉴 마우스 호버
  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", act);
    function act() {
      for (let j = 0; j < menu.length; j++) {
        menu[j].removeAttribute("class", "active");
      }
      this.setAttribute("class", "active");

      //   console.log(k);
    }
  }

  //메뉴 클릭시, Content div 변경 로직
  $(document).ready(function () {
    //$('.show1').show(); //페이지를 로드할 때 표시할 요소
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide(); //페이지를 로드할 때 숨길 요소
    $("#a1").click(function () {
      $("#home1").hide();
      $("#p2").hide();
      $("#p3").hide(); //클릭 시 숨김
      $("#p1").show(); //클릭 시 표시
      return false;
    });
    $("#a2").click(function () {
      $("#home1").hide();
      $("#p1").hide();
      $("#p3").hide(); //클릭 시 숨김
      $("#p2").show(); //클릭 시 표시
      return false;
    });
    $("#a3").click(function () {
      $("#home1").hide();
      $("#p1").hide();
      $("#p2").hide(); //클릭 시 숨김
      $("#p3").show(); //클릭 시 표시
      return false;
    });
  });
};
