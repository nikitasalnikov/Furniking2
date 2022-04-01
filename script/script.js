const preNavLang = document.querySelector(".pre__nav-itemLang"),
  arrow = document.querySelector(".arrowDown"),
  list = document.querySelector(".pre__nav-lists"),
  preNavList = document.querySelectorAll(".pre__nav-list"),
  headerNavItem = document.querySelector(".header__nav-item"),
  navItemList = document.querySelector(".nav__item-lists"),
  navCategory = document.querySelector(".header__nav-category"),
  categoryIcon = document.querySelector(".categoryDown"),
  trendLink = document.querySelectorAll(".main__trends-link"),
  trendsIcons = document.querySelectorAll(".main__trends-icons");

preNavLang.addEventListener("click", (e) => {
  e.preventDefault();
  arrow.classList.toggle("active");
  list.classList.toggle("active");
});
for (let i = 0; i < preNavList.length; i++) {
  preNavList[i].addEventListener("click", (e) => {
    e.preventDefault();
    arrow.classList.remove("active");
    list.classList.remove("active");
  });
}

headerNavItem.addEventListener("click", () => {
  headerNavItem.classList.toggle("active");
  navItemList.classList.toggle("active");
});

navCategory.addEventListener("click", () => {
  categoryIcon.classList.toggle("active");
});

for (let i = 0; i < trendLink.length; i++) {
  trendLink[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < trendLink.length; j++) {
      trendLink[j].classList.remove("active");
    }
    trendLink[i].classList.add("active");
  });
}

for (let i = 0; i < trendsIcons.length; i++) {
  trendsIcons[i].addEventListener("mouseover", () => {
    trendsIcons[i].classList.toggle("active");
  });
}

// class Slider {
//   constructor(obj) {
//     this.slider = document.querySelector(obj.slider);
//     this.sliderLine = this.slider.querySelector(obj.sliderLine);
//     this.slide = this.sliderLine.children;
//     this.next = document.querySelector(obj.next);
//     this.prev = document.querySelector(obj.prev);
//     let dots = document.querySelectorAll('.main__trends-dot');
//     this.direction = obj.direction.toUpperCase() == "X" ? "X" : "Y";
//     this.width = this.slider.clientWidth;
//     this.height = this.slider.clientHeight;

//     this.moveSize = "X" === this.direction ? this.width : this.height;
//     this.timeMove = obj.time != undefined ? obj.time : 500;
//     this.autoplay = obj.autoplay;
//     this.interval = isNaN(obj.interval) == true ? this.timeMove + 1000 : obj.interval;

//     this.activeSlide = 0;

//     this.sliderLine.style.cssText = `
//       overflow:hidden;
//       position:relative;
//       height: ${this.height}px;
//     `;

//     for (let i = 0; i < this.slide.length; i++) {
//       this.slide[i].style = `
//             position: absolute;
//             width: ${this.width}px;
//             `;

//       if (i != this.activeSlide) {
//         this.slide[i].style.transform = `translate${this.direction}(-${this.moveSize}px)`;
//       }
//       if (i === this.slide.length - 1) {
//         this.slide[i].style.transform = `translate${this.direction}(${this.moveSize}px)`;
//       }
//     }

//   for (let i = 0; i < dots.length; i++) {
//         dots[i].addEventListener('click', (e) => {
//             e.preventDefault();

//             for (let j = 0; j < dots.length; j++) {
//                 dots[j].classList.remove('active');
//             }
//            dots[i].classList.add('active');
//   });

// }
//     if (this.autoplay === true) {
//       setInterval(() => {
//         this.move(this.next);
//       }, this.interval);
//     }

//     window.addEventListener("resize", () => {
//       this.slider = document.querySelector(obj.slider);
//       this.sliderLine = this.slider.querySelector(obj.sliderLine);
//       this.slide = this.sliderLine.children;

//       this.width = this.slider.clientWidth;
//       this.height = this.slider.clientHeight;
//       this.moveSize = "X" === this.direction ? this.width : this.height;

//       this.activeSlide = 0;

//       this.sliderLine.style.cssText = `
//       overflow:hidden;
//       position:relative;
//       height: ${this.height}px;

//     `;
//       for (let i = 0; i < this.slide.length; i++) {
//         this.slide[i].style = `
//             position: absolute;
//             width: ${this.width}px;
//             `;

