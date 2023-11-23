

// function file1Function(){
//     const fileInput = document.getElementById("fileUpload");
//     const selectedFile = fileInput.files[0];
//     console.log(selectedFile);
// }

// const { window } = require("wd/lib/commands");
// window.onload = function(){

//     const   _VIDEO = document.querySelector("#file_video"),
//             _CANVAS = document.querySelector("#thumb_video"),
//             _CANVAS_CTX = _CANVAS.getContext("2d");
//     document.querySelector("#fileUpload").addEventListener('change', function() {
//     document.querySelector("#file_video").setAttribute('src', URL.createObjectURL(document.querySelector("#fileUpload").files[0])); //비디오를 첨부(추가)하면 첨부된 파일을 비디오 태그에 삽입한다
//     });
//     _VIDEO.addEventListener('loadedmetadata', function() { //비디오 태그의 메타데이터가 들어오면
//         _CANVAS.width = _VIDEO.videoWidth;
//         _CANVAS.height = _VIDEO.videoHeight;
//         console.log(_VIDEO.duration, _VIDEO.currentTime);
//         const time = Math.random() * _VIDEO.duration; //비디오의 영상길이 중 랜덤 타임을 뽑음
//         _VIDEO.currentTime = time; //해당 시간으로 이동
//         setTimeout(()=>{ //바로 출력하면 비디오가 불러오기 전이라 동작이 안됨. 잠깐의 기다림 후 캔버스에 해당 이미지를 그림.
//             _CANVAS_CTX.drawImage(_VIDEO, 0, 0, _VIDEO.videoWidth, _VIDEO.videoHeight);
//         },50)
//     });
// }



            //캡쳐 스크립트 로직
    // var videoId = 'file_video2'
    // var scaleFactor = 0.25;
    // var snapshots = [];
    // const button3=document.querySelector("#cap_btn");

    // window.onload = function file2(){
        // const button3=document.querySelector(".cap_btn");
        // var videoId = 'file_video2'
        // var scaleFactor = 0.25;
        // var snapshots = [];
        // const button3ClickHandler = () => {
        //     console.log("a")
        //     function capture(file_video2,scaleFactor){
        //         if(scaleFactor == null){
        //             scaleFactor=1;
        //         }
        //         var w = file_video2.videoWidth*scaleFactor;
        //         var h = file_video2.videoHeight*scaleFactor;
        //         var canvas2 = document.createElement("canvas2");
        //             canvas2.width = w/4;
        //             canvas2.height = h/4;
        //         var ctx2 = canvas2.getContext("2d");
        //             ctx2.drawImage(file_video2,0,0,w/4,h/4);
        //         //return canvas2;
 
        //         var video_test = document.getElementById("file_video2");
        //         var output = document.getElementById("cap_img");
        //         var canvas2 = capture(video_test,scaleFactor);
        //             canvas2.onclick = function(){
        //                 window.open(this.toDataURL());
        //             };
        //         snapshots.unshift(canvas2);
        //         output.innerHTML = '';
        //         for(var g=0;g<0; g++){
        //             cap_img.appendChild(snapshots[g]);
        //         }
        //     }
        // }
    //     console.log("a")
    // button3.addEventListener("click",button3ClickHandler);
    // }


// window.onload = function btnfunction(){
//     const capbtn = document.getElementById("cap_btn");
//     capbtn.onclick=function(){
//         console.log("a");
//         alert("클릭");
//     }
// }



//     capbtn.addEventListener('click', () => {
//         console.log("a");
//         alert("클릭");
//       });
// }