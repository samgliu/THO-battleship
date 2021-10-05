import Ship from "../modules/Ship";

test("new Ship(6) object", () => {
    let ship1 = new Ship(6);
    expect(ship1.getLength()).toBe(6);
    expect(ship1.getIsSunk()).toBe(false);
    //ship1.setIsSunk(true);
    ship1.hit(1);
    ship1.hit(2);
    ship1.hit(3);
    ship1.hit(5);
    ship1.hit(6);
    expect(ship1.getIsSunk()).toBe(false);
    ship1.hit(4);
    expect(ship1.getIsSunk()).toBe(true);

    expect(ship1.getIsVertical()).toBe(false);
    ship1.setIsVertical(true);
    expect(ship1.getIsVertical()).toBe(true);
});
