interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let person1: Person;

person1 = {
  name: "Shagun Chaurasia",
  age: 28,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
