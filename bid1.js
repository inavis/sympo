

       
 
$('#easy').click(function(){
    $('#my1').show();
});
$('#medium').click(function(){
    alert("click")
    $('#my2').show();
});
$('#hard').click(function(){
    $('#my3').show();
});
function checkAns()
{
    //alert("pannii")
    var coins = parseInt($("#coins").val())
    alert(coins);
        alert(getQues.qno)
    var ans=document.getElementById('text').value
    //alert(ans)
    var id = getQues.qno;
    if(ans==easy[id][1])
    {
        if(id>=0 && id<=5){
            coins = coins+10;
         }
         else if(id>=6 && id<=8){
            coins = coins+20;
         }
         else{ 
            coins = coins+50;
         }
    }
    else{
        alert("done for life")
    }
    document.getElementById("coins").value = coins;
    $('#dialog').hide()
    $('#transparent-bg').hide()
}

 function getQues(id){
     getQues.qno=id;
     var coins = $("#coins").val()
     alert(id)
     if(id>=0 && id<=5){
        coins = coins-50;
     }
     else if(id>=6 && id<=8){
        coins = coins-30;
     }
     else{ 
        coins = coins-10;
     }
     document.getElementById("coins").value = coins;
     $('#transparent-bg').show();
     var img= document.createElement('img');
     img.src= easy[id][0];
     document.getElementById("q1").appendChild(img);
        $('#dialog').show();
 }

 document.getElementById('timer').innerHTML =
  01 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1
     if(m>0) m="time expired";
}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

