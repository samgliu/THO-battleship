import Player from "../modules/Player";

test("receiveAttack unhit test", () => {
    expect(new Player().receivePlayerAttack(2, 2)).toBe(false);
});

test("player test", () => {
    expect(new Player().getIsPlayerLost()).toBe(false);
});
