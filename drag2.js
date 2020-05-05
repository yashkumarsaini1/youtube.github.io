


 var x1=0,x2=0,x3=0,x4=0,x5=0,x6=0;
//calling the function in window.onload to make sure the HTML is loaded

function dover1()
{
  event.preventDefault();
}
function dover2()
{
  event.preventDefault();
}
function dover3()
{
  event.preventDefault();
}
function dover4()
{
  event.preventDefault();
}
function dover5()
{
  event.preventDefault();
}


 function drop1() {
  if(x1==1){
    var p = document.createElement("p");
    var node = document.createTextNode("180 Degree");
    p.appendChild(node);
    var div = document.getElementById("demo1");
    div.appendChild(p);
    x1=3;
    } 

    check();
    
}

 function drop2() {
  if(x2==1){
    var p = document.createElement("p");
    var node = document.createTextNode("90 Degree");
    p.appendChild(node);
    var div = document.getElementById("demo2");
    div.appendChild(p);
    x2=3;
   } 

    check();
   
}
function drop3() {
  if(x3==1){
    var p = document.createElement("p");
    var node = document.createTextNode("60 Degree");
    p.appendChild(node);
    var div = document.getElementById("demo3");
    div.appendChild(p);
    x3=3;
   } 

    check();
   
}
function drop4() {
  if(x4==1){
    var p = document.createElement("p");
    var node = document.createTextNode("105 Degree");
    p.appendChild(node);
    var div = document.getElementById("demo4");
    div.appendChild(p);
    x4=3;
   } 

    check();
   
}
function drop5() {
  if(x5==1){
    var p = document.createElement("p");
    var node = document.createTextNode("235 Degree");
    p.appendChild(node);
    var div = document.getElementById("demo5");
    div.appendChild(p);
    x5=3;
   } 

    check();
   
}

function dstart1()
{
  x1=1;
}
function dend1()
{
  x1=2;
}
function dstart2()
{
  x2=1;
}
function dend2()
{
  x2=2;
}



function dstart3()
{
  x3=1;
}
function dend3()
{
  x3=2;
}
function dstart4()
{
  x4=1;
}
function dend4()
{
  x4=2;
}


function dstart5()
{
  x5=1;
}
function dend5()
{
  x5=2;
}
function dstart6()
{
  x6=1;
}
function dend6()
{
  x6=2;
}

function check()
{
  if(x1==3){
    drag1.style.display="none";}
  if(x2==3){
    drag2.style.display="none";}
  if(x3==3){
    drag3.style.display="none";}
  if(x4==3){
    drag4.style.display="none";}
  if(x5==3){
    drag5.style.display="none";}
  if(x6==3){
    drag6.style.display="none";}


}




