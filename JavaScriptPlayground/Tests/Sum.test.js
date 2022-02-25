const Sum = require("../TestFolder/sum");

/*
 * alternative way via module exports that still use require (see sum.js for module export):
 * const Sum = require("../TestFolder/sum)
 */

test(
    'adds 1 + 2 to equal 3',
    () => {

        expect(Sum.sum(1, 2)).toBe(3);

    }
);