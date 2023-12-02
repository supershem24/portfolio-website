// JavaScript source code

let imageHolder = document.getElementsByClassName("ImageHolder");
let rightButton = document.getElementsByClassName("RightButton");
let leftButton = document.getElementsByClassName("LeftButton");

for (let i = 0; i < rightButton.length; i++) {

    if (i % 3 == 0) {

    }
    imageHolder[i].
}

for (let i = 0; i < rightButton.length; i++) {
    rightButton[i].addEventListener("click", () => {
        imageHolder[i].scrollLeft += 900;
    });
}

for (let i = 0; i < leftButton.length; i++) {
    leftButton[i].addEventListener("click", () => {
        imageHolder[i].scrollLeft -= 900;
    });
}