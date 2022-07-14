//Contructor para generar los objetos con el Nombre del Activo, Cantidad del Activo y Valor del Activo
function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}
//Objetos y Arrays a usar en CryptoActivos
let case_2_1_asset={};      //Objeto que tiene los $USD en efectivo
let case_2_2_asset={};      //Objeto que tiene los $USD en plazo fijo
let case_2_1=[];            //Array que tiene las acciones o bonos en $USD
let case_2_2=[];            //Array que tiene las otras monedas FIAT que el usuario ingrese.
let case_2={};              //Objeto que almacena temporalmente el valor de las acciones o bonos en $USD, y monedas extranjeras para luego push al objeto

//Valores iniciales de las variables relacionadas con CryptoActuvos
let asset_input_amount=0;   //Cantidad de un item predefinido, cuando no los tiene el usuario.
let asset_input_name="";    //Nombre del activo.
let asset_input_value=0;    //Valor de un item predefinido, cuando no los tiene el usuario.
let asset_quantity=0;       //Cantidad de Activos de un mismo tipo

//Alert informando al usuario sobre esta seccion
Swal.fire({
    title: 'Moneda Extranjera $USD y Otras',
    text: "En esta sección le preguntaremos por su patrimonio en Dolares y otras Monedas",
    icon: 'question',
    confirmButtonColor: '#0B0033',
})

//Funcionalidad del Bloque de Dolares Depositados
//Genero la funcion que guarda lo ingresado por el usuario en el formulario.
const save_asset_data_dolares_1 = (e) =>{
    e.preventDefault();                                                                                 //Previene que el formulario se reinicie.
    asset_input_amount = document.getElementById("dolares_input_amount").value;                           //Guardo el valor ingresado en el input.
    document.querySelector("form").reset();                                                             //Resetea el formulario.
    localStorage.setItem("Dolares Depositados", JSON.stringify(asset_input_amount));                      //Guarda la variable como string en LocalStorage. Luego lo vuelvo a usar.
    
    asset_input_amount= JSON.parse(localStorage.getItem("Dolares Depositados"));                          //Tomo el valor del Local Storage y lo aplico a la variable.
    asset_input_name="$USD";                                                                            //Nombre del activo. Es fijo
    dolar= JSON.parse(localStorage.getItem("Variables Iniciales"));;
    asset_input_value=dolar.dolar_value;                                                                                //Valor del activo. Es fijo

    case_2_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);          //Creo un objeto para almacenar esta informacion.
    
    const form_dolares_depositados = document.querySelector("#form_dolares_depositados");                   //Selecciono el bloque actual y el bloque siguiente.
    const form_plazo_fijo_dolares  = document.querySelector("#form_plazo_fijo_dolares");

    form_dolares_depositados.style.display="none";                                                        //Escondo el bloque actual y muestro el siguiente.
    form_plazo_fijo_dolares.style.display="block";
}
document.getElementById("dolares_1_next_step_btn").addEventListener("click",save_asset_data_dolares_1);     //Cuando Clickeo "Siguiente ejecuta la funcion superior"


//Funcionalidad del Bloque de Plazo Fijo en dolares
//Es igual a la Funcionalidad de los dolares depositados
const save_asset_data_dolares_2 = (e) =>{
    e.preventDefault();                                                                                
    asset_input_amount = document.getElementById("plazo_fijo_dolares_input_amount").value;                      
    document.querySelector("form").reset();                                                             
    localStorage.setItem("Plazo Fijo Dolares", JSON.stringify(asset_input_amount));                             
    
    asset_input_amount= JSON.parse(localStorage.getItem("Plazo Fijo Dolares"));                                 
    asset_input_name="P.F. $USD";                                                                       
    dolar = JSON.parse(localStorage.getItem("Variables Iniciales"))
    asset_input_value = dolar.dolar_value                                                                                 

    case_2_2_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);          
    
    const form_plazo_fijo_dolares = document.querySelector("#form_plazo_fijo_dolares");
    const form_monedas_fiat_cantidad  = document.querySelector("#form_monedas_fiat_cantidad");

    form_plazo_fijo_dolares.style.display="none";
    form_monedas_fiat_cantidad.style.display="block";
}
document.getElementById("dolares_2_next_step_btn").addEventListener("click",save_asset_data_dolares_2);    


//Bloque de otras Monedas
//Estructura para armar Inputs de Bonos y Acciones
//Armo una variable de tipo string con la variables parametro, que va ir cambiado dependiendo del argumento de la funcion.
let string_input_moneda_fiat="";
function string_input_2(parametro){
    string_input_moneda_fiat="<div class='form_box'> <p style='color:rgb(235, 64, 52)'>Ingrese el nombre la divisa no. "+parametro+"</p></div><div class='form_box'><label>Nombre de la Divisa</label><input id='moneda_fiat_input_name_"+parametro+"' type='text' placeholder='Nombre Divisa'></div><div class='form_box'><label>Cantidad de unidades de la Divisa</label><input id='moneda_fiat_input_amount_"+parametro+"' type='number' placeholder='Cantidad de Divisas'></div><div class='form_box'><label>Valor de la Divisa en Dolares</label><input id='moneda_fiat_input_value_"+parametro+"' type='number' placeholder='Valor $USD/divisa'></div>";
}



//Selecciono el div donde iran los formularios para rellenar
let forms_moneda_fiat_box=document.getElementById("forms_monedas_fiat_dolares");

