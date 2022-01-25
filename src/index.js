import Gameboard from "./modules/Gameboard";
import Ship from "./modules/Ship";
import Player from "./modules/Player";
import "./style.css";

window.clickonGrid = clickonGrid; // expose to global
window.start = start;
window.reset = reset;
window.refresh = refresh;
window.placeShip = placeShip;
window.dodgeDirection = dodgeDirection;
window.placeGrid = placeGrid;

function start() {
    document.getElementById("place").style.display = "none";
    document.getElementById("displayShipContainer").style.display = "none";
    document.querySelector(`#p2container`).style.display = "inline-block";
    reset();
}

function reset() {
    global.gb1 = new Gameboard();
    global.gb2 = new Gameboard();
    global.lastHitRow = -1;
    global.lastHitCol = -1;
    global.AIIndex = 0;
    addbox(10);
    setupPlayerShip(gb1);
    setupComShip(gb2);
}

function refresh() {
    reset();

    document.getElementById("place").style = null;
    placeShip();
    document.getElementById("displayShipContainer").style = null;
}

function placeShip() {
    // fixme
    global.gb1 = new Gameboard();
    global.gb2 = new Gameboard();
    global.lastHitRow = -1;
    global.lastHitCol = -1;
    global.AIIndex = 0;
    addbox(10);
    document.getElementById("p2container").style.display = "none";
    placeHelper();
    setupComShip(gb2);
}

function placeHelper() {
    shipBodyGenerator(5, "1");
}

function dodgeDirection() {
    let container = document.querySelector(`#shcan`);
    if (container.value === "1") {
        container.value = "0";
    } else {
        container.value = "1";
    }
    let elems = container.querySelectorAll(`.grid-item`);
    let len = elems.length;
    shipBodyGenerator(len, container.value);
}

function placeGrid(theDiv) {
    let id = theDiv.id;
    let arr = id.split("-");
    let row = arr[1];
    let col = arr[2];
    let container = document.querySelector(`#shcan`);
    let len = container.querySelectorAll(`.grid-item`).length;
    let direction = container.value;
    let newShip = new Ship(len);
    if (direction === "0") {
        newShip.setIsVertical(true);
    }
    if (gb1.validPos(newShip, row, col)) {
        shipBodyGenerator(len - 1, container.value);
    }
    drawShips("p1", gb1);
    if (len === 1) {
        playerStart();
    }
}

function playerStart() {
    console.log("start the game");
    document.querySelector(`#displayShipContainer`).style.display = "none";
    document.querySelector(`#p2container`).style.display = "inline-block";
}

function shipBodyGenerator(size, direction) {
    if (direction === "0") {
        let ele1 = document.querySelector(`#shcan`);
        ele1.innerHTML = "";
        ele1.style["grid-template-columns"] = "repeat(" + 1 + ", 30px)";
        for (let i = 0; i < size; i++) {
            let temp = document.createElement("div");
            temp.setAttribute("class", "grid-item");
            temp.classList.add("grid-item-ship");
            document.querySelector(`#shcan`).appendChild(temp);
        }
    } else {
        let ele1 = document.querySelector(`#shcan`);
        ele1.innerHTML = "";
        ele1.style["grid-template-columns"] = "repeat(" + size + ", 30px)";
        for (let i = 0; i < size; i++) {
            let temp = document.createElement("div");
            temp.setAttribute("class", "grid-item");
            temp.classList.add("grid-item-ship");
            document.querySelector(`#shcan`).appendChild(temp);
        }
    }
}

function setupPlayerShip(gb1) {
    gb1.randomShips();
    drawShips("p1", gb1);
}

function setupComShip(gb2) {
    gb2.randomShips();
    drawShips("p2", gb2);
    //document.getElementById("p2container").style.display = "inline-block";
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
        //gb1.setIsLose(true); // testing purpose
        if (gb2.getIsLose()) {
            document.getElementById("msg").innerHTML = "Player Won";
            removeListen("p2container");
        } else {
            AIattackII();
            if (gb1.getIsLose()) {
                document.getElementById("msg").innerHTML = "Computer Won";
                removeListen("p2container");
            }
        }
    }
}

function removeListen(containerid) {
    let container = document.querySelector("#" + containerid);
    let elems = container.querySelectorAll(`.grid-item`);
    elems.forEach((elem) => {
        elem.onclick = null;
    });
}

