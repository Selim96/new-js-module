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
// console.log(myCar)

class Audi extends Car {
    constructor(obj, price) {
        super(obj);
        this.price = price;
    }

    func() {
        console.log("This is audi for you")
    }
}

const myAudi = new Audi({ a: 95, b: 500, c: 66 }, 25000);

console.log(myAudi);

const main = document.querySelector('div[data-root="main"]');

const container = document.createElement("div");

container.textContent = "This is container";

const button1 = document.createElement("button");
button1.textContent = "Press me";
button1.classList.add("pressBtn");

main.append(container, button1);
console.dir(main);