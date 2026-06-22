// typeof operator examples in TypeScript

// 1. Basic typeof - returns the type as a string
let message = "Hello, TypeScript!";
console.log(typeof message);  // "string"

let count = 42;
console.log(typeof count);     // "number"

let isActive = true;
console.log(typeof isActive);  // "boolean"

let obj = { name: "John", age: 30 };
console.log(typeof obj);       // "object"

let func = () => {};
console.log(typeof func);      // "function"

// 2. Using typeof for type inference
let price = 100;
type PriceType = typeof price;  // type PriceType = number

let user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};
type UserType = typeof user;
/*
type UserType = {
  name: string;
  age: number;
  isAdmin: boolean;
}
*/

// 3. typeof in function parameter type
function greet(person: typeof user) {
  console.log(`Hello, ${person.name}!`);
}
greet({ name: "Bob", age: 35, isAdmin: true });  // Hello, Bob!

// 4. typeof with array
let numbers = [1, 2, 3, 4, 5];
type NumbersType = typeof numbers[number];
  // type NumbersType = number
  

// 5. typeof with const assertion (preserves literal types)
const status = {
  code: 200,
  message: "OK"
} as const;
type StatusType = typeof status;
/*
type StatusType = {
  readonly code: 200;
  readonly message: "OK";
}
*/

// 6. typeof for type narrowing
function processValue(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return `Number: ${value}`;
  } else {
    return "Boolean value";
  }
}

console.log(processValue("hello"));  // "HELLO"
console.log(processValue(42));       // "Number: 42"
console.log(processValue(true));     // "Boolean value"

// 7. typeof for conditional type logic
type IdType<T> = T extends string ? "string-id" : "number-id";

type StringId = IdType<string>;   // "string-id"
type NumberId = IdType<number>;  // "number-id"

// 8. typeof with indexed access
interface ApiResponse {
  id: number;
  name: string;
  status: "active" | "inactive";
}
type ResponseIdType = ApiResponse["id"];  // number
type ResponseStatusType = ApiResponse["status"];  // "active" | "inactive"

// 9. typeof vs instanceof
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}
class Cat extends Animal {
  color: string;
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
}

function describeAnimal(animal: Dog | Cat): string {
  if (animal instanceof Dog) {
    return `${animal.name} is a ${animal.breed} dog`;
  } else if (animal instanceof Cat) {
    return `${animal.name} is a ${animal.color} cat`;
  }
  return "Unknown animal";
}

const buddy = new Dog("Buddy", "Golden Retriever");
const whisker = new Cat("Whisker", "Orange");

console.log(describeAnimal(buddy));   // "Buddy is a Golden Retriever dog"
console.log(describeAnimal(whisker)); // "Whisker is a Orange cat"

// 10. typeof with keyof
interface Config {
  host: string;
  port: number;
  ssl: boolean;
}
type ConfigKeys = keyof Config;  // "host" | "port" | "ssl"
type ConfigValueTypes = Config[keyof Config];  // string | number | boolean

function getConfigValue<K extends keyof Config>(config: Config, key: K): Config[K] {
  return config[key];
}

const myConfig: Config = { host: "localhost", port: 8080, ssl: true };
console.log(getConfigValue(myConfig, "host"));  // "localhost"
console.log(getConfigValue(myConfig, "port"));   // 8080
