document.getElementById("lotto_btn").addEventListener("click", function () {
  // 1부터 45까지의 배열 생성
  var numbers = [];
  for (var i = 1; i <= 45; i++) {
    numbers.push(i);
  }

  // 배열에서 무작위로 여섯 개의 숫자 추출
  function getRandomNumbers(arr, count) {
    var shuffled = arr.slice(0),
      i = arr.length,
      min = i - count,
      temp,
      index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }

  var selectedNumbers = getRandomNumbers(numbers, 6);
  selectedNumbers.sort(function (a, b) {
    return a - b;
  });

  // 결과 출력
  var resultElement = document.getElementById("txt_result");
  var newResult = document.createElement("div");
  newResult.innerText = "선택된 숫자: " + selectedNumbers.join(", ");
  resultElement.appendChild(newResult);
});

var numbers_two = []; // 1부터 45까지의 배열 생성
for (var i = 1; i <= 45; i++) {
  numbers_two.push(i);
}

// 배열에서 무작위로 하나의 숫자 추출
function getRandomNumber(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr.splice(index, 1)[0];
}
//로또 번호 하나씩 3초간격으로 이미지로 출력하기
var resultElement = document.getElementById("imgbox");
var interval;
var count = 0;
var j = 0;
document.getElementById("lotto2_btn").addEventListener("click", function () {
  interval = setInterval(function () {
    if (count < 6) {
      var randomNumber = getRandomNumber(numbers_two);
      //   resultElement.innerHTML += "선택된 숫자: " + randomNumber + "<br>";
      var imgId = "resultimg" + j;
      j++;
      var newSrc = "/biggning/TEST/img/" + randomNumber + ".png";
      var img = document.getElementById(imgId);
      if (img) {
        img.src = newSrc;
      }
      count++;
      j + 1;
    } else {
      clearInterval(interval);
    }
  }, 3000);
});
