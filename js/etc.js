// var datainput3 = document.getElementById("etc_data1");
// var datainput4 = new Object();
// var add_datainput3 = document.getElementById("etc_data2");
// var add_datainput4 = new Object();
// var txt3 = document.getElementById("result3");
// var txt4 = document.getElementById("result4");
// var storearray2 = [
//   {
//     id: 1,
//     branchName: "타임빌라스",
//     brand: "B",
//   },
//   {
//     id: 2,
//     branchName: "동부산점",
//     brand: "B",
//   },
//   {
//     id: 3,
//     branchName: "기흥점",
//     brand: "B",
//   },
//   {
//     id: 4,
//     branchName: "김해점",
//     brand: "B",
//   },
//   {
//     id: 5,
//     branchName: "이천점",
//     brand: "B",
//   },
//   {
//     id: 6,
//     branchName: "파주점",
//     brand: "B",
//   },
//   {
//     id: 7,
//     branchName: "고양점",
//     brand: "C",
//   },
//   {
//     id: 8,
//     branchName: "고양터미널점",
//     brand: "C",
//   },
//   {
//     id: 9,
//     branchName: "광교점",
//     brand: "C",
//   },
//   {
//     id: 10,
//     branchName: "광주수완점",
//     brand: "C",
//   },
//   {
//     id: 11,
//     branchName: "광주월드컵점",
//     brand: "C",
//   },
//   {
//     id: 12,
//     branchName: "구리점",
//     brand: "C",
//   },
//   {
//     id: 13,
//     branchName: "남악점",
//     brand: "C",
//   },
//   {
//     id: 14,
//     branchName: "대구율하점",
//     brand: "C",
//   },
//   {
//     id: 15,
//     branchName: "부여점",
//     brand: "C",
//   },
//   {
//     id: 16,
//     branchName: "서울역점",
//     brand: "C",
//   },
//   {
//     id: 17,
//     branchName: "이시아폴리스점",
//     brand: "C",
//   },
//   {
//     id: 18,
//     branchName: "청주점",
//     brand: "C",
//   },
//   {
//     id: 19,
//     branchName: "팩토리가산점",
//     brand: "C",
//   },
//   {
//     id: 20,
//     branchName: "광명점",
//     brand: "D",
//   },
//   {
//     id: 21,
//     branchName: "군산점",
//     brand: "D",
//   },
//   {
//     id: 22,
//     branchName: "수지점",
//     brand: "D",
//   },
//   {
//     id: 23,
//     branchName: "여수점",
//     brand: "D",
//   },
//   {
//     id: 24,
//     branchName: "은평점",
//     brand: "D",
//   },
//   {
//     id: 25,
//     branchName: "전주점",
//     brand: "D",
//   },
//   {
//     id: 26,
//     branchName: "피트인 산본점",
//     brand: "D",
//   },
//   {
//     id: 27,
//     branchName: "세종점",
//     brand: "E",
//   },
// ];

// // 배열에서 지점명 골라 리스트로 만들기
// const namelist2 = [];
// for (var ele1 of storearray2) {
//   namelist2.push(ele1.branchName);
// }
// //지점순서 출력
// etc.textContent = namelist2;
// etc_btn.addEventListener("click", btn_click2);
// function btn_click2() {
//   var data5 = datainput3.value;
//   var data6 = datainput4.Object;
//   const afterdata3 = data5.split(",");
//   var data7 = add_datainput3.value;
//   var data8 = add_datainput4.object;
//   const afterdata4 = data7.split("/");

//   for (let i = 0; i < afterdata3.length; i++) {
//     if (afterdata3[i].includes("점")) {
//       afterdata3[i] = afterdata3[i];
//     } else if (afterdata3[i].includes("빌라스")) {
//       afterdata3[i] = afterdata3[i];
//     } else {
//       afterdata3[i] = afterdata3[i] + "점";
//     }
//   }

//   for (let i = 0; i < afterdata4.length; i++) {
//     if (afterdata4[i].includes("점")) {
//       afterdata4[i] = afterdata4[i];
//     } else if (afterdata4[i].includes("빌라스")) {
//       afterdata4[i] = afterdata4[i];
//     } else {
//       afterdata4[i] = afterdata4[i] + "점";
//     }
//   }

//   //afterdata1을 객체로 변환

//   const convertData3 = afterdata3.map((item) => {
//     return {
//       id: "",
//       branchName: item,
//       brand: "",
//     };
//   });
//   const convertData4 = afterdata4.map((item) => {
//     return {
//       id: "",
//       branchName: item,
//       brand: "",
//     };
//   });

//   // console.log(convertData2);

//   const final3 = convertData3
//     .map((item) => {
//       const { branchName } = item;

//       const findItem = storearray2.find(
//         (_item) => _item.branchName === branchName
//       );

//       if (findItem) {
//         const { id, brand } = findItem;

//         return {
//           ...item,
//           id,
//           brand,
//         };
//       }
//     })
//     .filter((item) => item);

//   const sort3 = final3.sort((a, b) => {
//     return a.id - b.id;
//   });

//   const final4 = convertData4
//     .map((item) => {
//       const { branchName } = item;

//       const findItem = storearray2.find(
//         (_item) => _item.branchName === branchName
//       );

//       if (findItem) {
//         const { id, brand } = findItem;

//         return {
//           ...item,
//           id,
//           brand,
//         };
//       }
//     })
//     .filter((item) => item);

//   const sort4 = final4.sort((a, b) => {
//     return a.id - b.id;
//   });

//   // console.log(sort3);
//   // console.log(sort4);
//   txt3.textContent = sort3.map((row) => row.branchName);
//   txt4.textContent = sort4.map((row) => row.branchName);
// }
