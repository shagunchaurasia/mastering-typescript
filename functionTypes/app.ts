function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result", num);
}

function undefinedType(num: number): undefined {
  console.log("result", num);
  return;
}

printResult(add(5, 12));
