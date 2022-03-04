import { List } from "linked-list";
import Node from "../Src/ESM/Node/Node";
import ValueSum from "../Src/ESM/ValueSum";

const testData = [
    {
        input: {
            listOne: List.of(new Node(1), new Node(2)),
            listTwo: List.of(new Node(3))
        },

        expected: 15

    },
    {
        input: {
            listOne: List.of(new Node(1), new Node(2), new Node(3)),
            listTwo: List.of(new Node(5))
        },

        expected: 128

    },
    {
        input: {
            listOne: List.of(new Node(1), new Node(2), new Node(3)),
            listTwo: List.of(new Node(5), new Node(9))
        },

        expected: 182

    }
];

describe(
    "Value-Sum-Tests",
    () => {

        test(
            "testEquals",
            () => {

                testData.forEach(
                    (inputData, index) => {

                        const actual = ValueSum(inputData.input.listOne, inputData.input.listTwo);

                        expect(actual).toBe(inputData.expected);

                    },
                    testData
                );

            }
        )

    }
);