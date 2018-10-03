let getPix = document.getElementById('pixelPainter');

function pixPaint(width, height) {
  for (let i = 0; i < width; i++) {
    let row = document.createElement('div');
    row.id = 'rowGrid';
    getPix.appendChild(row);//fix append to build cells before sent to parent div
    for (let j = 0; j < height; j++) {
      let cell = document.createElement('div');
      cell.id = 'cellGrid';
      row.appendChild(cell);//fix append to build cells before sent to parent div
    }
  }
}
pixPaint(10, 10);


let colorPal = document.createElement('div');
colorPal.id = 'pickerDiv';
getPix.appendChild(colorPal); //fix append

function colorPalette() {
  for (let i = 0; i < 2; i++) {
    let pRow = document.createElement('div');
    pRow.id = 'rowPal';
    pRow.className = 'coloring';
    colorPal.appendChild(pRow); //insert in code later
    for (let j = 0; j < 8; j++) {
      let pCell = document.createElement('div');
      pCell.id = 'cellPal';
      pCell.className = 'coloring';
      pCell.addEventListener('click', coloring());
      pRow.appendChild(pCell); //fix append to build cells before sent to parent div
    }
  }
}
colorPalette();

function coloring(event){
  console.log('event', event);
  // document.addEventListener('click', )
}

const colorArr = ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#7d7d90', '#0080ff', '#4000ff', '#bf00ff', '#ff99cc', '#fcf182', '#3778fb', '#ffff33', '#33ff33', '#ff1493', '#cf8dff', '#37fbda', '41b9e3'];
let colorsClass = document.getElementsByClassName('coloring');

function colorBox() {
  for (let i = 0; i < colorArr.length; i++) {
    colorsClass[i].style.backgroundColor = colorArr[i];
    }
  }
colorBox();

// function colorBg (x) {
//   x.style.background = colorBox();
// }
// colorBg(colorsClass);


