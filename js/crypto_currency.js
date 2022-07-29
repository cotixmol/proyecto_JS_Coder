//Contructor para generar los objetos con el Nombre del Activo, Cantidad del Activo y Valor del Activo
function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}
//Objetos y Arrays a usar en CryptoActivos
let case_3_1=[];            //Array que tiene las cryptomonedas.
let case_3={};              //Objeto que almacena temporalmente el valor de las cryptomonedas en $USD para luego push al objeto

//Valores iniciales de las variables relacionadas con CryptoActuvos
let asset_input_amount=0;   //Cantidad de un item predefinido, cuando no los tiene el usuario.
let asset_input_name="";    //Nombre del activo.
let asset_input_value=0;    //Valor de un item predefinido, cuando no los tiene el usuario.
let asset_quantity=0;       //Cantidad de Activos de un mismo tipo

//Alert informando al usuario sobre esta seccion
Swal.fire({
    title: 'Cryptomonedas',
    text: "En esta sección le preguntaremos por su patrimonio en CriptoActivos",
    icon: 'question',
    confirmButtonColor: '#0B0033',
})

//Bloque Cryptomonedas
//Estructura para armar Inputs de Cryptomonedas
//Armo una variable de tipo string con la variables parametro, que va ir cambiado dependiendo del argumento de la funcion.
let string_input_crypto="";
function string_input_4(parametro){
    string_input_crypto="<div class='form_box'> <p style='color:rgb(235, 64, 52)'>Ingrese el nombre de la criptomoneda no. "+parametro+"</p></div><div class='form_box'><label>Nombre de la criptomoneda</label><input id='crypto_input_name_"+parametro+"' type='text' placeholder='Nombre Criptomoneda'></div><div class='form_box'><label>Cantidad de unidades de la criptomoneda</label><input id='crypto_input_amount_"+parametro+"' type='number' placeholder='Cantidad la criptomoneda'></div><div class='form_box'><label>Valor del Criptoactivo en Dolares</label><input id='crypto_input_value_"+parametro+"' type='number' placeholder='Valor $USD/crypto'></div>";
}


//Selecciono el div donde iran los formularios para rellenar
let forms_crypto_box=document.getElementById("forms_crypto");

//Funcionalidad del bloque de Contador para monedas fiat
const save_asset_data_crypto= (e) =>{
    e.preventDefault();   
    asset_quantity=JSON.parse(localStorage.getItem("contador_4"))                                          
    document.querySelector("form").reset();  

    for(let i=1;i<=asset_quantity;i++){                                                                 
        string_input_4(i);                                                                                
        forms_crypto_box.innerHTML += string_input_crypto; 
        //Quedan formados los id moneda_fiat_input_name_${i}, moneda_fiat_input_amount_${i}, moneda_fiat_input_value${i}                                
    }

    const form_crypto_cantidad  = document.querySelector("#form_crypto_cantidad");      
    const form_crypto = document.querySelector("#form_crypto");     
    form_crypto_cantidad.style.display="none";                                                  
    form_crypto.style.display="block";
}
document.getElementById("crypto_1_next_step_btn").addEventListener("click",save_asset_data_crypto);


//Funcionalidad del bloque de Crypto
const save_asset_data_crypto_2 = (e) =>{
    for (let i=1;i<=asset_quantity;i++){                                                                
        e.preventDefault(); 
        asset_input_name = document.getElementById(`crypto_input_name_${i}`).value;                                                                               
        asset_input_amount = document.getElementById(`crypto_input_amount_${i}`).value;                                                                 
        asset_input_value = document.getElementById(`crypto_input_value_${i}`).value;;                        
        document.querySelector("form").reset();                                                             
                
        case_3 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);              
        case_3_1.push(case_3);                                                                          
    }  
            
    localStorage.setItem("Cryptomonedas", JSON.stringify(case_3_1)); 
    window.location.href="../pages/assets.html" 
}

document.getElementById("crypto_2_next_step_btn").addEventListener("click",save_asset_data_crypto_2);
