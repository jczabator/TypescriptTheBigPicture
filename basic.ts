export class Customer {
  name: string;
  isActive: boolean;

  constructor(name: string) {
    this.name = name;
    this.isActive = true;
  }

  announce() {
    return "Hello, my name is " + this.name;
  }
}

// create a new instance
let firstCustomer = new Customer("Alice");
let newMessage: string = firstCustomer.announce();

//change the text on the page
let webHeading = document.querySelector("h1");
webHeading!.textContent = newMessage;

class SpecialCustomer extends Customer {
  // ...
}
