const Car = function (value) { 
    console.log(this);

    this.a = value;
};
console.log(Car.prototype)


const myCar = new Car(5);
console.log(myCar.constructor)


function fun() {
    console.log(this)
}

console.log(fun.prototype)

