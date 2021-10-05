export default class Ship {
    constructor(len) {
        this.length = len;
        this.life = len;
        this.isSunk = false;
        this.isVertical = false;
        this.body = [];
        this.body = initBody();

        function initBody() {
            let arr = [];
            for (let i = 0; i < len; i++) {
                arr.push(0); // set to be 0, means not hit
            }
            return arr;
        }

        const hit = (pos) => {
            //pos index from 1
            if (this.body[pos - 1] === 0) {
                // make sure the postion is unhit
                this.body[pos - 1] = 1; // set pos to be 1, means got hit
                this.life--;
            }

            if (this.life === 0) {
                this.isSunk = true;
            }
        };
        const getLength = () => this.length;
        //const setIsSunk = (tf) => (this.isSunk = tf);
        const getIsSunk = () => this.isSunk;
        const setIsVertical = (tf) => (this.isVertical = tf);
        const getIsVertical = () => this.isVertical;

        return {
            getLength,
            getIsSunk,
            hit,
            setIsVertical,
            getIsVertical,
        };
    }
}
