// JavaScript source code

let imageHolder = document.getElementsByClassName("ImageHolder");
let rightButton = document.getElementsByClassName("RightButton");
let leftButton = document.getElementsByClassName("LeftButton");

function createPlaceholder() {
    let placeholder = document.createElement("img");
    placeholder.src = "images/Green Placeholder Box.png";
    return placeholder;
}

//process for adding thumbnails of projects to the ImageHolder areas
for (let i = 0; i < imageHolder.length; i++) {
    let divs = imageHolder[i].children;
    //adding 6 to each, if there's not enough then just add blank ones
    let div;
    let images;
    for (let j = 0; j < 6; j++) {
        //every div can only hold 3 elements to not break the box
        if (j % 3 == 0) {
            if (divs[j / 3] == null) {
                div = document.createElement("div");
                imageHolder[i].appendChild(div);
            }
            else {
                div = divs[j / 3];
            }
            images = div.children;
        }
        if (images[j % 3] == null) {
            div.append(createPlaceholder());
        }
    }
}

for (let i = 0; i < rightButton.length; i++) {
    rightButton[i].addEventListener("click", () => {
        imageHolder[i].scrollLeft += imageHolder[i].clientWidth;
    });
}

for (let i = 0; i < leftButton.length; i++) {
    leftButton[i].addEventListener("click", () => {
        imageHolder[i].scrollLeft -= imageHolder[i].clientWidth;
    });
}