/* Scroll to Top */

const btn = document.querySelector('.btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    btn.style.display = "flex"
  } else {
    btn.style.display = "none"
  }
}

btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
