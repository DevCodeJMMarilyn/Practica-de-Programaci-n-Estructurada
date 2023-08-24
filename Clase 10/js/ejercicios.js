function factorial (number){
    if (number === 0 || number === 1)
        return 1;

    return number * factorial(number - 1);

    //Explicacion
    //5 * factorial ( 5-1 )
    //5 * factorial ( 4-1 )
    //5 * factorial ( 3-1 )
    //5 * factorial ( 2-1 )
    //5 * factorial ( 1-1 )
}
console.log(factorial(5));


function sum(number) {

    //caso base
    if (number === 1)
        return number;

    return number + sum(number-1);

}
console.log(sum(5));


//ejemplo 2 
const person = {

    fistName: "Danielle",
    lastName: "conway",
    address:{
        street: "Calle principal",
        city: "San Miguel",
        country: "El Salvador"
    },
    hobbies: [`Leer`, `escuchar música`, `ver series de asesinos seriales`]
}
console.log(person.fistName);
console.log(person.hobbies[0]);
console.log(person.address.city);

const employees = [
    { id: 1, fullName: "Gus gus", email: "gusrivas@gmail.com", age: 18},
    { id: 2, fullName: "Estacy ", email: "estacibenitez@gmail.com", age: 17},
    { id: 3, fullName: "Isaí malamuerte", email: "isaitupeorpesadilla@gmail.com", age: 19},
    { id: 4, fullName: "Androso", email: "androsodontstopwork@gmail.com", age: 21},
    { id: 5, fullName: "fany fan ", email: "estefanyconE@gmail.com", age: 19},
    { id: 6, fullName: "mishi", email: "mishimishi@gmail.com", age: 17},
    { id: 7, fullName: "Nestor Nectar Rivas", email: "elinge@gmail.com", age: 30},
    { id: 8, fullName: "Elizabeth Cruz La inge", email: "lainge@gmail.com", age: 20},
];

const filteredEmployees = employees.filter(employee => employee.id == 1);

console.log(filteredEmployees);

//ejemplo 3
const entry = prompt("Cuantos datos desea ingresar: ");
const number = [];

for (let i = 0; i < entries; i++){

    let value = prompt
}//aqui lo dejaste


function validateInput(entry){

    if(isNaN(entry)|| entry === null || entry === undefined || entry.trim() === ""){
        return console.log("Debe ingresar un numero valido");

    }else {
        return Number(entry);
    }
}
