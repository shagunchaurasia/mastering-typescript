function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion == "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

console.log(combine(4, 8, "as-number"));
console.log(combine(4, "36", "as-number"));
console.log(combine("4", "5", "as-number"));
console.log(combine("Shagun ", "Chaurasia", "as-text"));
export {}; // 👈️ make file ES Module
