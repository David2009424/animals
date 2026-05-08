function DrawLink()
{
    var div1 = document.getElementById("el");
    link = document.createElement("a");
    link.setAttribute("href", "1.html");
    link.setAttribute("color", "red");
    link.innerHTML = "Go to 1.html";
    div1.appendChild(link);
}
function DrawImage()
{
    var div2 = document.getElementById("el");
    image2 = document.createElement("img");
    image2.setAttribute("src", "photos/1.jpg.jpeg");
    image2.setAttribute("width", "200");
    image2.setAttribute("height", "200");
    div2.appendChild(image2);

}
function DrawImage3(imgIndex)
{
    var div3 = document.getElementById("el");
    image3 = document.createElement("img");
    image3.setAttribute("src", "photos/" + imgIndex + ".jpg.jpeg");
    div3.appendChild(image3);
}
function DrawImage4(imgHeight, imgWidth, el, imgIndex)
{
    var image3 = document.createElement("img");
    image3.setAttribute("src", "photos/" + imgIndex + ".jpg.jpeg");
    image3.setAttribute("width", imgWidth);
    image3.setAttribute("height", imgHeight);
    el.appendChild(image3);

}
function DrawSomeImages(num)
{
    var image5 = document.createElement("img");
    image5.setAttribute("width", "200");
    image5.setAttribute("height", "200")
    
}