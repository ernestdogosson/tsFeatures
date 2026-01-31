// 1
type IDType = number | string;

const showID = (id: IDType): void => {
  console.log(`Your ID is ${id}`);
};

showID(123);
showID("password");

//  2
type Fruit = "apple" | "banana" | "orange";

const eatFruit = (fruit: Fruit): void => {
  console.log(`You ate ${fruit === "banana" ? "a" : "an"} ${fruit}`);
};

eatFruit("apple");
eatFruit("banana");
eatFruit("orange");

// 3
type Result = true | false;

const printResult = (result: Result): void => {
  console.log(result ? "Pass" : "Fail");
};

printResult(true);
printResult(false);
