
function load(){
  var duomenys = localStorage.getItem('stalcius');
  var dark = document.querySelector('body');
  if ( duomenys == "tiesa") {
    dark.classList.remove("bg-light");
    dark.classList.add("bg-dark");
    console.log("tiesa");
  } else {
    dark.classList.remove("bg-dark");
    dark.classList.add("bg-light");
    console.log("netiesa");
  }
}

function checkbox(){
let a = document.querySelector('#myonoffswitch').checked;
var dark = document.querySelector('body');
if (a == true){
    dark.classList.remove("bg-light");
    dark.classList.add("bg-dark");
    localStorage.setItem('stalcius', "tiesa");
} else if (a == false){
    dark.classList.remove("bg-dark");
    dark.classList.add("bg-light");
    localStorage.setItem('stalcius', "netiesa");
}
}
console.log("labas");
