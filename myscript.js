window.onload = initAll;

var counter = 1;

myCounter = document.getElementById("myCounter");
mainImage = document.getElementById("mainImage");

function initAll() {

    document.getElementById("next").onclick = addOne;
    document.getElementById("prev").onclick = minusOne;

    setImage(counter);
	console.log(counter);
}

function addOne() {

    if (counter > 25) { //checks to see if the count exceeds the number of images
        counter = 1; //if the count exceeds lenght, then it resets the count to 0
    } else {
        counter++;
    }
    myCounter.innerHTML = "Image " + counter; // sets the correct PNG image
    setImage(counter);
    return false;

}

function minusOne() {
    if (counter == 0) {
        counter = 25;
    } else {
        counter--;
    }
    myCounter.innerHTML = "Image " + counter;
    setImage(counter);
    return false;
}

function setImage(x){
    mainImage.src = "images/" + counter + ".jpg"; //sets the correct image to the count
}