class Car {
  constructor(a, b) {
    this.name = b;
    this.brand = a;
  }
  showDetails() {
    console.log(`${this.name} ${this.brand}`);
    // return "Hello";
  }
}

let c1 = new Car("Suzuki", "Desire");

console.log(c1);
// console.log(c1.showDetails());

class SUV extends Car {
  constructor(c, d) {
    super(c, d);
    this.buyer = "Hetuk";
  }
}

class superCar extends SUV {
  constructor(c, d) {
    super(c, d);
    this.type = "Super Car";
  }
}

let c2 = new superCar("Audi", "Audi Class 7");
console.log(c2);

var car = {
  type: "Mini SUV",
  brand: "Renault",
};

function printBrand(object) {
  console.log(object.brand);
}

printBrand(car);

var car1 = {
  type: "Mini SUV",
  brand: "Renault",
  //   printTheValue: () => {
  printTheValue: function () {
    console.log(this.brand);
  },
};

car1.printTheValue();

// OOP's Concepts Are:-

// 1 => Inheritance - That Allows You To Borrow The Property Of Object.
// 2 => Encapsulation - Create Private Variable
// 3 => Abstraction - Hide The Complexity
// 4 => Ploymorphism - One Common Function Have Every Class With Different Value

// Encapsulation

class Cars {
  #count; // Private Variable You Cannot Access Outside Of It
  constructor(a, b) {
    this.name = a;
    this.brand = b;
    this.#count = 100;
  }

  showDetail() {
    console.log(`${this.name} ${this.brand} ${this.#count}`);
  }

  getCount() {
    return this.#count; // Getter Method To Access Private Field
  }
}

let e = new Cars("Thar", "Mahindra");

console.log("This Is Encapsulation", e); // Won't Show #count
// console.log("This Is Encapsulation", e, e.showDetail()); // Won't Show #count
console.log(e.getCount()); // Now We Can See The Private Vlaue (100)

// Abstraction

class bankAccount {
  #balance;

  constructor(accontHolder) {
    this.accontHolder = accontHolder;
    this.#balance = 0;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log("Deposited ₹${amount}");
    } else {
      console.log("Invalid Deposit Amount");
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log("Withdrawn ₹${amount}");
    } else {
      console.log("Insufficient Balance");
    }
  }

  checkBalance() {
    console.log("Current Balance: ₹${this.balance}");
  }
}
