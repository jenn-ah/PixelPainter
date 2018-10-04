

function pixPaint(width, height) {
  let getPix = document.getElementById('pixelPainter');
  getPix.id = 'bigDiv';
  let colorPal = document.createElement('div');
  colorPal.id = 'pickerDiv';
  getPix.appendChild(colorPal); //fix append

  const colorArr = ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#7d7d90', '#0080ff', '#4000ff', '#bf00ff', '#ff99cc', '#fcf182', '#3778fb', '#ffff33', '#33ff33', '#ff1493', '#cf8dff', '#37fbda', '41b9e3'];
  let colorsClass = document.getElementsByClassName('coloring');
  let gridBox = document.getElementsByClassName('gridding');
  let currentColor = 'rgb(255, 255, 255)';
  let mouseMove = false;

  for (let i = 0; i < width; i++) {
    let row = document.createElement('div');
      row.id = 'rowGrid';
      row.className = 'gridding';
      getPix.appendChild(row);//fix append to build cells before sent to parent div
    for (let j = 0; j < height; j++) {
      let cell = document.createElement('div');
      cell.id = 'cellGrid';
      cell.className = 'gridding';
      cell.addEventListener('mousedown', function (e) {
        mouseMove = true;
        // console.log('mouseMove - true down', mouseMove);
        e.target.style.backgroundColor = currentColor;
      });
      cell.addEventListener('mouseover', function (e) {
        if (mouseMove === true) {
          e.target.style.backgroundColor = currentColor;
        } else {
          return false;
        }
        // console.log('mouseMove - true over', mouseMove);
        // e.target.style.backgroundColor = currentColor;
      });
      cell.addEventListener('mouseup', function () {
        mouseMove = false;
      });
      row.appendChild(cell);//fix append to build cells before sent to parent div
    }
  }

  let buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttonBox';
    colorPal.appendChild(buttonsDiv);

  let clearButton = document.createElement('div');
    clearButton.innerHTML = 'clear';
    clearButton.className = 'buttons';
    clearButton.addEventListener('click', function () {
      for (let i = 0; i < gridBox.length; i++) {
      gridBox[i].style.backgroundColor = 'transparent';
      };
    });
    buttonsDiv.appendChild(clearButton);

  let eraseButton = document.createElement('div');
    eraseButton.innerHTML = 'erase';
    eraseButton.id = 'eraseMe';
    eraseButton.className = 'buttons';
    eraseButton.addEventListener('click', function () {
    currentColor = 'transparent';
      }
    );
    buttonsDiv.appendChild(eraseButton);


  function colorPalette() {
    for (let i = 0; i < 2; i++) {
      let pRow = document.createElement('div');
      pRow.id = 'rowPal';
      pRow.className = 'coloring';
      pRow.addEventListener('click', function (e) {
        currentColor = e.target.style.backgroundColor;
      });
      colorPal.appendChild(pRow); //insert in code later
      for (let j = 0; j < 8; j++) {
        let pCell = document.createElement('div');
        pCell.id = 'cellPal';
        pCell.className = 'coloring';
        pCell.addEventListener('click', function (e) {
          currentColor = e.target.style.backgroundColor;
        });
        pRow.appendChild(pCell); //fix append to build cells before sent to parent div
      }
    }
  }
  colorPalette();

  function colorBox() {
    for (let i = 0; i < colorArr.length; i++) {
      colorsClass[i].style.backgroundColor = colorArr[i];
    }
  }
  colorBox();


};
pixPaint(10, 10);



