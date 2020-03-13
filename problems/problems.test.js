const {
    PhoneDirectory,
    uniqueElementsOfSetB,
    joinTwoSets
} = require ("./problems");

test(`Adding a phone directory entry returns results when searching by name or number`, () => {
    const toffeeland = new PhoneDirectory();
    toffeeland.addEntry(`Toffee Ong`, `123-456-7890`);
    expect(toffeeland.lookupByName(`Toffee Ong`)).toContain(`123-456-7890`);
    expect(toffeeland.lookupByNumber(`123-456-7890`)).toContain(`Toffee Ong`);
});

test(`Removing a phone directory entry by name returns no results when searching by name or number`, () => {
    const toffeeland = new PhoneDirectory();
    toffeeland.addEntry(`Toffee Ong`, `123-456-7890`);
    toffeeland.removeByName(`Toffee Ong`);
    expect(toffeeland.lookupByName(`Toffee Ong`)).not.toContain(`123-456-7890`);
    expect(toffeeland.lookupByNumber(`123-456-7890`)).not.toContain(`Toffee Ong`);
});

test(`Removing a phone directory entry by name does not disturb other phone entries`, () => {
    const toffeeland = new PhoneDirectory();
    toffeeland.addEntry(`Toffee Ong`, `123-456-7890`);
    toffeeland.addEntry(`Jeremy Ong`, `098-765-4321`);
    toffeeland.removeByName(`Toffee Ong`);
    expect(toffeeland.lookupByName(`Toffee Ong`)).not.toContain(`123-456-7890`);
    expect(toffeeland.lookupByNumber(`123-456-7890`)).not.toContain(`Toffee Ong`);
    expect(toffeeland.lookupByName(`Jeremy Ong`)).toContain(`098-765-4321`);
    expect(toffeeland.lookupByNumber(`098-765-4321`)).toContain(`Jeremy Ong`);
});

test(`Removing a phone directory entry by number returns no results when searching by name or number`, () => {
    const toffeeland = new PhoneDirectory();
    toffeeland.addEntry(`Toffee Ong`, `123-456-7890`);
    toffeeland.removeByNumber(`123-456-7890`);
    expect(toffeeland.lookupByName(`Toffee Ong`)).not.toContain(`123-456-7890`);
    expect(toffeeland.lookupByNumber(`123-456-7890`)).not.toContain(`Toffee Ong`);
});

test(`Removing a phone directory entry by number does not disturb other phone entries`, () => {
    const toffeeland = new PhoneDirectory();
    toffeeland.addEntry(`Toffee Ong`, `123-456-7890`);
    toffeeland.addEntry(`Jeremy Ong`, `098-765-4321`);
    toffeeland.removeByNumber(`123-456-7890`);
    expect(toffeeland.lookupByName(`Toffee Ong`)).not.toContain(`123-456-7890`);
    expect(toffeeland.lookupByNumber(`123-456-7890`)).not.toContain(`Toffee Ong`);
    expect(toffeeland.lookupByName(`Jeremy Ong`)).toContain(`098-765-4321`);
    expect(toffeeland.lookupByNumber(`098-765-4321`)).toContain(`Jeremy Ong`);
});

test(`Print phone directory entry returns all entries in a string`, () => {
    const toffeeland = new PhoneDirectory();
    toffeeland.addEntry(`Toffee Ong`, `123-456-7890`);
    toffeeland.addEntry(`Jeremy Ong`, `098-765-4321`);
    const print = toffeeland.print();
    expect(print).toContain(`123-456-7890`);
    expect(print).toContain(`Toffee Ong`);
    expect(print).toContain(`098-765-4321`);
    expect(print).toContain(`Jeremy Ong`);
});



test(`uniqueElementsOfSetB returns a Set with unique elements in second Set`, () => {
    const setA = new Set([1, 2, 3]);
    const setB = new Set([3, 4, 5]);
    const uniqueSetB = uniqueElementsOfSetB(setA, setB);
    expect(uniqueSetB).toEqual(expect.any(Set));
    expect(uniqueSetB.has(1)).toBe(false);
    expect(uniqueSetB.has(2)).toBe(false);
    expect(uniqueSetB.has(3)).toBe(false);
    expect(uniqueSetB.has(4)).toBe(true);
    expect(uniqueSetB.has(5)).toBe(true);
});

test(`uniqueElementsOfSetB returns second Set, if first Set is empty`, () => {
    const setA = new Set([]);
    const setB = new Set([3, 4, 5]);
    const uniqueSetB = uniqueElementsOfSetB(setA, setB);
    expect(uniqueSetB).toEqual(expect.any(Set));
    expect(uniqueSetB.has(1)).toBe(false);
    expect(uniqueSetB.has(2)).toBe(false);
    expect(uniqueSetB.has(3)).toBe(true);
    expect(uniqueSetB.has(4)).toBe(true);
    expect(uniqueSetB.has(5)).toBe(true);
});

test(`uniqueElementsOfSetB returns an empty Set, if second Set is empty`, () => {
    const setA = new Set([1, 2, 3]);
    const setB = new Set([]);
    const uniqueSetB = uniqueElementsOfSetB(setA, setB);
    expect(uniqueSetB).toEqual(expect.any(Set));
    expect(uniqueSetB.has(1)).toBe(false);
    expect(uniqueSetB.has(2)).toBe(false);
    expect(uniqueSetB.has(3)).toBe(false);
});




test(`joinTwoSets joins overlapping sets`, () => {
    const setA = new Set([1, 2, 3]);
    const setB = new Set([2, 3, 4]);
    const joined = joinTwoSets(setA, setB);
    expect(joined).toEqual(expect.any(Set));
    expect(joined.has(1)).toBe(true);
    expect(joined.has(2)).toBe(true);
    expect(joined.has(3)).toBe(true);
    expect(joined.has(4)).toBe(true);
});

test(`joinTwoSets joins a Set to an empty Set`, () => {
    const setA = new Set([1, 2, 3]);
    const setB = new Set([]);
    const joined = joinTwoSets(setA, setB);
    expect(joined).toEqual(expect.any(Set));
    expect(joined.has(1)).toBe(true);
    expect(joined.has(2)).toBe(true);
    expect(joined.has(3)).toBe(true);
});

test(`joinTwoSets joins two empty Sets`, () => {
    const setA = new Set([]);
    const setB = new Set([]);
    const joined = joinTwoSets(setA, setB);
    expect(joined).toEqual(expect.any(Set));
    expect(joined.has(1)).toBe(false);
});