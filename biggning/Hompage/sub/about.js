new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 2,
  loop: true,
  loopAdditionalSlides: 0,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  // 페이저 버튼 사용자 설정
  pagination: {
    // 페이지 번호 요소 선택자
    el: ".swiper-pagination",

    // 사용자의 페이지 번호 요소 제어 가능 요소 (사용자가 단순히 시각적으로만 보는것 뿐만아니라 눌러서 제어할 수 있는지에 대한 여부)
    clickable: true,
  },
});
