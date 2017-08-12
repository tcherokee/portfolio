let index = 0;
let arrow = document.getElementById('scrollArrow');
let whoAmISpan = document.getElementById('whoAmI');
let whoAmIText =  [
                    "Web Designer",
                    "Web Developer",
                    "Husband",
                    "Father",
                    "Chelsea Fan",
                    "Internet Busybody"
                  ];
const originalPosition = arrow.getBoundingClientRect().top;


function fadeArrow() {
  let opacity = arrow.getBoundingClientRect().top/originalPosition;
  arrow.style.opacity = opacity;
  console.log("t");
}

function whoAmI() {
  let arrItem = whoAmIText[index];

  if (index < whoAmIText.length) {
    whoAmISpan.innerHTML = "";
    typewriterEffect(arrItem, 0);

  } else {
    setTimeout(function() {
      index = 0;
      whoAmI();
    }, 2000);
  }
}

function typewriterEffect(arr, i) {
  let typeDelay = 200;

  if (i < arr.length) {
    setTimeout(function(){
      whoAmISpan.append(arr.charAt(i));
      i += 1;
      typewriterEffect(arr, i);
    }, typeDelay);
  } else {
    setTimeout(function(){
      typewriterBackspace(whoAmISpan.innerHTML, 0)
    }, 1000)
  }
}

function typewriterBackspace(arr, i) {
  let typeDelay = 50;
  let slicedArr;

  if (i < arr.length) {
    setTimeout(function(){
      slicedArr = whoAmISpan.innerHTML.slice(0, -1);
      whoAmISpan.innerHTML = slicedArr
      typewriterBackspace(slicedArr, i);
    }, typeDelay);
  } else {
    setTimeout(function(){
      index += 1;
      whoAmI();
    }, 500)
  }
}

window.addEventListener("scroll", fadeArrow);

whoAmI();
