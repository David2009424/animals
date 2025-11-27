function cheackAnswer() {
    var num = parseInt(document.getElementById("num").value);
    var num2 = parseInt(document.getElementById("num").value);
    var solu = parseInt(document.getElementById("solu").value);

    if (num + num2 === solu) {
        document.getElementById("result").innerHTML = "Correct";
    }
    else {
        document.getElementById("result").innerHTML = "Incorrect";
    }

    alert(num2 + num);
}