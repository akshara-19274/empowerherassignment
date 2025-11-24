// 1. Template Literals + Expressions
// a)
console.log(`5 + 7 = ${5 + 7}`); 
// b)
const multiLine = `Line one
Line two
Line three`;
console.log(multiLine);
// c)
const firstName = "John", lastName = "Doe";
console.log(`${firstName} ${lastName}`);

// 2. Arrow Functions & this
// a)
const square = n => n * n;
// b)
const obj1 = { value: 50, test: () => console.log(this.value) };
obj1.test(); // undefined
// c)
const obj2 = { value: 50, test() { console.log(this.value); } };
obj2.test(); // 50

// 3. Rest, Spread & Copying Objects
// a)
const product = { name: "Pen", price: 10 };
const copy = { ...product };
// b)
const aObj = { x: 1 }, bObj = { y: 2 };
const mergedObj = { ...aObj, ...bObj };
// c)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 7, 2));

// 4. Destructuring & Optional Chaining
// a)
const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a, b);
// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);
// c)
const info = {};
console.log(info?.user?.details);

// 5. Scoping (let/var/const)
// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3
// b)
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError
// c)
// const is used to prevent reassignment of the binding

// 6. Ternary Operator – Practice
// a)
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);
// b)
let age = 17;
console.log(age >= 18 ? "Adult" : "Minor");
// c)
const check = num => num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(check(-5));

// 7. Spread, Rest & Arrays
// a)
const nums = [1,2,3];
const newNums = [...nums, 4, 5];
console.log(newNums);
// b)
const arrA = ["x","y"], arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log(combined);
// c)
const printNames = (...names) => names;
console.log(printNames("A","B","C"));

// 8. Object Destructuring & Shorthand
// a)
const user1 = { id: 101, status: "active" };
const { id, status } = user1;
console.log(id, status);
// b)
const id2 = 101, role = "admin";
const user2 = { id2, role };
console.log(user2);
// c)
const nameS = "Sam", ageS = 22;
const student = { nameS, ageS, greet() { console.log(`Hello, I’m ${this.nameS}`); } };
student.greet();

// 9. Template Literals (More Practice)
// a)
console.log(`Today’s date: ${new Date().toDateString()}`);
// b)
const NAME = "Alice", SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

// 10. Arrow Function Shorthands
// a)
const add = (x, y) => x + y;
console.log(add(2,3));
// b)
const isAdult = age => age >= 18;
console.log(isAdult(20));
// c)
const double = n => n * 2;
console.log(double(10));

// 11. Spread Operator (Arrays & Objects)
// a)
const arrClone = [1,2,3];
const clone = [...arrClone];
console.log(clone);
// b)
const arrWith100 = [100, ...arrClone];
console.log(arrWith100);
// c)
const object1 = { a: 1, b: 2 }, object2 = { b: 99, c: 3 };
const merged = { ...object1, ...object2 };
console.log(merged);

// 12. Optional Chaining (More Practice)
// a)
const user3 = { name: "Akshara", address: { city: "Bangalore" } };
console.log(user3?.address?.city);
// b)
console.log(user3?.job?.title);
// c)
const company = { name: "TechCorp" };
console.log(company?.department?.manager?.name); // undefined, safe