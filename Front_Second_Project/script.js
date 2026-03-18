// 텍스트 작성과 삭제 즉시 실행 함수
(function () {
  const spanEl = document.querySelector("main h2 span");

  /* 내가 작성할 텍스트를 배열로 저장한다. */
  const txtArr = [
    "Web Publisher",
    "Front-End Developer",
    "Web UI Designer",
    "UX Designer",
    "Back-END Developer",
  ];
  let index = 0;
  let currentTxt = txtArr[index].split("");

  /* 배열 안에 있는 데이터들을 1.지우고 2.뿌려주는 행동을 하면 된다. */

  function writeText() {
    spanEl.textContent += currentTxt.shift();
    if (currentTxt.length !== 0) {
      setTimeout(writeText, Math.floor(Math.random() * 100));
    } else {
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }

  function deleteTxt() {
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if (currentTxt.length !== 0) {
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeText();
    }
  }
  writeText();
})();

// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
(function () {
  const headerEl = document.querySelector("header");
  window.addEventListener("scroll", function () {
    requestAnimationFrame(scrollCheck);
  });

  function scrollCheck() {
    const browseScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browseScrollY > 0) {
      headerEl.classList.add("active");
    } else {
      headerEl.classList.remove("active");
    }
  }
})();

// 애니메이션 스크롤
(function () {
  const animationMove = function (selector) {
    const target = document.querySelector(selector);
    /* 현재 브라우저의 스크롤 값 */
    const browserScrollY = window.pageYOffset;

    /* 내가 이동해야할 곳의 스크롤 값을 구하는 것 */
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;

    /* 구한 스크롤 값을 통해 해당 영역으로 이동시키는 것*/
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  const scrollMoveEl = document.querySelectorAll(
    `[data-animation-scroll='true']`,
  );
  console.log(scrollMoveEl);
  for (let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener("click", function (e) {
      animationMove(this.dataset.target);
    });
  }
})();
