//README
/*  En esta sección genero la funcionalidad del bloque "Moneda Extranjera": 
    RECOMENDAMOS PREVIAMENTE iniciar la lectura de la documentación de este codigo desde el archivo "local_currency.js", donde se explica con claridad todo lo utilizado. Las funciones y metodos utilizados aqui son completamente equivalentes a aquellos.
    
    Creamos los Objetos y Arrays a usar:
    "case_2_1_asset"      Objeto que tiene los $USD en efectivo.
    "case_2_2_asset"      Objeto que tiene los $USD en plazo fijo.
    "case_2"              Almacena temporalmente el valor de las acciones/bonos y otras monedas para luego push al objeto "case_2_1 o 2"
    "case_2_1"            Array que tiene las acciones o bonos en $USD
    "case_2_2"            Array que tiene las otras monedas FIAT.
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

let case_2_1_asset={};     
let case_2_2_asset={};      
let case_2_1=[];            
let case_2_2=[];            
let case_2={};              
let asset_input_amount=0;   
let asset_input_name="";    
let asset_input_value=0;    
let asset_quantity=0;       

//Funciones Asincronicas para evaluar el patrimonio en la parte inferior.
let dolar= JSON.parse(localStorage.getItem("Variables Iniciales"));
let total= 0; 
let pesos_block = document.querySelector(".peso_patrimony");
let dolar_block = document.querySelector(".dolar_patrimony");
let btc_block = document.querySelector(".btc_patrimony");

const evaluar_dolares_1 = async (key) => {
    let data = await JSON.parse(localStorage.getItem(key));
    total= await data.asset_input_value;

    await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD")
    .then((response)=>response.json())
    .then((json)=>{
        btc_price = json.Data[0].RAW.USD.PRICE;
        pesos_block.innerHTML = parseInt(pesos_block.innerHTML) + (total);
        dolar_block.innerHTML = parseInt(dolar_block.innerHTML) + (total/(dolar.dolar_value));
        btc_block.innerHTML = parseInt(btc_block.innerHTML) + (total/(dolar.dolar_value*btc_price));
    });
}

const evaluar_dolares_2 = async (key) => {
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
            localStorage.setItem("Pesos Valores Finales Dolares", JSON.stringify(pesos_block.innerHTML)); 
            localStorage.setItem("Dolares Valores Finales Dolares", JSON.stringify(dolar_block.innerHTML)); 
            localStorage.setItem("BTC Valores Finales Dolares", JSON.stringify(btc_block.innerHTML)); 
        })
    }
   

Swal.fire({
    title: 'Moneda Extranjera $USD y Otras',
    text: "En esta sección le preguntaremos por su patrimonio en Dolares y otras Monedas",
    icon: 'question',
    confirmButtonColor: '#0B0033',
})
//  README
/*  Secciónes dolares en efectivo y plazo fijo:
    RECOMENDAMOS PREVIAMENTE iniciar la lectura de la documentación de este codigo desde el archivo "local_currency.js", donde se explica con claridad todo lo utilizado. Las funciones y metodos utilizados aqui son completamente equivalentes a aquellos.

    En la función "save_asset_data_dolares_1", ademas, se trae desde Local Storage el valor del dolar ingresado en el inicio de la app por el usuario. El cual es utilizado como objeto y traemos su propiedad dolar_value, asignandola a "asset_input_value".
    Esto sirve para, a traves de una multiplicación en el constructor, almacernar el valor en pesos.

    La función "save_asset_data_dolares_2", es igual. Almacena los depositos en plazo fijo en dolares.
*/
const save_asset_data_dolares_1 = (e) =>{
    e.preventDefault();   
                                                                                 
    asset_input_amount = document.getElementById("dolares_input_amount").value;                           
    localStorage.setItem("dolares_depositados", JSON.stringify(asset_input_amount)); 
    
    document.querySelector("form").reset();   
    
    asset_input_name="$USD";   
    asset_input_amount= JSON.parse(localStorage.getItem("dolares_depositados"));                          
    dolar= JSON.parse(localStorage.getItem("Variables Iniciales"));
    asset_input_value=dolar.dolar_value;  
    
    case_2_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);   
    
    localStorage.setItem("Dolares Depositados", JSON.stringify(case_2_1_asset));
    evaluar_dolares_1("Dolares Depositados")
    
    const form_dolares_depositados = document.querySelector("#form_dolares_depositados");                  
    const form_plazo_fijo_dolares  = document.querySelector("#form_plazo_fijo_dolares");
    form_dolares_depositados.style.display="none";                                                       
    form_plazo_fijo_dolares.style.display="block";
}
document.getElementById("dolares_1_next_step_btn").addEventListener("click",save_asset_data_dolares_1);    

