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


//Pesos Depositados
//Genero la funcion que guarda lo ingresado por el usuario en el formulario.
const save_asset_data_pesos_1 = (e) =>{
    e.preventDefault();                                                                         //Previene que el formulario se reinicie.
    asset_input_amount = document.getElementById("pesos_input_amount").value;                   //Guardo el valor ingresado en el input.
    document.querySelector("form").reset();                                             //Resetea el formulario.
    localStorage.setItem("Pesos Depositados", JSON.stringify(asset_input_amount));      //Guarda la variable como string en LocalStorage. Luego lo vuelvo a usar.
    
    asset_input_amount= JSON.parse(localStorage.getItem("Pesos Depositados"));          //Tomo el valor del Local Storage y lo aplico a la variable.
    asset_input_name="$ARS";                                                            //Nombre del activo. Es fijo
    asset_input_value=1;                                                                //Valor del activo. Es fijo

    case_1_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value); //Creo un objeto para almacenar esta informacion.
    
    const form_pesos_depositados = document.querySelector("#form_pesos_depositados");
    const form_plazo_fijo  = document.querySelector("#form_plazo_fijo");

    form_pesos_depositados.style.display="none";
    form_plazo_fijo.style.display="block";
}

document.getElementById("pesos_1_next_step_btn").addEventListener("click",save_asset_data_pesos_1);     //Evento que al clickear ejecuta la funcion creada.


//Plazo Fijo
//Genero la funcion que guarda lo ingresado por el usuario en el formulario.
const save_asset_data_pesos_2 = (e) =>{
    e.preventDefault();                                                                         //No manda el formulario.
    asset_input_amount = document.getElementById("plazo_fijo_input_amount").value;                   //Guardo el valor ingresado en la variable.
    document.querySelector("form").reset();                                                     //Resetea el formulario.
    localStorage.setItem("Plazo Fijo", JSON.stringify(asset_input_amount));                     //Guarda la variable como string en LocalStorage. Luego lo vuelvo a usar.
    
    asset_input_amount= JSON.parse(localStorage.getItem("Plazo Fijo"));                         //Tomo el valor del Local Storage y lo aplico a la variable.
    asset_input_name="P.F. $ARS";                                                               //Nombre del activo. Es fijo
    asset_input_value=1;                                                                        //Valor del activo. Es fijo

    case_1_2_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value);  //Creo un objeto para almacenar esta informacion.
    
    const form_plazo_fijo = document.querySelector("#form_plazo_fijo");
    const form_bonos_acciones_cantidad  = document.querySelector("#form_bonos_acciones_cantidad");

    form_plazo_fijo.style.display="none";
    form_bonos_acciones_cantidad.style.display="block";
}

document.getElementById("pesos_2_next_step_btn").addEventListener("click",save_asset_data_pesos_2);     //Evento que al clickear ejecuta la funcion creada.



//Bonos y Acciones
//Estructura para armar Inputs de Bonos y Acciones
let string_input_bonos_pesos="";

function string_input(parametro){
    string_input_bonos_pesos="<div class='form_box'> <p style='color:rgb(235, 64, 52)'>Ingrese el nombre del Bono o Accion no. "+parametro+"</p></div><div class='form_box'><label>Nombre del Bono/Acción</label><input id='bonos_acciones_input_name_"+parametro+"' type='text' placeholder='Nombre Activo'></div><div class='form_box'><label>Cantidad de Bonos/Acciones &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label><input id='bonos_acciones_input_amount"+parametro+"' type='number' placeholder='Cantidad de Activos'></div><div class='form_box'><label>Valor del Bono/Acción &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </label><input id='bonos_acciones_input_value"+parametro+"' type='number' placeholder='Valor del activo'></div>";
}

let forms_bonos_box=document.getElementById("forms_bonos_acciones_pesos");

