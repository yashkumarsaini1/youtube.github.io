var img_status = false;
var currentUser = true;
var p1_score = 0;
var p2_score = 0;
var p1_saved_score = 0;
var p2_saved_score = 0;
const diceValues = ["one", "two", "three", "four", "five", "six"];
var dice_icon_value = 1;
var dice_value = "rotate1";
var player1Score = "srotate1";
var player2Score = "srotate1";

function roll() {
  // To get random number between 1 and 6
  var currentDiceValue = Math.floor(Math.random() * 6) + 1;
  var dice_icon = document.getElementById("dice_icon");

  if (dice_value === "rotate1") {
    dice_icon.classList.remove("rotate1");
    dice_icon.classList.add("rotate2");

    dice_value = "rotate2";
  } else {
    dice_icon.classList.add("rotate1");
    dice_icon.classList.remove("rotate2");

    dice_value = "rotate1";
  }

  // To remove class
  let dice_value_name = diceValues[dice_icon_value - 1];
  let x = "fa-dice-" + dice_value_name;
  dice_icon.classList.remove(x);

  // Adding new Class
  dice_icon_value = currentDiceValue;
  dice_value_name = diceValues[dice_icon_value - 1];
  let y = "fa-dice-" + dice_value_name;
  dice_icon.classList.add(y);

  // Calling checkStatus Funcion to increacse score or pass to other player
  checkStatus(currentDiceValue);
}

// Change funtion call whenever user changes
function change(current) {
  if (!current) {
    document.getElementById("p2_current").style.display = "inline";
    document.getElementById("p1_current").style.display = "none";
    document.getElementById("roll_btn2").disabled = false;
    document.getElementById("roll_btn1").disabled = true;
    document.getElementById("player1").style.filter = "grayscale(100%)";
    document.getElementById("player2").style.filter = "grayscale(0%)";
    document.getElementById("dice_icon").style.color = "#3498db";
  } else {
    document.getElementById("p2_current").style.display = "none";
    document.getElementById("p1_current").style.display = "inline";
    document.getElementById("roll_btn1").disabled = false;
    document.getElementById("roll_btn2").disabled = true;
    document.getElementById("player2").style.filter = "grayscale(100%)";
    document.getElementById("player1").style.filter = "grayscale(0%)";
    document.getElementById("dice_icon").style.color = "#e74c3c";
  }
}

// Calls for score updation for the current user.
function score(current, currentDiceValue) {
  if (current) {
    p1_score += parseInt(currentDiceValue);
    let p1 = document.getElementById("player1_score");
    p1.innerHTML = p1_score;

    if (player1Score === "srotate1") {
      p1.classList.remove("srotate1");
      p1.classList.add("srotate2");

      player1Score = "srotate2";
    } else {
      p1.classList.add("srotate1");
      p1.classList.remove("srotate2");

      player1Score = "srotate1";
    }
  } else {
    p2_score += parseInt(currentDiceValue);
    let p2 = document.getElementById("player2_score");
    p2.innerHTML = p2_score;

    if (player2Score === "srotate1") {
      p2.classList.remove("srotate1");
      p2.classList.add("srotate2");

      player2Score = "srotate2";
    } else {
      p2.classList.add("srotate1");
      p2.classList.remove("srotate2");

      player2Score = "srotate1";
    }
  }
  // call checkwinner after score updation for winner check at every point
  checkWinner();
}
// Check the value on dice . if "1" change player otherwise increase score.
function checkStatus(currentDiceValue) {
  if (currentDiceValue === 1) {
    if (currentUser) {
      p1_score = p1_saved_score;
      document.getElementById("player1_score").innerHTML = p1_score;
    } else {
      p2_score = p2_saved_score;
      document.getElementById("player2_score").innerHTML = p2_score;
    }
    currentUser = !currentUser;
    change(currentUser);
  } else {
    score(currentUser, currentDiceValue);
  }
}
// Calls whenever user save its score
function saveState() {
  if (currentUser) {
    p1_saved_score = p1_score;
    document.getElementById("p1_saved").innerHTML = p1_saved_score;
  } else {
    p2_saved_score = p2_score;
    document.getElementById("p2_saved").innerHTML = p2_saved_score;
  }
  currentUser = !currentUser;
  change(currentUser);
}
// To check the winner for the game.
function checkWinner() {
  if (p1_score > 99) {
    document.getElementById("winner").classList.add("winner");
    document.getElementById("winner").innerHTML = " Player 1 Won ";
    document.getElementById("save_btn").style.display = "none";
    document.getElementById("roll_btn1").disabled = true;
    document.getElementById("roll_btn2").disabled = true;
  } else if (p2_score > 99) {
    document.getElementById("winner").classList.add("winner");
    document.getElementById("winner").innerHTML = " Player 2 Won ";
    document.getElementById("save_btn").style.display = "none";
    document.getElementById("roll_btn1").disabled = true;
    document.getElementById("roll_btn2").disabled = true;
  }
}
