

$('#easy').click(function () {
    alert("easy clicked")
    document.getElementById('slideshow').innerHTML =
        $('#slider1').css({ visibility: 'visible' })

    $('#slider1').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        //centerMode: true,
        centerPadding: '60px',
    });
    $('.slide1').on('click', function () {
        alert($('.slick-slide').index(this) - 3)
        if ($('.slick-slide').index(this) - 3 < 0) $('#slider1').slick('slickRemove', $('.slick-slide').index(this))
        $('#slider1').slick('slickRemove', $('.slick-slide').index(this) - 3)
    });
});





$('#medium').click(function () {
    alert("medium clicked")
    $('#slider2').css({ visibility: 'visible' })

    $('#slider2').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        //centerMode: true,
        centerPadding: '60px',
    });

    $('.slide2').on('click', function () {
        alert($('.slick-slide').index(this) - 3)
        if ($('.slick-slide').index(this) - 3 < 0) $('#slider2').slick('slickRemove', $('.slick-slide').index(this))
        $('#slider2').slick('slickRemove', $('.slick-slide').index(this) - 3)
    });
});

$('#hard').click(function () {
    alert("hard clicked")
    $('#slider3').css({ visibility: 'visible' })

    $('#slider3').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        //centerMode: true,
        centerPadding: '60px',
    });

    $('.slide3').on('click', function () {
        alert($('.slick-slide').index(this) - 3)
        if ($('.slick-slide').index(this) - 3 < 0) $('#slider3').slick('slickRemove', $('.slick-slide').index(this))
        $('#slider3').slick('slickRemove', $('.slick-slide').index(this) - 3)
    });
});

function checkAns() {
    //alert("pannii")
    var coins = parseInt($("#coins").val())
    // alert(coins);
    // alert(getQues.qno)
    var ans = document.getElementById('text').value
    //alert(ans)
    var id = getQues.qno;
    if (ans == easy[id][1]) {
        if (id >= 0 && id <= 9) {
            coins = coins + 10;
        }
        else if (id >= 10 && id <= 19) {
            coins = coins + 20;
        }
        else {
            coins = coins + 50;
        }
    }
    else {
        alert("done for life")

    }
    // alert(coins)
    document.getElementById("coins").value = coins;

    $('#dialog').hide()
    $('#transparent-bg').hide()
    // document.getElementById("coins").value = coins;
    check()
}
function check() {
    if (document.getElementById("coins").value >= 50) {
        alert("less")
        document.getElementById('easy').disabled = false
        document.getElementById('medium').disabled = false
        document.getElementById('hard').disabled = false
    }
    if (document.getElementById("coins").value >= 30 && document.getElementById("coins").value < 50) {
        alert("less")
        document.getElementById('easy').disabled = true
        document.getElementById('medium').disabled = false
        document.getElementById('hard').disabled = false
    }

    if (document.getElementById("coins").value >= 10 && document.getElementById("coins").value < 30) {

        document.getElementById('easy').disabled = true
        document.getElementById('medium').disabled = true
        document.getElementById('hard').disabled = false
    }
    if (document.getElementById("coins").value < 10) {
        alert("GAme over")
    }
    $('.slider').css({ visibility: 'hidden' })

}
function getQues(id) {
    //  $("#tableManager").modal('show');

    getQues.qno = id;
    var coins = $("#coins").val()
    alert("qn no:" + id)
    if (id >= 0 && id <= 9) {
        coins = coins - 50;
        if (typeof getQues.eCount == 'undefined')
            getQues.eCount = 1;
        else
            getQues.eCount += 1;
    }
    else if (id >= 10 && id <= 19) {
        coins = coins - 30;
        if (typeof getQues.mCount == 'undefined')
            getQues.mCount = 1;
        else
            getQues.mCount += 1;
    }
    else {
        coins = coins - 10;
        if (typeof getQues.hCount == 'undefined')
            getQues.hCount = 1;
        else
            getQues.hCount += 1;

    }

    document.getElementById("coins").value = coins;
    $('#transparent-bg').show();
    var img = document.createElement('img');
    img.src = easy[id][0];
    document.getElementById("q1").innerHTML = ""
    document.getElementById("q1").appendChild(img);
    $('#dialog').show();
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

