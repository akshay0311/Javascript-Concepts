// Class Based Constructor function 

// Benifits of constructor Functions. 2) What if we do not use this.add 
class ChainCalculator {
    constructor() {
        this.value = 0; 
    }
    add(val) {
        this.value += val;
        return this;
    }
    subtract(val) {
        this.value -= val;
        return this;
    }
    multiply(val) {
        this.value *= val;
        return this;
    }
    result() {
         console.log(this.value);
    }
}

function ChainCalculatorNew() {
    this.value = 0;
    
    this.add = function(val) {
        this.value += val; 
        return this;
    }
    this.subtract = function(val) {
        this.value -= val; 
        return this;
    }
    this.multiply = function(val) {
        this.value *= val; 
        return this;
    }
    this.result = function() {
        console.log(this.value);
    }
}

let calculator = new ChainCalculatorNew();

calculator.add(5).subtract(2).multiply(2).add(5).result();