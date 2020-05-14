var x1=0,x2=0,x3=0,x4=0,x5=0;
var y1=0,y2=0,y3=0,y4=0,y5=0;
var x;
var y;
var z;
function startquiz()
{
    head.style.display="none";
    q1.style.display="block";
    var secondsDown;
    var minutesDown;
    var sec;

     secondsDown = 300;
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

function check1(answer)
{
    if(answer=='C')
    {
        x1=1;
        y1=0;
    }
    else
    {
        x1=0;
        y1=1;
    }
}
function check2(answer)
{
    if(answer=='D')
    {
        x2=1;
        y2=0;
    }
    else
    {
        x2=0;
        y2=1;
    }
}
function check3(answer)
{
    if(answer=='C')
    {
        x3=1;
        y3=0;
    }
    else
    {
        x3=0;
        y3=1;
    }
}
function check4(answer)
{
    if(answer=='C')
    {
        x4=1;
        y4=0;
    }
    else
    {
        x4=0;
        y4=1;
    }
}
function check5(answer)
{
    if(answer=='A')
    {
        x5=1;
        y5=0;
    }
    else
    {
        x5=0;
        y5=1;
    }
}


function time1(answer)
{
    q1.style.display="none";
    q2.style.display="block";
}

function time2()
{
    q2.style.display="none";
    q3.style.display="block";
}
function time3()
{
    q3.style.display="none";
    q4.style.display="block";
}
function time4()
{
    q4.style.display="none";
    q5.style.display="block";
}
function time5()
{
    clearInterval(timeIntervalUp);
    x=x1+x2+x3+x4+x5;
    y=y1+y2+y3+y4+y5;
    if(x<5)
    {
        z="'Improve Your Score'";
    }
    else
    {
        z="'Well Done'";
    }
    q5.style.display="none";
    document.getElementById("result").innerHTML="Your Result"+"<br>"+"Correct Ansewers: "+x+"<br>"+"Incorrect Answers: "+y+"<br>"+z;
}