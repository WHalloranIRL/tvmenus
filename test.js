const imageUrls = [
  "https://drive.google.com/uc?id=170j_v8uBKzKvUc6Hj1NWAiXYf5QWDDNO",
  "https://drive.google.com/uc?id=17-Xv9EnL0zBXbj_GBP9oR0igrUVYIGRG",
  "https://drive.google.com/uc?id=16aH0_904OXZzxAzuHGcqw8KW-4weODMG",
  "https://drive.google.com/uc?id=16doNlXwyYF8WNykdjBQzf9s4bwnHOskT",
];

let currentIndex = 0;
const imgElement = document.getElementById("image");

function changeImage() {
  imgElement.src = imageUrls[currentIndex];
  currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Change image every 3 seconds (3000 milliseconds) for demonstration
setInterval(changeImage, 3000);

// Initial display
changeImage();
