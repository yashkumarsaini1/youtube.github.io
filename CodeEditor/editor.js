var htmlEditor = CodeMirror.fromTextArea(document.getElementById("ht_code"), {
  tabSize: 4,
  mode: "xml",
  lineWrapping: true,
});

document.querySelector("#btn2").addEventListener("click", function () {
  let htmlCode = htmlEditor.getValue();
  let previewWindow =
    document.querySelector("#preview-window").contentWindow.document;
  previewWindow.open();
  previewWindow.write(htmlCode);
  previewWindow.close();
});

function toggle(value) {
  changeColor(value);
  for (let i = 1; i < 3; i++) {
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
  for (let i = 1; i < 3; i++) {
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
