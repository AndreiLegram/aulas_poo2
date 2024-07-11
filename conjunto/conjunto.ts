export class Conjunto {
    private _items: {}

    constructor() {
        this._items = {}
    }

    public has(element: number): boolean {
        return Object.prototype.hasOwnProperty.call(this._items, element)
    }

    public add(element: number) {
        if (!this.has(element)) {
            this._items[element] = element
            return true
        }
        return false
    }

    public delete(element: number) {
        if (this.has(element)) {
            delete this._items[element]
            return true
        }
        return false
    }

    public clear(): void {
        this._items = {} // {2}
    }

    public size(): number {
        let count = 0
        for (let key in this._items) { // {2}
            if (this._items.hasOwnProperty(key)) { // {3}
                count++ // {4}
            }
        }
        return count
    }

    public values(): Array<number> {
        let values = []
        for (let key in this._items) { // {1}
            if (this._items.hasOwnProperty(key)) { // {2}
                values.push(key)
            }
        }
        return values
    }

}