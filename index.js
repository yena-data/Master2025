const images = [
  "이미지1.png",
  "이미지2.jpg",
  "이미지3.jpg",
  "이미지4.jpg",
  "이미지5.jpg",
  "이미지6.jpg",
  "이미지7.jpg",
  "이미지8.jpg",
  "이미지9.jpg",
  "이미지10.jpg",
];
let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

function showImage(index) {
  sliderImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  resetInterval();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  resetInterval();
}

let interval = setInterval(nextImage, 3000); // 3초 간격 자동 슬라이드

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
}
