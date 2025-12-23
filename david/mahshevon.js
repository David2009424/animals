//function GenerateNumbers() {
//    // ערכים רנדומליים בין 1 ל-10
//    document.getElementById("num1").value =
//        Math.floor(Math.random() * (10 - 1 + 1)) + 1;

//    document.getElementById("num2").value =
//        Math.floor(Math.random() * (10 - 1 + 1)) + 1;

//    // מחשב תוצאה
//    let n1 = parseInt(document.getElementById("num1").value);
//    let n2 = parseInt(document.getElementById("num2").value);

//    document.getElementById("result").value = n1 + n2;

//    document.getElementById("message").innerHTML = "";
//}

//function CheckResults() {
//    CheckPlus();
//}

//function CheckPlus() {
//    let userNum = parseInt(document.getElementById("userNumber").value);
//    let correct = parseInt(document.getElementById("result").value);

//    if (userNum === correct) {
//        document.getElementById("message").innerHTML = "יפה מאוד!";
//    } else {
//        document.getElementById("message").innerHTML = "נסה שנית.";
//    }
//}