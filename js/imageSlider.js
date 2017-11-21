const width = window.innerWidth;
if (width <= 414) {
  (function createEle() {
    const circlesDiv = document.querySelector('.content');
    const spanLeft = document.createElement('span');
    const elemLeft = document.createElement('img');
    const spanRight = document.createElement('span');
    const elemRight = document.createElement('img');
    elemRight.setAttribute('height', '40');
    elemRight.setAttribute('width', '40');
    elemLeft.setAttribute('height', '40');
    elemLeft.setAttribute('width', '40');
    spanRight.appendChild(elemRight);
    spanLeft.appendChild(elemLeft);
    circlesDiv.appendChild(spanRight);
    circlesDiv.appendChild(spanLeft);
    elemRight.src = 'img/next.png';
    elemLeft.src = 'img/next.png';
    elemRight.classList.add('next-arrow');
    elemLeft.classList.add('previous-arrow');
  }());
}

const imgSrc = [];
const nextArrow = document.querySelector('.next-arrow');
const previousArrow = document.querySelector('.previous-arrow');
const circleImg = document.querySelectorAll('.circle img');
let clickCounter = 0; // track array index

if (imgSrc.length < circleImg.length) { // imgsrcs into array
  circleImg.forEach(x => imgSrc.push(x.src));
}

function sliderNext() {
  // +3 = next series of imgs
  clickCounter += 3;
  circleImg[0].src = imgSrc[clickCounter];
  circleImg[1].src = imgSrc[clickCounter + 1];
  circleImg[2].src = imgSrc[clickCounter + 2];
  if (clickCounter === 9) {
    clickCounter = -3;
  }
}

function sliderPrevious() {
  if (clickCounter <= 0) { /** cycle backwards though imgs */
    clickCounter += 12;
  }

  clickCounter -= 3;
  circleImg[0].src = imgSrc[clickCounter];
  circleImg[1].src = imgSrc[clickCounter + 1];
  circleImg[2].src = imgSrc[clickCounter + 2];
}

nextArrow.addEventListener('click', sliderNext);
previousArrow.addEventListener('click', sliderPrevious);
