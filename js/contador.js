//README
/*  Este script es la configuración de los contadores que existen dentro de cada opcion de activos.

    En la sección de pesos: 
    Contador 1) Cuenta la cantidad de acciones y/o bonos que tiene el usuario, para luego completarlos.
    
    En la sección de moneda extranjera:   
    Contador 2) Cuenta la cantidad de monedas extranjeras, aparte del dolar, que tiene el usuario, para luego completarlos.
    Contador 3) Cuenta la cantidad de acciones y/o bonos en dolares que tiene el usuario, para luego completarlos.
    
    En la sección de criptomonedas: 
    Contador 4) Cuenta la cantidad de distintas criptomonedas que tiene el usuario, para luego completarlos.
*/
/*  Los scripts funcionan de la siguiente manera:
    Creo la variables "contador_1", la cual almacenara el valor del contador.
    A los elementos identificado con la class="btn" (en este caso son 2, sumar y reiniciar) los hago pasar
    por una función que, al hacer click, toma todos los valores de la class.
    Luego genero una lista que toma las clases del evento (o botón donde hago click).
    Luego, a traves de un condicional reviso con el metodo de listas contains() si existe la clase "sumar" o "reiniciar"
    De acuerdo a la presencia de una u otra el contador suma 1 unidad o vuelve a 0.
    Luego se envia el valor al DOM, para modificar el numero dinamicamente.
    Guardo el valor en la "Local Storage" para saber el numero de inputs a generar en el paso siguiente.
*/               
/*  Las funciones counters que tienen null en la pagina dan un error, pero no afecta el desempeño da la aplicación.
//  Por ejemplo, contador_2, contador_3 y contador_4, en el primer contador dan un error de null. Pero no afecta a contador_1
//  Asi con todas los contadores.
//  Intente meter condicionales, pero no encontre la forma y decidi dejarlo de esta forma :( 
*/

let contador_1 = 0;
let contador_2 = 0;
let contador_3 = 0;
let contador_4 = 0; 

const counter = (contador,contador_nombre) => {
    document.querySelectorAll(".btn").forEach((boton) => { 
        boton.addEventListener("click",(e) => {
            lista_de_clases = e.currentTarget.classList;                
            if(lista_de_clases.contains("sumar")){
                contador++;                          
            }
            else if(lista_de_clases.contains("reiniciar")){                 
                contador=0;
            }
            document.getElementById(contador_nombre).textContent = contador; 
            localStorage.setItem(contador_nombre, JSON.stringify(contador));
        })
    })
}

counter(contador_1,"contador_1")
counter(contador_2,"contador_2")
counter(contador_3,"contador_3")
counter(contador_4,"contador_4")