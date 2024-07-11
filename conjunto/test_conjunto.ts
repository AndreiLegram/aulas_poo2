import { Conjunto } from "./conjunto";

export class TestConjunto {

    constructor() {
        const set = new Conjunto();
        set.add(1);
        console.log(set.values()); // exibe [1]
        console.log(set.has(1)); // exibe true
        console.log(set.size()); // exibe 1
        set.add(2);
        console.log(set.values()); // exibe [1, 2]
        console.log(set.has(2)); // true
        console.log(set.size()); // 2
        set.delete(1);
        console.log(set.values()); // exibe [2]
        set.delete(2);
        console.log(set.values()); // exibe []
    }

}

new TestConjunto()
