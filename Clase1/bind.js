const person = {
    name: 'Bruce',
    lastname: 'Wayne',
    fullname: function(){
        return `${this.name} ${this.lastname}`;
    }
}
const print = function(greet, adj){
console.log(greet, this.fullname(), 'you are', adj)
}.bind(person);
print('Hello', 'awesome');