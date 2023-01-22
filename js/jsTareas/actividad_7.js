/*1.Declara una variable “let edad = Number”, luego crea un condicional “if” donde hagas una comparación,
    si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. De lo contrario “NO VÁLIDO”.*/

let edad = Number(prompt("Ingresa tu edad: "));

    if(edad >= 18){
        console.log("VÁLIDO");
    }else{
        console.log("NO VÁLIDO");
    }

    console.log("\n=============================================================================\n");
/*2.Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3
    claves e imprime todo el array en consola con un bucle “for”.*/

const arreglo = [
    {id:1,Nombre:"Gabriel",edad:21},
    {id:2,Nombre:"Juan", edad:22},
    {id:3,Nombre:"Pedro", edad:20},
    {id:4,Nombre:"Pablo", edad:19}
];
    for(i=0;i<=arreglo.length;i++){
        console.log(arreglo[i]);

    }
    console.log("\n=============================================================================\n");

/*3.Crear un bucle switch donde simula la venta de entradas al cine.
    Donde dependiendo de la edad el cliente recibe alguna promoción.*/

    console.log("CINE");
    menu = true;
    while(menu){
        let EdadCliente = Number(prompt("Ingresa tu edad: "));

        switch(menu){
            case (EdadCliente<12):{
                console.log("Por tu edad recebiras una tarifa infantil :)");
                break;
            }
            case (EdadCliente >= 12 && EdadCliente <18):{
                console.log("Por tu edad recebiras una tarifa de estudiante");
                break;
            }
            case (EdadCliente>=18 && EdadCliente < 60):{
                console.log("Por tu edad recebiras una tarifa normal");
                break;
            }

            case (EdadCliente>=60):{
                console.log("Por tu edad recebiras una tarifa de adultos mayores :)");
                break;
            }
            default:
                console.log("La edad que ingresate no es validad :(");
        }
        
        let respuesta = prompt("¿deseas comprar otra entrada? Si/No");
        if(respuesta =='No')
        {   
            menu = false;
            console.log("Gracias por su compra vuelva pronto")
            

        }
    }
    console.log("\n=============================================================================");
