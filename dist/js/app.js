'use strict';

var arrow = document.getElementsByClassName('arrow');

var testArrow = arrow[0];

function fadeArrow(arrow) {
  var arrowOpacity = (arrow.getBoundingClientRect().top - window.scrollY) / arrow.getBoundingClientRect().top;
  console.log(arrowOpacity);
}
//# sourceMappingURL=app.js.map
