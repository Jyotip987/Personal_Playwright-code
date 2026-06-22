type chai ={
    name: string;
    price: number;
    cupSize:string
}
const masalaChai :chai={
    name:"Mchai",
    price:20,
    cupSize:"medium"
}
function getChaiDetails(chaibar:chai):string|number{
    return `the price is ${chaibar.price} and cupzise is ${chaibar.cupSize}`
}

interface coffee{
    type:"black"|"latte"|"cappuccino";
}
function serveCoffer(coffeType:coffee):string{
    return `serving ${coffeType.type} coffee`
}
console.log(serveCoffer({type:"latte"}))
console.log(getChaiDetails(masalaChai))

type User = "admin"|"editor"|"viewer"
console.log(`role is ${"admin" as User}`)

// type User ={
//     role:"admin"|"editor"|"viewer"
// }
// console.log("admin" as User["role"])
let Admin: string[]=["one","two","three"]
 type userAdmin=  typeof Admin[number]
    console.log(`the user role is ${Admin} and type is ${typeof Admin}`)
let number= Admin as userAdmin[]
console.log(`the number is ${number[2]}`)