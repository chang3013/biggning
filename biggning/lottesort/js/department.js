var datainput = document.getElementById("data_2");
var datainput2 = new Object();
var add_datainput = document.getElementById("add_data");
var add_datainput2 = new Object();
var txt = document.getElementById("result");
var txt2 = document.getElementById("slash-result");
var txt3 = document.getElementById("dot-result");
var txt4 = document.getElementById("result_count");
function check_enter() {
  if (event.keyCode == 13) {
    event.returnValue = false;
  }
}
var storearray = [
  {
    id: 0,
    branchName: "잠실점",
    brand: "A",
  },
  {
    id: 1,
    branchName: "본점",
    brand: "A",
  },
  {
    id: 2,
    branchName: "강남점",
    brand: "A",
  },
  {
    id: 3,
    branchName: "건대스타시티점",
    brand: "A",
  },
  {
    id: 4,
    branchName: "관악점",
    brand: "A",
  },
  {
    id: 5,
    branchName: "김포공항점",
    brand: "A",
  },
  {
    id: 6,
    branchName: "노원점",
    brand: "A",
  },
  {
    id: 7,
    branchName: "미아점",
    brand: "A",
  },
  {
    id: 8,
    branchName: "영등포점",
    brand: "A",
  },
  {
    id: 9,
    branchName: "청량리점",
    brand: "A",
  },
  {
    id: 10,
    branchName: "인천점",
    brand: "A",
  },
  {
    id: 11,
    branchName: "동탄점",
    brand: "A",
  },
  {
    id: 12,
    branchName: "구리점",
    brand: "A",
  },
  {
    id: 13,
    branchName: "분당점",
    brand: "A",
  },
  {
    id: 14,
    branchName: "수원점",
    brand: "A",
  },
  {
    id: 15,
    branchName: "안산점",
    brand: "A",
  },
  {
    id: 16,
    branchName: "일산점",
    brand: "A",
  },
  {
    id: 17,
    branchName: "중동점",
    brand: "A",
  },
  {
    id: 18,
    branchName: "평촌점",
    brand: "A",
  },
  {
    id: 19,
    branchName: "부산본점",
    brand: "A",
  },
  {
    id: 20,
    branchName: "광복점",
    brand: "A",
  },
  {
    id: 21,
    branchName: "광주점",
    brand: "A",
  },
  {
    id: 22,
    branchName: "대구점",
    brand: "A",
  },
  {
    id: 23,
    branchName: "대전점",
    brand: "A",
  },
  {
    id: 24,
    branchName: "동래점",
    brand: "A",
  },
  {
    id: 25,
    branchName: "마산점",
    brand: "A",
  },
  {
    id: 26,
    branchName: "상인점",
    brand: "A",
  },
  {
    id: 27,
    branchName: "센텀시티점",
    brand: "A",
  },
  {
    id: 28,
    branchName: "울산점",
    brand: "A",
  },
  {
    id: 29,
    branchName: "전주점",
    brand: "A",
  },
  {
    id: 30,
    branchName: "창원점",
    brand: "A",
  },
  {
    id: 31,
    branchName: "포항점",
    brand: "A",
  },
  {
    id: 32,
    branchName: "타임빌라스",
    brand: "B",
  },
  {
    id: 33,
    branchName: "동부산점",
    brand: "B",
  },
  {
    id: 34,
    branchName: "기흥점",
    brand: "B",
  },
  {
    id: 35,
    branchName: "김해점",
    brand: "B",
  },
  {
    id: 36,
    branchName: "이천점",
    brand: "B",
  },
  {
    id: 37,
    branchName: "파주점",
    brand: "B",
  },
  {
    id: 38,
    branchName: "고양점",
    brand: "C",
  },
  {
    id: 39,
    branchName: "고양터미널점",
    brand: "C",
  },
  {
    id: 40,
    branchName: "광교점",
    brand: "C",
  },
  {
    id: 41,
    branchName: "광주수완점",
    brand: "C",
  },
  {
    id: 42,
    branchName: "광주월드컵점",
    brand: "C",
  },
  {
    id: 43,
    branchName: "구리점",
    brand: "C",
  },
  {
    id: 44,
    branchName: "남악점",
    brand: "C",
  },
  {
    id: 45,
    branchName: "대구율하점",
    brand: "C",
  },
  {
    id: 46,
    branchName: "부여점",
    brand: "C",
  },
  {
    id: 47,
    branchName: "서울역점",
    brand: "C",
  },
  {
    id: 48,
    branchName: "이시아폴리스점",
    brand: "C",
  },
  {
    id: 49,
    branchName: "청주점",
    brand: "C",
  },
  {
    id: 50,
    branchName: "팩토리가산점",
    brand: "C",
  },
  {
    id: 51,
    branchName: "광명점",
    brand: "D",
  },
  {
    id: 52,
    branchName: "군산점",
    brand: "D",
  },
  {
    id: 53,
    branchName: "수지점",
    brand: "D",
  },
  {
    id: 54,
    branchName: "여수점",
    brand: "D",
  },
  {
    id: 55,
    branchName: "은평점",
    brand: "D",
  },
  {
    id: 56,
    branchName: "진주점",
    brand: "D",
  },
  {
    id: 57,
    branchName: "피트인 산본점",
    brand: "D",
  },
  {
    id: 58,
    branchName: "세종점",
    brand: "E",
  },
];
// 배열에서 지점명 골라 리스트로 만들기
const namelist = [];
for (var ele1 of storearray) {
  namelist.push(ele1.branchName);
}
//배열에서 id값 골라 리스트로 만들기
const idlist = [];
for (var ele2 of storearray) {
  idlist.push(ele2.id);
}
// 지점순서 출력
departmentStore.textContent = namelist;

