const SummaryRanges = require("../TestFolder/SummaryRanges");

let ModuleTestPromise = awaitImports();
let ModuleTest = null;

const inputData = [
    {
        sortedNumbers: Array.of(1, 2, 3, 4, 5),
        expected: ["[1 -> 5]"]
    },
    {
        sortedNumbers: Array.of(1, 2, 4),
        expected: ["[1 -> 2]", "[4]"]
    },
    {
        sortedNumbers: Array.of(1),
        expected: ["[1]"]
    },
    {
        sortedNumbers: Array.of(1,2,3,5,7,9,10),
        expected: ["[1 -> 3]", "[5]", "[7]", "[9 -> 10]"]
    }
];

/*
 *
 * describes can be nested
 * 
 */
describe(
    "Summary-Ranges-Tests",
    () => {

        /*
         * can have multiple test(name, fn)
         * there are no invalid/fail-cases here so only 'valid' test exist
         */

        test(
            "valid",
            async () => {

                await ModuleTestPromise;
                ModuleTest.foo();
                
               inputData.forEach(
                   function (input) {

                       const actual = SummaryRanges.sumRanges(input.sortedNumbers);

                       expect(actual.length).toBe(input.expected.length);

                       input.expected.forEach(
                           function (value, index) {
                               expect(actual[index]).toBe(value);
                           }
                       )

                    }, inputData
                )

            }
        )

    }
);

async function awaitImports() {
    /*
     * optimal: start all imports and await each one
     * total time = max(ofAllImports)
     */
    ModuleTest = await import("../TestFolder/moduleTest.mjs");
}