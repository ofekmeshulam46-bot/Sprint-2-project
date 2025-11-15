// // 'use strict'
// // var gElCanvasContainer = document.querySelector('.canvas-container')
// // var gElCanvas = document.querySelector('canvas')
// // var gCtx = gElCanvas.getContext('2d')
// // var gStartPos = null
// // var IMAGE = new Image()
// // var textBox = document.querySelector('.text-box')

// // function onInit() {
// //   initGallery()
// //   resizeCanvas()
// // }

// // function resizeCanvas() {
// //   const elContainer = document.querySelector('.canvas-container')

// //   gElCanvas.width = elContainer.offsetWidth
// //   gElCanvas.height = elContainer.offsetHeight
// // }

// // function onResize() {
// //   resizeCanvas()
// //   onClearCanvas()
// //   renderMeme(IMAGE)
// // }

// // function onClearCanvas() {
// //   gCtx.fillStyle = '#ffffff'
// //   gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
// // }

// // function renderMeme(image, imgId) {
// //   const canvasWidth = gElCanvas.width
// //   // const canvasHeight = (image.naturalHeight / image.naturalWidth) * canvasWidth

// //   // gElCanvas.height =
// //   //   (image.naturalHeight / image.naturalWidth) * gElCanvas.width

// //   // gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
// //   // const imgObj = gImgs.find((img) => img.id === gMeme.selectedImgId)
// //   // console.log('Current image data:', imgObj)

// //   // console.log('currImage:', currImage) // @@  picture id right the rest wrong (does the first img)
// //   gMeme.selectedImgId = imgId
// //   console.log('gMeme:', gMeme)

// //   gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
// //   gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
// //   drawCanvasText(textBox.value, imgId)
// // }

// // function onTextInput(inputText) {
// //   // setLineTxt(inputText, 0)
// //   // renderMeme(IMAGE)

// //   const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
// //   if (!currImage) return

// //   const line = currImage.lines[gMeme.selectedLineIdx]
// //   if (!line) return

// //   line.txt = inputText
// //   renderMeme(IMAGE, gMeme.selectedImgId)
// // }

// // function drawCanvasText(text, imgId) {
// //   const currImage = gImgs.find((img) => img.id === imgId)
// //   if (!currImage) return

// //   const currLine = currImage.lines[gMeme.selectedLineIdx]
// //   if (!currLine) return
// //   // if (!text) return
// //   // const fontSize = gElCanvas.width * 0.13

// //   // gCtx.font = `${fontSize}px Arial`
// //   gCtx.font = `${currLine.size}px Arial`
// //   gCtx.fillStyle = currLine.color || gTextBrush.color
// //   // gCtx.fillStyle = gTextBrush.color
// //   gCtx.textAlign = 'center'
// //   gCtx.textBaseline = 'middle'
// //   // console.log('gImgs[imgId - 1].lines[0].txt:', gImgs[imgId - 1].lines[0].txt)
// //   // const assignText = gImgs[imgId - 1].lines[0].txt || text
// //   // gImgs[imgId - 1].lines[0].txt = text
// //   // gCtx.fillText(text, gElCanvas.width / 2, gElCanvas.height * 0.15) // line near the bottom
// //   gCtx.fillText(currLine.txt, gElCanvas.width / 2, gElCanvas.height * 0.15)
// // }

// // function onChangeTextColor(color) {
// //   changeTextColor(color)
// //   renderMeme(IMAGE)
// // }

// // function onChangeTextSize(direction) {
// //   changeTextSize(direction)
// // }

// // function onDownloadImg(elLink) {
// //   const imgContent = gElCanvas.toDataURL('image/jpeg')
// //   elLink.href = imgContent
// // }

// // // Whenever user types — update both places
// // // textBox.addEventListener('input', () => renderMeme(IMAGE))

// // // function onDown(ev) {
// // //   gIsMouseDown = true
// // //   // Get the ev pos from mouse or touch
// // //   const pos = getEvPos(ev)
// // //   console.log('pos', pos)

// // //   //   if (!isCanvasClicked(pos)) return
// // //   console.log('onDown')

// // //   //Save the pos we start from
// // //   gStartPos = pos

// // //   console.log('success down:')
// // // }

// // // function onMove(ev) {
// // //   if (!gIsMouseDown) return
// // //   const pos = getEvPos(ev)
// // //   drawLine(pos.x, pos.y)
// // //   gStartPos = pos

// // //   console.log('success move:')
// // // }

// // // function onUp() {
// // //   // console.log('onUp')
// // //   gIsMouseDown = false

// // //   console.log('success up:')
// // // }

// // // function drawLine(x, y) {
// // //   const penSettings = getPenSettings()
// // //   gCtx.lineWidth = penSettings.size
// // //   gCtx.strokeStyle = penSettings.color
// // //   if (penSettings.shape === 'circle') {
// // //     gCtx.lineCap = 'round'
// // //   } else {
// // //     gCtx.lineCap = 'square'
// // //   }
// // //   // gCtx. = penSettings.shape
// // //   gCtx.beginPath()
// // //   gCtx.moveTo(gStartPos.x, gStartPos.y)
// // //   gCtx.lineTo(x, y)
// // //   gCtx.stroke()
// // // }
// //starting new:

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
//   renderMeme(IMAGE, gMeme.selectedImgId)
// }

