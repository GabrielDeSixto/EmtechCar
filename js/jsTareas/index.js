/* TAREA SEMANA 6

1.-Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log().
*/

function suma(a,b){
    return a+b;
}

console.log(suma(5,8));


/*
2.-Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), 
imprimir su resultado en la terminal con console.log().
*/

function comparacion(a,b){
    if(a > b ){
        console.log(`${a} es mayor que ${b}`);
    }else if(a<b){
        console.log(`${b} es mayor que ${a}`);
    }else if(a===b){
        console.log(`${a} es igual que ${a}`);
    }else{
        console.log(`${a} y ${a} son diferentes`);
    }

   
}

console.log(comparacion(8,8));

/*
3.-Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log().
*/

flechasuma = (a,b) => a+b;

console.log(flechasuma(9,8));


 comparacionflecha=(a,b)=>{
    if(a > b ){
        console.log(`${a} es mayor que ${b}`);
    }else if(a<b){
        console.log(`${b} es mayor que ${a}`);
    }else if(a===b){
        console.log(`${a} es igual que ${a}`);
    }else{
        console.log(`${a} y ${a} son diferentes`);
    }

   
}
console.log(comparacionflecha(5,5))


/*
4.-Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas.
 Imprimir su resultado en la terminal con console.log().
 */

//Objeto
const mascota ={
    nombre: 'gato',
    color: 'negro',
    ojos: 2,
    naris: 'rosa',
    patas: 4
}

//Desestructuracion

const {nombre,color,naris} = mascota;

console.log(nombre,color,naris);
 
/*
5.-Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. 
Imprimir su resultado en la terminal con console.log(). */

//arreglo
const arreglo = ['Gabriel', 1.75, 21,['Mexico',2023]];

//desestructuracion
const [nombreP,edad, ,ArrayValue] = arreglo;

console.log(nombreP,edad,ArrayValue)