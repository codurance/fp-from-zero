What first-class functions are?
Why Immutability is good? 
Why favor first-class functions? 

Write in a functional way a function that can apply a 10% discount in a sale with multiple products. 
You have the following products: 

| Product | Price |
| --- | --- |
| firstBook | 25 |
| secondBook | 10 |
| comicBook | 5 |


Refactor the following code snippet to use a first-class function to calculate the discount: 

```javascript
class Sale {

    constructor() {
        this.total = 0;
    }

    addAmount(amount) {
        this.total += amount;
    }

    finalAmount() {
        return total * 0.10;
    }

}
```

