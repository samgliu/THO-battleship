import Gameboard from "../modules/Gameboard";

test("board init", () => {
    expect(new Gameboard().getBoard().length).toBe(10);
    expect(new Gameboard().getBoard()[0].length).toBe(10);
    expect(new Gameboard().getBoard()[0][0]).toBe(null);
});
