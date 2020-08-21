// we selected html dom elements we want to use
const hammie1 = document.getElementById("toggle-nav1");
const hammie2 = document.getElementById("toggle-nav2");
const logo = document.getElementById("logoID")
const nav = document.getElementById("active");
const toggleSpan = document.getElementsByTagName("span");
const navOverlay = document.querySelector(".navOverlay")
const navLink = document.querySelectorAll(".navLink")

function mainNavLogic(){
// add event to hamburger to toggle open/close nav and animate hamburger
hammie1.addEventListener("click", function(){
  nav.classList.toggle("open");
  hammie1.classList.toggle("headerForward");
  logo.classList.toggle("headerForward");
  navOverlay.classList.toggle("navOverlayActive");
  animateToggle();
})

hammie2.addEventListener("click", function(){
  nav.classList.toggle("open");
  hammie2.classList.toggle("headerForward");
  logo.classList.toggle("headerForward");
  navOverlay.classList.toggle("navOverlayActive");
  animateToggle();
})

// animated toggle - FOR OF is used for arrays
// function animateToggle(){
//   for(let item of toggleSpan){
//     item.classList.toggle("change")
//   }
// }

//animated toggle FOR Loop
function animateToggle() {
  for (item = 0; item < toggleSpan.length; item++) {
    toggleSpan[item].classList.toggle("changeX");
  }
}
}
mainNavLogic();

/*close navagation after clicking on each link*/
function close(){
navLink.forEach(function(lemons){
  lemons.addEventListener("click", function(){
    nav.classList.remove("open");
    navOverlay.classList.remove("navOverlayActive")
  })
})
}
close()
