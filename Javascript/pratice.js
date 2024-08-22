window.name = "한승철"

const person = {
  name: "Alice",
  sayHello: () => {
    console.log("Hello, " + this.name);
  },
};

person.sayHello(); // Hello, undefined
