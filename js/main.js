const searchEI = document.querySelector(".search");
const searchInputEI = searchEI.querySelector("input");

searchEI.addEventListener("click", function () {
  searchInputEI.focus();
});

searchInputEI.addEventListener("focus", function () {
  searchEI.classList.add("focused");
  searchInputEI.setAttribute("placeholder", "통합검색");
});

searchInputEI.addEventListener("blur", function () {
  searchEI.classList.remove("focused");
  searchInputEI.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간, 옵셥)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
// ._throttle(함수, 시간)
