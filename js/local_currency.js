//README
/*  En esta sección genero la funcionalidad del bloque "Moneda Local $ARS": 
La primer parte son las definiciones de una funcion constructura "Wallet Assets" que nos va a servir para almacenar dentro de la memoria local los inputs del usuario a traves de distintos nombres que estan identificados.
Ademas, creamos los Objetos y Arrays a usar:
"case_1_1_asset":       Objeto que tiene los $ARS en efectivo.
"case_1_2_asset":       Objeto que tiene los Plazo Fijo $ARS.
"case_1":               Objeto que almacena temporalmente el valor de las acciones o bonos en $ARS para luego push al objeto "case_1_1".
"case_1_1":             Array que tiene las acciones o bonos en $ARS.

Finalmente creamos las variables a usar dentro de las funciones:
"asset_input_amount":   Cantidad de un activo predefinido. Es 0 cuando el usuario no ingresa nada.
"asset_input_name":     Nombre de un activo predefinido. Es "" cuando el usuario no ingresa nada.
"asset_input_value":    Valor total de los activos que el usuario tiene. Segun el caso, el numero puede ser en pesos o dolares.
"asset_quantity":       Valor usado en una estructura FOR para determinar el numero de inputs a mostrar al usuario, en base al contador (Ver archivo "contador.js")
*/

function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}

let evaluar = async (key) => {
    data = await JSON.parse(localStorage.getItem(key));
    for (value of data){
        console.log(value.asset_input_value);
    }
}

let case_1_1_asset={};      
let case_1_2_asset={};    
let case_1_1=[];            
let case_1={};              
let asset_input_amount=0;
let asset_input_name="";   
let asset_input_value=0;    
let asset_quantity=0;    

/* Libreria Sweet Alert generando un mensaje informativo acerca de lo que se va a solicitar
*/
Swal.fire({
    title: 'Moneda Local $ARS',
    text: "En esta sección le consultaremos por depositos, plazo fijos y acciones/bonos que usted tenga.",
    icon: 'question',
    confirmButtonColor: '#0B0033',
})

//README
/*  En esta sección explico la funcionalidad del bloque "Moneda Local $ARS"
    La funcionalidad se divide en dos partes:
    1) Tomar valor de activos unicos ya determinados por el sistema, por ej: Pesos o Pesos en plazo fijo.
    2) Tomar valores de activos que dependen de la cantidad que tenga el usuario, por ej: Bonos, Acciones, etc.

    Se crearon a partir de este modelo funciones que toman el valor de un input y lo guardan en el LocalStorage los objetos generados con el contructor "Wallet_assets"
    */
/*  1) Primer parte de la funcionalidad:
    La funcion "save_asset_data_pesos_1" es la funcion que almacena la cantidad de pesos depositados. Se ejecuta al hacer click en el boton "Continuar" con id: "pesos_1_next_step_btn".
    Esta funcion toma el valor ingresado por el usuario, lo guarda en la variable "asset_input_amount", resetea el formulario y guarda el valor de la variable en formato JSON en el LocalStorage para tomarlo mas abajo y volver a definir asset_input_amount. Esta redundancia se da ya que al querer utilizar el metodo ".value" para el constructor, me era rechazado.
    Luego "asset_input_name" y "asset_input_value" estan predefinidos. 
    Luego son llevados al contructor que crea un objeto donde el 3er item es el valor monetario final de lo que tiene el usuario (por eso la multiplicación).
    Finalmente el objeto creado por el contructor se guarda en el LocalStorage para ser utilizado mas adelante.
    La parte inferior de la funcion selecciona forms del archivo HTML y cambia su display de "block" a "none" y viceversa. Esto da el dinamismo de la pagina, yendo de un formulario a otro sin la necesidad de cambiar de HTML.
    Debajo, llamo la funcion ante el evento del click en el boton "Continuar".

    La funcion "save_asset_data_pesos_2" es la funcion que almancena los pesos en plazo fijo.
    Funciona de igual manera.
*/
const save_asset_data_pesos_1 = (e) =>{
    e.preventDefault();

    asset_input_amount = document.getElementById("pesos_input_amount").value;                
    localStorage.setItem("pesos_depositados", JSON.stringify(asset_input_amount));
    
    document.querySelector("form").reset(); 
    
    asset_input_name="$ARS";   
    asset_input_amount= JSON.parse(localStorage.getItem("pesos_depositados"));   
    asset_input_value=1;                                                                             

    case_1_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);
    
    localStorage.setItem("Pesos Depositados", JSON.stringify(case_1_1_asset));

    const form_pesos_depositados = document.querySelector("#form_pesos_depositados");           
    const form_plazo_fijo  = document.querySelector("#form_plazo_fijo");
    form_pesos_depositados.style.display="none";                                                   
    form_plazo_fijo.style.display="block";
}
document.getElementById("pesos_1_next_step_btn").addEventListener("click",save_asset_data_pesos_1);  

