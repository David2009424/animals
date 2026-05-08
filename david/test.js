//var grades = [90, 80, 70, 60, 50];

//function avg(grades) {
//    var sum = 0;
//    for (var i = 0; i < grades.length; i++) {
//        sum += grades[i];
//    }
//    alert(sum / grades.length);
//}

//function createbutton() {
//    var but = document.createElement("input");
//    but.setAttribute("type", "button");
//    but.setAttribute("value", "click me");
//    but.setAttribute("onclick", "avg(grades)");
//    var div = document.getElementById("123");
//    div.appendChild(but);
//}
//var arr = [3,2,2,3,1]
//function drawtable(arr) {
//    var table1 = document.createElement("table");

//    for (var i = 0; i < arr.length; i++) {
//        var tr = document.createElement("tr");
//        var td = document.createElement("td");
//        tr.appendChild(td);
//        var currentimg = document.createElement("img");
//        currentimg.setAttribute("src", "photos/" + arr[i] + ".jpeg");
//        td.appendChild(currentimg);
//        table1.appendChild(tr);
//    }
//    var div = document.getElementById("pic");
//    div.appendChild(table1);
//}
//drawtable(arr);

var arr = ["jappan", "1.jpeg", "100", "china", "2.jpeg", "100"];
function targil7(arr) {
    var table = document.createElement("table");
    var div = document.getElementById("tbl3");
    div.appendChild(table);
    var tr = document.createElement("tr");
    var tr2 = document.createElement("tr");
    table.appendChild(tr);
    table.appendChild(tr2);
    for (var i = 0; i <= arr.length; i += 3) {
        var td1 = document.createElement("td");
        var img = document.createElement("img");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        td1.innerHTML = arr[i];
        img.setAttribute("src", "photos/", + arr[i + 1] + ".jpeg");
        img.setAttribute("width", arr[i + 2]);
        td2.appendChild(img);
        tr2.appendChild(td2);
        tr.appendChild(td1);
        tr.appendChild(td3);
    }
}
targil7(arr);

