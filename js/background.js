const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img"); // create Html element

bgImage.id = "background";

bgImage.src = `img/${chosenImage}`; // needs to put into html body

document.body.appendChild(bgImage); // appendChild() adds parameter to document.body(html's body)
// also prepend() adds parameter to top of html (appendChild() is bottom)