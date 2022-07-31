//README
/*  En esta sección genero la funcionalidad del bloque "Cryptomonedas": 
    RECOMENDAMOS PREVIAMENTE iniciar la lectura de la documentación de este codigo desde el archivo "local_currency.js", donde se explica con claridad todos lo utilizado. Las funciones y metodos utilizados aqui son completamente equivalentes a aquellos.
    
    Creamos los Objetos y Arrays a usar:
    "case_3":           Objeto que almacena temporalmente el valor de las cryptomonedas para luego push al objeto "case_3_1"
    "case_3_1":         Array que tiene las cryptomonedas.
*/

function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}

let case_3_1=[];    
let case_3={};            
let asset_input_amount=0;
let asset_input_name="";
let asset_input_value=0;
let asset_quantity=0;

let dolar= JSON.parse(localStorage.getItem("Variables Iniciales"));
let total= 0; 
let pesos_block = document.querySelector(".peso_patrimony");
let dolar_block = document.querySelector(".dolar_patrimony");
let btc_block = document.querySelector(".btc_patrimony");

//Funciones Asincronicas para evaluar el patrimonio en la parte inferior.
const evaluar_crypto = async (key) => {
    let data = await JSON.parse(localStorage.getItem(key));
    for (let i=0;i<data.length;i++){
        valor=data[i].asset_input_value;
        total = total + valor
    }

    await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD")
    .then((response)=>response.json())
    .then((json)=>{
        btc_price = json.Data[0].RAW.USD.PRICE;
        pesos_block.innerHTML = parseInt(pesos_block.innerHTML) + (total);
        dolar_block.innerHTML = parseInt(dolar_block.innerHTML) + (total/(dolar.dolar_value));
        btc_block.innerHTML = parseInt(btc_block.innerHTML) + (total/(dolar.dolar_value*btc_price));
    })
    .then(()=>{
        localStorage.setItem("Pesos Valores Finales Cryptomoneda", JSON.stringify(pesos_block.innerHTML)); 
        localStorage.setItem("Dolares Valores Finales Cryptomoneda", JSON.stringify(dolar_block.innerHTML)); 
        localStorage.setItem("BTC Valores Finales Cryptomoneda", JSON.stringify(btc_block.innerHTML)); 
    })
}


Swal.fire({
    title: 'Cryptomonedas',
    text: "En esta sección le preguntaremos por su patrimonio en CriptoActivos",
    icon: 'question',
    confirmButtonColor: '#0B0033',
})

let string_input_crypto="";
function string_input_4(parametro){
    string_input_crypto=`<div class='form_box'> <p style='color:rgb(235, 64, 52)'>Ingrese el nombre de la criptomoneda no. ${parametro}</p></div><div class='form_box'><label>Nombre de la criptomoneda</label><input id='crypto_input_name_${parametro}' type='text' placeholder='Nombre Criptomoneda'></div><div class='form_box'><label>Cantidad de unidades de la criptomoneda</label><input id='crypto_input_amount_${parametro}' type='number' placeholder='Cantidad la criptomoneda'></div><div class='form_box'><label>Valor del Criptoactivo en Dolares</label><input id='crypto_input_value_${parametro}' type='number' placeholder='Valor $USD/crypto'></div>`
}

let forms_crypto_box=document.getElementById("forms_crypto");

//Contador
const save_asset_data_crypto= (e) =>{
    e.preventDefault();   
    
    asset_quantity=JSON.parse(localStorage.getItem("contador_4"))                                          
    
    document.querySelector("form").reset();  

    for(let i=1;i<=asset_quantity;i++){                                                                 
        string_input_4(i);                                                                                
        forms_crypto_box.innerHTML += string_input_crypto;                               
    }

    const form_crypto_cantidad  = document.querySelector("#form_crypto_cantidad");      
    const form_crypto = document.querySelector("#form_crypto");     
    form_crypto_cantidad.style.display="none";                                                  
    form_crypto.style.display="block";
}
document.getElementById("crypto_1_next_step_btn").addEventListener("click",save_asset_data_crypto);

//Guardo Valores
const save_asset_data_crypto_2 = (e) =>{
    for (let i=1;i<=asset_quantity;i++){                                                                
        e.preventDefault(); 
        
        asset_input_name = document.getElementById(`crypto_input_name_${i}`).value;                                                                               
        asset_input_amount = document.getElementById(`crypto_input_amount_${i}`).value;                                                                 
        asset_input_value = document.getElementById(`crypto_input_value_${i}`).value;;
        dolar= JSON.parse(localStorage.getItem("Variables Iniciales"));                        
        document.querySelector("form").reset();                                                             
                
        case_3 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount*dolar.dolar_value);              
        case_3_1.push(case_3);                                                                          
    }  
            
    localStorage.setItem("Cryptomonedas", JSON.stringify(case_3_1));
    evaluar_crypto("Cryptomonedas");
    window.location.href="../pages/assets.html" 
}
document.getElementById("crypto_2_next_step_btn").addEventListener("click",save_asset_data_crypto_2);
