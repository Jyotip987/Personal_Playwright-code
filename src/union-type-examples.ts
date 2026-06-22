// Union type examples in TypeScript

// 1. Basic union type - variable can be string OR number
let value: string | number;
value = "hello";  // OK
value = 42;       // OK
// value = true;  // Error: Type 'boolean' is not assignable to type 'string | number'

// 2. Union type with function parameter
function printId(id: string | number): void {
  console.log("ID:", id);
}
printId("ABC123");  // OK
printId(987654);    // OK

// 3. Union type with arrays
let numbers: (string | number)[] = [1, "two", 3, "four"];

// 4. Literal types with union
type Status = "loading" | "success" | "error";
let currentStatus: Status;
currentStatus = "loading";  // OK
currentStatus = "success";  // OK

// 5. Return type union (the example from your question)
function getRandomValue(): string | number {
  return Math.random() > 0.5 ? "text" : 100;
}

// 6. Type narrowing with union
function processValue(val: string | number): string {
  if (typeof val === "string") {
    return val.toUpperCase();  // TypeScript knows val is string here
  } else {
    return val.toFixed(2);     // TypeScript knows val is number here
  }
}

// 7. Nullable types (union with null/undefined)
let name: string | null = null;
name = "John";  // OK

// 8. Complex union type
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

function describeShape(shape: Shape): string {
  switch (shape.kind) {
    case "circle":
      return `Circle with radius ${shape.radius}`;
    case "square":
      return `Square with side ${shape.side}`;
    case "rectangle":
      return `Rectangle ${shape.width}x${shape.height}`;
  }
}

console.log(describeShape({ kind: "circle", radius: 5 }));  // Circle with radius 5
