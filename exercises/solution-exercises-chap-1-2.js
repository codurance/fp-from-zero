const firstBook = 25;
const secondBook = 10;
const comicBook = 5;

const add = (first, second) => first + second;
const multiply = (denominator, enumerator) => denominator * enumerator; 

const discountedTotal = multiply(add(add(firstBook, secondBook), comicBook), 0.90); 

console.log(discountedTotal);


const tenPercentDiscount = amount => amount * 0.9;

class Sale
{
    constructor(discountCalculator) {
        this.total = 0;
        this.discountCalculator = discountCalculator;
    }

    addAmount(amount) {
        this.total += amount;
    }

    finalAmount() {
        return this.discountCalculator(this.total);
    }
}   

let testSale = new Sale(tenPercentDiscount);
testSale.addAmount(150);
console.log(testSale.finalAmount());

