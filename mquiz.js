const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
var num=0;
var sum=0;
var a;
var b;
var c;
var d;
var e;

function startquiz()
{
    head.style.display="none";
    block.style.display="block";
    que1.style.display="block";
    que2.style.display="none";
    que3.style.display="none";
    que4.style.display="none";
    que5.style.display="none";

    var secondsDown;
    var minutesDown;
    var sec;

     secondsDown = 180;
     minutesDown = secondsDown/60;
     sec = secondsDown%60;
     timeIntervalUp = setInterval(function(){startTimer()}, 1000);

    function startTimer(){ 
            document.getElementById("start").innerHTML = "Time Remaining: " +minutesDown+":"+sec;
            secondsDown--;
            minutesDown = Math.floor(secondsDown/60);
            sec = secondsDown%60;
            if(minutesDown<=9)
            {
                minutesDown="0"+minutesDown;
            }
            if(sec<=9)
            {
                sec="0"+sec;
            }
            
             if (secondsDown == 3) {
                time1();}
                else if(secondsDown ==2){
                time2();}
                else if(secondsDown ==1){
                time3();}
                else if(secondsDown ==0){
                time4();}
            else if(secondsDown ==-1){
                clearInterval(timeIntervalUp);
                time5();
            }
        }
        
}
function checkAnswer1(answer){


    if( answer == "C")
    {
            document.getElementById("C1").style.backgroundColor = "#0f0";
            num=1;
            a=+4;
        }
    else if (answer== "A")
    {
            document.getElementById("A1").style.backgroundColor = "#f00";
            num=2;
            a=-1;
        }
        else if (answer== "B")
    {
            document.getElementById("B1").style.backgroundColor = "#f00";
            num=2;
            a=-1;
        }
        else if (answer== "D")
    {
            document.getElementById("D1").style.backgroundColor = "#f00";
            num=2;
            a=-1;
        }
        else if (answer== "")
    {
            num=2;
            a=0;
        }
        sum=sum+a;

        if(num==2){
            document.getElementById("C1").style.backgroundColor = "#0f0";
        }
    }
    function checkAnswer2(answer){

    if( answer == "A")
    {
            document.getElementById("A2").style.backgroundColor = "#0f0";
            num=1;
            b=+4;
        }
    else if (answer== "C")
    {
            document.getElementById("C2").style.backgroundColor = "#f00";
            num=2;
            b=-1;
        }
        else if (answer== "B")
    {
            document.getElementById("B2").style.backgroundColor = "#f00";
            num=2;
            b=-1;
        }
        else if (answer== "D")
    {
            document.getElementById("D2").style.backgroundColor = "#f00";
            num=2;
            b=-1;   
        }
        else if (answer== "")
    {
            num=2;
            b=0;
        }
        sum=sum+b;

        if(num==2)
        {
            document.getElementById("A2").style.backgroundColor = "#0f0";
        }

}

function checkAnswer3(answer){

    if( answer == "C")
    {
            document.getElementById("C3").style.backgroundColor = "#0f0";
            num=1;
            c=+4;
        }
    else if (answer== "A")
    {
            document.getElementById("A3").style.backgroundColor = "#f00";
            num=2;
            c=-1;
        }
        else if (answer== "B")
    {
            document.getElementById("B3").style.backgroundColor = "#f00";
            num=2;
            c=-1;
        }
        else if (answer== "D")
    {
            document.getElementById("D3").style.backgroundColor = "#f00";
            num=2;
            c=-1;   
        }
        else if (answer== "")
    {
            num=2;
            c=0;
        }
        sum=sum+c;

        if(num==2)
        {
            document.getElementById("C3").style.backgroundColor = "#0f0";
        }

}
function checkAnswer4(answer){

    if( answer == "C")
    {
            document.getElementById("C4").style.backgroundColor = "#0f0";
            num=1;
            d=+4;
        }
    else if (answer== "A")
    {
            document.getElementById("A4").style.backgroundColor = "#f00";
            num=2;
            d=-1;
        }
        else if (answer== "B")
    {
            document.getElementById("B4").style.backgroundColor = "#f00";
            num=2;
            d=-1;
        }
        else if (answer== "D")
    {
            document.getElementById("D4").style.backgroundColor = "#f00";
            num=2;
            d=-1;   
        }
        else if (answer== "")
    {
            num=2;
            d=0;
        }
        sum=sum+d;

        if(num==2)
        {
            document.getElementById("C4").style.backgroundColor = "#0f0";
        }

}

function checkAnswer5(answer){

    if( answer == "B")
    {
            document.getElementById("B5").style.backgroundColor = "#0f0";
            num=1;
            e=+4;
        }
    else if (answer== "A")
    {
            document.getElementById("A5").style.backgroundColor = "#f00";
            num=2;
            e=-1;
        }
        else if (answer== "C")
    {
            document.getElementById("C5").style.backgroundColor = "#f00";
            num=2;
            e=-1;
        }
        else if (answer== "D")
    {
            document.getElementById("D5").style.backgroundColor = "#f00";
            num=2;
            e=-1;   
        }
        else if (answer== "")
    {
            num=2;
            e=0;
        }
        sum=sum+e;

        if(num==2)
        {
            document.getElementById("B5").style.backgroundColor = "#0f0";
        }

}


function time1()
    {
        que2.style.display="block";
        que1.style.display="none";
    }
    function time2()
    {
        que3.style.display="block";
        que2.style.display="none";
    }
    function time3()
    {
        que4.style.display="block";
        que3.style.display="none";
    }
    function time4()
    {
        que5.style.display="block";
        que4.style.display="none";
    }
function time5()
    {
    que5.style.display="none";
    document.getElementById("result").innerHTML = "YOUR RESULT"+"<br/>"+"Total Marks= "+sum+ " Out of 20"+ "<br/>"+"Percentage Marks= "+(sum*5)+"%"; 
    }



