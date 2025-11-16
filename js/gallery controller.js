'use strict'

const imageGallery = document.querySelector('.image-gallery')

function initGallery() {
  renderGallery(gImgs)
}

function onImgSelect(imgId) {
  setImg(imgId)
  document.querySelector('.image-gallery').style.display = 'none'
  document.querySelector('.meme-editor').style.display = 'grid'
  renderMeme()
}

function renderGallery(images) {
  console.log('Images array:', images)
  console.log('Gallery before:', imageGallery.innerHTML)
  imageGallery.innerHTML = ''
  images.forEach((imgData) => {
    const img = new Image()
    img.src = imgData.url
    imageGallery.appendChild(img)
    img.addEventListener('click', () => {
      imageGallery.style.display = 'none'
      const editor = document.querySelector('.meme-editor')
      editor.style.display = 'grid'
      gElCanvasContainer = document.querySelector('.canvas-container')
      gElCanvas = gElCanvasContainer.querySelector('canvas')
      gCtx = gElCanvas.getContext('2d')
      resizeCanvas()
      IMAGE = new Image()
      IMAGE.onload = () => {
        renderMemeEditor(IMAGE, imgData.id)
      }
      IMAGE.src = imgData.url
    })
    editLine(0)
  })
}
