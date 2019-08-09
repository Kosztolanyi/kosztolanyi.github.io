"use strict";

const images = [
  {
    src: "./assets/images/1.jpg",
    title: "Das ist ein lakókocsi und Szabolcs",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: "./assets/images/2.jpg",
    title: "Lizababa",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: "./assets/images/3.jpg",
    title: "Csapat",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: "./assets/images/4.jpg",
    title: "Das táj1",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: "./assets/images/5.jpg",
    title: "Das szikla",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: "./assets/images/6.jpg",
    title: "Das taj2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: "./assets/images/7.jpg",
    title: "Das völgy",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: "./assets/images/8.jpg",
    title: "Grünesee",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];
let currentImageIndex = 0;
function changeMainImage() {
  imageSelector.setAttribute("src", images[currentImageIndex].src);
  imageSelector.setAttribute("alt", images[currentImageIndex].title);
  mainImageTitle.textContent = images[currentImageIndex].title;
  mainImageText.textContent = images[currentImageIndex].text;
}
function createThumbnails() {
  let thumbnails = document.querySelector(".thumbnails");
  for (let i = 0; i < images.length; i++) {
    let imageToPutIn = document.createElement("img");
    if (i == currentImageIndex) {
      imageToPutIn.className = "active small-picture";
    } else {
      imageToPutIn.className = "small-picture";
    }
    imageToPutIn.setAttribute("src", images[i].src);
    imageToPutIn.setAttribute("alt", images[i].title);
    imageToPutIn.setAttribute("numberinimages", i);
    imageToPutIn.addEventListener("click",clickOnPicture);
    thumbnails.appendChild(imageToPutIn);
  }
}
function clickOnPicture() {
  // this refers to the html element was clicked on
  currentImageIndex = this.getAttribute("numberinimages");
  changeActiveThumbnail(currentImageIndex);
  changeMainImage();
}
// document.querySelector('.buttons').addEventListener('click', (event) => {
//   console.log(event.target);
//   if (event.target.nodeName === 'DIV') {
//     return;
//   }
//   console.log(event.target.innerHTML);
// })
function changeActiveThumbnail(number) {
  document.querySelector(".active").className = "small-picture";
  let thumbnails = document.querySelectorAll(".small-picture");
  thumbnails[number].className = "active small-picture";
}
function goRight() {
  if ( currentImageIndex == (images.length-1)) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  changeMainImage();
  changeActiveThumbnail(currentImageIndex);
}
function goLeft() {
  if (currentImageIndex == 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex--;
  }
  changeMainImage();
  changeActiveThumbnail(currentImageIndex);
}
function onKeyPress(event) {
  switch (event.keyCode) {
    case 37:
      goLeft();
      break;
    case 39:
      goRight();
      break;
  }
}
//APP
createThumbnails();
let mainImageTitle = document.querySelector(".opened h2");
let mainImageText = document.querySelector(".opened p");
mainImageTitle.textContent = images[0].title;
mainImageText.textContent = images[0].text;
let mainImage = document.querySelector(".image");
let imageSelector = document.querySelector(".image img");
imageSelector.setAttribute("src", images[currentImageIndex].src);
imageSelector.setAttribute("alt", images[currentImageIndex].title);
mainImage.appendChild(imageSelector);
let leftArrow = document.querySelector(".left");
leftArrow.onclick = () => {
  goLeft();
};
let rightArrow = document.querySelector(".right");
rightArrow.onclick = () => {
  goRight();
};

document.body.addEventListener("keydown", onKeyPress);
