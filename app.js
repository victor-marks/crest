const boxContainer = document.querySelector('.boxes-container');
let boxNumber = 0;

function startBox(evt) {
  evt.preventDefault();
  console.log('start number of boxes');
  boxContainer.innerHTML = '';
  let selection = document.querySelector('.selection');
  let startNumber = selection.options[selection.selectedIndex].value;
  boxNumber = 0;
  for (let i = 0; i < startNumber; i++) {
    addBox(boxNumber);
  }
}

function addBox() {
  console.log('adding a box');
  let newBox = document.createElement('div');
  newBox.setAttribute('class', 'box');
  newBox.setAttribute('id', `${boxNumber}`);
  newBox.innerHTML = `
  <p>${boxNumber}</p><button class="cancel-btn" onclick="removeBox(${boxNumber})">X</button>
  `;
  boxContainer.appendChild(newBox);
  boxNumber++;
}

function removeBox(idx) {
  console.log('removing a box');
  let removeBox = document.getElementById(`${idx}`);
  let removed = boxContainer.removeChild(removeBox);
}
