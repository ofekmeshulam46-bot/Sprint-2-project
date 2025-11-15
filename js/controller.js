// 'use strict'
// var gElCanvasContainer = document.querySelector('.canvas-container')
// var gElCanvas = document.querySelector('canvas')
// var gCtx = gElCanvas.getContext('2d')
// var gStartPos = null
// var IMAGE = new Image()
// var textBox = document.querySelector('.text-box')

// function onInit() {
//   initGallery()
//   resizeCanvas()
// }

// function resizeCanvas() {
//   const elContainer = document.querySelector('.canvas-container')

//   gElCanvas.width = elContainer.offsetWidth
//   gElCanvas.height = elContainer.offsetHeight
// }

// function onResize() {
//   resizeCanvas()
//   onClearCanvas()
//   renderMeme(IMAGE)
// }

// function onClearCanvas() {
//   gCtx.fillStyle = '#ffffff'
//   gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
// }

// function renderMeme(image, imgId) {
//   const canvasWidth = gElCanvas.width
//   // const canvasHeight = (image.naturalHeight / image.naturalWidth) * canvasWidth

//   // gElCanvas.height =
//   //   (image.naturalHeight / image.naturalWidth) * gElCanvas.width

//   // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
//   // const imgObj = gImgs.find((img) => img.id === gMeme.selectedImgId)
//   // console.log('Current image data:', imgObj)

//   // console.log('currImage:', currImage) // @@  picture id right the rest wrong (does the first img)
//   gMeme.selectedImgId = imgId
//   console.log('gMeme:', gMeme)

//   gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
//   gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
//   drawCanvasText(textBox.value, imgId)
// }

// function onTextInput(inputText) {
//   // setLineTxt(inputText, 0)
//   // renderMeme(IMAGE)

//   const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
//   if (!currImage) return

//   const line = currImage.lines[gMeme.selectedLineIdx]
//   if (!line) return

//   line.txt = inputText
//   renderMeme(IMAGE, gMeme.selectedImgId)
// }

// function drawCanvasText(text, imgId) {
//   const currImage = gImgs.find((img) => img.id === imgId)
//   if (!currImage) return

//   const currLine = currImage.lines[gMeme.selectedLineIdx]
//   if (!currLine) return
//   // if (!text) return
//   // const fontSize = gElCanvas.width * 0.13

//   // gCtx.font = `${fontSize}px Arial`
//   gCtx.font = `${currLine.size}px Arial`
//   gCtx.fillStyle = currLine.color || gTextBrush.color
//   // gCtx.fillStyle = gTextBrush.color
//   gCtx.textAlign = 'center'
//   gCtx.textBaseline = 'middle'
//   // console.log('gImgs[imgId - 1].lines[0].txt:', gImgs[imgId - 1].lines[0].txt)
//   // const assignText = gImgs[imgId - 1].lines[0].txt || text
//   // gImgs[imgId - 1].lines[0].txt = text
//   // gCtx.fillText(text, gElCanvas.width / 2, gElCanvas.height * 0.15) // line near the bottom
//   gCtx.fillText(currLine.txt, gElCanvas.width / 2, gElCanvas.height * 0.15)
// }

// function onChangeTextColor(color) {
//   changeTextColor(color)
//   renderMeme(IMAGE)
// }

// function onChangeTextSize(direction) {
//   changeTextSize(direction)
// }

// function onDownloadImg(elLink) {
//   const imgContent = gElCanvas.toDataURL('image/jpeg')
//   elLink.href = imgContent
// }

// // Whenever user types — update both places
// // textBox.addEventListener('input', () => renderMeme(IMAGE))

// // function onDown(ev) {
// //   gIsMouseDown = true
// //   // Get the ev pos from mouse or touch
// //   const pos = getEvPos(ev)
// //   console.log('pos', pos)

// //   //   if (!isCanvasClicked(pos)) return
// //   console.log('onDown')

// //   //Save the pos we start from
// //   gStartPos = pos

// //   console.log('success down:')
// // }

// // function onMove(ev) {
// //   if (!gIsMouseDown) return
// //   const pos = getEvPos(ev)
// //   drawLine(pos.x, pos.y)
// //   gStartPos = pos

// //   console.log('success move:')
// // }

// // function onUp() {
// //   // console.log('onUp')
// //   gIsMouseDown = false

// //   console.log('success up:')
// // }

// // function drawLine(x, y) {
// //   const penSettings = getPenSettings()
// //   gCtx.lineWidth = penSettings.size
// //   gCtx.strokeStyle = penSettings.color
// //   if (penSettings.shape === 'circle') {
// //     gCtx.lineCap = 'round'
// //   } else {
// //     gCtx.lineCap = 'square'
// //   }
// //   // gCtx. = penSettings.shape
// //   gCtx.beginPath()
// //   gCtx.moveTo(gStartPos.x, gStartPos.y)
// //   gCtx.lineTo(x, y)
// //   gCtx.stroke()
// // }
//starting new:

'use strict'

var gElCanvasContainer = document.querySelector('.canvas-container')
var gElCanvas = document.querySelector('canvas')
var gCtx = gElCanvas.getContext('2d')
var gStartPos = null
var IMAGE = new Image()
var textBox = document.querySelector('.text-box')

function onInit() {
  initGallery()
  resizeCanvas()
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}

function onResize() {
  resizeCanvas()
  onClearCanvas()
  renderMeme(IMAGE, gMeme.selectedImgId)
}

function onClearCanvas() {
  gCtx.fillStyle = '#ffffff'
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme(image, imgId) {
  if (!imgId) return
  gMeme.selectedImgId = imgId

  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)

  const currImage = gImgs.find((img) => img.id === imgId)
  if (!currImage) return
  const currLine = currImage.lines[gMeme.selectedLineIdx]
  if (!currLine) return

  drawCanvasText(currLine.txt, imgId)
}


function drawCanvasText(text, imgId) {
  if (!text) return
  const currImage = gImgs.find((img) => img.id === imgId)
  if (!currImage) return
  const currLine = currImage.lines[gMeme.selectedLineIdx]
  if (!currLine) return

  const fontSize = currLine.size
  gCtx.font = `${fontSize}px Arial`
  gCtx.fillStyle = currLine.color || gTextBrush.color
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, gElCanvas.width / 2, gElCanvas.height * 0.15)
}


function onTextInput(inputText) {
  setLineTxt(inputText, 0)
  renderMeme(IMAGE, gMeme.selectedImgId)
}

function onChangeTextSize(direction) {
  changeTextSize(direction)
  renderMeme(IMAGE, gMeme.selectedImgId)
}

function onChangeTextColor(color) {
  changeTextColor(color)
  renderMeme(IMAGE, gMeme.selectedImgId)
}

function onDownloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}
