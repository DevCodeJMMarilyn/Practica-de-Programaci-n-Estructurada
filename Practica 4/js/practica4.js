const usuarios = [
    { "name": "Nestor", "Edad": 28, "Carrera": "Computación", "Year": "?" },
    { "name": "Dinora", "Edad": 30, "Carrera": "Computación", "Year": "?" },
    { "name": "Stefany", "Edad": 19, "Carrera": "Software", "Year": 2 },
    { "name": "Stacy", "Edad": 17, "Carrera": "Software", "Year": 1 },
    { "name": "Mishi", "Edad": 17, "Carrera": "Software", "Year": 1 },
    { "name": "Oscar", "Edad": 19, "Carrera": "Software", "Year": 1 },
    { "name": "Gustavo", "Edad": 18, "Carrera": "Software", "Year": 2 },
];

//1ra forma
const usuariosFilter = usuarios.filter( (x) => {
    /*if( x.Carrera == "Software" ){
        return x;
    }*/
    return x.Carrera== "Software" && x.Year== "1"

})

console.log(usuariosFilter)

//2da forma
const usuariosOther = usuarios.filter( (e) =>{
    return e.Edad == "17"

})
console.log(usuariosOther)

//3ra forma
const usuariosMap = usuarios.map((user) =>{
    return{
        "nombre": user.name,
        "edad": user.Edad
    }
})
console.log(usuariosMap);