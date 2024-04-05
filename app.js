let h1= document.querySelector("h1");
let h3= document.querySelector("h3");
let p= document.querySelector("p");
let btn= document.querySelector("button");

function changeColor(){
    let red =Math.floor(Math.random() * 255);
    let green =Math.floor(Math.random() * 255);
    let blue =Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    this.style.backgroundColor = color;
    console.dir("Color Genarated");
}

h1.addEventListener("mouseenter", changeColor);
h3.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseenter", changeColor);
btn.addEventListener("mouseenter", changeColor);