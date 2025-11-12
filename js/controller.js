'use strict'
var gElCanvas
var gCtx

var IMAGE = '<img src="meme-imgs/square/8.jpg">'

function renderMeme(image) {
  gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  resizeCanvas()
  renderMeme(IMAGE)
  const imgContainer = document.querySelector('img-test-container')
  imgContainer.innerHTML = IMAGE
}

function onResize() {
  resizeCanvas()
  onClearCanvas()
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}

function onClearCanvas() {
  gCtx.fillStyle = '#ffffff'
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function onDown(ev) {
  //   gIsMouseDown = true
  //   // Get the ev pos from mouse or touch
  //   const pos = getEvPos(ev)
  //   console.log('pos', pos)

  //   //   if (!isCanvasClicked(pos)) return
  //   console.log('onDown')

  //   //Save the pos we start from
  //   gStartPos = pos

  console.log('success down:')
}

function onMove(ev) {
  //   if (!gIsMouseDown) return
  //   const pos = getEvPos(ev)
  //   drawLine(pos.x, pos.y)
  //   gStartPos = pos

  console.log('success move:')
}

function onUp() {
  //   // console.log('onUp')
  //   gIsMouseDown = false

  console.log('success up:')
}
