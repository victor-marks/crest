const boxContainer = document.querySelector('.boxes-container');
let boxNumber = 0;

function startBox(evt) {
  evt.preventDefault();
  console.log('start box');
  if (evt.target.matches('.start-box')) {
    let selection = document.querySelector('.selection');
    let startNumber = selection.options[selection.selectedIndex].value;
    console.log('selection: ', selection);
    console.log('start: ', startNumber);
  }
}

function addBox(idx) {
  console.log('adding box');
  let newBox = document.createElement('div');
  newBox.setAttribute('class', 'box');
  newBox.setAttribute('id', `${boxNumber}`);
  newBox.innerHTML = `
    <button class="cancel-btn" onclick="removeBox(${boxNumber})">X</button><p>${boxNumber}</p>
  `;
  boxContainer.appendChild(newBox);
  boxNumber++;
}

function removeBox(idx) {
  console.log('removing box');
  let removeBox = document.getElementById(`${idx}`);
  let removed = boxContainer.removeChild(removeBox);
}
