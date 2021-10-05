import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

test("board init", () => {
    expect(new Gameboard().getBoard().length).toBe(10);
    expect(new Gameboard().getBoard()[0].length).toBe(10);
    expect(new Gameboard().getBoard()[0][0]).toBe(null);
});

test("valid test", () => {
    let gb = new Gameboard();
    expect(gb.validPos(new Ship(2), 2, 2)).toBe(true);
});

test("receiveAttack unhit test", () => {
    expect(new Gameboard().receiveAttack(2, 2)).toBe(false);
});

test("random ships test", () => {
    let gb = new Gameboard();
    gb.randomShips();
    expect(1).toBe(1);
    console.log(gb.getBoard());
});
