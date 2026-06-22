let identity :{
    name:string,
    age:number,
    phone:number,
    street?:string
}= {
    name:"john",
    age:30,
    phone:1234567890
}


let car ={
    name:"BMW",
    model:2032
}
console.log(car.name);


interface baby{
    type:string,
    color:string,
    weight:number,
    height?:number
}
let mybaby:baby={
    type:"infant",
    color:"fair",
    weight:12
}