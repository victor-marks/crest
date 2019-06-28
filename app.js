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

let boxesShown = [];

function getIndex(idx) {
  let index = boxesShown.indexOf(idx);
  return index;
}

function dropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}

function addBox(idx) {
  let added = document.getElementById('boxes-container').appendChild('#box');
  added.setAttribute('class', getIndex(idx));
}

function removeBox(idx) {
  let removed = document.getElementById('boxes-container').removeChild('#box');
  removed.parentNode.removeChild('#box'); // get id of box to remove
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
    console.log(boxes);
    document.getElementById('box-number-show').innerHTML = 'You selected: ' + x;
  };
};
