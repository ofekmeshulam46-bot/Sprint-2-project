'use strict'

const imageGallery = document.querySelector('.image-gallery')

function initGallery() {
  renderGallery(gImgs)
}

function renderGallery(images) {
  console.log('Images array:', images)
  console.log('Gallery before:', imageGallery.innerHTML)
  imageGallery.innerHTML = '' // clear container

  images.forEach((imgData) => {
    const img = new Image()
    img.dataset.id = imgData.id
    img.src = imgData.url // start loading
    imageGallery.appendChild(img) // append immediately

    // Click handler
    img.addEventListener('click', () => {
      imageGallery.style.display = 'none'
      gElCanvasContainer.style.display = 'block'
      resizeCanvas()

      IMAGE = new Image()
      IMAGE.onload = () => renderMeme(IMAGE, imgData.id)
      IMAGE.src = imgData.url

      editLine(0)
    })
  })
}
