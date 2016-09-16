console.log("=== app.js === >>> LAB tic tac toe <<<");
window.onload = function() {

var testclick = function() {
  //var inputValue = input.value;
  console.log("clear-board clicked");
}
var mybutton = document.querySelector('#clear-board');
mybutton.addEventListener('click', testclick);

var board = document.querySelector('#board');
for (i=0; i<9; i++){
  var smallSquare = document.createElement('div');
  smallSquare.classList.add('square');
  board.appendChild(smallSquare);
// ... to be continue ...


}

}
