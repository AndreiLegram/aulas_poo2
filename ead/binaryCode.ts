class DecimalToBinaryConverter {
    private decimalNumber: number;
    private binaryDigits: number[];

    constructor(decimalNumber: number) {
        this.decimalNumber = decimalNumber;
        this.binaryDigits = [];
    }

    public convertToBinary(): string {
        if (this.decimalNumber === 0) {
            return '0';
        }

        let number = this.decimalNumber;
        const stack: number[] = [];

        while (number > 0) {
            const remainder = number % 2;
            stack.push(remainder);
            number = Math.floor(number / 2);
        }

        while (stack.length > 0) {
            this.binaryDigits.push(stack.pop()!);
        }

        return this.binaryDigits.join('');
    }
}

const converter = new DecimalToBinaryConverter(150);
const binaryRepresentation = converter.convertToBinary();

class Testes {
    public constructor() {
        console.log(new DecimalToBinaryConverter(10).convertToBinary())
        console.log(new DecimalToBinaryConverter(3).convertToBinary())
        console.log(new DecimalToBinaryConverter(45).convertToBinary())
        console.log(new DecimalToBinaryConverter(13).convertToBinary())
        console.log(new DecimalToBinaryConverter(21).convertToBinary())
    }
}

new Testes()
