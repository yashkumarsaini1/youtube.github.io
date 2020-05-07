
var count=0;
var a ; 	
var i ;
var p;
var q;
var j;
var k;
function Myfunction()
{ 	a=document.getElementById("number").value;
	document.getElementById("result").innerHTML="<strong>Factors of "+a +":  </strong>";

	for(i=1;i<=a;i++)
	{
		if(a%i==0)
		{document.getElementById("result").innerHTML= document.getElementById("result").innerHTML+i+" , ";
	count++;}
	}
	document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+"<br/>"+ "<strong>  Total Factors =</strong> "+count;
	if(count==2)
	{
		document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+"<br/>"+"<strong>It's a Prime Number </strong>";
	}
count=0;
}


function Myfunction1()
{ 	p=document.getElementById("number1").value;
	 q=document.getElementById("number2").value;
  	for(j=p;j<=q;j++){
  		document.getElementById("result1").innerHTML= document.getElementById("result1").innerHTML+"<strong>Factors of "+j +":  </strong>";  
  	for(k=1;k<=j;k++)
	{
	if(j%k==0)
		document.getElementById("result1").innerHTML= document.getElementById("result1").innerHTML+k+" , ";
	}
	document.getElementById("result1").innerHTML=document.getElementById("result1").innerHTML+"<br/>";
}}

