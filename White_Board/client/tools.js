// const io = require("socket.io-client");
const socket = io.connect("http://localhost:3000");
console.log(socket);
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");
let pencilOptions = document.querySelector("#pencil-options");
let eraserOptions = document.querySelector("#eraser-options");
let sticky = document.querySelector("#sticky");
let activeTool = "pencil";
let sliders = document.querySelectorAll("input[type='range']");

let pencilSize = 5;
let eraserSize = 5;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.miterLimit = 1;
// ctx.lineWidth = 10;
console.log(ctx);
pencil.addEventListener("click", function () {
    if (activeTool == "pencil") {
        pencilOptions.classList.add("show");
    } else {
        activeTool = "pencil";
        eraserOptions.classList.remove("show");
        ctx.strokeStyle = "black";
        ctx.lineWidth = pencilSize;
        // socket.emit("color", "black");
    }
})
eraser.addEventListener("click", function () {

    if (activeTool == "eraser") {
        eraserOptions.classList.add("show");
    } else {
        activeTool = "eraser";
        pencilOptions.classList.remove("show");
        ctx.strokeStyle = "white";
        ctx.lineWidth = eraserSize;
    }
    // socket.emit("color", "white");
})
undo.addEventListener("click", function () {
    undoMaker();
})
redo.addEventListener("click", function () {
    redoMaker();
})
sticky.addEventListener("click", function () {
    createSticky();
})
document.addEventListener("keydown", function (e) {
    var evtObj = e;
    if (evtObj.keyCode == 90 && evtObj.ctrlKey) {
        undoMaker();
    }
})
document.addEventListener("keydown", function (e) {
    var evtObj = e;
    if (evtObj.keyCode == 89 && evtObj.ctrlKey) {
        redoMaker();
    }
})

function handleColor(color) {
    ctx.strokeStyle = color;
    socket.emit("color",color);
}
// function setWidth(val) {
//     ctx.lineWidth = val;
// }
sliders.forEach(function (slider) {
    slider.addEventListener("change", function () {
        ctx.lineWidth = slider.value;
        if (activeTool == "pencil") {
            pencilSize = ctx.lineWidth;
        } else {
            eraserSize = ctx.lineWidth;
        }
    })
})

