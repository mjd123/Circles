const nav = document.querySelector('.nav');
const menu = document.querySelector('#menu');
const menuOverlay = document.querySelector('.menu-overlay');
const menuLineone = document.querySelector('.menu-line_one');
const menuLinetwo = document.querySelector('.menu-line_two');
const menuLinethree = document.querySelector('.menu-line_three');
const itemText = [
  'propugnent',
  'facultates',
  'persuadeor',
  'affectibus',
];

function overlay() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    menuOverlay.classList.remove('open');
    menuOverlay.innerHTML = '';
    escapeButton();
  } else {
    menu.classList.add('open');
    menuOverlay.classList.add('open');
    escapeButton();
    for (var i = 0; i < itemText.length; i++) {
      addText(itemText[i]);
    }
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

function addText(i) {
  menuOverlay.innerHTML += `
    <li>
      <h2>
        ${i}
      </h2>
    </li>
    `;
}

function escapeButton() {
  console.log(menuLineone.classList);
  if (menuLineone.classList.contains('open')) {
    menuLineone.classList.remove('open');
    menuLinetwo.classList.remove('open');
    menuLinethree.classList.remove('open');
  } else {
    menuLineone.classList.add('open');
    menuLinetwo.classList.add('open');
    menuLinethree.classList.add('open');
  }
}

nav.addEventListener('click', overlay);
nav.addEventListener('mouseover', navHover);
nav.addEventListener('mouseleave', navHover);