//Funcionalidad del bloque de Contador para monedas fiat
const save_asset_data_dolares_3 = (e) =>{
    e.preventDefault();   
    asset_quantity=JSON.parse(localStorage.getItem("Contador 2"))                                          
    document.querySelector("form").reset();  

    for(let i=1;i<=asset_quantity;i++){                                                                 
        string_input_2(i);                                                                                
        forms_moneda_fiat_box.innerHTML += string_input_moneda_fiat; 
        //Quedan formados los id moneda_fiat_input_name_${i}, moneda_fiat_input_amount_${i}, moneda_fiat_input_value${i}                                
    }

    const form_monedas_fiat_cantidad  = document.querySelector("#form_monedas_fiat_cantidad");      
    const form_monedas_fiat = document.querySelector("#form_monedas_fiat");     
    form_monedas_fiat_cantidad.style.display="none";                                                  
    form_monedas_fiat.style.display="block";
}
document.getElementById("dolares_3_next_step_btn").addEventListener("click",save_asset_data_dolares_3);


//Funcionalidad del bloque de Monedas Fiat
const save_asset_data_dolares_4 = (e) =>{
    for (let i=1;i<=asset_quantity;i++){                                                                
        e.preventDefault(); 
        asset_input_name = document.getElementById(`moneda_fiat_input_name_${i}`).value;                                                                               
        asset_input_amount = document.getElementById(`moneda_fiat_input_amount_${i}`).value;                                                                 
        asset_input_value = document.getElementById(`moneda_fiat_input_value_${i}`).value;;                        
        document.querySelector("form").reset();                                                             
                
        case_2 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);              
        case_2_2.push(case_2);                                                                          
    }  
            
    localStorage.setItem("Monedas Fiat", JSON.stringify(case_2_2)); 
    
    
    const form_monedas_fiat  = document.querySelector("#form_monedas_fiat");      
    const form_bonos_acciones_dolares_cantidad = document.querySelector("#form_bonos_acciones_dolares_cantidad");     
    form_monedas_fiat.style.display="none";                                                  
    form_bonos_acciones_dolares_cantidad.style.display="block";

}

document.getElementById("dolares_4_next_step_btn").addEventListener("click",save_asset_data_dolares_4);


//Bloque de Bonos y Acciones en dolares
//Estructura para armar Inputs de Bonos y Acciones en dolares
//Armo una variable de tipo string con la variables parametro, que va ir cambiado dependiendo del argumento de la funcion.
let string_input_bonos_acciones_dolares="";
function string_input_3(parametro){
    string_input_bonos_acciones_dolares="<div class='form_box'> <p style='color:rgb(235, 64, 52)'>Ingrese el nombre de la Accion o Bono no. "+parametro+"</p></div><div class='form_box'><label>Nombre del Bono/Accion</label><input id='bonos_acciones_dolares_input_name_"+parametro+"' type='text' placeholder='Nombre Activo'></div><div class='form_box'><label>Cantidad de Bonos/Acciones</label><input id='bonos_acciones_dolares_input_amount_"+parametro+"' type='number' placeholder='Cantidad del Bono/Accion'></div><div class='form_box'><label>Valor del Bono/Accion en Dolares</label><input id='bonos_acciones_dolares_input_value_"+parametro+"' type='number' placeholder='Valor del Bono/Accion en Dolares'></div>";
}

//Selecciono el div donde iran los formularios para rellenar
let forms_bonos_acciones_dolares_box=document.getElementById("forms_bonos_acciones_dolares_dolares");

//Funcionalidad del bloque de Contador de Bonos acciones en dolares
const save_asset_data_dolares_5 = (e) =>{
    e.preventDefault();   
    asset_quantity=JSON.parse(localStorage.getItem("Contador 3"))                                          
    document.querySelector("form").reset();  

    for(let i=1;i<=asset_quantity;i++){                                                                 
        string_input_3(i);                                                                                
        forms_bonos_acciones_dolares_box.innerHTML += string_input_bonos_acciones_dolares; 
        //Quedan formados los id bonos_acciones_dolares_input_name_${i}, bonos_acciones_dolares_input_amount_${i}, bonos_acciones_dolares_input_value${i}                                
    }

    const form_bonos_acciones_dolares_cantidad  = document.querySelector("#form_bonos_acciones_dolares_cantidad");      
    const form_bonos_acciones_dolares = document.querySelector("#form_bonos_acciones_dolares");     
    form_bonos_acciones_dolares_cantidad.style.display="none";                                                  
    form_bonos_acciones_dolares.style.display="block";
}
document.getElementById("dolares_5_next_step_btn").addEventListener("click",save_asset_data_dolares_5);


//Funcionalidad del bloque de bonos acciones en dolares
const save_asset_data_dolares_6 = (e) =>{
    for (let i=1;i<=asset_quantity;i++){                                                                
        e.preventDefault(); 
        asset_input_name = document.getElementById(`bonos_acciones_dolares_input_name_${i}`).value;                                                                               
        asset_input_amount = document.getElementById(`bonos_acciones_dolares_input_amount_${i}`).value;                                                                 
        asset_input_value = document.getElementById(`bonos_acciones_dolares_input_value_${i}`).value;;                        
        document.querySelector("form").reset();                                                             
                
        case_2 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);              
        case_2_1.push(case_2);                                                                          
    }  
            
    localStorage.setItem("Bonos Acciones Dolares", JSON.stringify(case_2_1)); 
    window.location.href="../pages/assets.html" 
}

document.getElementById("dolares_6_next_step_btn").addEventListener("click",save_asset_data_dolares_6);