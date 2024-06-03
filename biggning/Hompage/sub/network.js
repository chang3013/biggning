//배열 선언
let Ai = [];
//배열에 중복되지 않는 숫자 3자리 추출
while (Ai.length < 3) {
  var randomNum = Math.floor(Math.random() * 10);
  if (Ai.indexOf(randomNum) > -1) continue;
  Ai.push(randomNum);
}

//초기화
var strike = 0;
var ball = 0;
var checkResult = [0, 0, 0];
var count = 0;
//사용자가 숫자 입력 후 버튼 클릭
function game_submit() {
  //입력값 배열
  let Number = [];
  //카운트
  count = count + 1;
  //입력값 체크
  var checkResult = Array(3).fill(0);
  //입력값을 배열로
  let targetNumber = document.getElementById("txt_input").value;
  Number = Array.from(targetNumber);
  //중복 숫자 제거
  const Check = new Set(Number);
  //중복 숫자 제거 됬는지 확인
  const Duplicate = Check.size < Number.length;
  //중복숫자 및 예외처리
  if (Duplicate) {
    alert("중복하지 않는 숫자 세자리 입력 해주세요.");
  }
  if (isNaN(targetNumber)) {
    alert("중복하지 않는 숫자 세자리 입력 해주세요.");
  }
  //Ai 배열과 입력받은 값 비교
  for (var i = 0; i < 3; i++) {
    if (Ai[i] == Number[i]) {
      checkResult[i] = 2;
    } else if (Ai.indexOf(parseInt(Number[i])) > -1) {
      checkResult[i] = 1;
    }
  }
  //스트라이크, 볼 체크
  strike = checkResult.filter((x) => x === 2).length;
  ball = checkResult.filter((x) => x === 1).length;

  //결과 로직
  if (strike === 3) {
    document.getElementById("result").innerText =
      "축하합니다. " + count + "번째 만에 성공하였습니다.";
  } else {
    document.getElementById("result").innerText =
      strike +
      "스트라이크 " +
      ball +
      "볼 " +
      "입니다. " +
      count +
      "번째 시도입니다.";
  }
  console.log(Ai);
}
//다시하기
function regame() {
  //Ai 배열 초기화 후 랜덤 숫자 추출
  Ai = [];
  while (Ai.length < 3) {
    var randomNum = Math.floor(Math.random() * 10);
    if (Ai.indexOf(randomNum) > -1) continue;
    Ai.push(randomNum);
  }
  //변수 초기화 및 텍스트 초기화
  strike = 0;
  ball = 0;
  checkResult = [0, 0, 0];
  count = 0;
  document.getElementById("txt_input").value = "";
  document.getElementById("result").innerText = "";
}
