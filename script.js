document.addEventListener("scroll", function() {
  let scrollPosition = window.pageYOffset;
  document.querySelectorAll(".parallax").forEach(parallax => {
      parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
  });
});
