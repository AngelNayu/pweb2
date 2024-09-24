
//inicializar un arreglo vacio para el carrito de compras
let carrito=[];

var total;

//agregamos los productos que se van a utilizar dentro del arreglo

let camisa= {
    nombre:"Camisa",
    precio:300,
}
let pantalon= {
    nombre:"Pantalon",
    precio:500,
}
let zapatos= {
    nombre:"Zapatos",
    precio:800,
}
let sombrero= {
    nombre:"Sombrero",
    precio:200,
}


//funcion para mostrar los productos de la tiendas
function mostrarProductos(){
    return parseInt(prompt(`
    "Opciones disponibles en la tienda"
    1. Camisa -$300
    2. Pantalon - $500
    3. Zapatos - $800
    4. Sombrero- $200
    5. Ver Carrito y Total
    6. Salir
    `));
}

//funcion para agregar los productos al carrito

//funcion para mostrar los productos del carrito

//funcion para mostrar el total del carrito

//funcion que maneja el flujo del programas
function iniciaPrograma(){
    let continuar = true;

    while(continuar){
        let opcion= mostrarProductos();
    }
}


iniciaPrograma();