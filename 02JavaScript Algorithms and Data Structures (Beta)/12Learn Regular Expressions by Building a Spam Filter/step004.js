const isSpam = (msg) => false;

/* 
const isSpam = (msg) => {
  return false;
};

You’re using an explicit return (because of the {} block).

✅ To make it an implicit return, you must remove the curly braces and return keyword:

const isSpam = (msg) => false;

That’s the correct syntax for an arrow function with an implicit return.

*/