const save_asset_data_pesos_3 = (e) =>{
    e.preventDefault();   
    asset_quantity=JSON.parse(localStorage.getItem("Contador"))
    document.querySelector("form").reset();  

    const form_bonos_acciones_cantidad  = document.querySelector("#form_bonos_acciones_cantidad");
    const form_bonos_acciones = document.querySelector("#form_bonos_acciones");

    form_bonos_acciones_cantidad.style.display="none";
    form_bonos_acciones.style.display="block";
    
    for(let i=1;i<=asset_quantity;i++){
        string_input(i);
        forms_bonos_box.innerHTML += string_input_bonos_pesos;
    }

}

document.getElementById("pesos_3_next_step_btn").addEventListener("click",save_asset_data_pesos_3);


//Estructura para tomar datos de los inputs de acciones y bonos a partir del boton de Continuar
//Falta hacer

/*
    const save_asset_data_pesos_4 = (e) =>{
        for (let i=1;i<=asset_quantity;i++){
        e.preventDefault(); 
        document.querySelector("form").reset();  

        asset_input_name = document.getElementById("plazo_fijo_input_amount").value;  
        asset_input_amount = document.getElementById("plazo_fijo_input_amount").value;  
        asset_input_value = document.getElementById("plazo_fijo_input_amount").value;  

        localStorage.setItem("Nombre Bono/Accion en Pesos", JSON.stringify(asset_input_name));
        localStorage.setItem("Cantidad Bono/Acción en Pesos", JSON.stringify(asset_input_amount)); 
        localStorage.setItem("Valor Bono/Accion en Pesos", JSON.stringify(asset_input_value));  

        asset_input_name= JSON.parse(localStorage.getItem("Nombre Bono/Accion en Pesos")); 
        asset_input_amount= JSON.parse(localStorage.getItem("Cantidad Bono/Acción en Pesos")); 
        asset_input_value= JSON.parse(localStorage.getItem("Valor Bono/Accion en Pesos")); 


        case_1 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value);
        case_1_1.push(case_1);
        }
}
form_bonos_acciones.style.display="none";

document.getElementById("pesos_4_next_step_btn").addEventListener("click",save_asset_data_pesos_4);





/*

//ACOMODAMOS LOS VALORES DENTRO DE LOS 3 PRIMEROS OBJETOS (case_1_1_asset), (case_1_2_asset) y (case_2_1_asset)
//ASIGNACION DE VALORES DE LAS PROPIEDADES DE CADA OBJETO A VARIABLES MEJOR DEFINIDAS PARA EL USO
//EL IF SE USA PARA EVITAR LA ASIGNACION DE VARIABLES SI EL USUARIO NO INGRESO VALORES EN ALGUNO DE ESOS TRES OBJETOS.

if (int(case_1_1_asset.asset_input_amount) || case_1_1_asset.asset_input_amount==0){
}else{
    pesos_nombre =          case_1_1_asset.asset_input_name;
    pesos_cantidad =        case_1_1_asset.asset_input_amount;
    pesos_valor =           case_1_1_asset.asset_input_value;
}

if (int(case_1_2_asset.asset_input_amount) || case_1_2_asset.asset_input_amount==0){
}else{
    PF_nombre =             case_1_2_asset.asset_input_name;
    PF_cantidad =           case_1_2_asset.asset_input_amount;
    PF_valor =              case_1_2_asset.asset_input_value;
}

//MANIPULACION DE ARRAY DE OBJETOS PARA OBTENER VARIABLES MEJOR DEFINIDAS
// (case_1_1): Array que almacena objetos con Nombre, Cantidad y Valor de Acciones/Bonos en $ARS.

acciones_pesos_nombres = []
acciones_pesos_valor = []
acciones_pesos_cantidad = []

for (let el in case_1_1){
    acciones_pesos_nombres =        push(case_1_1.asset_input_name);
    acciones_pesos_valor =          push(case_1_1.asset_input_amount);
    acciones_pesos_cantidad =       push(case_1_1.asset_input_value);
}
*/