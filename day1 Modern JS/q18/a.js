if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x); 
// ReferenceError: x is not defined because x is block-scoped so it is only available inside the block.
// y is function-scoped so it is accessible outside the block.