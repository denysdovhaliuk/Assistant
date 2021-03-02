 class OfficialDealer {
  constructor() {
    this.customer = [];
  }
  orderAuto(customer, auto, info) {
    const name = customer.getName();

    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomerList(name);
  }

  addToCustomerList(name) {
    this.customer.push(name);
  }

  getCustomerList() {
    return this.customer;
  }
 };

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

const mediator = new OfficialDealer();

const yauhen = new Customer('Yauhen', mediator);
const valera = new Customer('Valera', mediator);

yauhen.makeOrder('Tesla', 'With autopilot!');
valera.makeOrder('Audi', 'With parktronik!');

 console.log(mediator.getCustomerList());
