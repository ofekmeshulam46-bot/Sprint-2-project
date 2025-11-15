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
  IMAGE.src = 'meme-imgs/square/8.jpg'
  IMAGE.onload = () => renderMeme(IMAGE)
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')

  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}

function onResize() {
  resizeCanvas()
  onClearCanvas()
  renderMeme(IMAGE)
}

function onClearCanvas() {
  gCtx.fillStyle = '#ffffff'
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme(image) {
  const canvasWidth = gElCanvas.width
  // const canvasHeight = (image.naturalHeight / image.naturalWidth) * canvasWidth

  // gElCanvas.height =
  //   (image.naturalHeight / image.naturalWidth) * gElCanvas.width

  // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
  drawCanvasText(textBox.value)
}

function onTextInput(inputText) {
  setLineTxt(inputText, 0)
  renderMeme(IMAGE)
}

function drawCanvasText(text) {
  if (!text) return
  const fontSize = gElCanvas.width * 0.13
  gCtx.font = `${fontSize}px Arial`
  gCtx.fillStyle = gTextBrush.color
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, gElCanvas.width / 2, gElCanvas.height * 0.15) // line near the bottom
}

function onChangeTextColor(color) {
  console.log('color:', color)
  changeTextColor(color)
  renderMeme(IMAGE)
}

function onDownloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}

// Whenever user types — update both places
// textBox.addEventListener('input', () => renderMeme(IMAGE))

// function onDown(ev) {
//   gIsMouseDown = true
//   // Get the ev pos from mouse or touch
//   const pos = getEvPos(ev)
//   console.log('pos', pos)

//   //   if (!isCanvasClicked(pos)) return
//   console.log('onDown')

//   //Save the pos we start from
//   gStartPos = pos

//   console.log('success down:')
// }

// function onMove(ev) {
//   if (!gIsMouseDown) return
//   const pos = getEvPos(ev)
//   drawLine(pos.x, pos.y)
//   gStartPos = pos

//   console.log('success move:')
// }

// function onUp() {
//   // console.log('onUp')
//   gIsMouseDown = false

//   console.log('success up:')
// }

// function drawLine(x, y) {
//   const penSettings = getPenSettings()
//   gCtx.lineWidth = penSettings.size
//   gCtx.strokeStyle = penSettings.color
//   if (penSettings.shape === 'circle') {
//     gCtx.lineCap = 'round'
//   } else {
//     gCtx.lineCap = 'square'
//   }
//   // gCtx. = penSettings.shape
//   gCtx.beginPath()
//   gCtx.moveTo(gStartPos.x, gStartPos.y)
//   gCtx.lineTo(x, y)
//   gCtx.stroke()
// }
