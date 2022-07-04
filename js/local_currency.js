function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}

let case_1_1_asset={}; //Objeto que tiene los $ARS en efectivo
let case_1_2_asset={}; //Objeto que tiene los Plazo Fijo $ARS
let case_1_1=[]; //Array que tiene las acciones o bonos en $ARS
let case_1={}; //Objeto que almacena temporalmente el valor de las acciones o bonos en $ARS para luego push al objeto


let asset_input_amount=0; //Creo la variable que determina la cantidad de un item predefinido, cuando no los tiene el usuario.
let asset_input_name=""; //Creo la variables que determina el nombre del activo.
let asset_input_value=0; //Creo la variable que determina el valor de un item predefinido, cuando no los tiene el usuario.
let asset_quantity=0; //Creo la variable que uso en los FOR


//Pesos Depositados
asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee: '));
asset_input_name="$ARS"; 
asset_input_value=1;


case_1_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value); 
//Creo un objeto con el constructor dada tres propiedades del activo: Nombre, Cantidad, Valor.



//Plazo Fijo
asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee en Plazo Fijo $ARS: '));
asset_input_name="Plazo Fijo $ARS"; 
asset_input_value=1;

case_1_2_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value); 
//Creo un objeto con el constructor dada tres propiedades del activo: Nombre, Cantidad, Valor.



//Acciones y Valores
asset_quantity=parseInt(prompt('Ingrese la cantidad de acciones o bonos que posee: '));

//Hago un for con el cual creo los valores para un constructor y luego .push al array
for (let stock_number=1;stock_number<=asset_quantity;stock_number++){
    

        asset_input_name=prompt('Escriba el nombre de la accion o bono no. '+stock_number+'.');
        asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee de '+asset_input_name+':'));
        asset_input_value=parseInt(prompt('Ingrese el valor de la cotización de la accion '+asset_input_name+'.'))
    }

    
    case_1 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value);
    
    case_1_1.push(case_1);


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