const save_asset_data_dolares_2 = (e) =>{
    e.preventDefault();                                                                                
    
    asset_input_amount = document.getElementById("plazo_fijo_dolares_input_amount").value;                      
    localStorage.setItem("plazo_fijo_dolares", JSON.stringify(asset_input_amount)); 
    
    document.querySelector("form").reset();   
    
    asset_input_name="P.F. $USD"; 
    asset_input_amount= JSON.parse(localStorage.getItem("plazo_fijo_dolares"));                                 
    dolar = JSON.parse(localStorage.getItem("Variables Iniciales"))
    asset_input_value = dolar.dolar_value                                                                                 

    case_2_2_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount);  
    
    localStorage.setItem("Plazo Fijo Dolares", JSON.stringify(case_2_2_asset));
    evaluar_dolares_1("Plazo Fijo Dolares")
    
    const form_plazo_fijo_dolares = document.querySelector("#form_plazo_fijo_dolares");
    const form_monedas_fiat_cantidad  = document.querySelector("#form_monedas_fiat_cantidad");
    form_plazo_fijo_dolares.style.display="none";
    form_monedas_fiat_cantidad.style.display="block";
}
document.getElementById("dolares_2_next_step_btn").addEventListener("click",save_asset_data_dolares_2);    

//Otras monedas FIAT (Monedas emitadas por gobiernos)
let string_input_moneda_fiat="";
function string_input_2(parametro){
    string_input_moneda_fiat=`<div class='form_box'> <p style='color:rgb(235, 64, 52)'>Ingrese el nombre de la divisa no. ${parametro}</p></div><div class='form_box'><label>Nombre de la Divisa</label><input id='moneda_fiat_input_name_${parametro}' type='text' placeholder='Nombre Divisa'></div><div class='form_box'><label>Cantidad de unidades de la Divisa</label><input id='moneda_fiat_input_amount_${parametro}' type='number' placeholder='Cantidad de Divisas'></div><div class='form_box'><label>Valor de la Divisa en Dolares</label><input id='moneda_fiat_input_value_${parametro}' type='number' placeholder='Valor $USD/divisa'></div>`
}
let forms_moneda_fiat_box=document.getElementById("forms_monedas_fiat_dolares");

//Contador
const save_asset_data_dolares_3 = (e) =>{
    e.preventDefault();

    asset_quantity=JSON.parse(localStorage.getItem("contador_2"))                                          
    document.querySelector("form").reset();  

    for(let i=1;i<=asset_quantity;i++){                                                                 
        string_input_2(i);                                                                                
        forms_moneda_fiat_box.innerHTML += string_input_moneda_fiat;                               
    }

    const form_monedas_fiat_cantidad  = document.querySelector("#form_monedas_fiat_cantidad");      
    const form_monedas_fiat = document.querySelector("#form_monedas_fiat");     
    form_monedas_fiat_cantidad.style.display="none";                                                  
    form_monedas_fiat.style.display="block";
}
document.getElementById("dolares_3_next_step_btn").addEventListener("click",save_asset_data_dolares_3);

