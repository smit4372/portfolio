window.onscroll = onScroll;

function onScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.classList.remove("scroll-top");
  } else {
    document.body.classList.add("scroll-top");
  }
}


document.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let parallaxElement = document.querySelector(".hero-background");

  // Move background up at a slower rate for parallax effect
  parallaxElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
