let numeros = []
let otrosNumeros = []
let arrayFinal = []
for (let i = 1; i <= 100; i++){
    let mensaje = `El valor es: ${i}`
    numeros.push(mensaje)
}

for (let i = 101; i <= 200; i++){
    let mensaje = `El valor es: ${i}`
    numeros.push(mensaje)
}

arrayFinal= [...numeros, ...otrosNumeros]

arrayFinal.forEach((i) => {
    console.log(i)
})

let persona = { //[0] posición
    nombre: `Mishi`,
    edad: 17,
    carrera: `Software`
}

let persona2 = { //[1]
    nombre: `Mishi.exe`,
    edad: 18,
    carrera: `SoftwareII`
}

let persona3 = { //[2]
    nombre: `Mishi.end`,
    edad: 19,
    carrera: `SoftwareIII`
}

let arrayObjeto = [persona, persona2, persona3]

arrayObjeto.forEach ((i) => {
    console.log(i)
})

console.log(arrayObjeto[2].carrera)

