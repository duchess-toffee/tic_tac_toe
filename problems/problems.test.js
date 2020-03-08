const {
    //phoneDirectory,
    //uniqueElementsOfSetB,
    joinTwoSets
} = require ("./problems");

test(`joinTwoSets takes two sets as an argument`, () => {
    expect(joinTwoSets(setA, setB).toEqual({1, 2, 3, 4, 5, 6, 7, 8}))
});

test(`joinTwoSets returns a set`, () => {
    expect(joinTwoSets(setA, setB).toEqual({1, 2, 3, 4, 5, 6, 7, 8}))
});

test(`joinTwoSets returns a set without duplicates`, () => {
    expect(joinTwoSets(setA, setB).toEqual({1, 2, 3, 4, 5, 6, 7, 8}))
});