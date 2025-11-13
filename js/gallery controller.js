'use strict'

const imageGallery = document.querySelector('.image-gallery')

function initGallery() {
  renderGallery(gImgs)
}

function renderGallery(images) {
  imageGallery.innerHTML = '' // clear container

  images.forEach((imgData) => {
    const img = new Image()
    img.src = imgData.url

    // // Optional: add classes, IDs, event listeners
    // img.classList.add('gallery-img')
    // img.dataset.id = imgData.id

    // Append image to gallery when loaded
    img.onload = () => {
      imageGallery.appendChild(img)
    }

      img.addEventListener('click', () => {
      imageGallery.style.display = 'none'


  })
}