const save_asset_data_pesos_2 = (e) =>{
    e.preventDefault();

    asset_input_amount = document.getElementById("plazo_fijo_input_amount").value;                      
    localStorage.setItem("plazo_fijo", JSON.stringify(asset_input_amount)); 
    
    document.querySelector("form").reset();  
    
    asset_input_name="PF $ARS"; 
    asset_input_amount= JSON.parse(localStorage.getItem("plazo_fijo"));                                     asset_input_value=1;                                                                                

    case_1_2_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);
    
    localStorage.setItem("Plazo Fijo", JSON.stringify(case_1_2_asset));
    
    const form_plazo_fijo = document.querySelector("#form_plazo_fijo");
    const form_bonos_acciones_cantidad  = document.querySelector("#form_bonos_acciones_cantidad");
    form_plazo_fijo.style.display="none";
    form_bonos_acciones_cantidad.style.display="block";
}
document.getElementById("pesos_2_next_step_btn").addEventListener("click",save_asset_data_pesos_2);    

//README
/*  2) Segunda parte de la funcionalidad:
    En esta sección genero un numero de objetos, que depende del valor ingresado en el contador por el usuario, a partir de una cantidad de forms que son tambien funcion del valor ingresado en el contador.
    En primera instancia creo la variable "string_input_bonos_pesos" como un string vacio. Con esta variable creo una función que al ser llamada genera un bloque HTML que se modifica en funcion al parametro "parametro". Esta funcion modifica los id de las etiquetas y titulos del bloque HTML.
*/
let string_input_bonos_pesos="";
function string_input_1(parametro){
    string_input_bonos_pesos=`<div class='form_box'> <p style='color:rgb(235, 64, 52)'>Ingrese el nombre del Bono o Accion no. ${parametro}</p></div><div class='form_box'><label>Nombre del Bono/Acción</label><input id='bonos_acciones_input_name_${parametro}' type='text' placeholder='Nombre Activo'></div><div class='form_box'><label>Cantidad de Bonos/Acciones </label><input id='bonos_acciones_input_amount_${parametro}' type='number' placeholder='Cantidad de Activos'></div><div class='form_box'><label>Valor del Bono/Acción </label><input id='bonos_acciones_input_value_${parametro}' type='number' placeholder='Valor del activo'></div>`
}

//README
/*  En esta sección explico la funcionalidad del contador:
    Seleccióno el bloque donde se generaran la cantidad de inputs dada por el contador y lo almaceno en una variable.
    Genero una funcion llamada "save_asset_data_pesos_3" que toma el valor almacenado por "contador.js" con la Clave "contador_1" (es el numero que el usuario selecciono en el contador) y lo almacena en la variable "asset_quantity".
    Genero una estructura for que itera sobre la funcion que tiene el bloque HTML generando de manera automatica los forms necesarios para el almacenamiento de la información. Quedando formadas las variables bonos_acciones_input_name_${i}, bonos_acciones_input_amount_${i}, bonos_acciones_input_value_${i}.
    La parte inferior de la funcion selecciona forms del archivo HTML y cambia su display de "block" a "none" y viceversa.
*/ 
let forms_bonos_box=document.getElementById("forms_bonos_acciones_pesos");
const save_asset_data_pesos_3 = (e) =>{
    e.preventDefault();   

    asset_quantity=JSON.parse(localStorage.getItem("contador_1"))

    document.querySelector("form").reset();  

    for(let i=1;i<=asset_quantity;i++){                                                               
        string_input_1(i);
        forms_bonos_box.innerHTML += string_input_bonos_pesos;                      
    }

    const form_bonos_acciones_cantidad  = document.querySelector("#form_bonos_acciones_cantidad");
    const form_bonos_acciones = document.querySelector("#form_bonos_acciones");     
    form_bonos_acciones_cantidad.style.display="none";
    form_bonos_acciones.style.display="block";
}
document.getElementById("pesos_3_next_step_btn").addEventListener("click",save_asset_data_pesos_3);

//README
/*  En esta sección explico la funcionalidad del bloque acciones y bonos, funcion del contador:
    Creo la funcion "save_asset_data_pesos_4" la cual crea una estructura FOR en base a la cantidad de activos que usuario selecciono en el contador. Esta estructura CONCUERDA con la creación de variables en el string dinamico superior. Por lo tanto, recorro todas las variables creadas, les asigno un valor, creo un objeto con la funcion constructora y luego pusheo el objeto a un array.
    Finalmente guardo el array de objetos creados dentro del LocalStorage y cambio la ventana para volver al menu principal.
*/
const save_asset_data_pesos_4 = (e) =>{
    for (let i=1;i<=asset_quantity;i++){                                                               
        e.preventDefault();

        asset_input_name = document.getElementById(`bonos_acciones_input_name_${i}`).value;                                                                               
        asset_input_amount = document.getElementById(`bonos_acciones_input_amount_${i}`).value;                                                                 
        asset_input_value = document.getElementById(`bonos_acciones_input_value_${i}`).value;;                        
        
        document.querySelector("form").reset();                                                             
                
        case_1 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);             
        case_1_1.push(case_1);                                                                          
    }  
            
    localStorage.setItem("Bonos Acciones $ARS", JSON.stringify(case_1_1));
    window.location.href="../pages/assets.html" 
}
document.getElementById("pesos_4_next_step_btn").addEventListener("click",save_asset_data_pesos_4);