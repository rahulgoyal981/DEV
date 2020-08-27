let ispendown = false;
let points = [];
let redoArr = [];
board.addEventListener("mousedown", function (e) {
    // path start
    let x = e.clientX;
    let y = e.clientY;
    let top = getPosition();
    y = y - top;
    // move to
    ctx.beginPath(0, 0);
    ctx.moveTo(x, y);
    ispendown = true;
    let mdp = {
        x: x,
        y: y,
        id: "md",
        color: ctx.strokeStyle,
        width: ctx.lineWidth
    }
    points.push(mdp);
    socket.emit("md",mdp);
})
board.addEventListener("mousemove", function (e) {
    // line to
    let x = e.clientX;
    let y = e.clientY;
    let top = getPosition();
    y = y - top;
    if (ispendown == true) {
        ctx.lineTo(x, y);
        ctx.stroke();
        let mmp = {
            x: x,
            y: y,
            id: "mm",
            color: ctx.strokeStyle,
            width: ctx.lineWidth
        }
        points.push(mmp);
        socket.emit("mm",mmp);
    }

    // repeat
})
board.addEventListener("mouseup", function (e) {
    // mouse up
    ispendown = false;
    ctx.closePath();
})
function getPosition() {
    let { top } = board.getBoundingClientRect();
    return top;
}
function redraw() {
    for (let i = 0; i < points.length; i++) {
        let { x, y, id, color, width } = points[i];
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        if (id == "md") {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else if (id == "mm") {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}
function undoMaker() {
    let tempArr = [];
    for (let i = points.length - 1; i >= 0; i--) {
        let { id } = points[i];
        if (id == "md") {
            tempArr.unshift(points.pop());
            break;
        } else {
            tempArr.unshift(points.pop());
        }
    }
    ctx.clearRect(0, 0, board.width, board.height);
    redoArr.push(tempArr);
    redraw();
}
function redoMaker() {
    if (redoArr.length > 0) {
        let mrPathArr = redoArr.pop();
        points.push(...mrPathArr);
        ctx.clearRect(0, 0, board.width, board.height);
        redraw();
    }
}
