let nav = document.querySelector(".nav-link");
let hamb = document.querySelector(".nav-click");

let lll = 0;

hamb.addEventListener("click",function(){

  if(lll == 0) {
    nav.style.visibility = "visible";
    nav.style.opacity = 1;
    lll = 1;
  }
  
  else {
    nav.style.visibility = "hidden";
    nav.style.opacity = 0;
    lll = 0;
  }
  

})      