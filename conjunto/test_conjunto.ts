import { Conjunto } from "./conjunto"

export class TestConjunto {

    constructor() {
        this.exe1()
        this.exe2()
    }

    public exe1(): void {
        const set = new Conjunto()
        set.add(1)
        console.log(set.values()) // exibe [1]
        console.log(set.has(1)) // exibe true
        console.log(set.size()) // exibe 1
        set.add(2)
        console.log(set.values()) // exibe [1, 2]
        console.log(set.has(2)) // true
        console.log(set.size()) // 2
        set.delete(1)
        console.log(set.values()) // exibe [2]
        set.delete(2)
        console.log(set.values()) // exibe []
    }

    public exe2(): void {
        const setA = new Conjunto()
        setA.add(1)
        setA.add(2)
        setA.add(3)
        const setB = new Conjunto()
        setB.add(3)
        setB.add(4)
        setB.add(5)
        setB.add(6)
        const unionAB = setA.union(setB)
        console.log(unionAB.values())
    }

}

new TestConjunto()
