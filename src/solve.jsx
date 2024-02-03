let res;

export function solve(input) {
  if (input.includes("add")) {
    res = add(input);
    console.log(res);
  }
  if (input.includes("substract")) {
    res = substract(input);
    console.log(res);
  }
  if (input.includes("divide")) {
    res = divide(input);
    console.log(res);
  }
  if (input.includes("multiply")) {
    res = multiply(input);
    console.log(res);
  }
  if (input.includes("modulus")) {
    res = modulus(input);
    console.log(res);
  }
  return res;
}

let add = (input) => {
  let result = input.split("add");
  return parseInt(result[0]) + parseInt(result[1]);
};
let substract = (input) => {
  let result = input.split("substract");
  return parseInt(result[0]) - parseInt(result[1]);
};
let divide = (input) => {
  let result = input.split("divide");
  return parseInt(result[0]) / parseInt(result[1]);
};
let multiply = (input) => {
  let result = input.split("multiply");
  return parseInt(result[0]) * parseInt(result[1]);
};
let modulus = (input) => {
  let result = input.split("modulus");
  return parseInt(result[0]) % parseInt(result[1]);
};
