"1Targil //"

    var div = document.getElementById("aElement");
var aEl = document.createElement("a");
aEl.setAttribute("href", "http://www.google.com");
aEl.innerHTML = "GOOGLE";
div.appendChild(aEl);
"2Targil //"
var div2 = document.getElementById("aElement2");
var img = document.createElement("img");
img.setAttribute("src", "photos/1.jpg.jpeg")
img.setAttribute("width", "200px")
img.setAttribute("height", "200px")
div2.appendChild(img);
"//targil3"
var div3 =document.getElementById("aElement3")
var table = document.createElement("table")
var tr = document.createElement("tr")
var td1 = document.createElement("td")
var td2 = document.createElement("td")
div3.appendChild(table)
table.appendChild(tr)
tr.appendChild(td1)
tr.appendChild(td2)
var ki=document.createElement("a")
ki.setAttribute("href", "http://www.google.com")
ki.innerHTML = "GOOGLE"
td1.appendChild(ki)
var img2 = document.createElement("img");
img2.setAttribute("src", "photos/2.jpg.jpeg")
td2.appendChild(img2)
//targil4
var div4 = document.getElementById("aElement4")
var table2 = document.createElement("table")
div4.appendChild(table2)
    for (var i = 1; i <= 5; i++)
    {
        var tr2 = document.createElement("tr")
        var td3 = document.createElement("td")
        table2.appendChild(tr2)
        tr2.appendChild(td3)
        var img3 = document.createElement("img")
        td3.appendChild(img3)
        img3.setAttribute("src", "photos/"+i+".jpg.jpeg")
    }
var div5 = document.getElementById("aElement5")
var table5 = document.createElement("table")
div5.appendChild(table5)
for (var j = 1; j <= 5; j++)
    {
    var tr5 = document.createElement("tr")
    table5.appendChild(tr5)
    var td5 = document.createElement("td")
    var img5 = document.createElement("img")
    img5.setAttribute("src", "photos/" + j + ".jpg.jpeg")
    td5.appendChild(img5)
    var td6 = document.createElement("td")
    var a5 = document.createElement("a")
    a5.setAttribute("href", +z+".html")
    a5.innerHTML = "page for" + j
    td6.appendChild(a5)
    tr5.appendChild(td5)
    tr5.appendChild(td6)

}
var div6 = document.getElementById("aElement6")
var table6 = document.createElement("table")
div6.appendChild(table6)
for (var z = 1; z <= 5; z++) {
    var tr6 = document.createElement("tr")
    var td7 = document.createElement("td")
    var img7 = document.createElement("img")
    img7.setAttribute("src", "photos/" + z + ".jpg.jpeg")
    td7.appendChild(img7)
    var td8 = document.createElement("td")
    var a6 = document.createElement("a")
    a6.setAttribute("href", +z+".html")
    a6.innerHTML = "page for"+z
    td8.appendChild(a6)
    tr6.appendChild(td7)
    tr6.appendChild(td8)
    table6.appendChild(tr6) 
    if (z % 2 == 0)
    {
        tr6.setAttribute("bgcolor", "purple")
    }
    else
        tr6.setAttribute("bgcolor", "pink")
}
var div7 = document.getElementById("aElement7")
var table7 = document.createElement("table")
div7.appendChild(table7)
var num = parseInt(prompt("enter a number"))
for (var o = 1; o <= num; o++) {
    var tr7 = document.createElement("tr")
    var td9 = document.createElement("td")
    var img8 = document.createElement("img")
    img8.setAttribute("src", "photos/" + o + ".jpg.jpeg")
    td9.appendChild(img8)
    var td10 = document.createElement("td")
    var a9 = document.createElement("a")
    a9.setAttribute("href", +o + ".html")
    a9.innerHTML = "page for" + o
    td10.appendChild(a9)
    tr7.appendChild(td9)
    tr7.appendChild(td10)
    table7.appendChild(tr7)
    if (o % 2 == 0) {
        tr7.setAttribute("bgcolor", "purple")
    }
    else
        tr7.setAttribute("bgcolor", "pink")
}

