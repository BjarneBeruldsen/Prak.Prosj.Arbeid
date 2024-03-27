const imageContainer = document.getElementById('image-container');

imageContainer.addEventListener('click', function() {
  this.classList.toggle('enlarged'); // Bytter klassen "enlarged" når bildet blir klikket på
});
