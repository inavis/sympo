function checkAns() {

    var coins = parseInt($("#coins").val())
    alert("coins before is " + coins);
    var ans = document.getElementById('text').value
    var row = getQues.row;
    var col = getQues.col;
    var correct = getQues.ans;
    // if(row==='0') 
    if (ans == correct) {
        alert("right ans");
        if (row === '0') {
            coins = coins + 10;
        }
        else if (row === '1') {
            coins = coins + 30;
        }
        else {
            coins = coins + 50;
        }
    }
    else {
        alert("wrong ans")

    }
    document.getElementById("coins").value = coins;

    $('#dialog').hide()
    $('#transparent-bg').hide()
    check()
}
function check() {
    if (document.getElementById("coins").value >= 50) {
        alert(">=50")
        document.getElementById('easy').disabled = false
        document.getElementById('medium').disabled = false
        document.getElementById('hard').disabled = false
    }
    if (document.getElementById("coins").value >= 20 && document.getElementById("coins").value < 50) {
        alert("20 - 50")
        document.getElementById('easy').disabled = true
        document.getElementById('medium').disabled = false
        document.getElementById('hard').disabled = false
    }

    if (document.getElementById("coins").value >= 10 && document.getElementById("coins").value < 20) {
        alert("10 - 20");
        document.getElementById('easy').disabled = true
        document.getElementById('medium').disabled = true
        document.getElementById('hard').disabled = false
    }
    if (document.getElementById("coins").value < 10) {
        alert("You have 0 coins, Game over")
    }
    $('.slider').css({ visibility: 'hidden' })
    $('.slider1').css({ visibility: 'hidden' })
    $('.slider2').css({ visibility: 'hidden' })

}


document.getElementById('timer').innerHTML =
    30 + ":" + 01;
startTimer();

function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
        m = m - 1
    }
    if (m == 0 && s == 00) {

        $('#end-dialog').show()
        $('#transparent-bg').show()
    }
    //if(m<0){alert('timer completed')}

    document.getElementById('timer').innerHTML =
        m + ":" + s;
    if (!(m == 0 && s == 00))
        setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}

