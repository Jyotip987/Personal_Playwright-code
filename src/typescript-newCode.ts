// TypeScript Object examples

// 1. Basic object type with an interface
interface Person {
  readonly id: number;
  name: string;
  age: number;
  email?: string; // optional property
}

const alice: Person = {
  id: 1,
  name: "Alice",
  age: 28,
  email: "alice@example.com",
};

// 2. Object type using a type alias and nested objects
type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type Employee = {
  id: number;
  person: Person;
  address: Address;
  roles: string[];
};

const employee: Employee = {
  id: 101,
  person: alice,
  address: {
    street: "123 Main St",
    city: "Seattle",
    zipCode: "98101",
  },
  roles: ["developer", "mentor"],
};

// 3. Using the built-in object type safely
function printObjectKeys(value: object): void {
  console.log("Object keys:", Object.keys(value));
}

printObjectKeys(employee);
printObjectKeys({ firstName: "Bob", active: true });

// 4. Index signature for flexible object shapes
type Settings = {
  [key: string]: string | number | boolean;
};

const appSettings: Settings = {
  theme: "dark",
  maxItems: 50,
  enabled: true,
};
type Car ={
  [property:string ]: string |number|boolean
}
const ChooseCar: Car ={
color : "green",
Vnumber : 100000,
enable: true
}
// 5. Record utility type for maps keyed by string literals
const colorMap: Record<"primary" | "secondary" | "accent", string> = {
  primary: "#0057ff",
  secondary: "#ff5500",
  accent: "#00c48c",
};

// 6. Function returning an object
function createProduct(name: string, price: number) {
  return {
    name,
    price,
    inStock: true,
    summary(): string {
      return `${name} costs $${price.toFixed(2)}`;
    },
  };
}

const product = createProduct("Keyboard", 79.99);
console.log(product.summary());

// 7. Readonly object to prevent mutation
const readonlyPerson: Readonly<Person> = {
  id: 2,
  name: "Charlie",
  age: 34,
};

console.log(readonlyPerson);

// 8. Recommended object type usage over the general Object type
const genericObject: object = { x: 10, y: 20 };
console.log(genericObject);
