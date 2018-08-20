
var ind1 = [0, 0, 0], ind2 = [1, 1, 1], ind3 = [2, 2, 2];
var index = [0, 0, 0];
var images = [[]];
var time = 3000;
images = [
    ["images/0.jpg",
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
        "images/7.jpg",
        "images/8.jpg",
        "images/9.jpg",
    ],
    ["images/0.jpg",
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
        "images/7.jpg",
        "images/8.jpg",
        "images/9.jpg",
    ],
    ["images/0.jpg",
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
        "images/7.jpg",
        "images/8.jpg",
        "images/9.jpg",
    ]
]
console.log(images[0])
//  images[0].splice(1, 1);
//  console.log(images[0])
function next(id) {
    //alert("id inside next " + id)
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
    if (typeof id === "number") {
        //  alert("removed?")
        prev(id);
    }
    console.log("ind1[0] " + ind1[0] + " ind2[0] " + ind2[0] + " ind3[0] " + ind3[0])
} //setTimeout("changeImg()", time);

function prev(id) {
    //alert(i);
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



    //console.log("ind1 " + ind1[id] + " ind2 " + ind2[id] + " ind3 " + ind3[id] + " i is " + i)
    //i = i - 4;
    //setTimeout("changeImg()", time);
}
function boundary(id, i) {
    if (i < 0)
        i = images[id].length - 1;
    if (i > images[id].length - 1)
        i = 0;
    return i;
}
function remove_function(row, col) {
    //  alert("alert inside remove" + row)
    // console.log("this working?" + images[0]);
    console.log("before :" + images[row]);
    var remove_col;
    if (col === '0') remove_col = ind1[row];
    else if (col === '1') remove_col = ind2[row];
    else remove_col = ind3[row];
    console.log(row + remove_col)
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
window.onload = next('0');
window.onload = next('1');
window.onload = next('2');

$('.prevButton').click(function () {
    var id = $(this).attr('id');
    prev(id.charAt(0));

});

$('.nextButton').click(function () {
    //  alert("next clicked")
    var id = $(this).attr('id');
    next(id.charAt(0));
})
//   var classname = document.getElementsByClassName("s");

$('.s').click(function () {
    var id = $(this).attr('id');
    console.log(id)
    remove_function(id.charAt(0), id.charAt(1));

});
