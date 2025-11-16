'use strict'

var gImgs = [
  {
    id: 1,
    url: 'meme-imgs/square/1.jpg',
    keywords: ['funny', '1'],
    lines: [{ txt: '', size: 20, color: 'black' }],
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
  selectedImgId: 1,
  selectedLineIdx: 0,
}

var gTextBrush = { color: 'black', size: 30 }

function getCurrImage() {
  return gImgs.find((img) => img.id === gMeme.selectedImgId)
}

function setLineTxt(text) {
  const currImage = getCurrImage()
  if (!currImage) return
  currImage.lines[gMeme.selectedLineIdx].txt = text
}

function changeTextSize(delta) {
  const currImage = getCurrImage()
  if (!currImage) return
  const line = currImage.lines[gMeme.selectedLineIdx]
  line.size += parseInt(delta)
  if (line.size < 10) line.size = 10
  if (line.size > 100) line.size = 100
}

function changeTextColor(color) {
  const currImage = getCurrImage()
  if (!currImage) return
  const line = currImage.lines[gMeme.selectedLineIdx]
  line.color = color
}

function addNewLine(defaultText = '') {
  const currImage = getCurrImage()
  if (!currImage) return
  currImage.lines.push({
    txt: defaultText,
    size: 30,
    color: 'black',
  })
  gMeme.selectedLineIdx = currImage.lines.length - 1
}
