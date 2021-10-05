export default class Ship {
    constructor() {
        this.board = new Array(10)
            .fill(null)
            .map(() => new Array(10).fill(null));

        const getBoard = () => this.board;

        return {
            getBoard,
        };
    }
}
