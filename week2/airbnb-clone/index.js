// function toggle() {

// 	const hide= document.querySelector(".hide-header").addEventListener("click",function{

// 	})

// }

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// function scrollHandler() {
//   const ul = document.querySelector("ul");
//   let li;
//   let count = ul.children.length;

//   document.addEventListener("scroll", () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//       li = ul.appendChild(document.createElement("li"));
//       li.textContent = ++count;
//     }
//   });
// }
// scrollHandler();
// function scrollHandler() {
//     const $ul = document.querySelector('ul');
//     let count = $ul.children.length;

//     document.addEventListener('scroll', () => {
//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//             const $img = document.createElement('img');
//             $img.src = 'house.png'; // 여기에 실제 이미지 파일 경로 또는 URL을 넣으세요.
// 			$img.classList.add('custom-image')
//             $ul.appendChild($img);
//             count++; // 이미지 요소가 추가되었으므로 count를 증가시킵니다.
//         }
//     });
// }

// scrollHandler();

let count = 1; // 이미지 추가를 위한 고유한 ID를 초기화합니다.
const $imgContent = document.querySelector(".img__content");

function addImage() {
  const $div = document.createElement("div");
  $div.classList.add("img");
  $div.innerHTML = `
        <img src="house.png" alt="">
        <h3>가평 펜션</h3>
        <div><span style="color:gray">호스트:유빈님 호스팅 경력 5년</span></div>
        <div><span style="color:gray">8월 1일~6일</span></div>
        <div>90,000원/박</div>
    `;
  $imgContent.appendChild($div);
  count++;
}

function scrollHandler() {
  const $lastImg = document.querySelector(".img__content .img:last-child");

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      addImage();
    }
  });

  observer.observe($lastImg);
}

scrollHandler();
