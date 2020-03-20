const divWidth = document.querySelector("body").offsetWidth;
alert(divWidth);



let canvas = document.querySelector("canvas");
canvas.width = divWidth;

let space = canvas.width/10
var path = space;//path 


canvas.height = 200;
let cx = document.querySelector(".firstGraph").getContext("2d");
cx.clearRect(0, 0, canvas.width, canvas.height);
cx.beginPath();

cx.moveTo(0, 0);

let value=0;

for(var index = 0;index<10;index++){
    value = Math.round(Math.random() * 200)
    cx.lineTo(path,value);
    console.log(value)
    path+=space;
}

cx.lineWidth = 1;
cx.strokeStyle = "dodgerblue";
cx.stroke();