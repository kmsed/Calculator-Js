const calculator = {
    plus: (a, b) => {
        return a + b;
    },
    minus: (a, b) => {
        return a - b;
    },
    product: (a, b) => {
        return a * b;
    },
    divide: (a, b) => {
        return a / b;
    },
    square: (a, b) => {
        return a ** b;
    },
    moders: (a, b) => {
        return a % b;
    },
    roundup: (a) => {
        return Math.round(a);
    },
    round: (a) => {
        return Math.ceil(a);
    },
    down: (a) => {
        return Math.floor(a);
    }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const product = calculator.product(5, 5);
const divide = calculator.divide(5, 5);
const square = calculator.square(5, 5);
const moders = calculator.moders(5, 3);
const roundup = calculator.roundup(5.35);
const round = calculator.round(5.35);
const down = calculator.down(5.35);

console.log(plus);
console.log(minus);
console.log(product);
console.log(divide);
console.log(square);
console.log(moders);
console.log(roundup);
console.log(round);
console.log(down);