 {var sum=0;
function condition1() {
  var a1;
  var a;
  var print1;
  var a1=document.getElementById("ansa").value
  
    if (a1 == 80)
  {
    print1 = "CORRECT !!";
    a=4;
  }
  else 
  {
    print1 = "WRONG !!";
    a=-1;
  }
  sum=sum+a;
  document.getElementById("resulta").innerHTML = print1;
  document.getElementById("a").innerHTML ="Marks: " +a;
  document.getElementById("myButtona").disabled = true;
}


function condition2() {
  var a1;
  var b;
  var print1;
  var a1=document.getElementById("ansb").value
  
    if (a1 == 3)
  {
    print1 = "CORRECT !!";
    b=4;
  }
  else 
  {
    print1 = "WRONG !!";
    b=-1;
  }
  sum=sum+b;
  document.getElementById("resultb").innerHTML = print1;
  document.getElementById("b").innerHTML ="Marks: " +b;
  document.getElementById("myButtonb").disabled = true;
}

function condition3() {
  var a1;
  var c;
  var print1;
  var a1=document.getElementById("ansc").value
  
    if (a1 == 2)
  {
    print1 = "CORRECT !!";
    c=4;
  }
  else 
  {
    print1 = "WRONG !!";
    c=-1;
  }
  sum=sum+c;
  document.getElementById("resultc").innerHTML = print1;
  document.getElementById("c").innerHTML ="Marks: " +c;
  document.getElementById("myButtonc").disabled = true;
}

function condition4() {
  var a1;
  var d;
  var print1;
  var a1=document.getElementById("ansd").value
  
    if (a1 == 0)
  {
    print1 = "CORRECT !!";
    d=4;
  }
  else 
  {
    print1 = "WRONG !!";
    d=-1;
  }
  sum=sum+d;
  document.getElementById("resultd").innerHTML = print1;
  document.getElementById("d").innerHTML ="Marks: " +d;
  document.getElementById("myButtond").disabled = true;
}
function condition5() {
  var a1;
  var e ;
  var print1;
  var a1=document.getElementById("anse").value
  
    if (a1 == 12)
  {
    print1 = "CORRECT !!";
    e=4;
  }
  else 
  {
    print1 = "WRONG !!";
    e=-1;
  }
  document.getElementById("resulte").innerHTML = print1;
  document.getElementById("e").innerHTML ="Marks: "+ e;
  document.getElementById("myButtone").disabled = true;
  sum=sum+e;
  document.getElementById("sum").innerHTML = "Total Marks= "+sum+ " Out of 20"+ "<br/>"+"Percentage Marks= "+(sum*5)+"%"; 

}
}

       
