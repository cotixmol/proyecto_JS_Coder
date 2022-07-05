//AUN NO ESTA TERMINADO. UNA VEZ TERMINADO "LOCAL_CURRENCY" ES SIMPLE DE COPIAR

/*
//Contructor para generar los objetos con el Nombre del Activo, Cantidad del Activo y Valor del Activo
function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}

let case_3_1=[]; //Array que tiene las cryptomonedas.

let case_3={}; //Objeto que almacena temporalmente el valor de las cryptomonedas en $USD para luego push al objeto

let asset_input_amount=0; //Creo la variable que determina la cantidad de un item predefinido, cuando no los tiene el usuario.
let asset_input_name=""; //Creo la variables que determina el nombre del activo.
let asset_input_value=0; //Creo la variable que determina el valor de un item predefinido, cuando no los tiene el usuario.
let asset_quantity=0; //Creo la variable que uso en los FOR

//CRYPTOMONEDAS
    asset_quantity=parseInt(prompt('Ingrese que cantidad de distintas cryptomonedas que posee: '));
        //Hago un for con el cual creo los valores para un constructor y luego .push al array
        for (let stock_number=1;stock_number<=asset_quantity;stock_number++){
            

                asset_input_name=prompt('Escriba el nombre de la cryptomoneda '+stock_number+'.');
                asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee de '+asset_input_name+':'));
                asset_input_value=parseInt(prompt('Ingrese a cuantos $USD equivale 1 (UN) '+asset_input_name+'.'))

            case_3 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*dolar_value);
            
            case_3_1.push(case_3);
        }


//(case_3_1): Array que almacena objetos con Nombre, Cantidad y Valor de Cryptomonedas.

cryptomonedas_nombres = []
cryptomonedas_valor = []
cryptomonedas_cantidad = []

for (let el in case_3_1){
    cryptomonedas_nombres =         push(case_3_1.asset_input_name);
    cryptomonedas_valor =           push(case_3_1.asset_input_amount);
    cryptomonedas_cantidad =        push(case_3_1.asset_input_value);
}
*/