'use strict'
var gElCanvas
var gCtx
var gStartPos = null

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  resizeCanvas()
  var IMAGE = new Image()
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
}

function onClearCanvas() {
  gCtx.fillStyle = '#ffffff'
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderBaseImage() {
  if (gBaseImage) {
    gCtx.drawImage(gBaseImage, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}
function onContainerClicked(container) {
  container.innerHTML = IMAGE
  gElCanvas.height =
    (IMAGE.naturalHeight / IMAGE.naturalWidth) * gElCanvas.width
  gCtx.drawImage(IMAGE, 0, 0, gElCanvas.width, gElCanvas.height)
  console.log('container:', container)
}

function renderMeme(image) {
  gElCanvas.height =
    (image.naturalHeight / image.naturalWidth) * gElCanvas.width
  gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onDown(ev) {
  gIsMouseDown = true
  // Get the ev pos from mouse or touch
  const pos = getEvPos(ev)
  console.log('pos', pos)

  //   if (!isCanvasClicked(pos)) return
  console.log('onDown')

  //Save the pos we start from
  gStartPos = pos

  console.log('success down:')
}

function onMove(ev) {
  if (!gIsMouseDown) return
  const pos = getEvPos(ev)
  drawLine(pos.x, pos.y)
  gStartPos = pos

  console.log('success move:')
}

function onUp() {
  // console.log('onUp')
  gIsMouseDown = false

  console.log('success up:')
}

function drawLine(x, y) {
  const penSettings = getPenSettings()
  gCtx.lineWidth = penSettings.size
  gCtx.strokeStyle = penSettings.color
  if (penSettings.shape === 'circle') {
    gCtx.lineCap = 'round'
  } else {
    gCtx.lineCap = 'square'
  }
  // gCtx. = penSettings.shape
  gCtx.beginPath()
  gCtx.moveTo(gStartPos.x, gStartPos.y)
  gCtx.lineTo(x, y)
  gCtx.stroke()
}
