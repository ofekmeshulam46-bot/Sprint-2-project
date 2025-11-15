'use strict'
var gIsMouseDown = false
var gBrush = { color: 'black', size: 5, shape: 'square' }
var gTextBrush = { color: 'black', size: 5, shape: 'square' }
function getPenSettings() {
  return gBrush
}
var gImgs = [
  { id: 1, url: 'meme-imgs/square/1.jpg', keywords: ['funny', '1'] },
  { id: 2, url: 'meme-imgs/square/2.jpg', keywords: ['2'] },
]

var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  lines: [{ txt: 'I sometimes eat Falafel', size: 20, color: 'red' }],
}

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function getMeme(gMeme) {
  return gMeme
}

function setLineTxt(text, textIndex) {
  console.log('input:', text)
  console.log('txt before change:',  gMeme.lines[textIndex].txt)
  gMeme.lines[textIndex].txt = text  // on purpose not using variable need same address
  // let chosenLineText = gMeme.lines[textIndex].txt

  console.log('txt after change:',  gMeme.lines[textIndex].txt)
}

function changeTextColor(color) {
  gTextBrush.color = color
}

function getEvPos(ev) {
  const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  if (TOUCH_EVS.includes(ev.type)) {
    // Prevent triggering the mouse ev
    ev.preventDefault()
    // Gets the first touch point
    ev = ev.changedTouches[0]
    // Calc the right pos according to the touch screen
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }
  return pos
}
