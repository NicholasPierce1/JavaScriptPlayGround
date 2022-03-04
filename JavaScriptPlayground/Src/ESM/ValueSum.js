import { List } from "linked-list";
import Node from "./Node/Node";

export default function createValueSum(linkedList1, linkedList2) {

    const toReturn = new List();
    let valueSum = 0;

    let power = 0;

    while (linkedList1.size > 0 || linkedList2.size > 0) {

        let value = 0;

        console.log(`size 1 (${linkedList1.size}) - size 2 (${linkedList2.size})`);

        if (linkedList1.size > 0) {

            if (linkedList1.size === 1) {
                value += linkedList1.head.value;
                linkedList1.head.detach();
            }
            else {
                value += linkedList1.tail.value;
                linkedList1.tail.detach();
            }

        }

        if (linkedList2.size > 0) {

            if (linkedList2.size === 1) {
                value += linkedList2.head.value;
                linkedList2.head.detach();
            }
            else {
                value += linkedList2.tail.value;
                linkedList2.tail.detach();
            }

        }

        toReturn.prepend(new Node(value * (10 ** power++)));

    }

    // just to practice iterating over the lists
    for (let node = toReturn.head; node !== null; node = node.next)
        valueSum += node.value;

    return valueSum;

}