// function onClearCanvas() {
//   gCtx.fillStyle = '#ffffff'
//   gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
// }

// function renderMeme(image, imgId) {
//   if (!imgId) return
//   gMeme.selectedImgId = imgId

//   gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
//   gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)

//   drawCanvasText(imgId)
// }

// function drawCanvasText(imgId) {
//   const currImage = gImgs.find((img) => img.id === imgId)
//   if (!currImage) return

//   currImage.lines.forEach((line, idx) => {
//     if (!line.txt) return

//     let yPos
//     if (idx === 0) yPos = 0.15 // first line = top
//     else if (idx === 1) yPos = 0.85 // second line = bottom
//     else yPos = 0.5 // third and more = middle

//     gCtx.font = `${line.size}px Arial`
//     gCtx.fillStyle = line.color || gTextBrush.color
//     gCtx.textAlign = 'center'
//     gCtx.textBaseline = 'middle'

//     gCtx.fillText(line.txt, gElCanvas.width / 2, gElCanvas.height * yPos)
//   })
// }

// function editLine(lineIdx) {
//   const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
//   if (!currImage || !currImage.lines[lineIdx]) return

//   gMeme.selectedLineIdx = lineIdx
//   textBox.style.display = 'block' // show input
//   textBox.value = currImage.lines[lineIdx].txt // fill current text
//   textBox.focus()
// }

// // function drawCanvasText(imgId) {
// //   const currImage = gImgs.find((img) => img.id === imgId)
// //   if (!currImage) return

// //   // Draw all lines of this image
// //   currImage.lines.forEach((line) => {
// //     if (!line.txt) return

// //     gCtx.font = `${line.size}px Arial` // use line's own size
// //     gCtx.fillStyle = line.color || gTextBrush.color
// //     gCtx.textAlign = 'center'
// //     gCtx.textBaseline = 'middle'

// //     gCtx.fillText(line.txt, gElCanvas.width / 2, gElCanvas.height * line.yPos)
// //   })
// // }

// // function onTextInput(inputText) {
// //   const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
// //   if (!currImage) return
// //   const currLine = currImage.lines[gMeme.selectedLineIdx]
// //   if (!currLine) return

// //   currLine.txt = inputText
// //   renderMeme(IMAGE, gMeme.selectedImgId)
// // }

// function onTextInput(inputText) {
//   const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
//   if (!currImage) return

//   const currLine = currImage.lines[gMeme.selectedLineIdx]
//   if (!currLine) return

//   currLine.txt = inputText
//   renderMeme(IMAGE, gMeme.selectedImgId)
// }

// function onChangeTextSize(direction) {
//   changeTextSize(direction)
//   renderMeme(IMAGE, gMeme.selectedImgId)
// }

// function onChangeTextColor(color) {
//   changeTextColor(color)
//   renderMeme(IMAGE, gMeme.selectedImgId)
// }

// // function addNewLine(defaultText = '') {
// //   const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
// //   if (!currImage) return

// //   currImage.lines.push({
// //     txt: defaultText,
// //     size: 20, // default size
// //     color: 'black', // default color
// //   })

// //   // select the new line
// //   gMeme.selectedLineIdx = currImage.lines.length - 1

// //   // clear the input box so user can type new text
// //   textBox.value = ''
// //   textBox.placeholder = 'enter text'

// //   renderMeme(IMAGE, gMeme.selectedImgId)
// // }

// function addNewLine(defaultText = '') {
//   const currImage = gImgs.find(img => img.id === gMeme.selectedImgId)
//   if (!currImage) return

//   currImage.lines.push({
//     txt: defaultText,
//     size: 20,
//     color: 'black'
//   })

//   gMeme.selectedLineIdx = currImage.lines.length - 1

//   // clear input and show placeholder
//   textBox.value = ''
//   textBox.placeholder = 'enter text'
//   textBox.style.display = 'block'

//   renderMeme(IMAGE, gMeme.selectedImgId)
// }


// // function addNewLine(
// //   defaultText = '',
// //   defaultSize = 20,
// //   defaultColor = 'black'
// // ) {
// //   const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
// //   if (!currImage) return

// //   currImage.lines.push({
// //     txt: defaultText,
// //     size: defaultSize,
// //     color: defaultColor,
// //   })

// //   gMeme.selectedLineIdx = currImage.lines.length - 1
// //   renderMeme(IMAGE, gMeme.selectedImgId)
// // }

// function onDownloadImg(elLink) {
//   const imgContent = gElCanvas.toDataURL('image/jpeg')
//   elLink.href = imgContent
//   textBox.style.display = 'none'
// }

//last

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

// Render meme
function renderMeme(image, imgId) {
  if (!imgId) return
  gMeme.selectedImgId = imgId
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
  drawAllLines()
}

// Draw all lines of current image
function drawAllLines() {
  const currImage = gImgs.find(img => img.id === gMeme.selectedImgId)
  if (!currImage) return

  currImage.lines.forEach((line, idx) => {
    if (!line.txt) return
    let yPos
    if (idx === 0) yPos = 0.15            // top
    else if (idx === 1) yPos = 0.85       // bottom
    else yPos = 0.5                        // middle for 3rd+
    
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
  const currImage = gImgs.find(img => img.id === gMeme.selectedImgId)
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
