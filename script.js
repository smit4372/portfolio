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
  let background = document.querySelector(".parallax-background");

  // Adjust background scroll effect (smooth parallax effect)
  background.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

