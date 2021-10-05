import Gameboard from "./modules/Gameboard";
import Ship from "./modules/Ship";
import Player from "./modules/Player";
import "./style.css";

start();
window.clickonGrid = clickonGrid; // expose to global

function start() {
    global.gb1 = new Gameboard();
    global.gb2 = new Gameboard();
    addbox(10);
    setupPlayerShip(gb1);
    setupComShip(gb2);
}

function setupPlayerShip(gb1) {
    gb1.randomShips();
    drawShips("p1", gb1);
}

function setupComShip(gb2) {
    gb2.randomShips();
    drawShips("p2", gb2);
}

function drawShips(player, gb) {
    let board = gb.getBoard();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 1) {
                if (player === "p1") {
                    drawShipBody(player, i, j, "");
                }
            } else if (board[i][j] === -1) {
                drawShipBody(player, i, j, "-hit");
            } else if (board[i][j] === 0) {
                drawShipBody(player, i, j, "-water");
            }
        }
    }
}

function drawShipBody(player, row, col, sty) {
    let id = player + "-" + row + "-" + col;
    let thediv = document.getElementById(id);
    thediv.classList.add("grid-item-ship" + sty);
}

function receiveAttack(player, row, col) {
    if (player === "p1") {
        //
    }
    if (player == "p2") {
        gb2.receiveAttack(row, col);
        drawShips(player, gb2);
        if (gb2.getIsLose()) {
            console.log("Player Won!");
        }
        AIattack();
        if (gb1.getIsLose()) {
            console.log("Computer Won!");
        }
    }
}

function AIattack() {
    let board = gb1.getBoard();
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    while (1) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        if (board[row][col] === 1 || board[row][col] === null) {
            gb1.receiveAttack(row, col);
            drawShips("p1", gb1);
            break;
        }
    }
}

function clickonGrid(theDiv) {
    let id = theDiv.id;
    let arr = id.split("-");
    receiveAttack(arr[0], arr[1], arr[2]);
}

//function hoverEffect(row, col, len) {}

function addbox(size) {
    setCanvasAtt(size);
    for (let i = 0; i < size * size; i++) {
        let temp = document.createElement("div");
        temp.setAttribute("class", "grid-item");
        temp.id = "p1-" + Math.floor(i / size) + "-" + (i % size);
        document.querySelector(`#p1can`).appendChild(temp);
    }

    for (let i = 0; i < size * size; i++) {
        let temp = document.createElement("div");
        temp.setAttribute("class", "grid-item");
        temp.setAttribute("onclick", "clickonGrid(this);");
        temp.id = "p2-" + Math.floor(i / size) + "-" + (i % size);
        document.querySelector(`#p2can`).appendChild(temp);
    }
}

function setCanvasAtt(size) {
    let ele1 = document.querySelector(`#p1can`);
    ele1.innerHTML = "";
    ele1.style["grid-template-columns"] = "repeat(" + size + ", 30px)";
    //ele1.style.width = 30 * size + "px";

    let ele2 = document.querySelector(`#p2can`);
    ele2.innerHTML = "";
    ele2.style["grid-template-columns"] = "repeat(" + size + ", 30px)";
    //ele2.style.width = 30 * size + "px";
}

function registerEventListener() {}

function drawer() {}
