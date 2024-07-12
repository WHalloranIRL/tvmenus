let images = [];
let currentIndex = 0;

async function fetchImages() {
  const folderId = "16_DHbZ-2xsXTruTn_dJqyegEfEsRyhXB"; // Replace with your Google Drive folder ID
  const apiKey = "AIzaSyCwJLqEWAXLAkyYOvhEqKZ8kURae11Lq5k"; // Replace with your Google API key

  // Encode folderId for the query string
  const encodedFolderId = encodeURIComponent(folderId);

  const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${encodedFolderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    images = data.files
      .filter((file) => file.mimeType.startsWith("image/"))
      .map((file) => `https://drive.google.com/uc?id=${file.id}`);
    changeImage();
  } catch (error) {
    console.error("Error fetching images:", error);
    if (error.message.includes("403")) {
      console.error("Check your API key and permissions.");
    }
  }
}
