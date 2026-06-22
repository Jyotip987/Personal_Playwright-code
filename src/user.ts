interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

const printUserDetails = (user: User): void => {
    console.log(`ID: ${user.id}, Name: ${user.name}`);
    if (user.email) {
        console.log(`Email: ${user.email}`);
    }
};

const newUser: User = { id: 1, name: "Codey", email: "codey@example.com" };

printUserDetails(newUser);
//------------
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
//or
interface Person {
  name: string;
  age: number;
}
 
function greet1(person: Person) {
  return "Hello " + person.name;
}
//or
type Person3 = {
  name: string;
  age: number;
};
 
function greet2(person: Person) {
  return "Hello " + person.name;
}

