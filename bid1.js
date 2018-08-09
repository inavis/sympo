
var region = document.getElementById("ques");
var region1 = document.getElementById("display");

var btne = document.getElementById("easy");
var btnm = document.getElementById("medium");
var btnh = document.getElementById("hard");





function getEasy() {
    alert("Button Clicked");
    var c = document.getElementById("coins").innerHTML;
    c = c - 50;
    document.getElementById("coins").innerHTML = c;

    //display all easy w=questions
    /*  for( var i=0;i<10;i++){
          var element = document.createElement('input');
          element.setAttribute("type","button");
          element.setAttribute("value",easy_value[i]);
          element.setAttribute("id",i);
          element.setAttribute("onclick","easyq('"+i+"')");
          
          region.appendChild(element);
          region.innerHTML = region.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"  ;
      }
     */
    document.getElementById("display").style.display = "block";

}


/*function getEasy(){
    var c = document.getElementById("coins").innerHTML;
    c=c-50;
    document.getElementById("coins").innerHTML=c;

    //display all easy w=questions
    for( var i=0;i<3;i++){
        var element = document.createElement('input');
        element.setAttribute("type","button");
        element.setAttribute("value",i);
        element.setAttribute("id",i);
        element.setAttribute("onclick","easyq('"+i+"')");
        
        region.appendChild(element);
        region.innerHTML = region.innerHTML + "   "  ;

   }
}*/

function easyq(i) {
    var q = easy[i][0];
    document.getElementById("display").innerHTML = q + "<br/>" + "<br/>";


    //textArea
    var element = document.createElement('input');
    element.setAttribute("type", "textArea");
    element.setAttribute("placeholder", "bug or output");
    element.setAttribute("id", "ans");

    region1.appendChild(element);
    region1.innerHTML = region1.innerHTML + "<br/>" + "<br/>";

    //Submit
    var element = document.createElement('input');
    element.setAttribute("type", "button");
    element.setAttribute("value", "Submit");
    element.setAttribute("id", "submit");
    element.setAttribute("onclick", "easyans('" + i + "')");

    region1.appendChild(element);

    var b = getElementById(i);
    b.disable = true;

}

btnm.addEventListener("click", getMedium);
function getMedium() {
    alert("Medium");
}

btnh.addEventListener("click", getHard);
function getHard() {
    alert("Hard");
}


function easyans(i) {
    //alert("submit");
    var ans = document.getElementById("ans").value;
    var q = easy[i][1];
    console.log(ans + " " + q);
    if (ans == q) {
        var c = document.getElementById("coins").innerHTML;
        alert(c);
        c = c + 10;
        document.getElementById("coins").innerHTML = c;
    }
    c = document.getElementById("coins").innerHTML;
    //alert(c);
    if (c == 10) {
        btne.removeEventListener("click", getEasy)
        btnm.removeEventListener("click", getMedium)
        //btnm.disabled = true;
        //btne.disabled = true;

    }
    else if (c >= 10 && c <= 30) {
        btnh.removeEventListener("click", getHard)
    }
    else if (c >= 20) {
        btne.removeEventListener("click", getEasy)
    }
}

