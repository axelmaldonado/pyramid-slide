selector = document.getElementById("brickType");

selector.onchange = function() {
    console.log("someone changed the brickType");
    value = document.getElementById("brickType").value;
    height = document.getElementById("height").value;
    drawPyramid(height,value);
}

slider = document.getElementById("height");

slider.oninput = function() {
    console.log("Slider changed");
    value = document.getElementById("brickType").value;
    height = document.getElementById("height").value;
    document.getElementById("height-label").textContent = height;
    drawPyramid(height,value);
}

window.addEventListener("load", drawPyramid(8,"#"));

function drawPyramid(height, symbol) {

    document.getElementById("pyramid").innerHTML = "";


    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "\xa0";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

       // create a text element with the string of characters
       textElem = document.createTextNode(rowStr);

       // create a <p> element with the text inside
       rowElem = document.createElement("p");
       rowElem.appendChild(textElem);

       // insert the paragraph as a child of the container <div>
       document.getElementById("pyramid").appendChild(rowElem);
   }
}