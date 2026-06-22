/**
 * Example: Function returning multiple types using union types
 */

// Union type - function can return string, number, or boolean
function getValue(type: string): string | number | boolean {
  switch (type) {
    case "number":
      return 42;
    case "string":
      return "Hello, World!";
    case "boolean":
      return true;
    default:
      return "unknown type";
  }
}

// Function overloads - different return types based on input
// function processInput(input: string): string;
// function processInput(input: number): number;
// function processInput(input: boolean): boolean;
// function processInput(input: string | number | boolean): string | number | boolean {
//   return input;
// }

// Type guards to narrow the returned type
function getRandomValue(): string | number {
  return Math.random() > 0.5 ? "text" : 100;
}

// Usage examples
const value1 = getValue("number"); // number
const value2 = getValue("string"); // string
const value3 = getValue("boolean"); // boolean

// Type narrowing with type guards
const randomValue = getRandomValue();
if (typeof randomValue === "string") {
  // TypeScript knows randomValue is string here
  console.log(`String value: ${randomValue.toUpperCase()}`);
} else {
  // TypeScript knows randomValue is number here
  console.log(`Number value: ${randomValue.toFixed(2)}`);
}
