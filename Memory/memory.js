const symbols = [
  "&#127774;",
  "&#128526;",
  "&#8986;",
  "&#9200;",
  "&#9917;",
  "&#127795;",
  "&#128060;",
  "&#128213;",
];
let array1 = [];
let array2 = [];
let game = [];
let firstClick = 0;
let secondClick = 1;
let toggle = true;
let play = [];
let score = 0;
const box = document.getElementsByClassName("box");
var t;

// Function used to randomize array elements.

function inc_time() {
  score += parseInt(1);
  document.getElementById("time").innerHTML = "Time: " + score + " s";
}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function start() {
  t = setInterval(() => {
    inc_time();
  }, 1000);
  document.getElementById("start_btn").style.display = "none";
  document.getElementById("start").style.display = "none";
  shuffle(symbols);
  // To storing entire 'symbols' array to array1
  array1 = [...symbols];
  shuffle(symbols);
  array2 = [...symbols];

  // Adding two arrays to a single array
  game = array1.concat(array2);

  // To Randomize the game array
  shuffle(game);
  // To add array to html
  addToHtml(game);
}

function addToHtml(game) {
  for (let i = 0; i < 16; i++) {
    /* () =>{ function name} this will create an event listerner to every class btn */
    box[i].addEventListener("click", () => {
      // run function will handle every click.
      run(i);
    });
  }
}
function run(value) {
  box[value].innerHTML = game[value];
  flip(value);

  if (toggle === true) {
    firstClick = value;
    toggle = !toggle;
  } else if (toggle === false) {
    secondClick = value;
    toggle = !toggle;

    check(firstClick, secondClick);
  }
}

function check(first, second) {
  if (game[first] === game[second] && first !== second) {
    play.push(first);
    play.push(second);
    statusChange(first);
    statusChange(second);
    checkWin();
  } else {
    setTimeout(() => {
      destroy(first, second);
    }, 1000);
  }
}
function destroy(first, second) {
  box[first].innerHTML = " ";
  box[second].innerHTML = " ";

  flip(first);
  flip(second);
}
function flip(a) {
  if (box[a].classList.contains("rotate1")) {
    box[a].classList.remove("rotate1");
    box[a].classList.add("rotate2");
  } else {
    box[a].classList.remove("rotate2");
    box[a].classList.add("rotate1");
  }
}
function statusChange(value) {
  box[value].disabled = true;
  box[value].classList.add("remove");
}
function checkWin() {
  console.log(play.length);
  if (play.length > 15) {
    document.getElementById("end").style.display = "block";
    document.getElementById("start_btn").style.display = "block";
    clearInterval(t);
  }
}
