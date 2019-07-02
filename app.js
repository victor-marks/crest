/*
-user select number of columns from dropdown -> 
  create button (account for input of 0 cols)
-add box button: add only 1 box at a time?
-Also the box should display an
auto incremented index to visually identify the box added??
-X button to remove the box: rearrange how?
*/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

const boxContainer = document.querySelector('.boxes-container');
let boxNumber = 1;
let boxes;
let boxesArr;

function dropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}

function addBox(idx) {
  console.log('adding box');
  let newBox = document.createElement('div');
  newBox.setAttribute('class', 'box');
  newBox.setAttribute('id', `${boxNumber}`);
  newBox.innerHTML = `
    <button class="cancelbtn" onclick="removeBox()">X</button><p>${boxNumber}</p>
    `;
  boxContainer.appendChild(newBox);
  boxNumber++;
}

function removeBox(idx) {
  console.log('removing box');
  boxes = document.querySelectorAll('box');
  boxesArr = Array.from(boxes);
  console.log(boxesArr);

  // let boxes = document.getElementById('box');
  // boxes.remove();
  // boxesArr.filter(box => box.idx !== idx);
}

window.onclick = function(evt) {
  // Close the dropdown menu if the user clicks outside of it
  if (!evt.target.matches('.dropbtn')) {
    let dropdown = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  // grab number from dropdown menu
  let boxNumber = document.getElementById('box-number');
  boxNumber.onchange = function() {
    let boxes = document.getElementById('box-number').value;
    console.log('you selected: ', boxes);
    document.getElementById('box-number-show').innerHTML = 'You selected: ' + x;
  };
};
