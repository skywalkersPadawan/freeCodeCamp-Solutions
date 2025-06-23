const callStack = [];

const a = () => {
  return "freeCodeCamp " + b();
};

const b = () => {
  return "is " + c();
};

const c = () => {
  return "awesome!";
};

console.log(a());
// remove all the above code and that will pass this challenge you can then go to the next step
