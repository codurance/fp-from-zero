What first-class functions are? 
- They are functions that can be treated like variables, can be passed as parameters, stored in arrays. 

Why Immutability is good? 
- It's easier to keep track of the state. 

Why favor first-class functions? 
- It makes the code less verbose and it helps resuability and composeability. 
- In javascript when dealing with first class functions you don't have to deal with `this`

Write in a functional way a function that can apply a 10% discount in a sale with multiple products. 
You have the following products: 

| Product | Price |
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
``
