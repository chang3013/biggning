const bodyEl = document.body;
const button = document.getElementById("mode_icon");
const AAA = localStorage.getItem("theme");

//테마값에 따라 css classlist 변경하도록하는 로직
function theme_SET(AAA) {
  bodyEl.classList.toggle("dark", AAA === "dark");
  bodyEl.classList.toggle("light", AAA !== "dark");
  // button.style.filter = AAA === "dark" ? "invert(75%)" : "none";
  localStorage.setItem("theme", AAA);
}
//테마 변경 버튼 동작 로직
function btn_function() {
  if (localStorage.getItem("theme") !== "dark") {
    localStorage.setItem("theme", "dark");
    theme_SET("dark");
  } else {
    localStorage.setItem("theme", "light");
    theme_SET("light");
  }
}

//현재 테마 불러오기 (페이지 새로고침 또는 접속 했을때)
if (localStorage.getItem("theme") !== "dark") {
  bodyEl.classList.toggle("light", localStorage.getItem("theme") !== "dark");
} else {
  bodyEl.classList.toggle("dark", localStorage.getItem("theme") === "dark");
}
