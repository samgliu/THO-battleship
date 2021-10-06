import Ship from "../modules/Ship";

export default class Gameboard {
    constructor() {
        let board = new Array(10)
            .fill(null)
            .map(() => new Array(10).fill(null));
        let ships = [];
        let isLose = false;
        let lifeLeft = 15;

        boardInit();

        const getBoard = () => board;
        const getIsLose = () => isLose;
        const setIsLose = (tf) => (isLose = tf); // testing purpose

        const validPos = (aship, rrow, ccol) => {
            let len = aship.getLength();
            let direction = aship.getIsVertical(); // false: horizontal; true; vertical
            let row = parseInt(rrow, 10);
            let col = parseInt(ccol, 10);
            if (direction) {
                return verticalValid(row, col, len);
            } else {
                return horizontalValid(row, col, len);
            }
        };

        function randomShips() {
            for (let i = 0; i < ships.length; i++) {
                if (Math.floor(Math.random() * 2) === 1) {
                    ships[i].setIsVertical(true);
                }
                while (!randomaShip(ships[i])) {}
            }
        }
        function randomaShip(aShip) {
            let row = Math.floor(Math.random() * 10);
            let col = Math.floor(Math.random() * 10);
            return validPos(aShip, row, col);
        }

        function horizontalValid(row, col, len) {
            let count = 0;
            for (let j = col; j < 10; j++) {
                if (board[row][j] === null && count < len) {
                    count++;
                    if (count === len) {
                        markHorizontal(row, col, len);
                        return true; // ok
                    }
                } else {
                    return false; // ocupied
                }
            }
        }

        function markHorizontal(row, col, len) {
            //console.log(row + col + len);
            for (let j = 0; j < len; j++) {
                board[row][col + j] = 1; // mark 1 means ship is here
            }
        }

        function verticalValid(row, col, len) {
            let count = 0;
            for (let i = row; i < 10; i++) {
                if (board[i][col] === null && count < len) {
                    count++;
                    if (count === len) {
                        markVertical(row, col, len);
                        return true; // ok
                    }
                } else {
                    return false; // ocupied
                }
            }
        }

        function markVertical(row, col, len) {
            for (let j = 0; j < len; j++) {
                board[row + j][col] = 1; // mark 1 means ship is here
            }
        }

        function boardInit() {
            for (let i = 0; i < 5; i++) {
                ships.push(new Ship(5 - i));
            }
        }

        function receiveAttack(row, col) {
            if (board[row][col] === 1) {
                board[row][col] = -1; // set the position to -1; means ship is here and got hit
                lifeLeft--;
                if (lifeLeft == 0) {
                    isLose = true;
                }
                return true; // hit means. 1
            } else {
                board[row][col] = 0; // set to 0, means ship is not here but got hit
                return false; // 0, means nothit
            }
        }

        return {
            getBoard,
            setIsLose,
            getIsLose,
            validPos,
            receiveAttack,
            randomShips,
        };
    }
}