//콤마, 슬래시 검색 결과 만들기
btn.addEventListener("click", btn_click);
function btn_click() {
  var data1 = datainput.value;
  var data2 = datainput2.Object;
  var afterdata1;
  //구분자(콤마,슬래시)를 기준으로 배열 만듬
  if (data1.includes(",")) {
    afterdata1 = data1.split(",");
  } else {
    afterdata1 = data1.split("/");
  }
  // 지점명 입력에 따라 처리하는 로직
  for (let i = 0; i < afterdata1.length; i++) {
    if (afterdata1[i].match("동부산점")) {
      afterdata1[i] = "동부산점";
    } else if (afterdata1[i].match("부산점")) {
      afterdata1[i] = "부산본점";
    } else if (afterdata1[i].match("부산본점")) {
      afterdata1[i] = "부산본점";
    } else if (afterdata1[i].match("부산 본점")) {
      afterdata1[i] = "부산본점";
    } else if (afterdata1[i].match("산본점")) {
      afterdata1[i] = "피트인 산본점";
    } else if (afterdata1[i].match("산본")) {
      afterdata1[i] = "피트인 산본점";
    } else if (afterdata1[i].includes("점")) {
      afterdata1[i] = afterdata1[i].trim();
    } else if (afterdata1[i].includes("빌라스")) {
      afterdata1[i] = afterdata1[i].trim();
    } else if (afterdata1[i].match("동부산")) {
      afterdata1[i] = afterdata1[i].trim() + "점";
    } else if (afterdata1[i].includes("피트인")) {
      afterdata1[i] = "피트인 산본점";
    } else if (afterdata1[i].match("부산")) {
      afterdata1[i] = "부산본점";
    } else {
      afterdata1[i] = afterdata1[i].trim() + "점";
    }
  }

  // console.log(afterdata1);
  //기준데이터에서 정보 가져옴
  const convertData = afterdata1.map((item) => {
    return {
      id: "",
      branchName: item,
      brand: "",
    };
  });

  const final = convertData
    .map((item) => {
      const { branchName } = item;

      const findItem = storearray.find(
        (_item) => _item.branchName === branchName
      );

      if (findItem) {
        const { id, brand } = findItem;

        return {
          ...item,
          id,
          brand,
        };
      }
    })
    .filter((item) => item);
  //id의 value 기준으로 정렬
  const sort = final.sort((a, b) => {
    return a.id - b.id;
  });

  //입력한 지점과 기준 지점의 차집합
  var searchdata = storearray.map((row) => row.branchName);
  var searchresult = afterdata1.filter((x) => !searchdata.includes(x));

  //지점 없는 경우 얼럿
  if (searchresult.length > 0) {
    alert("지점명을 확인해주세요.\n" + "지점명 : " + searchresult);
  }
  //id,brand 값이 없을 경우(기준데이터에 검색한 지점이 없을때) 얼럿 처리

  const headings = document.querySelectorAll("h2_result1");
  txt4.textContent = sort.length;
  txt.textContent = sort.map((row) => row.branchName);
  txt2.textContent = sort.map((row) => row.branchName).join("/");
  txt3.textContent = sort.map((row) => row.branchName).join("·");

  document.textContent;

  $(".h2_result1").each(function () {
    $(this).html(
      $(this)
        .html()
        .replace(/구리점/g, '<span style="color:#0000ff">구리점</span>')
    );
  });
}
