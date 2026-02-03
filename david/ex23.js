function DrawLink()
{
    var div1 = document.getElementById("el");
    link = document.createElement("a");
    link.setAttribute("href", "1.html");
    link.setAttribute("color", "purple");
    link.innerHTML = "Go to 1.html";
    div1.appendChild(link);
}
function DrawImage()
{
    var div2 = document.getElementById("el");
    image2 = document.createElement("img");
    image2.setAttribute("src", "1.png");
    image2.setAttribute("width", "200");
    image2.setAttribute("height", "200");
    div2.appendChild(image2);

}