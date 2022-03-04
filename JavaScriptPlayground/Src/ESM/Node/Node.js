import { Item } from "linked-list";

export default class Node extends Item {

    #_value;

    constructor(value) {
        super();
        this.value = value;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
    }

    toString() {
        return `[value: (${this.value}) - left: ${this.prev === null ? null : this.prev.value} - right: ${this.next === null ? null : this.next.value}]`;
    }

}