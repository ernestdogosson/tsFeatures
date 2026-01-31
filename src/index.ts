// Union Types ( | means OR )
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

// Interfaces and Type Aliases ( & means AND )

// 4
interface Book {
  title: string;
  pages: number;
}

const describeBook = (book: Book): void => {
  console.log(`The book ${book.title} has ${book.pages} pages.`);
};

describeBook({ title: "50 Shades", pages: 145 });

// 5
interface Teacher {
  name: string;
  subject: string;
}

interface Employee {
  id: number;
  email: string;
}

type SchoolTeacher = Teacher & Employee;

const printTeacherInfo = (teacher: SchoolTeacher): void => {
  console.log(
    `ID: ${teacher.id} Name: ${teacher.name} email: ${teacher.email} subject: ${teacher.subject}`,
  );
};

printTeacherInfo({
  id: 20,
  name: "Ernest",
  email: "ernest@example.com",
  subject: "Geography",
});

// 6
interface Car {
  brand: string;
  year: number;
}

const printCar = (car: Car): void => {
  console.log(`Brand: ${car.brand} Year: ${car.year}`);
};

printCar({ brand: "Toyota Camry", year: 2018 });

// Enums (fixed list of options)
// 7
enum Color {
  Red,
  Blue,
  Green,
}

const showColor = (color: Color): void => {
  if (color === Color.Red) {
    console.log("You chose red");
  } else if (color === Color.Blue) {
    console.log("You chose blue");
  } else if (color === Color.Green) {
    console.log("You chose green");
  }
};

showColor(Color.Blue);

// 8
enum PizzaSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

const orderPizza = (order: PizzaSize): void => {
  if (order === PizzaSize.Small) {
    console.log(`Your ordered a ${PizzaSize.Small} pizza.`);
  } else if (order === PizzaSize.Medium) {
    console.log(`Your ordered a ${PizzaSize.Medium} pizza.`);
  } else if (order === PizzaSize.Large) {
    console.log(`Your ordered a ${PizzaSize.Large} pizza.`);
  }
};

orderPizza(PizzaSize.Large);

// 9
enum Role {
  Admin,
  User,
  Guest,
}

const printRole = (role: Role): void => {
  if (role === Role.Admin) {
    console.log("You have full access.");
  } else if (role === Role.User) {
    console.log("You have limited access.");
  } else if (role === Role.Guest) {
    console.log("You have guess access.");
  }
};

printRole(Role.Admin);

// Generics ( <T> means reusable placeholder )
// 10
const wrapInArray = <T>(item: T): T[] => {
  return [item];
};

console.log(wrapInArray("cat"));

// 11
const firstItem = <T>(array: T[]): T | undefined => {
  return array[0];
};

console.log(firstItem([1, 2, 3]));
console.log(firstItem(["a", "b", "c"]));

// 12
const swap = <T>(item1: T, item2: T): T[] => {
  return [item2, item1];
};

console.log(swap("hello", "world"));
