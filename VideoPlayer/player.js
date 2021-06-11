let played = false;
const cV = document.getElementById("current_video");
const play_icon = document.getElementById("play_icon");
const pause_icon = document.getElementById("pause_icon");
const slider = document.getElementById("video_length");
const current_volume = document.getElementById("Volume");
let video_time;
var t;

document.addEventListener("keydown", (event) => {
  keybord(event);
});

(function localFileVideoPlayerInit(win) {
  var URL = win.URL || win.webkitURL,
    displayMessage = (function displayMessageInit() {
      return function displayMessage(message, isError) {
        node.innerHTML = message;
        node.className = isError ? "error" : "info";
      };
    })(),
    playSelectedFile = function playSelectedFileInit(event) {
      var file = this.files[0];

      var fileURL = URL.createObjectURL(file);

      cV.src = fileURL;
    },
    inputNode = document.getElementById("nfile");

  if (!URL) {
    displayMessage(
      "Your browser is not " +
        '<a href="http://caniuse.com/bloburls">supported</a>!',
      true
    );

    return;
  }

  inputNode.addEventListener("change", playSelectedFile, false);
})(window);

function fullScreen() {
  cV.requestFullscreen();
}

function keybord(a) {
  if (a.which === 32) {
    playVideo();
  }
  if (a.which === 39) {
    slider.value = parseInt(slider.value) + parseInt(5);
    cV.currentTime = slider.value;
  }
  if (a.which === 37) {
    slider.value = parseInt(slider.value) - parseInt(5);
    cV.currentTime = slider.value;
  }
  if (a.which === 38) {
    current_volume.value = current_volume.value - -0.01;
    cV.volume = current_volume.value;
    console.log(cV.volume);
    volumeChange(current_volume.value);
  }
  if (a.which === 40) {
    current_volume.value = current_volume.value - 0.01;
    cV.volume = current_volume.value;
    volumeChange(current_volume.value);
    console.log(cV.volume);
  }
  if (a.which === 107) {
    rate(2);
  }
  if (a.which === 109) {
    rate(1);
  }
}
slider.oninput = function () {
  cV.currentTime = this.value;
};

function volumeChange(value) {
  console.log(cV.volume);
  document.getElementById("volumeValue").innerHTML =
    "(" + parseInt(value * 100) + "%)";

  if (value === "0") {
    document.getElementById("full").style.display = "none";
    document.getElementById("empty").style.display = "inline";
  } else {
    document.getElementById("full").style.display = "inline";
    document.getElementById("empty").style.display = "none";
  }
}
current_volume.oninput = function () {
  cV.volume = this.value;
  volumeChange(this.value);
};

function getVideoPorperties() {
  video_time = cV.duration;
  slider.max = video_time;
  cV.volume = document.getElementById("Volume").value;

  let video_hr = parseInt(video_time / 3600);
  let video_min = parseInt(video_time / 60 - video_hr * 60);
  let over_sec = parseInt(video_time % 60);

  if (video_hr < 10) {
    video_hr = "0" + video_hr;
  }
  if (video_min < 10) {
    video_min = "0" + video_min;
  }
  if (over_sec < 10) {
    over_sec = "0" + over_sec;
  }
  document.getElementById("video_time").innerHTML =
    video_hr + ":" + video_min + ":" + over_sec;
}
function refresh() {
  slider.value = cV.currentTime;
  let current_hr = parseInt(cV.currentTime / 3600);
  let current_min = parseInt(cV.currentTime / 60 - current_hr * 60);
  let current_sec = parseInt(cV.currentTime % 60);

  if (current_hr < 10) {
    current_hr = "0" + current_hr;
  }
  if (current_sec < 10) {
    current_sec = "0" + current_sec;
  }
  if (current_min < 10) {
    current_min = "0" + current_min;
  }
  document.getElementById("time_laps").innerHTML =
    current_hr + ":" + current_min + ":" + current_sec;
}
function playVideo() {
  getVideoPorperties();
  t = setInterval(() => {
    refresh();
  }, 1000);
  if (!played) {
    cV.play();
    played = true;
    pause_icon.style.display = "inline";
    play_icon.style.display = "none";
    setTimeout(() => {
      pause_icon.style.display = "none";
    }, 1000);
  } else {
    cV.pause();
    played = false;
    pause_icon.style.display = "none";
    play_icon.style.display = "inline";
  }
}

function rate(val) {
  if (val === 1) {
    if (cV.playbackRate > 0.2) {
      cV.playbackRate = cV.playbackRate - 0.1;
      document.getElementById("rate").innerHTML = cV.playbackRate.toFixed(1);
    }
  } else {
    if (cV.playbackRate < 4.0) {
      cV.playbackRate = cV.playbackRate - -0.1;
      document.getElementById("rate").innerHTML = cV.playbackRate.toFixed(1);
    }
  }
}
