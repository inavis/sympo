var ind1 = [0, 0, 0], ind2 = [1, 1, 1], ind3 = [2, 2, 2];
var index = [0, 0, 0];
var images = [[]];
var Ques0 = [[]], Ques1 = [[]], Ques2 = [[]];
var time = 3000;

console.log(images[0])
function next(id) {
    var flag = 1;
    index[id] = boundary(id, index[id]);
    ind1[id] = index[id];
    var x = id + "0id";
    document.getElementById(x).src = images[id][index[id]++]

    index[id] = boundary(id, index[id]);
    ind2[id] = index[id];
    var x = id + "1id";
    document.getElementById(x).src = images[id][index[id]++]
    if (index[id] == images[id].length - 1) flag = 0
    index[id] = boundary(id, index[id]);
    ind3[id] = index[id];
    var x = id + "2id";
    document.getElementById(x).src = images[id][index[id]++]

    index[id] = boundary(id, index[id]);
    if (typeof id === "number" && flag === 1) {
        prev(id);
    }
    console.log("ind1[0] " + ind1[0] + " ind2[0] " + ind2[0] + " ind3[0] " + ind3[0])
}


function prev(id) {
    for (var k = 0; k < 6; k++) {
        if (index[id] === -1) index[id] = images[id].length - 1;
        index[id] = index[id] - 1;
    }

    index[id] = boundary(id, index[id]);
    ind1[id] = index[id];
    var x = id + "0id";
    document.getElementById(x).src = images[id][index[id]++]

    index[id] = boundary(id, index[id]);
    ind2[id] = index[id];
    var x = id + "1id";
    document.getElementById(x).src = images[id][index[id]++]


    index[id] = boundary(id, index[id]);
    ind3[id] = index[id];
    var x = id + "2id";
    document.getElementById(x).src = images[id][index[id]++]

    index[id] = boundary(id, index[id]);
}
function boundary(id, i) {
    if (i < 0)
        i = images[id].length - 1;
    if (i > images[id].length - 1)
        i = 0;
    return i;
}
function remove_function(row, col) {

    console.log("before :" + images[row]);
    var remove_col;
    if (col === '0') {
        remove_col = ind1[row];
        getQues(row, remove_col);
        console.log("q before remove " + Ques0[row]);
        Ques0.splice(row, 1);
        console.log("q after remove " + Ques0[row]);

    }
    else if (col === '1') {
        remove_col = ind2[row];
        getQues(row, remove_col);
        console.log("q before remove " + Ques1[row]);
        Ques1.splice(row, 1);
        console.log("q after remove " + Ques1[row]);

    }
    else {

        remove_col = ind3[row];
        getQues(row, remove_col);
        console.log("q before remove " + Ques2[row]);
        Ques2.splice(row, 1);
        console.log("q after remove " + Ques2[row]);

    }
    console.log("image to be removed " + row + remove_col)
    images[row].splice(remove_col, 1);
    console.log("after :" + images[row]);
    if (images[row].length == 2)
        document.getElementById(row + "2id").remove();
    if (images[row].length == 1)
        document.getElementById(row + "1id").remove();
    if (images[row].length == 0) {
        document.getElementById(row + "0id").remove();
        document.getElementById(row + "prev").remove();
        document.getElementById(row + "next").remove();
    }

    next(parseInt(row));

    //changeImg();
}


$('.prevButton').click(function () {
    var id = $(this).attr('id');
    prev(id.charAt(0));

});

$('.nextButton').click(function () {
    var id = $(this).attr('id');
    next(id.charAt(0));
})

$('.s').click(function () {
    var id = $(this).attr('id');
    console.log(id)
    remove_function(id.charAt(0), id.charAt(1));

});
function getQues(row, col) {
    getQues.row = row;
    getQues.col = col;
    getQues.ans = "";
    alert("new getQues?");
    var coins = $("#coins").val()
    var img = document.createElement('img');
    if (row === '0') {
        alert("row 0 col is " + col);
        coins = coins - 50;
        img.src = Ques0[col][0];
        getQues.ans = Ques0[col][1];
    }
    else if (row === '1') {
        alert("row 1 col is " + col);
        coins = coins - 20;
        img.src = Ques1[col][0];
        getQues.ans = Ques1[col][1];
    }
    else {
        //alert(row + col)
        alert("row 2 col is " + col);
        coins = coins - 10;
        console.log(Ques2[col][0])
        img.src = Ques2[col][0];
        getQues.ans = Ques2[col][1];
    }
    document.getElementById("coins").value = coins;
    $('#transparent-bg').show();
    document.getElementById("q1").innerHTML = ""
    document.getElementById("q1").appendChild(img);
    alert("ans is " + getQues.ans)
    $('#dialog').show();
}
var id = localStorage.getItem('text1');
var hard = 0;
var easy = 0;
var medium = 0;

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
            easy = easy + 1;
        }
        else if (row === '1') {
            coins = coins + 30;
            medium = medium + 1;
        }
        else {
            coins = coins + 50;
            hard = hard + 1;
        }
    }
    else {
        alert("wrong ans")

    }
    document.getElementById("coins").value = coins;
    checkAns.pts = coins;
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
        output()
    }
    $('.slider').css({ visibility: 'hidden' })
    $('.slider1').css({ visibility: 'hidden' })
    $('.slider2').css({ visibility: 'hidden' })

}
function output() {
    $.ajax({
        url: "db.php",
        type: "post", //request type,
        data: { id: id, pts: checkAns.pts, hard: hard, easy: easy, medium: medium }
    });
}

document.getElementById('timer').innerHTML =
    10 + ":" + 01;
//startTimer();

function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
        m = m - 1
    }
    if (m == 0 && s == 00) {

        output()
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