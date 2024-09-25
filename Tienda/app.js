
//inicializar un arreglo vacio para el carrito de compras
let carrito=[];

//un objeto general para los productos que sera utilizado mas adelante
let prenda= {
    nombre: "",
    precio:0,
}


//funcion para mostrar los productos de la tiendas
function mostrarProductos(){
    return parseInt(prompt(`
    "Opciones disponibles en la tienda, agregue lo que desee al carrito "
    1. Camisa -$300
    2. Pantalon - $500
    3. Zapatos - $800
    4. Sombrero- $200
    5. Ver Carrito y Total
    6. Salir
    `));
}


//funcion para mostrar el total del carrito
function verCarritoTotal(){
    if(carrito.length === 0){
        alert("No se han añadido productos al carrito");

    }else{
        let total=0;
        let mensaje = "en el carrito hay :\n";
        carrito.forEach((producto, index)=>{
            mensaje+= `${index+1}.-${prenda.nombre}- ${prenda.precio} \n`
            total+= prenda.precio;
        });
        alert(mensaje);
        alert("\n EL total del carrito es "+ total);
        

    }
}


/*funcion que maneja el flujo del programas e inicializamos las opciones
las opciones que se ejecutaran de acuerdo a lo que escojan en el menu
*/
function iniciaPrograma(){
    let continuar = true;

    while(continuar){
        let opcion= mostrarProductos();

        switch(opcion){
            case 1:
                 prenda= {
                    nombre: "Camisa",
                    precio:300,
                };
                carrito.push(prenda);
                console.log(`producto- "${prenda.nombre}"a sido agregado correctamente`);
                break;
            case 2:
                 prenda= {
                    nombre: "Pantalon",
                    precio:500,
                };
                carrito.push(prenda);
                console.log(`producto- "${prenda.nombre}"a sido agregado correctamente`);
                break;
            case 3:
                prenda= {
                    nombre: "Zapatos",
                    precio:800,
                };
                carrito.push(prenda);
                console.log(`producto- "${prenda.nombre}"a sido agregado correctamente`);
                break;
            case 4:
                prenda= {
                    nombre: "Sombreo",
                    precio:200,
                };
                carrito.push(prenda);
                console.log(`producto- "${prenda.nombre}"a sido agregado correctamente`);
                break;
            case 5:
                verCarritoTotal();
                break;
            case 6:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("opcion no valida, intenta nuevamente");
            
        }
    }
}


iniciaPrograma();