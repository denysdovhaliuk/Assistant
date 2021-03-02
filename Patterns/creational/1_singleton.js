let instance;

class Counter {
  constructor() {
    if (!instance) instance = this;
    console.log(instance)
    return instance
  }
}

let counter = new Counter();
counter.a = 0;

let counter1 = new Counter();
counter1.b = 1;

console.log('counter ->', counter);
console.log('counter1 ->', counter1);
