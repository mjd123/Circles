const windowWidth = window.innerWidth;

//$(document).ready(() => {
//});

const movingEl = $('.about_section');
const fixedEl = $('.contact_section');

/// 11;

// find top of both else find diffence between them so as user scrolls down difference decreases

function parallax() {
  const yPos = $(window).scrollTop();
  var topOfEl = movingEl.offset().top; //top of el
  var viewPort = $(window).height() + movingEl.offset().top; // everything u can see

  var bottomOfEl = Math.round(movingEl.outerHeight(true) + topOfEl);
  var topOfFixed = fixedEl.offset().top;
  var scroll = yPos - (topOfFixed - topOfEl);
  var bottomOfScreen = yPos + $(window).height(); //bottom of screen in view
  var scrolledHeight = window.pageYOffset;

  /*console.log(scrolledHeight);
  console.log(bottomOfEl + 'bottomOfEl');
  console.log(topOfEl);
  console.log(bottomOfScreen + 'bottomOfScreen');*/

  if (bottomOfScreen > bottomOfEl) {
    movingEl.css({
      transform: `translateY(${Math.round(bottomOfScreen - bottomOfEl)}px)`,
    });
    //console.log('!!!!!');
  } else {
    movingEl.css({
      transform: 'translateY(0px)',
    });
  }

  //  requestAnimationFrame(parallax);
}

window.addEventListener('scroll', parallax);
