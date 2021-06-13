var htmlEditor = CodeMirror.fromTextArea(document.getElementById("ht_code"), {
  tabSize: 4,
  mode: "xml",
  lineWrapping: true,
});
var cssEditor = CodeMirror.fromTextArea(document.getElementById("css_code"), {
  tabSize: 4,
  mode: "css",
  lineWrapping: true,
});
var jsEditor = CodeMirror.fromTextArea(document.getElementById("js_code"), {
  tabSize: 4,
  mode: "javascript",
  lineWrapping: true,
});
function start() {
  document.getElementById("run-btn").click();
}
document.querySelector("#run-btn").addEventListener("click", function () {
  let htmlCode = htmlEditor.getValue();
  let cssCode = "<style>" + cssEditor.getValue() + "</style>";
  let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
  let previewWindow =
    document.querySelector("#preview-window").contentWindow.document;
  previewWindow.open();
  previewWindow.write(htmlCode + cssCode + jsCode);
  previewWindow.close();
});

function toggle(value) {
  changeColor(value);
  for (let i = 1; i < 4; i++) {
    let y = "code" + i;
    let z = document.getElementById(y);
    z.style.display = "none";
  }

  let x = "code" + value;
  let v = document.getElementById(x);
  v.style.display = "block";
}

function changeColor(el) {
  let x = "btn" + el;
  let v = document.getElementById(x);
  for (let i = 1; i < 4; i++) {
    let y = "btn" + i;
    let z = document.getElementById(y);
    if (z.classList.contains("current")) {
      z.classList.remove("current");
    }
  }
  if (!v.classList.contains("current")) {
    v.classList.add("current");
  }
}
