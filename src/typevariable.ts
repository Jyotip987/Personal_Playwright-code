function greet(name: string): string {
    return `Hello, ${name}!`;
}

const world: string = "TypeScript";

console.log(greet(world));

let val = {}
if(val){
console.log("Truthy value")
}else{
console.log(`${val} is falsy value`)
}

const num1 = "3"
const num2= "2.23"

const convNum1= num1
const convNum2 = num2

console.log(convNum1 + convNum2)