import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

export default class Player {
    constructor() {
        let gameboard = new Gameboard();
        let round = 0;
        //let maxRound = 100;
        let isPlayerLose = false;

        const getIsPlayerLost = () => isPlayerLose;

        function receivePlayerAttack(row, col) {
            if (gameboard.receiveAttack(row, col)) {
                round++;
                if (gameboard.getIsLose()) {
                    isPlayerLose = true;
                }
                return true;
            } else {
                return false;
            }
        }
        return {
            receivePlayerAttack,
            getIsPlayerLost,
        };
    }
}