//         if (i != this.activeSlide) {
//           this.slide[i].style.transform = `translate${this.direction}(${this.moveSize}px)`;
//         }
//         if (i === this.slide.length - 1) {
//           this.slide[i].style.transform = `translate${this.direction}(-${this.moveSize}px)`;
//         }
//       }
//     });

//     this.next.addEventListener("click", () => this.move(this.next));
//     this.prev.addEventListener("click", () => this.move(this.prev));
//   }

//   move(btn) {
//     this.next.disabled = true;
//     this.prev.disabled = true;

//     setTimeout(() => {
//       this.next.disabled = false;
//       this.prev.disabled = false;
//     }, this.timeMove);

//     let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize;

//     for (let i = 0; i < this.slide.length; i++) {
//       this.slide[i].style.transition = "0ms";

//       if (i != this.activeSlide) {
//         this.slide[i].style.transform = `translate${this.direction}(${btnLeftOrRight * -1}px)`;
//       }
//     }
//     this.slide[this.activeSlide].style.transition = this.timeMove + "ms";
//     this.slide[this.activeSlide].style.transform = `translate${this.direction}(${btnLeftOrRight}px)`;

//     if (btn == this.next) {
//       this.activeSlide++;

//       if (this.activeSlide >= this.slide.length) {
//         this.activeSlide = 0;
//       }
//     } else if (btn == this.prev) {
//       this.activeSlide--;

//       if (this.activeSlide < 0) {
//         this.activeSlide = this.slide.length - 1;
//       }
//     }
//     this.slide[this.activeSlide].style.transition = this.timeMove + "ms";
//     this.slide[
//       this.activeSlide
//     ].style.transform = `translate${this.direction}(0px)`;
//   }
// }

// const slider = new Slider({
//   slider: ".main__review-slider",
//   sliderLine: ".main__review-sliderLine",
//   next: ".slider__next",
//   prev: ".slider__prev",
//   direction: "X",
//   time: 500,
//   interval: 3000,
//   // autoplay:true
// });
// const slider1 = new Slider({
//   slider: ".main__trends-slider",
//   sliderLine: ".main__trends-line",
//   next: ".dotNext",
//   prev: ".dotPrev",
//   direction: "X",
//   time: 500,
//   interval: 3000,
//   // autoplay:true
// });

//   const sliderLine = document.querySelector(".slider__line"),
//     slide = [...sliderLine.children],
//     dots = document.querySelectorAll(".slider__dot");

//   let activeSlide = 0,
//     dotIndex = 0;

//   const sliderNext = () => {
//     if (activeSlide < (slide.length - 1) * sliderLine.clientWidth) {
//       activeSlide += sliderLine.clientWidth;
//       dotIndex++;
//     } else {
//       activeSlide = 0;
//       dotIndex = 0;
//     }

//     slide.forEach((item) => {
//       item.style.transform = `translateX(-${activeSlide}px)`;
//       item.style.transition = "1s";
//     });
//   };

//   for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", () => {
//       for (let j = 0; j < dots.length; j++) {
//         dots[j].classList.remove("active");
//       }
//       dots[i].classList.add("active");
//       activeSlide = sliderLine.clientWidth * i;
//       slide.forEach((item) => {
//         item.style.transform = `translateX(-${activeSlide}px)`;
//         item.style.transition = "1s";
//       });
//       dotIndex = 0;
//     });
//   }

// let btnPlusOrMinus = document.querySelectorAll('.main__product-btn');

// for (let element of btnPlusOrMinus){
//   element.addEventListener('click', (e) => {
//     e.preventDefault();

//     elementData = element.getAttribute('data-symbol');
//     pageNumber = document.querySelector('.pageNumber');

//     if(elementData == '+'){
//       pageNumber.innerHTML++;
//     }
//     if(elementData == '-' && pageNumber.innerHTML > 1){
//       pageNumber.innerHTML--;
//     }
//   })
// }

const slider = document.querySelector(".slider");
const trendSlide = document.querySelector(".main__trends-slider");
const reviewSlide = document.querySelector(".main__review-slider");
let mySwiper, trendSwiper, reviewSwiper;

mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".slider__dots",
    clickable: true,
  },
  slideClass: "slider__slide",
});

trendSwiper = new Swiper(trendSlide, {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".main__trends-dots",
    clickable: true,
  },
  slideClass: "main__trends-slide",
});

reviewSwiper = new Swiper(reviewSlide, {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slideClass: "main__review-slide ",
});
