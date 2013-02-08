window.onload = initAll;

var theCount = 0;

myCounter = document.getElementById("myCounter");
mainImage = document.getElementById("mainImage");

function initAll() {

    document.getElementById("next").onclick = addOne;
    document.getElementById("prev").onclick = minusOne;

    mainImage.src = "images/image_" + theCount + ".png";

    console.log(theCount);
}

function addOne() {

    if (theCount == 4) { //checks to see if the count exceeds the number of images
        theCount = 0; //if the count exceeds lenght, then it resets the count to 0
    } else {
        theCount++;
    }
    //myCounter.innerHTML = "The count is " + theCount; // sets the correct PNG image
    mainImage.src = "images/image_" + theCount + ".png"; // sets the correct image to the count
    return false;

}

function minusOne() {
    if (theCount == 0) {
        theCount = 4;
    } else {
        theCount--;
    }
    //myCounter.innerHTML = "The count is " + theCount;
    mainImage.src = "images/image_" + theCount + ".png"; //sets the correct image to the count
    return false;
}