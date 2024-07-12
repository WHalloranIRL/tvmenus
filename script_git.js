let images = [];
let currentIndex = 0;

async function fetchImages() {
  const repoOwner = "whalloranirl"; // Replace with your GitHub username
  const repoName = "tvmenus"; // Replace with your GitHub repository name
  const imagesPath = "images"; // Replace with the path to your images folder in the repository

  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${imagesPath}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    images = data
      .filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file.name))
      .map((file) => file.download_url);
    changeImage();
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

function changeImage() {
  if (images.length === 0) return;
  const imgElement = document.getElementById("image");
  imgElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// Change image every 30 seconds (30000 milliseconds)
setInterval(changeImage, 30000);

// Fetch images and initialize the first image display
fetchImages();
