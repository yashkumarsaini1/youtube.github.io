      var team1 = [];
      var team2 = [];
      var team1_bowl = [];
      var team2_bowl = [];
      var team1_id = [];
      var team2_id = [];
      var sn = 0;
      
      var rad =30;
      var cad =1;
      var toss_winner;
      var toss_loser;
      var teams = ["CSK","RCB","DC","RR","KKR","PK","SRH","MI"];
      var type_player = ["WK","Batsman","All Rounder","Bowler"];
      var t = setInterval(move,18);
      function change()
      {
        
        var p = setTimeout(stop,1000);
      }
      function move()
      {
        rad--;
        if(rad>1){
        document.getElementById('c1').style.width = rad+"px";
        document.getElementById('c1').style.height = rad+"px";

        document.getElementById('c3').style.width = 30-rad+"px";
        document.getElementById('c3').style.height = 30-rad+"px";

      }
      else if (rad<2 && cad>0 )
      {
        cad = 30+rad;
        
        document.getElementById('c1').style.width = 30-cad+"px";
        document.getElementById('c1').style.height = 30-cad+"px";

        document.getElementById('c3').style.width = cad+"px";
        document.getElementById('c3').style.height = cad+"px";

      }
      else
      {
        rad =30;
        cad =1;
      }

      }
      function stop()
      {
        document.getElementById("loadpage").style.display = "none" ;

        document.getElementById("team_select").style.display = "block" ;
        clearInterval(t);
      }


      var a,b;
       var team = 
      '{"CSK":[' +
                      '{"Name":"Faf du Plessis","Type":"1","overseas":"1" },'+
                      '{"Name":"Dwayne Bravo","Type":"2","overseas":"1" },' +
                      '{"Name":"Sam Curran","Type":"2","overseas":"1" },' +
                      '{"Name":"Ravindra Jadeja","Type":"2","overseas":"0" },' +
                      '{"Name":"MS Dhoni","Type":"0","overseas":"0" },' +
                      '{"Name":"Robin Uthappa","Type":"0","overseas":"0" },' +
                      '{"Name":"N Jagadeesan","Type":"0","overseas":"0" },' +
                      '{"Name":"Ambati Rayudu","Type":"1","overseas":"0" },' +
                      '{"Name":"Suresh Raina","Type":"2","overseas":"0" },' +
                      '{"Name":"Cheteshwar Pujara","Type":"1","overseas":"0" },' +
                      '{"Name":"Krishnappa Gowtham","Type":"2","overseas":"0" },' +
                      '{"Name":"Moeen Ali ","Type":"2","overseas":"1" },' +
                      '{"Name":"Josh Hazlewood","Type":"3","overseas":"1" },' +
                      '{"Name":"Lungi Ngidi ","Type":"3","overseas":"1" },' +
                      '{"Name":"Shardul Thakur","Type":"3","overseas":"0" },' +
                      '{"Name":"Deepak Chahar","Type":"3","overseas":"0" },' +
                      '{"Name":"Imran Tahir","Type":"3","overseas":"1" },' +
                      '{"Name":"Mitchell Santner","Type":"2","overseas":"1" },' +
                      '{"Name":"Ruturaj Gaikwad","Type":"1","overseas":"0" },' +
                      '{"Name":"Karn Sharma","Type":"3","overseas":"0" },' +
                      '{"Name":"Bhagath Verma","Type":"2","overseas":"0" },' +
                      '{"Name":"Harishankar Reddy","Type":"3","overseas":"0" },' +
                      '{"Name":"KM Asif","Type":"3","overseas":"0" },' +
                      '{"Name":"R Sai Kishore","Type":"3","overseas":"0" },' +
                      '{"Name":"Hari Nishanth","Type":"1","overseas":"0" }],'+
      '"RCB":[' +
                      '{"Name":"Virat Kohli","Type":"1","overseas":"0" },'+
                      '{"Name":"AB de Villiers","Type":"0","overseas":"1" },' +
                      '{"Name":"Devdutt Padikkal","Type":"1","overseas":"0" },' +
                      '{"Name":"Mohammed Siraj","Type":"3","overseas":"0" },' +
                      '{"Name":"Washington Sundar","Type":"2","overseas":"0" },' +
                      '{"Name":"Yuzvendra Chahal","Type":"3","overseas":"0" },' +
                      '{"Name":"Pavan Deshpande","Type":"1","overseas":"0" },' +
                      '{"Name":"Josh Philippe","Type":"0","overseas":"1" },' +
                      '{"Name":"Shahbaz Ahmed","Type":"2","overseas":"0" },' +
                      '{"Name":"Adam Zampa","Type":"3","overseas":"1" },' +
                      '{"Name":"Krishnappa Gowtham","Type":"2","overseas":"0" },' +
                      '{"Name":"Kane Richardson ","Type":"3","overseas":"1" },' +
                      '{"Name":"Harshal Patel","Type":"3","overseas":"0" },' +
                      '{"Name":"Daniel Sams","Type":"2","overseas":"1" },' +
                      '{"Name":"Navdeep Saini","Type":"3","overseas":"0" },' +
                      '{"Name":"Glenn Maxwell ","Type":"2","overseas":"1" },' +
                      '{"Name":"Sachin Baby","Type":"1","overseas":"0" },' +
                      '{"Name":"Kyle Jamieson","Type":"3","overseas":"1" },' +
                      '{"Name":"Mohammed Azharuddeen","Type":"0","overseas":"0" },' +
                      '{"Name":"Daniel Christian","Type":"2","overseas":"1" },' +
                      '{"Name":"Suyash Prabhudessai","Type":"1","overseas":"0" },' +
                      '{"Name":"Srikar Bharat","Type":"0","overseas":"0" }],'+
      '"DC":[' +
                      '{"Name":"Shikhar Dhawan","Type":"1","overseas":"0" },'+
                      '{"Name":"Prithvi Shaw","Type":"1","overseas":"0" },' +
                      '{"Name":"Ajinkya Rahane","Type":"1","overseas":"0" },' +
                      '{"Name":"Shreyas Iyer","Type":"1","overseas":"0" },' +
                      '{"Name":"Rishabh Pant","Type":"0","overseas":"0" },' +
                      '{"Name":"Shimron Hetmyer","Type":"1","overseas":"1" },' +
                      '{"Name":"Marcus Stoinis","Type":"2","overseas":"1" },' +
                      '{"Name":"Chris Woakes","Type":"2","overseas":"1" },' +
                      '{"Name":"Ravichandran Ashwin","Type":"2","overseas":"0" },' +
                      '{"Name":"Axar Patel","Type":"2","overseas":"0" },' +
                      '{"Name":"Amit Mishra","Type":"3","overseas":"0" },' +
                      '{"Name":"Lalit Yadav","Type":"2","overseas":"0" },' +
                      '{"Name":"Kagiso Rabada","Type":"3","overseas":"1" },' +
                      '{"Name":"Anrich Nortje","Type":"3","overseas":"1" },' +
                      '{"Name":"Ishant Sharma","Type":"3","overseas":"0" },' +
                      '{"Name":"Avesh Khan","Type":"3","overseas":"0" },' +
                      '{"Name":"Steven Smith ","Type":"1","overseas":"1" },' +
                      '{"Name":"Umesh Yadav","Type":"3","overseas":"0" },' +
                      '{"Name":"Sam Billings ","Type":"0","overseas":"1" },' +
                      '{"Name":"Tom Curran","Type":"2","overseas":"1" },' +
                      '{"Name":"Ripal Patel","Type":"3","overseas":"0" },' +
                      '{"Name":"Vishnu Vinod ","Type":"0","overseas":"0" },' +
                      '{"Name":"Manimaran Siddharth","Type":"3","overseas":"0" },' +
                      '{"Name":"Lukman Meriwala","Type":"3","overseas":"0" }],'+
      '"RR":[' +
                      '{"Name":"Sanju Samson","Type":"0","overseas":"0" },'+
                      '{"Name":"Ben Stokes","Type":"2","overseas":"1" },' +
                      '{"Name":"Jofra Archer","Type":"3","overseas":"1" },' +
                      '{"Name":"Jos Buttler","Type":"0","overseas":"1" },' +
                      '{"Name":"Shivam Dube","Type":"2","overseas":"0" },' +
                      '{"Name":"Andrew Tye","Type":"3","overseas":"1" },' +
                      '{"Name":"David Miller","Type":"1","overseas":"1" },' +
                      '{"Name":"Chris Morris","Type":"2","overseas":"1" },' +
                      '{"Name":"Mahipal Lomror","Type":"2","overseas":"0" },' +
                      '{"Name":"Manan Vohra","Type":"1","overseas":"0" },' +
                      '{"Name":"Rahul Tewatia","Type":"2","overseas":"0" },' +
                      '{"Name":"Riyan Parag","Type":"1","overseas":"0" },' +
                      '{"Name":"Jaydev Unadkat","Type":"3","overseas":"0" },' +
                      '{"Name":"Shreyas Gopal","Type":"2","overseas":"0" },' +
                      '{"Name":"Yashasvi Jaiswal","Type":"1","overseas":"0" },' +
                      '{"Name":"Anuj Rawat","Type":"0","overseas":"0" },' +
                      '{"Name":"Kartik Tyagi ","Type":"3","overseas":"0" },' +
                      '{"Name":"Mayank Markande","Type":"3","overseas":"0" },' +
                      '{"Name":"Mustafizur Rahman ","Type":"3","overseas":"1" },' +
                      '{"Name":"Chetan Sakariya","Type":"3","overseas":"0" },' +
                      '{"Name":"KC Cariappa","Type":"3","overseas":"0" },' +
                      '{"Name":"Liam Livingstone","Type":"1","overseas":"1" },' +
                      '{"Name":"Kuldip Yadav","Type":"3","overseas":"0" },' +
                      '{"Name":"Akash Singh","Type":"1","overseas":"0" }],'+
      '"KKR":[' +
                      '{"Name":"Shubman Gill","Type":"1","overseas":"0" },'+
                      '{"Name":"Tim Seifert","Type":"0","overseas":"1" },' +
                      '{"Name":"Rahul Tripathi","Type":"1","overseas":"0" },' +
                      '{"Name":"Rinku Singh","Type":"1","overseas":"0" },' +
                      '{"Name":"Dinesh Karthik","Type":"0","overseas":"0" },' +
                      '{"Name":"Eoin Morgan","Type":"1","overseas":"1" },' +
                      '{"Name":"Andre Russell","Type":"2","overseas":"1" },' +
                      '{"Name":"Sunil Narine","Type":"3","overseas":"1" },' +
                      '{"Name":"Varun Chakravarthy","Type":"3","overseas":"0" },' +
                      '{"Name":"Kuldeep Yadav","Type":"3","overseas":"0" },' +
                      '{"Name":"Pat Cummins","Type":"3","overseas":"1" },' +
                      '{"Name":"Lockie Ferguson","Type":"3","overseas":"1" },' +
                      '{"Name":"Kamlesh Nagarkoti","Type":"3","overseas":"0" },' +
                      '{"Name":"Shivam Mavi","Type":"2","overseas":"0" },' +
                      '{"Name":"Sandeep Warrier","Type":"3","overseas":"0" },' +
                      '{"Name":"Prasidh Krishna","Type":"3","overseas":"0" },' +
                      '{"Name":"Shakib Al Hasan ","Type":"2","overseas":"1" },' +
                      '{"Name":"Nitish Rana","Type":"1","overseas":"0" },' +
                      '{"Name":"Sheldon Jackson ","Type":"0","overseas":"0" },' +
                      '{"Name":"Vaibhav Arora","Type":"3","overseas":"0" },' +
                      '{"Name":"Karun Nair","Type":"1","overseas":"0" },' +
                      '{"Name":"Harbhajan Singh","Type":"3","overseas":"0" },' +
                      '{"Name":"Ben Cutting","Type":"2","overseas":"1" },' +
                      '{"Name":"Pawan Negi","Type":2,"overseas":"0" },' +
                      '{"Name":"Venkatesh Iyer","Type":"3","overseas":"0" }],'+
      '"PBKS":[' +
                      '{"Name":"Chris Gayle","Type":"1","overseas":"1" },'+
                      '{"Name":"Nicholas Pooran","Type":"0","overseas":"1" },' +
                      '{"Name":"KL Rahul","Type":"0","overseas":"0" },' +
                      '{"Name":"Mayank Agarwal","Type":"1","overseas":"0" },' +
                      '{"Name":"Mandeep Singh","Type":"1","overseas":"0" },' +
                      '{"Name":"Dawid Malan","Type":"1","overseas":"1" },' +
                      '{"Name":"Arshdeep Singh","Type":"3","overseas":"0" },' +
                      '{"Name":"Darshan Nalkande","Type":"3","overseas":"0" },' +
                      '{"Name":"Simran Singh","Type":"0","overseas":"0" },' +
                      '{"Name":"Saurabh Kumar","Type":"2","overseas":"0" },' +
                      '{"Name":"Harpreet Brar","Type":"2","overseas":"0" },' +
                      '{"Name":"Ravi Bishnoi","Type":"3","overseas":"0" },' +
                      '{"Name":"Chris Jordan ","Type":"2","overseas":"1" },' +
                      '{"Name":"Mohammed Shami","Type":"3","overseas":"0" },' +
                      '{"Name":"Deepak Hooda","Type":"2","overseas":"0" },' +
                      '{"Name":"Murugan Ashwin","Type":"3","overseas":"0" },' +
                      '{"Name":"Sarfaraz Khan ","Type":"1","overseas":"0" },' +
                      '{"Name":"Ishan Porel","Type":"3","overseas":"0" },' +
                      '{"Name":"Jhye Richardson ","Type":"2","overseas":"1" },' +
                      '{"Name":"Shahrukh Khan","Type":"2","overseas":"0" },' +
                      '{"Name":"Riley Meredith","Type":"3","overseas":"1" },' +
                      '{"Name":"Moises Henriques","Type":"2","overseas":"1" },' +
                      '{"Name":"Jalaj Saxena","Type":"2","overseas":"0" },' +
                      '{"Name":"Utkarsh Singh","Type":3,"overseas":"0" },' +
                      '{"Name":"Fabian Allen ","Type":"2","overseas":"1" }],'+
      '"SRH":[' +
                      '{"Name":"Chris Gayle","Type":"1","overseas":"1" },'+
                      '{"Name":"Nicholas Pooran","Type":"0","overseas":"1" },' +
                      '{"Name":"KL Rahul","Type":"0","overseas":"0" },' +
                      '{"Name":"Mayank Agarwal","Type":"1","overseas":"0" },' +
                      '{"Name":"Mandeep Singh","Type":"1","overseas":"0" },' +
                      '{"Name":"Dawid Malan","Type":"1","overseas":"1" },' +
                      '{"Name":"Arshdeep Singh","Type":"3","overseas":"0" },' +
                      '{"Name":"Darshan Nalkande","Type":"3","overseas":"0" },' +
                      '{"Name":"Simran Singh","Type":"0","overseas":"0" },' +
                      '{"Name":"Saurabh Kumar","Type":"2","overseas":"0" },' +
                      '{"Name":"Harpreet Brar","Type":"2","overseas":"0" },' +
                      '{"Name":"Ravi Bishnoi","Type":"3","overseas":"0" },' +
                      '{"Name":"Chris Jordan ","Type":"2","overseas":"1" },' +
                      '{"Name":"Mohammed Shami","Type":"3","overseas":"0" },' +
                      '{"Name":"Deepak Hooda","Type":"2","overseas":"0" },' +
                      '{"Name":"Murugan Ashwin","Type":"3","overseas":"0" },' +
                      '{"Name":"Sarfaraz Khan ","Type":"1","overseas":"0" },' +
                      '{"Name":"Ishan Porel","Type":"3","overseas":"0" },' +
                      '{"Name":"Jhye Richardson ","Type":"2","overseas":"1" },' +
                      '{"Name":"Shahrukh Khan","Type":"2","overseas":"0" },' +
                      '{"Name":"Riley Meredith","Type":"3","overseas":"1" },' +
                      '{"Name":"Moises Henriques","Type":"2","overseas":"1" },' +
                      '{"Name":"Jalaj Saxena","Type":"2","overseas":"0" },' +
                      '{"Name":"Utkarsh Singh","Type":3,"overseas":"0" },' +
                      '{"Name":"Fabian Allen ","Type":"2","overseas":"1" }],'+
      '"MI":[' +
                      '{"Name":"Chris Gayle","Type":"1","overseas":"1" },'+
                      '{"Name":"Nicholas Pooran","Type":"0","overseas":"1" },' +
                      '{"Name":"KL Rahul","Type":"0","overseas":"0" },' +
                      '{"Name":"Mayank Agarwal","Type":"1","overseas":"0" },' +
                      '{"Name":"Mandeep Singh","Type":"1","overseas":"0" },' +
                      '{"Name":"Dawid Malan","Type":"1","overseas":"1" },' +
                      '{"Name":"Arshdeep Singh","Type":"3","overseas":"0" },' +
                      '{"Name":"Darshan Nalkande","Type":"3","overseas":"0" },' +
                      '{"Name":"Simran Singh","Type":"0","overseas":"0" },' +
                      '{"Name":"Saurabh Kumar","Type":"2","overseas":"0" },' +
                      '{"Name":"Harpreet Brar","Type":"2","overseas":"0" },' +
                      '{"Name":"Ravi Bishnoi","Type":"3","overseas":"0" },' +
                      '{"Name":"Chris Jordan ","Type":"2","overseas":"1" },' +
                      '{"Name":"Mohammed Shami","Type":"3","overseas":"0" },' +
                      '{"Name":"Deepak Hooda","Type":"2","overseas":"0" },' +
                      '{"Name":"Murugan Ashwin","Type":"3","overseas":"0" },' +
                      '{"Name":"Sarfaraz Khan ","Type":"1","overseas":"0" },' +
                      '{"Name":"Ishan Porel","Type":"3","overseas":"0" },' +
                      '{"Name":"Jhye Richardson ","Type":"2","overseas":"1" },' +
                      '{"Name":"Shahrukh Khan","Type":"2","overseas":"0" },' +
                      '{"Name":"Riley Meredith","Type":"3","overseas":"1" },' +
                      '{"Name":"Moises Henriques","Type":"2","overseas":"1" },' +
                      '{"Name":"Jalaj Saxena","Type":"2","overseas":"0" },' +
                      '{"Name":"Utkarsh Singh","Type":3,"overseas":"0" },' +
                      '{"Name":"Fabian Allen ","Type":"2","overseas":"1" }]}';


        obj = JSON.parse(team);
            

      function select_teams()
      {
        a = document.getElementById("p_1_team").value;        
        b = document.getElementById("p_2_team").value;
        if(a==b)
        {
          alert("Please Select Different Teams");
        }
        else
        {
          document.getElementById("team_select").style.display = "none";
          document.getElementById("p_1team").innerHTML = teams[a-1];
          document.getElementById("p_2team").innerHTML = teams[b-1];
          document.getElementById("toss").style.display = "block";
        }
      }
      function toss()
      {
       var toss = Math.floor(Math.random() * 2) + 1;
       document.getElementById("toss_win").style.display = "block";
       if(toss==1)
       {
          document.getElementById("toss_win").innerHTML = teams[a-1]+" ( Player 1 WON the toss )";
          toss_winner = teams[a-1];
       }
       else
       {
         document.getElementById("toss_win").innerHTML = teams[b-1]+" ( Player 2 WON the toss )";
         toss_winner = teams[b-1];
       }
       document.getElementById("toss_btn").style.display = "none";
       document.getElementById("toss_bat").style.display = "inline";
       document.getElementById("toss_bowl").style.display = "inline";

      
      }
      var bat_first = teams[b-1];
      function play(value)
      {
        document.getElementById("play_squad").style.display = "inline";
        document.getElementById("toss").style.display = "none";
        if(value == 1)
        {
          document.getElementById("toss_det").innerHTML = toss_winner + " won the toss and decided to Bat First ";
          if(toss_winner==teams[a-1])
          {
             bat_first = toss_winner;
          }
        }
        else
        {
          document.getElementById("toss_det").innerHTML = toss_winner + " won the toss and decided to Bowl First ";
          if(toss_winner==teams[b-1])
          {
             bat_first = teams[a-1];
          }
        }
        document.getElementById("select_t_p").innerHTML = "Player 1 ( "+ teams[a-1] + " ) Select Playing 11";
        curr_team(teams[a-1]);

      }
      function curr_team(value)
      {

          for(var i=0;i<obj[value].length;i++)
       {
        var y = i+1;
        var x = "p"+y;
        var z = obj[value][i].Type;
        var w = obj[value][i].overseas;
        if(w==0){
                document.getElementById(x).innerHTML =  obj[value][i].Name +" <br> "+ "<span style='color:red;'>"+type_player[z]+ "</span>";}
        else
        {
          document.getElementById(x).innerHTML =  obj[value][i].Name + "<span style='color:green;font-size:16px;'>*</span> <br> "+ "<span style='color:red;'>"+type_player[z]+ "</span>" ;
        }
       }
       document.getElementById("snb").disabled = true;

      }
      function select_player(btn)
      {
        var p_s = "p"+btn;
        var kite =0;


        
        document.getElementById(p_s).style.display  = "none";

        for(var i=1;i<12;i++)
        { 
          var sel_p = "cp" + i;
          var p_id = "pid"+i;
          var c_list = document.getElementById(sel_p).innerHTML ;
          
          if( c_list =="")
          {
            document.getElementById(sel_p).innerHTML = document.getElementById(p_s).innerHTML;
            document.getElementById(p_id).innerHTML = btn;
            i = 15;
          }
          
        }

        for(i=1;i<12;i++)
        {
          var to = "cp"+i;
          var z = document.getElementById(to).innerHTML;
          if(z==="")
          {
            kite++;
          }
          document.getElementById("para").innerHTML ="Players Left - "+ kite;
        }

        if(kite!=0)
        {
          for(i=1;i<26;i++)
          {
            var too = "p"+i;
            document.getElementById(too).style.pointerEvents = "auto";
            document.getElementById(too).style.opacity = "1";
          }
        }
        else
        {
          for(i=1;i<26;i++)
          {
            var too = "p"+i;
            document.getElementById(too).style.pointerEvents = "none";
            document.getElementById(too).style.opacity = "0.5";
          }
        }

        var count_over =  $('#playing_list').find(":contains('*')").length;

        var count_batsman =  $('#playing_list').find(":contains('Batsman')").length + $('#playing_list').find(":contains('All Rounder')").length + $('#playing_list').find(":contains('WK')").length ;

        var count_bowler =  $('#playing_list').find(":contains('Bowler')").length + $('#playing_list').find(":contains('All Rounder')").length ;

        var count_WK = $('#playing_list').find(":contains('WK')").length;
        document.getElementById("c_overseas").innerHTML = count_over/2;
        document.getElementById("c_batsman").innerHTML = count_batsman/2;
        document.getElementById("c_bowler").innerHTML = count_bowler/2;
        document.getElementById("c_wk").innerHTML = count_WK/2;

        check_team_con();
      }
      

      function dselect(value)
      {

        var ds = "pid"+value;
        var dp = "cp"+value;
        var tooo = document.getElementById(dp).innerHTML;
        if(tooo!=0){
        var dv = document.getElementById(ds).innerHTML;
        var rm = "p"+dv;
        var kite =0;

        document.getElementById(rm).style.display  = "inline";

        document.getElementById(dp).innerHTML = "";
        document.getElementById(ds).innerHTML = "";

        for(i=1;i<12;i++)
        {
          var to = "cp"+i;
          var z = document.getElementById(to).innerHTML;
          if(z==="")
          {
            kite++;
          }
          document.getElementById("para").innerHTML = "Players Left - "+ kite;
        }

        if(kite!=0)
        {
          for(i=1;i<26;i++)
          {
            var too = "p"+i;
            document.getElementById(too).style.pointerEvents = "auto";
            document.getElementById(too).style.opacity = "1";

          }
        }
        else
        {
          for(i=1;i<26;i++)
          {
            var too = "p"+i;
            document.getElementById(too).style.pointerEvents = "none";
            document.getElementById(too).style.opacity = "0.5";
          }
        }


        var count_over =  $('#playing_list').find(":contains('*')").length;

        var count_batsman =  $('#playing_list').find(":contains('Batsman')").length + $('#playing_list').find(":contains('All Rounder')").length +$('#playing_list').find(":contains('WK')").length ;

        var count_bowler =  $('#playing_list').find(":contains('Bowler')").length + $('#playing_list').find(":contains('All Rounder')").length ;

        var count_WK = $('#playing_list').find(":contains('WK')").length;
        document.getElementById("c_overseas").innerHTML = count_over/2;
        document.getElementById("c_batsman").innerHTML = count_batsman/2;
        document.getElementById("c_bowler").innerHTML = count_bowler/2;
        document.getElementById("c_wk").innerHTML = count_WK/2;
      }
      check_team_con();
    }
    function check_team_con()
      {
        var k =0;
        for(i=1;i<12;i++)
        {
          var to = "cp"+i;
          var z = document.getElementById(to).innerHTML;
          if(z!="")
          {
            k++;
          }
        }
        var l = document.getElementById("c_overseas").innerHTML;
        var m = document.getElementById("c_bowler").innerHTML;
        var n = document.getElementById("c_wk").innerHTML;

        if(k==11&&l<5&&m>4&&n>0)
        {
          document.getElementById("snb").disabled = false;
        }
        else
        {
          document.getElementById("snb").disabled = true;
        }
        if(l>4)
        {
          document.getElementById("c_overseas").style.backgroundColor = "red";
        }
        else
        {
          document.getElementById("c_overseas").style.backgroundColor = "#46DA01";
        }
        if(m<5)
        {
          document.getElementById("c_bowler").style.backgroundColor = "red";
        }
        else
        {
          document.getElementById("c_bowler").style.backgroundColor = "#46DA01";
        }
        if(n<1)
        {
          document.getElementById("c_wk").style.backgroundColor = "red";
        }
        else
        {
          document.getElementById("c_wk").style.backgroundColor = "#46DA01";
        }

      }
      function selected_team()
      {
        sn++;
        if(sn==1)
        {
                for(var i = 1;i<12;i++)
                {
                  var z = "pid"+i;
                  team1_id[i-1] = document.getElementById(z).innerHTML;
                }
        
                for(var i = 0;i<11;i++)
                {
                  var u = team1_id[i]-1;
                  var v = teams[a-1];
                  team1[i] = obj[v][u].Name;
                  var y = obj[v][u].Type;
                  if(y==2|| y ==3)
                  {
                    team1_bowl.push(team1[i]);
                  }
                }
                document.getElementById("snb").disabled = false;

                for(i=1;i<12;i++)
                {
                  var t = "pid"+i;
                  var u = "cp"+i;
                  document.getElementById(t).innerHTML = "";
                  document.getElementById(u).innerHTML = "";
                }
                for(i=1;i<26;i++)
                {
                  var v = "p"+i;
                  document.getElementById(v).innerHTML = "";

            document.getElementById(v).style.pointerEvents = "auto";
            document.getElementById(v).style.opacity = "1";
            document.getElementById(v).style.display = "inline";
                }
                document.getElementById("para").innerHTML = "Players Left - 11";


        document.getElementById("c_overseas").innerHTML = "";
        document.getElementById("c_batsman").innerHTML ="";
        document.getElementById("c_bowler").innerHTML = "";
        document.getElementById("c_wk").innerHTML = "";

        document.getElementById("select_t_p").innerHTML = "Player 2 ( "+ teams[b-1] + " ) Select Playing 11";
        curr_team(teams[b-1]);


        
        }
        else if(sn==2)
        {

                for(var i = 1;i<12;i++)
                {
                  var z = "pid"+i;
                  team2_id[i-1] = document.getElementById(z).innerHTML;
                }
        
                for(var i = 0;i<11;i++)
                {
                  var u = team2_id[i]-1;
                  var v = teams[b-1];
                  team2[i] = obj[v][u].Name;
                  var y = obj[v][u].Type;
                  if(y==2|| y ==3)
                  {
                    team2_bowl.push(team2[i]);
                  }
                }

                var temp = [];
        if(teams[a-1]!=bat_first)
        {
          temp = [...team1];
          team1 = [...team2];
          team2 = [...temp];
          
          temp = [...team1_bowl];
          team1_bowl = [...team2_bowl];
          team2_bowl = [...team1_bowl];
        }
        document.getElementById("play_squad").style.display = "none";
        document.getElementById("main_game").style.display = "block";
        }
      }