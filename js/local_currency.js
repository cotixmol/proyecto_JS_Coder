//Contructor para generar los objetos con el Nombre del Activo, Cantidad del Activo y Valor del Activo
function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}
//Objetos y Arrays a usar en CryptoActivos
let case_1_1_asset={};      //Objeto que tiene los $ARS en efectivo
let case_1_2_asset={};      //Objeto que tiene los Plazo Fijo $ARS
let case_1_1=[];            //Array que tiene las acciones o bonos en $ARS
let case_1={};              //Objeto que almacena temporalmente el valor de las acciones o bonos en $ARS para luego push al objeto

//Valores iniciales de las variables relacionadas con CryptoActuvos
let asset_input_amount=0;   //Cantidad de un item predefinido, cuando no los tiene el usuario.
let asset_input_name="";    //Nombre del activo.
let asset_input_value=0;    //Valor de un item predefinido, cuando no los tiene el usuario.
let asset_quantity=0;       //Cantidad de Activos de un mismo tipo

//Alert informando al usuario sobre esta seccion
Swal.fire({
    title: 'Moneda Local $ARS',
    text: "En esta sección le consultaremos por depositos, plazo fijos y acciones/bonos que usted tenga.",
    icon: 'question',
    confirmButtonColor: '#0B0033',
})

//Funcionalidad del Bloque de Pesos Depositados
//Genero la funcion que guarda lo ingresado por el usuario en el formulario.
const save_asset_data_pesos_1 = (e) =>{
    e.preventDefault();                                                                                 //Previene que el formulario se reinicie.
    asset_input_amount = document.getElementById("pesos_input_amount").value;                           //Guardo el valor ingresado en el input.
    document.querySelector("form").reset();                                                             //Resetea el formulario.
    localStorage.setItem("Pesos Depositados", JSON.stringify(asset_input_amount));                      //Guarda la variable como string en LocalStorage. Luego lo vuelvo a usar.
    
    asset_input_amount= JSON.parse(localStorage.getItem("Pesos Depositados"));                          //Tomo el valor del Local Storage y lo aplico a la variable.
    asset_input_name="$ARS";                                                                            //Nombre del activo. Es fijo
    asset_input_value=1;                                                                                //Valor del activo. Es fijo

    case_1_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);          //Creo un objeto para almacenar esta informacion.
    
    const form_pesos_depositados = document.querySelector("#form_pesos_depositados");                   //Selecciono el bloque actual y el bloque siguiente.
    const form_plazo_fijo  = document.querySelector("#form_plazo_fijo");

    form_pesos_depositados.style.display="none";                                                        //Escondo el bloque actual y muestro el siguiente.
    form_plazo_fijo.style.display="block";
}

document.getElementById("pesos_1_next_step_btn").addEventListener("click",save_asset_data_pesos_1);     //Cuando Clickeo "Siguiente ejecuta la funcion superior"


//Funcionalidad del Bloque de Plazo Fijo
//Es igual a la Funcionalidad de los Pesos depositados
const save_asset_data_pesos_2 = (e) =>{
    e.preventDefault();                                                                                
    asset_input_amount = document.getElementById("plazo_fijo_input_amount").value;                      
    document.querySelector("form").reset();                                                             
    localStorage.setItem("Plazo Fijo", JSON.stringify(asset_input_amount));                             
    
    asset_input_amount= JSON.parse(localStorage.getItem("Plazo Fijo"));                                 
    asset_input_name="P.F. $ARS";                                                                       
    asset_input_value=1;                                                                                

    case_1_2_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);          
    
    const form_plazo_fijo = document.querySelector("#form_plazo_fijo");
    const form_bonos_acciones_cantidad  = document.querySelector("#form_bonos_acciones_cantidad");

    form_plazo_fijo.style.display="none";
    form_bonos_acciones_cantidad.style.display="block";
}

document.getElementById("pesos_2_next_step_btn").addEventListener("click",save_asset_data_pesos_2);    



//Bloque de Bonos y Acciones
//Estructura para armar Inputs de Bonos y Acciones
//Armo una variable de tipo string con la variables parametro, que va ir cambiado dependiendo del argumento de la funcion.
let string_input_bonos_pesos="";
function string_input_1(parametro){
    string_input_bonos_pesos="<div class='form_box'> <p style='color:rgb(235, 64, 52)'>Ingrese el nombre del Bono o Accion no. "+parametro+"</p></div><div class='form_box'><label>Nombre del Bono/Acción</label><input id='bonos_acciones_input_name_"+parametro+"' type='text' placeholder='Nombre Activo'></div><div class='form_box'><label>Cantidad de Bonos/Acciones </label><input id='bonos_acciones_input_amount_"+parametro+"' type='number' placeholder='Cantidad de Activos'></div><div class='form_box'><label>Valor del Bono/Acción </label><input id='bonos_acciones_input_value_"+parametro+"' type='number' placeholder='Valor del activo'></div>";
}

//Selecciono el div donde iran los formularios para rellenar
let forms_bonos_box=document.getElementById("forms_bonos_acciones_pesos");

//Funcionalidad del bloque de Contador
const save_asset_data_pesos_3 = (e) =>{
    e.preventDefault();   
    asset_quantity=JSON.parse(localStorage.getItem("Contador 1"))                                         //Tomo el valor del contador, que esta en un JSON enviado por el archivo "contador.js"  
    document.querySelector("form").reset();  

    for(let i=1;i<=asset_quantity;i++){                                                                 //Hago un bloque de inputs dada el numero de acciones que el usuario posee
        string_input_1(i);                                                                                //En la funcion, va cambiando el numero mostrado y los id, por lo que puedo independizar valores
        forms_bonos_box.innerHTML += string_input_bonos_pesos; 
        //Quedan formados los id bonos_acciones_input_name_${i}, bonos_acciones_input_amount_${i}, bonos_acciones_input_value${i}                                
    }

    const form_bonos_acciones_cantidad  = document.querySelector("#form_bonos_acciones_cantidad");      //Selecciono el bloque del contador y del siguiente bloque 
    const form_bonos_acciones = document.querySelector("#form_bonos_acciones");     
    form_bonos_acciones_cantidad.style.display="none";                                                  //Escondo el bloque de contador y hago aparecer el bloque de acciones y bonos
    form_bonos_acciones.style.display="block";
}

document.getElementById("pesos_3_next_step_btn").addEventListener("click",save_asset_data_pesos_3);

//Funcionalidad del bloque de Acciones y Bonos
const save_asset_data_pesos_4 = (e) =>{
    for (let i=1;i<=asset_quantity;i++){                                                                //Creo una estructura FOR que recorre los inputs y toma los valores
        e.preventDefault(); 
        asset_input_name = document.getElementById(`bonos_acciones_input_name_${i}`).value;                                                                               
        asset_input_amount = document.getElementById(`bonos_acciones_input_amount_${i}`).value;                                                                 
        asset_input_value = document.getElementById(`bonos_acciones_input_value_${i}`).value;;                        
        document.querySelector("form").reset();                                                             
                
        case_1 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);              //Con el constructor, creo temporalmente un objeto que tiene los valores
        case_1_1.push(case_1);                                                                          //Pusheo dentro de un array al objeto creado en el paso anterior
    }  
            
    localStorage.setItem("Bonos Acciones $ARS", JSON.stringify(case_1_1));
    window.location.href="../pages/assets.html" 

}

document.getElementById("pesos_4_next_step_btn").addEventListener("click",save_asset_data_pesos_4);