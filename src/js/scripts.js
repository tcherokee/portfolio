var arrow = document.getElementsByClassName('arrow');

var testArrow = arrow[0];

function fadeArrow(arrow) {
  const originalPosition = arrow.getBoundingClientRect().top;
  let opacity = (arrow.getBoundingClientRect().top - window.scrollY)/arrow.getBoundingClientRect().top
  console.log(arrowOpacity);
}
