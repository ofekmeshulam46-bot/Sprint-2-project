'use strict'

const imageGallery = document.querySelector('.image-gallery')

function initGallery() {
  renderGallery(gImgs)
}

function renderGallery(images) {
  imageGallery.innerHTML = '' // clear container

  // // Optional: add classes, IDs, event listeners
  // img.classList.add('gallery-img')
  // img.dataset.id = imgData.id

  // Append image to gallery when loaded

  images.forEach((imgData) => {
    const img = new Image()
    img.src = imgData.url
    imageGallery.appendChild(img)

    img.addEventListener('click', () => {
      // hide gallery
      imageGallery.style.display = 'none'

      // show canvas container
      gElCanvasContainer.style.display = 'block'

      // set the global IMAGE and render after it loads
      IMAGE.onload = () => renderMeme(IMAGE)
      IMAGE.src = imgData.url
    })

    // img.addEventListener('click', () => {
    //   // hide gallery
    //   imageGallery.style.display = 'none'

    //   // show canvas container
    //   gElCanvasContainer.style.display = 'block'

    //   // set the global IMAGE and render after it loads
    //   IMAGE.onload = () => renderMeme(IMAGE)
    //   IMAGE.src = imgData.url
    // })
  })
}

//   images.forEach((imgData) => {
//     const img = new Image()
//     img.src = imgData.url

//     // Append image to gallery when loaded
//     img.onload = () => {
//       imageGallery.appendChild(img)
//     }

//     // Click handler
//     img.addEventListener('click', () => {
//       // hide gallery
//       imageGallery.style.display = 'none'

//       // show canvas container
//       gElCanvasContainer.style.display = 'block'

//       // update global IMAGE and render
//       IMAGE.onload = () => renderMeme(IMAGE)
//       IMAGE.src = imgData.url

//       //   const selectedImage = new Image()
//       //   selectedImage.src = imgData.url
//       //   selectedImage.onload = () => renderMeme(selectedImage)
//     })
//   })
// }
