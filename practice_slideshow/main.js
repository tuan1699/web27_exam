const imgs = [
  {
    id: 1,
    src: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    decr: "Caption Text 1",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    decr: "Caption Text 2",
  },
  {
    id: 3,
    src: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    decr: "Caption Text 3",
  },
];

const slideList = document.querySelector(".slide-features");
const slideItem = document.querySelectorAll(".slide-item");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex;
function showSlide(index) {
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  slideList.innerHTML = `<div class="slide-item">
          <span class="stt">${imgs[index].id}/${imgs.length}</span>
          <img
            src="${imgs[index].src}"  
            alt=""
          />
          <div class="slide-decr">${imgs[index].decr}</div>
        </div>`;
  currentIndex = index;
}

showSlide(0);

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function (e) {
    showSlide(index);
    dot.classList.add("active");
  });
});

prev.addEventListener("click", function (e) {
  slideList.style.animation = "";

  if (currentIndex == 0) {
    currentIndex = imgs.length - 1;
  } else {
    currentIndex--;
  }

  setTimeout(function () {
    slideList.style.animation = "fromLeft 1s";
  });
  showSlide(currentIndex);
  dots[currentIndex].classList.add("active");
});

next.addEventListener("click", function (e) {
  slideList.style.animation = "";
  if (currentIndex == imgs.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setTimeout(function () {
    slideList.style.animation = "fromRight 1s";
  });
  showSlide(currentIndex);
  dots[currentIndex].classList.add("active");
});
