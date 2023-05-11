/* Scroll to Top */

window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".scroll-to-top");
    scroll.classList.toggle("active", window.scrollY > 120);
  });