    var y1,y2,y3,y4,y5,y6,y7,y8,y9;
    var x1,x2,x3,x4,x5,x6,x7,x8,x9; 
    var count = 0 ;

	function block1()
	{   
		document.getElementById("box1").value="X";
		count=count+1;
		if(count%2!=0)
		{
          document.getElementById("box1").value="X";
          x1=1;
          y1=0;
		}
		else
		{
		  document.getElementById("box1").value="O";
		  x1=0;
		  y1=1;
		}
		document.getElementById("box1").disabled = true;
		check();
	}

	function block2()
	{
		document.getElementById("box2").value="X";
		count=count+1;
		if(count%2!=0)
		{
          document.getElementById("box2").value="X";
          x2=1;
          y2=0;
		}
		else
		{
		  document.getElementById("box2").value="O";
		  x2=0;
          y2=1;
		}
		document.getElementById("box2").disabled = true;
		check();
	}

	function block3()
	{
		document.getElementById("box3").value="X";
		count=count+1;
		if(count%2!=0)
		{
          document.getElementById("box3").value="X";
          x3=1;
          y3=0;
		}
		else
		{
		  document.getElementById("box3").value="O";
		  x3=0;
          y3=1;

		}
		document.getElementById("box3").disabled = true;
		check();
	}

	function block4()
	{
		document.getElementById("box4").value="X";
		count=count+1;
		if(count%2!=0)
		{
          document.getElementById("box4").value="X";
          x4=1;
          y4=0;
		}
		else
		{
		  document.getElementById("box4").value="O";
		  x4=0;
          y4=1;
		}
		document.getElementById("box4").disabled = true;
		check();
	}

	function block5()
	{
		document.getElementById("box5").value="X";
		count=count+1;
		if(count%2!=0)
		{
          document.getElementById("box5").value="X";
          x5=1;
          y5=0;
		}
		else
		{
		  document.getElementById("box5").value="O";
		  x5=0;
          y5=1;
		}
		document.getElementById("box5").disabled = true;
		check();
	}

	function block6()
	{
		document.getElementById("box6").value="X";
		count=count+1;
		if(count%2!=0)
		{
          document.getElementById("box6").value="X";
          x6=1;
          y6=0;
		}
		else
		{
		  document.getElementById("box6").value="O";
		  x6=0;
          y6=1;
		}
		document.getElementById("box6").disabled = true;
		check();
	}

	function block7()
	{
		document.getElementById("box7").value="X";
		count=count+1;
		if(count%2!=0)
		{
          document.getElementById("box7").value="X";
          x7=1;
          y7=0;
		}
		else
		{
		  document.getElementById("box7").value="O";
		  x7=0;
          y7=1;
		}
		document.getElementById("box7").disabled = true;
		check();

	}

	function block8()
	{
		document.getElementById("box8").value="X";
		count=count+1;
		if(count%2!=0)
		{
          document.getElementById("box8").value="X";
          x8=1;
          y8=0;
		}
		else
		{
		  document.getElementById("box8").value="O";
		  x8=0;
          y8=1;
		}
		document.getElementById("box8").disabled = true;
		check();
		
	}
	function block9()
	{
		document.getElementById("box9").value="X";
		count=count+1;
		if(count%2!=0)
		{
          document.getElementById("box9").value="X";
          x9=1;
          y9=0;
		}
		else
		{
		  document.getElementById("box9").value="O";
		  x9=0;
          y9=1;
		}
		document.getElementById("box9").disabled = true;
		check();
		
	}

function check(){
if ((count>=5)&&((x1+x2+x3==3)||(x4+x5+x6==3)||(x7+x8+x9==3)||(x1+x4+x7==3)||(x1+x5+x9==3)||(x2+x5+x8==3)||(x3+x6+x9==3)||(x3+x5+x7==3))) 
{
	document.getElementById("result").innerHTML ="Player 1 Wins";
}
 else if ((count>=5)&&((y1+y2+y3==3)||(y4+y5+y6==3)||(y7+y8+y9==3)||(y1+y4+y7==3)||(y1+y5+y9==3)||(y2+y5+y8==3)||(y3+y6+y9==3)||(y3+y5+y7==3)))
{
	document.getElementById("result").innerHTML ="Player 2 Wins";
}
else if ((count==9))
{
	document.getElementById("result").innerHTML ="It's a Draw ";
}
}
