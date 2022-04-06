function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

console.log(combine("Shagun", "Chaurasia"));
console.log(combine("Shagun", 2));
console.log(combine(4, 8));
console.log(combine(4, "Test"));
console.log(combine(4, "5"));
export {}; // 👈️ make file ES Module
