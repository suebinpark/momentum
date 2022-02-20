const images = [
  "0.jpg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
