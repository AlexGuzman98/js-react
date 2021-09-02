const taxExample = (price) => {
    return price * 13;
}
 
//More compact Const Arrow
const price = 1000;
const tax = price => price * 0.13;
console.log(`The price is ${price + tax(price)}`);

// Object
// Correct Way to use this with function
const classicPerson = {
    name: 'classic person',
    sayName: function() {
        console.log(this.name)
    }
}
// Do not use arrow function, cause arrow  function doesn't understand "this".
const arrowPerson = {
    name: 'arrow person',
    sayName:() => {
        console.log(this.name)
    }
}

classicPerson.sayName();
arrowPerson.sayName();  
 