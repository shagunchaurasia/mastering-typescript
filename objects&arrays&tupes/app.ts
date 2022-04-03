const person: { name: string; age: number } = {
  name: "Shagun",
  age: 28,
};

console.log(person);
console.log(person.name);

let favoriteActivities: string[];
favoriteActivities = ["Reading"];

let mixedArray: any[];
mixedArray = ["shagun", 1, 2, true];

let mixedArray2: (string|number|boolean)[];
mixedArray2 = ["shagun", 1, 2, true];


let tupleExample:[number,string] = [1,"Admin"]

// tupleExample[0] = "admin"; //Gives error since TS wants number,string in the tuple
tupleExample[1] = "admin"
tupleExample.push("admin");//Push is an exception for tuples so it cannot be caught by TS