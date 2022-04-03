function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  }
  else{
      result = input1.toString() + input2.toString();
  }

  return result
}

console.log("Shagun","Chaurasia")
console.log("Shagun", 2);
console.log(4+8)
console.log(4 + "Test");
console.log(4 + "5");