function AIattack() {
    let board = gb1.getBoard();
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    while (1) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        if (board[row][col] === 1) {
            gb1.receiveAttack(row, col);
            lastHitRow = row;
            lastHitCol = col;
            AIIndex = 1;
            drawShips("p1", gb1);
            break;
        } else if (board[row][col] === null) {
            gb1.receiveAttack(row, col);
            drawShips("p1", gb1);
            break;
        }
    }
}

function AIattackII() {
    let board = gb1.getBoard();
    if (lastHitCol === -1) {
        AIattack();
    } else {
        if (AIIndex > 0) {
            if (AIIndex === 1) {
                if (
                    lastHitCol - 1 >= 0 &&
                    board[lastHitRow][lastHitCol - 1] === 1
                ) {
                    gb1.receiveAttack(lastHitRow, lastHitCol - 1); // hit ship
                    lastHitCol = lastHitCol - 1;
                    AIIndex = 1;
                    drawShips("p1", gb1);
                } else if (board[lastHitRow][lastHitCol - 1] === null) {
                    gb1.receiveAttack(lastHitRow, lastHitCol - 1); // hit water
                    drawShips("p1", gb1);
                    AIIndex = 2;
                } else {
                    AIIndex = 2;
                    AIattackII();
                }
            } else if (AIIndex === 2) {
                if (
                    lastHitCol + 1 <= 10 &&
                    board[lastHitRow][lastHitCol + 1] === 1
                ) {
                    gb1.receiveAttack(lastHitRow, lastHitCol + 1); // hit ship
                    lastHitCol = lastHitCol + 1;
                    AIIndex = 1;
                    drawShips("p1", gb1);
                } else if (
                    lastHitCol + 1 <= 10 &&
                    board[lastHitRow][lastHitCol + 1] === null
                ) {
                    gb1.receiveAttack(lastHitRow, lastHitCol + 1); // hit water
                    drawShips("p1", gb1);
                    AIIndex = 3;
                } else {
                    AIIndex = 3;
                    AIattackII();
                }
            } else if (AIIndex === 3) {
                if (
                    lastHitRow - 1 >= 0 &&
                    board[lastHitRow - 1][lastHitCol] === 1
                ) {
                    gb1.receiveAttack(lastHitRow - 1, lastHitCol); // hit ship
                    lastHitRow = lastHitRow - 1;
                    AIIndex = 1;
                    drawShips("p1", gb1);
                } else if (
                    lastHitRow - 1 >= 0 &&
                    board[lastHitRow - 1][lastHitCol] === null
                ) {
                    gb1.receiveAttack(lastHitRow - 1, lastHitCol); // hit water
                    drawShips("p1", gb1);
                    AIIndex = 4;
                } else {
                    AIIndex = 4;
                    AIattackII();
                }
            } else if (AIIndex === 4) {
                if (
                    lastHitRow + 1 <= 10 &&
                    board[lastHitRow + 1][lastHitCol] === 1
                ) {
                    gb1.receiveAttack(lastHitRow + 1, lastHitCol); // hit ship
                    lastHitRow = lastHitRow + 1;
                    AIIndex = 1;
                    drawShips("p1", gb1);
                } else if (
                    lastHitRow + 1 <= 10 &&
                    board[lastHitRow + 1][lastHitCol] === null
                ) {
                    gb1.receiveAttack(lastHitRow + 1, lastHitCol); // hit water
                    drawShips("p1", gb1);
                    AIIndex = 0;
                } else {
                    AIIndex = 0;
                    AIattackII();
                }
            }
        } else {
            lastHitRow = -1;
            lastHitCol = -1;
            AIattack();
        }
    }
}

function clickonGrid(theDiv) {
    let id = theDiv.id;
    let arr = id.split("-");
    let row = arr[1];
    let col = arr[2];
    if (gb2.getBoard()[row][col] == null || gb2.getBoard()[row][col] === 1) {
        receiveAttack(arr[0], row, col);
    }
}

//function hoverEffect(row, col, len) {}

function addbox(size) {
    setCanvasAtt(size);
    for (let i = 0; i < size * size; i++) {
        let temp = document.createElement("div");
        temp.setAttribute("class", "grid-item");
        temp.setAttribute("onclick", "placeGrid(this);");
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
