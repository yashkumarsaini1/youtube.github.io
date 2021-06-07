var img_status = false;
var currentUser = true;
var p1_score = 0;
var p2_score = 0;
var p1_saved_score = 0;
var p2_saved_score = 0;

function roll() {
  var currentDiceValue = Math.floor(Math.random() * 6) + 1;
  var dice_img1 = document.getElementById("dice_img1");
  var dice_img2 = document.getElementById("dice_img2");
  if (img_status === false) {
    dice_img2.style.display = "inline";
    dice_img1.style.display = "none";

    dice_img2.src = "Images/" + currentDiceValue + ".png";
    img_status = !img_status;
  } else {
    dice_img1.style.display = "inline";
    dice_img2.style.display = "none";

    dice_img1.src = "Images/" + currentDiceValue + ".png";
    img_status = !img_status;
  }
  checkStatus(currentDiceValue);
}

function change(current) {
  if (!current) {
    document.getElementById("p2_current").style.display = "inline";
    document.getElementById("p1_current").style.display = "none";
    document.getElementById("roll_btn2").disabled = false;
    document.getElementById("roll_btn1").disabled = true;
    document.getElementById("player1").style.filter = "grayscale(100%)";
    document.getElementById("player2").style.filter = "grayscale(0%)";
  } else {
    document.getElementById("p2_current").style.display = "none";
    document.getElementById("p1_current").style.display = "inline";
    document.getElementById("roll_btn1").disabled = false;
    document.getElementById("roll_btn2").disabled = true;
    document.getElementById("player2").style.filter = "grayscale(100%)";
    document.getElementById("player1").style.filter = "grayscale(0%)";
  }
}

function score(current, currentDiceValue) {
  if (current) {
    p1_score += parseInt(currentDiceValue);
    document.getElementById("player1_score").innerHTML = p1_score;
  } else {
    p2_score += parseInt(currentDiceValue);
    document.getElementById("player2_score").innerHTML = p2_score;
  }
  checkWinner();
}

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

function checkWinner() {
  if (p1_score > 99) {
    document.getElementById("winner").style.display = "block";
    document.getElementById("winner").innerHTML = " Player 1 Won ";
    document.getElementById("save_btn").style.display = "none";
    document.getElementById("roll_btn1").disabled = true;
    document.getElementById("roll_btn2").disabled = true;
  } else if (p2_score > 99) {
    document.getElementById("winner").style.display = "block";
    document.getElementById("winner").innerHTML = " Player 2 Won ";
    document.getElementById("save_btn").style.display = "none";
    document.getElementById("roll_btn1").disabled = true;
    document.getElementById("roll_btn2").disabled = true;
  }
}
