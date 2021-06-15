function syntaxHighlights() {
  var ca = document.getElementsByTagName("code");
  for (var i = 0; i < ca.length; i++) {
    var data = ca[i].innerHTML;
    //  var word = "class=";
    //  data = data.replace(word, word.fontcolor("yellow"));
    data = data.replace(/class/g, `<b2>class</b2>`);
    data = data.replace(/\.innerHTML/g, `<b1>.innerHTML</b1>`);
    data = data.replace(/\.style/g, `<b5>.style</b5>`);
    data = data.replace(/\((.*?)\)/g, `<b1>($1)</b1>`);
    data = data.replace(/\[(.*?)\]/g, `<b1>[$1]</b1>`);
    data = data.replace(/function /g, `<b2>function </b2>`);
    data = data.replace(/const /g, `<b3>const </b3>`);
    data = data.replace(/let /g, `<b5>let </b5>`);
    data = data.replace(/document\./g, `<b5>document.</b5>`);
    data = data.replace(/getElementById/g, `<b3>getElementById</b3>`);
    data = data.replace(
      /getElementsByClassName/g,
      `<b3>getElementsByClassName</b3>`
    );
    data = data.replace(/\/\*(.*?)\*\//g, `<b4>/*$1*/</b4>`);
    data = data.replace(/:(.*?);/g, `<b1>:$1;</b1>`);
    data = data.replace(/\= (.*?);/g, `<b6>= $1;</b6>`);
    data = data.replace(/\.(.*?) \{/g, `<b3>\.$1 \{</b3>`);
    data = data.replace(/h1/g, `<b2>h1</b2>`);
    data = data.replace(/p \{/g, `<b2>p {</b2>`);
    data = data.replace(/"(.*?)"/g, `<span class="code-str">"$1"</span>`);
    data = data.replace(/'(.*?)'/g, `<span class="code-str">'$1'</span>`);
    data = data.replace(
      /&lt;(.*?)&gt;/g,
      `<span class="code-elem">&lt;$1&gt;</span>`
    );

    data = data.replace(/&lt;\!\-\-(.*?)\-\-&gt;/g, `<b4>&lt;!--$1--&gt;</b4>`);
    ca[i].innerHTML = data;
  }
}

window.addEventListener("load", syntaxHighlights);