//Monedas Fiat
const save_asset_data_dolares_4 = (e) =>{
    for (let i=1;i<=asset_quantity;i++){                                                                
        e.preventDefault(); 
        
        asset_input_name = document.getElementById(`moneda_fiat_input_name_${i}`).value;                                                                               
        asset_input_amount = document.getElementById(`moneda_fiat_input_amount_${i}`).value;                                                                 
        asset_input_value = document.getElementById(`moneda_fiat_input_value_${i}`).value;
        dolar= JSON.parse(localStorage.getItem("Variables Iniciales"));                     
        document.querySelector("form").reset();                                                             
                
        case_2 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount*dolar.dolar_value);              
        case_2_2.push(case_2);                                                                          
    }  
            
    localStorage.setItem("Monedas Fiat", JSON.stringify(case_2_2));
    evaluar_dolares_2("Monedas Fiat")
    
    
    const form_monedas_fiat  = document.querySelector("#form_monedas_fiat");      
    const form_bonos_acciones_dolares_cantidad = document.querySelector("#form_bonos_acciones_dolares_cantidad");     
    form_monedas_fiat.style.display="none";                                                  
    form_bonos_acciones_dolares_cantidad.style.display="block";
}
document.getElementById("dolares_4_next_step_btn").addEventListener("click",save_asset_data_dolares_4);

//Bonos y Acciones en Dolares
let string_input_bonos_acciones_dolares="";
function string_input_3(parametro){
    string_input_bonos_acciones_dolares=`<div class='form_box'> <p style='color:rgb(235, 64, 52)'>Ingrese el nombre de la Accion o Bono no. ${parametro}</p></div><div class='form_box'><label>Nombre del Bono/Accion</label><input id='bonos_acciones_dolares_input_name_${parametro}' type='text' placeholder='Nombre Activo'></div><div class='form_box'><label>Cantidad de Bonos/Acciones</label><input id='bonos_acciones_dolares_input_amount_${parametro}' type='number' placeholder='Cantidad del Bono/Accion'></div><div class='form_box'><label>Valor del Bono/Accion en Dolares</label><input id='bonos_acciones_dolares_input_value_${parametro}' type='number' placeholder='Valor del Bono/Accion en Dolares'></div>`
}
let forms_bonos_acciones_dolares_box=document.getElementById("forms_bonos_acciones_dolares_dolares");

//Contador
const save_asset_data_dolares_5 = (e) =>{
    e.preventDefault();

    asset_quantity=JSON.parse(localStorage.getItem("contador_3"))

    document.querySelector("form").reset();  

    for(let i=1;i<=asset_quantity;i++){                                                                 
        string_input_3(i);                                                                                
        forms_bonos_acciones_dolares_box.innerHTML += string_input_bonos_acciones_dolares;                                
    }

    const form_bonos_acciones_dolares_cantidad  = document.querySelector("#form_bonos_acciones_dolares_cantidad");      
    const form_bonos_acciones_dolares = document.querySelector("#form_bonos_acciones_dolares");     
    form_bonos_acciones_dolares_cantidad.style.display="none";                                                  
    form_bonos_acciones_dolares.style.display="block";
}
document.getElementById("dolares_5_next_step_btn").addEventListener("click",save_asset_data_dolares_5);

// Bonos y Acciones en Dolares
const save_asset_data_dolares_6 = (e) =>{
    for (let i=1;i<=asset_quantity;i++){                                                                
        e.preventDefault();

        asset_input_name = document.getElementById(`bonos_acciones_dolares_input_name_${i}`).value;                                                                               
        asset_input_amount = document.getElementById(`bonos_acciones_dolares_input_amount_${i}`).value;                                                                 
        asset_input_value = document.getElementById(`bonos_acciones_dolares_input_value_${i}`).value;
        dolar= JSON.parse(localStorage.getItem("Variables Iniciales"));

        document.querySelector("form").reset();                                                             
                
        case_2 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*asset_input_amount*dolar.dolar_value);              
        case_2_1.push(case_2);                                                                          
    }  
            
    localStorage.setItem("Bonos Acciones Dolares", JSON.stringify(case_2_1)); 
    evaluar_dolares_2("Bonos Acciones Dolares")

    localStorage.setItem("Pesos Valores Finales Moneda Extranjera", JSON.stringify(pesos_block.innerHTML)); 
    localStorage.setItem("Dolares Valores Finales Moneda Extranjera", JSON.stringify(dolar_block.innerHTML)); 
    localStorage.setItem("BTC Valores Finales Moneda Extranjera", JSON.stringify(btc_block.innerHTML)); 

    window.location.href="../pages/assets.html" 
}
document.getElementById("dolares_6_next_step_btn").addEventListener("click",save_asset_data_dolares_6);