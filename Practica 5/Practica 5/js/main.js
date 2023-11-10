//declarando funcion anónima
const suma = function(a,b){
    return a + b;  // return es para regresar un valor.

}

console.log(suma(10,10));

/*
 *Crear funcion que permita determinar una multiplicacion a partir de sumas
*/

const multi = function suma(a , b){
   /* //otra forma 
   if (b!=0){
    return a + suma(a,b-1)
}
return 0*/


    return (b !=0)? a + suma(a, b-1): 0;
}

console.log(multi(9.6,2));

/**Funcion recursiva dos formas */
let num = 0;
while(num <= 10){
    console.log(num);
    num++
}
//2da forma
function contador(number = 0){
    if (number >= 5 ){ //cuando se quita el = toma en cuenta el 5
        return;
    }

    console.log(number);
    contador(number+1);
}
console.log("Funcion recursiva ");
contador();

//Funciones anidadas
function media(datos){
    function sumatoria(serie){
        let sum = 0;
        serie.forEach(nume => {
            sum += nume;
        });

        return sum;
    }

    return sumatoria(datos)/ datos.length;
}
const misDatos = [5,7,8];
console.log (`La media de ${misDatos} es ${media(misDatos)}`);


/*Calcular la mediana */
function mediana(datosO){
    const largo = datosO.length;

    if ((largo % 2 == 0)){
        let mitadArreglo = (largo)/2;

        let anterior = mitadArreglo -1 ;
        let siguiente = mitadArreglo ;
        
        return (datosO[anterior] + datosO[siguiente]) /2;

    }else{
        let mitadArreglo = Math.round((largo)/2);
        return datos[mitadArreglo-1];

    }
}
const losDatos = [5,7,8];
console.log (`La mediana de ${losDatos} es ${media(losDatos)}`);

//
function multa(a,...args){
    args.forEach(numer =>{
        a*= numer
    })
    return a ;
}
console.log (`Funcion de vario parametros`);
console.log(multa(2));
console.log(multa(2,4));
console.log(multa(2,4,5));
console.log(multa(2,4,5,6));

//varianza ejercicio
function varianza(date){
    function sumator(serie){
        let mediaDatos = media(serie);

        let sumas = 0
        
        serie.forEach(nume => {
            let resultado = nume -mediaDatos
            sumas += nume;
        });

        return sumas;
    }

    return sumator(date)/ date.length;
}
const susDatos = [5,7,8];
console.log (`La media de ${susDatos} es ${media(susDatos)}`);