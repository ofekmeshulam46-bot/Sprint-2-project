'use strict'
var IMAGE = new Image()
var gElCanvasContainer = document.querySelector('.canvas-container')
var gElCanvas = gElCanvasContainer.querySelector('canvas')
var gCtx = gElCanvas.getContext('2d')

function onInit() {
  gElCanvasContainer = document.querySelector('.canvas-container')
  gElCanvas = gElCanvasContainer.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderGallery(gImgs)
  document.querySelector('.image-gallery').style.display = 'grid'
  document.querySelector('.meme-editor').style.display = 'none'
  resizeCanvas()
}
// function onInit() {
//   initGallery()
//   resizeCanvas()
// }

function resizeCanvas() {
  if (!gElCanvasContainer) return
  // const elContainer = gElCanvasContainer
  gElCanvas.width = gElCanvasContainer.offsetWidth
  gElCanvas.height = gElCanvasContainer.offsetHeight
}

function renderMemeEditor(image, imgId) {
  renderMeme(image, imgId)
  const editorContainer = document.querySelector('.meme-editor')
  editorContainer.style.display = 'block'
}

function renderMeme(image, imgId) {
  if (!imgId) return
  gMeme.selectedImgId = imgId
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
  drawAllLines()
}

// function renderMeme(image, imgId) {
//   if (!imgId) return
//   gMeme.selectedImgId = imgId
//   gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
//   gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
//   drawAllLines()
// }

function drawAllLines() {
  const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
  if (!currImage) return

  currImage.lines.forEach((line, idx) => {
    if (!line.txt) return
    let yPos
    if (idx === 0) yPos = 0.15
    else if (idx === 1) yPos = 0.85
    else yPos = 0.5

    gCtx.font = `${line.size}px Impact`
    gCtx.fillStyle = line.color || gTextBrush.color
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(line.txt, gElCanvas.width / 2, gElCanvas.height * yPos)
  })
}
// Input box behavior
function onTextInput(text) {
  setLineTxt(text)
  renderMeme(IMAGE, gMeme.selectedImgId)
}

// Show text input for current line
function editLine(lineIdx) {
  const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
  if (!currImage || !currImage.lines[lineIdx]) return
  gMeme.selectedLineIdx = lineIdx
  const textBox = document.querySelector('.text-box')
  textBox.style.display = 'block'
  textBox.value = currImage.lines[lineIdx].txt
  textBox.placeholder = 'enter text'
  textBox.focus()
  // textBox.style.border = '2px solid orange'
}
// Hide input (on download or cancel)
function hideTextInput() {
  textBox.style.display = 'none'
}

// Add new line button
function onAddLine() {
  addNewLine('')
  renderMeme(IMAGE, gMeme.selectedImgId)
  editLine(gMeme.selectedLineIdx)
}
// Change text size
function onChangeTextSize(delta) {
  changeTextSize(delta)
  renderMeme(IMAGE, gMeme.selectedImgId)
}

// Change text color
function onChangeTextColor(color) {
  changeTextColor(color)
  renderMeme(IMAGE, gMeme.selectedImgId)
}

// Download image
function onDownloadImg(elLink) {
  hideTextInput()
  const imgContent = gElCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}
