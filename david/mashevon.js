function checkanswers() {
        checkplus();
    checkminus();
    cheackmultiply();
    checkdivide();
}
function checkplus() {
    var num = parseInt(document.getElementById("num").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var answer = parseInt(document.getElementById("answer").value);
    //alert(num);
    //alert(num2);
    if (num + num2 == answer) {
        document.getElementById("msgplus").innerHTML = "good job";
    }
    else {
        document.getElementById("msgplus").innerHTML = "try again";
    }
}
    
   

    function checkminus() {
        var minus1 = parseInt(document.getElementById("minus1").value);
        var minus2 = parseInt(document.getElementById("minus2").value);
        var answerminus = parseInt(document.getElementById("answerminus").value);
        if (minus1 - minus2 == answerminus) {
            document.getElementById("msgminus").innerHTML = "good job";
        }
        else {
            document.getElementById("msgminus").innerHTML = "try again";
        }
    }

function cheackmultiply()
{
        var multi1 = parseInt(document.getElementById("multi1").value);
        var multi2 = parseInt(document.getElementById("multi2").value);
        var answermulti = parseInt(document.getElementById("answermulti").value);
        if (multi1 * multi2 == answermulti) {
            document.getElementById("msgmulti").innerHTML = "good job";
        }
        else {
            document.getElementById("msgmulti").innerHTML = "try again";
        }
}

    function checkdivide() {
                var divide1 = parseInt(document.getElementById("divide1").value);
        var divide2 = parseInt(document.getElementById("divide2").value);
        var answerdivide = parseInt(document.getElementById("answerdivide").value);
        if (divide1 / divide2 == answerdivide) {
            document.getElementById("msgdivide").innerHTML = "good job";
        }
        else {
            document.getElementById("msgdivide").innerHTML = "try again";
        }
}
    function randing() {
        var rand = Math.floor(Math.random() * 10) + 1;
        var rand2 = Math.floor(Math.random() * 10) + 1;
        document.getElementById("num").value = rand;
        document.getElementById("num2").value = rand2;
        document.getElementById("minus1").value = Math.floor(Math.random() * 10) + 1;
        document.getElementById("minus2").value = Math.floor(Math.random() * 10) + 1;
        document.getElementById("multi1").value = Math.floor(Math.random() * 10) + 1;
        document.getElementById("multi2").value = Math.floor(Math.random() * 10) + 1;
        document.getElementById("divide1").value = Math.floor(Math.random() * 10) + 1;
        document.getElementById("divide2").value = Math.floor(Math.random() * 10) + 1;
    }

