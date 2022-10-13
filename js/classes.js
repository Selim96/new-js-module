class Car {
    #c;
    constructor({a=0, b=0, c=0}={}) {
        this.a = a;
        this.b = b;
        this.#c = c;
    }
    get c() {
        return this.#c;
    }
    set c(x) {
        this.#c = x;
    }
};



const myCar = new Car({a: 5, b: 25, c: 66});
myCar.c = 100;
console.log()

class Audi extends Car {
    constructor(obj) {
        super(obj)
    }

    func() {
        console.log("This is audi for you")
    }
}

const myAuto = new Audi({ a: 95 });
myAuto.func()
console.log()
