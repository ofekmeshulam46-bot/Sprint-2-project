'use strict'

var gElCanvasContainer = document.querySelector('.canvas-container')
var gElCanvas = document.querySelector('canvas')
var gCtx = gElCanvas.getContext('2d')
var IMAGE = new Image()
var textBox = document.querySelector('.text-box')

function onInit() {
  initGallery()
  resizeCanvas()
}

function resizeCanvas() {
  const elContainer = gElCanvasContainer
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}

function renderMemeEditor(image, imgId) {
  renderMeme(image, imgId)
  const elEnlargeButton = document.querySelector('.text-bigger')
  elEnlargeButton.style.display = 'inline-block'
  const elMinimizeButton = document.querySelector('.text-smaller')
  elMinimizeButton.style.display = 'inline-block'
  const elAddLineButton = document.querySelector('.add-line')
  elAddLineButton.style.display = 'inline-block'
  const elEditorInputs = document.querySelector('.editor-inputs')
  elEditorInputs.style.display = 'inline-block'
}

function renderMeme(image, imgId) {
  if (!imgId) return
  gMeme.selectedImgId = imgId
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
  drawAllLines()
}

function drawAllLines() {
  const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
  if (!currImage) return

  currImage.lines.forEach((line, idx) => {
    if (!line.txt) return
    let yPos
    if (idx === 0) yPos = 0.15
    else if (idx === 1) yPos = 0.85
    else yPos = 0.5

    gCtx.font = `${line.size}px Arial`
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
  textBox.style.display = 'block'
  textBox.value = currImage.lines[lineIdx].txt
  textBox.placeholder = 'enter text'
  textBox.focus()
  textBox.style.border = '2px solid orange'
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
