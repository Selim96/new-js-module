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

// ===============================================================

const main = document.querySelector('div[data-root="main"]');

const container = document.createElement("div");
container.textContent = "This is container";
container.classList.add("container");
container.addEventListener('click', onClickBtn);

const buttonAdd = document.createElement("button");
buttonAdd.textContent = "Add button";
buttonAdd.classList.add("pressBtn");
buttonAdd.addEventListener('click', onClickCreateButtons)

main.append(buttonAdd, container);

let countBtn = 1;

function onClickCreateButtons() {
    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.textContent = `Button${countBtn}`;
    newButton.classList.add("pressBtn");
    countBtn += 1;
    container.append(newButton);
}

function onClickBtn(e) {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }
    
    console.log(`Click on ${e.target.textContent}`)
}

export const newFunction = () => {
    console.log("newFunction is run");
}