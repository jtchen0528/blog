"use strict";
function FormattingError(message) {
    this.name = 'Bad formatting';
    this.message = message;
    this.stack = (new Error()).stack;
}
FormattingError.prototype = new Error;

function separateImages() {
  window.addEventListener('resize', function () {
    let homeBoxes = document.getElementById("home-boxes");
    for (let box of homeBoxes.children) {
      let boxRow = box.children[0];
      if (!boxRow.classList.contains("box-row")) {
        throw new FormattingError("Each box div in home-boxes needs a box-row child for proper table formatting (see _sass/home-boxes.scss).");
      }
      if (box.firstElementChild.children.length > 1) {
        for (let cell of box.firstElementChild.children) {
          if (cell.nodeName == "IMG") {
            if (cell.height < box.offsetHeight) {
              let newBox = box.cloneNode(false);
              let tableRow = box.children[0].cloneNode(false);
              newBox.appendChild(tableRow).appendChild(cell);
              homeBoxes.insertBefore(newBox, box);
            }
          }
        }
      }
    }
  });
}

try {
  separateImages();
} catch(e) {
  console.warn(e.name + ": " + e.message);
}
