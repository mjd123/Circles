const nav = document.querySelector('.nav');
const menu = document.querySelector('#menu');

function overlay() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
}

function navHover() {
  const navChildren = nav.children;
  if (navChildren[0].classList.contains('navHover')) {
    for (var i = 0; i < navChildren.length; i++) {
      navChildren[i].classList.remove('navHover');
    }
  } else {
    for (var j = 0; j < navChildren.length; j++) {
      navChildren[j].classList.add('navHover');
    }
  }
}

nav.addEventListener('click', overlay);
nav.addEventListener('mouseover', navHover);
nav.addEventListener('mouseleave', navHover);
