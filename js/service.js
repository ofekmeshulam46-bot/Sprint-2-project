// 'use strict'
// var gIsMouseDown = false
// var gBrush = { color: 'black', size: 5, shape: 'square' }
// var gTextBrush = { color: 'black', size: 5, shape: 'square' }
// function getPenSettings() {
//   return gBrush
// }

// var gImgs = [
//   {
//     id: 1,
//     url: 'meme-imgs/square/1.jpg',
//     keywords: ['funny', '1'],
//     lines: [{ txt: 'test text', size: 20, color: 'black' }],
//   },
//   {
//     id: 2,
//     url: 'meme-imgs/square/2.jpg',
//     keywords: ['2'],
//     lines: [{ txt: '', size: 20, color: 'black' }],
//   },
//   {
//     id: 3,
//     url: 'meme-imgs/square/3.jpg',
//     keywords: ['3'],
//     lines: [{ txt: '', size: 20, color: 'black' }],
//   },
//   {
//     id: 4,
//     url: 'meme-imgs/square/4.jpg',
//     keywords: ['4'],
//     lines: [{ txt: '', size: 20, color: 'black' }],
//   },
//   {
//     id: 5,
//     url: 'meme-imgs/square/5.jpg',
//     keywords: ['5'],
//     lines: [{ txt: '', size: 20, color: 'black' }],
//   },
//   {
//     id: 6,
//     url: 'meme-imgs/square/6.jpg',
//     keywords: ['6'],
//     lines: [{ txt: '', size: 20, color: 'black' }],
//   },
//   {
//     id: 7,
//     url: 'meme-imgs/square/7.jpg',
//     keywords: ['7'],
//     lines: [{ txt: '', size: 20, color: 'black' }],
//   },
//   {
//     id: 8,
//     url: 'meme-imgs/square/8.jpg',
//     keywords: ['8'],
//     lines: [{ txt: '', size: 20, color: 'black' }],
//   },
//   {
//     id: 9,
//     url: 'meme-imgs/square/9.jpg',
//     keywords: ['9'],
//     lines: [{ txt: '', size: 20, color: 'black' }],
//   },
//   {
//     id: 10,
//     url: 'meme-imgs/square/10.jpg',
//     keywords: ['10'],
//     lines: [{ txt: '', size: 20, color: 'black' }],
//   },
// ]

// var gMeme = {
//   selectedImgId: 0,
//   selectedLineIdx: 0,
//   lines: [{ txt: 'I sometimes eat Falafel', size: 20, color: 'red' }],
// }

// var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

// function getMeme(gMeme) {
//   return gMeme
// }

// function setLineTxt(text, textIndex) {

//   gMeme.lines[textIndex].txt = text // on purpose not using variable need same address
//   // let chosenLineText = gMeme.lines[textIndex].txt

// }

// function changeTextSize(direction) {
//   const currImage = gImgs.find((image) => image.id === gMeme.selectedImgId)
//     if (!currImage) return

//   console.log('currImage:', currImage)

//    const line = currImage.lines[gMeme.selectedLineIdx]
//   if (!line) return

//   if (direction === 'up') line.size += 2
//   else if (direction === 'down') line.size = Math.max(2, line.size - 2)

//   // Update the canvas with new size
//   // renderMeme(IMAGE, gMeme.selectedImgId)
// }

// function changeTextColor(color) {
//   gTextBrush.color = color
// }

// function getEvPos(ev) {
//   const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

//   let pos = {
//     x: ev.offsetX,
//     y: ev.offsetY,
//   }
//   if (TOUCH_EVS.includes(ev.type)) {
//     // Prevent triggering the mouse ev
//     ev.preventDefault()
//     // Gets the first touch point
//     ev = ev.changedTouches[0]
//     // Calc the right pos according to the touch screen
//     pos = {
//       x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//       y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
//     }
//   }
//   return pos
// }

/// starting new:
'use strict'

var gIsMouseDown = false
var gBrush = { color: 'black', size: 5, shape: 'square' }
var gTextBrush = { color: 'black', size: 5, shape: 'square' }

var gImgs = [
  {
    id: 1,
    url: 'meme-imgs/square/1.jpg',
    keywords: ['funny', '1'],
    lines: [{ txt: 'test text', size: 20, color: 'black' }],
  },
  {
    id: 2,
    url: 'meme-imgs/square/2.jpg',
    keywords: ['2'],
    lines: [{ txt: '', size: 20, color: 'black' }],
  },
  {
    id: 3,
    url: 'meme-imgs/square/3.jpg',
    keywords: ['3'],
    lines: [{ txt: '', size: 20, color: 'black' }],
  },
  {
    id: 4,
    url: 'meme-imgs/square/4.jpg',
    keywords: ['4'],
    lines: [{ txt: '', size: 20, color: 'black' }],
  },
  {
    id: 5,
    url: 'meme-imgs/square/5.jpg',
    keywords: ['5'],
    lines: [{ txt: '', size: 20, color: 'black' }],
  },
  {
    id: 6,
    url: 'meme-imgs/square/6.jpg',
    keywords: ['6'],
    lines: [{ txt: '', size: 20, color: 'black' }],
  },
  {
    id: 7,
    url: 'meme-imgs/square/7.jpg',
    keywords: ['7'],
    lines: [{ txt: '', size: 20, color: 'black' }],
  },
  {
    id: 8,
    url: 'meme-imgs/square/8.jpg',
    keywords: ['8'],
    lines: [{ txt: '', size: 20, color: 'black' }],
  },
  {
    id: 9,
    url: 'meme-imgs/square/9.jpg',
    keywords: ['9'],
    lines: [{ txt: '', size: 20, color: 'black' }],
  },
  {
    id: 10,
    url: 'meme-imgs/square/10.jpg',
    keywords: ['10'],
    lines: [{ txt: '', size: 20, color: 'black' }],
  },
]

var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  lines: [{ txt: 'I sometimes eat Falafel', size: 20, color: 'red' }],
}

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function setLineTxt(text, textIndex) {
  const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
  if (!currImage) return
  const currLine = currImage.lines[textIndex]
  if (!currLine) return
  currLine.txt = text
}

function changeTextSize(numString) {
  const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
  if (!currImage) return
  const currLine = currImage.lines[gMeme.selectedLineIdx]
  if (!currLine) return

  currLine.size += parseInt(numString) // convert string to number
  if (currLine.size < 2) currLine.size = 2
  if (currLine.size > 80) currLine.size = 80
}

function changeTextColor(color) {
  gTextBrush.color = color
  const currImage = gImgs.find((img) => img.id === gMeme.selectedImgId)
  if (!currImage) return
  const currLine = currImage.lines[gMeme.selectedLineIdx]
  if (!currLine) return
  currLine.color = color
}
