//Contructor para generar los objetos con el Nombre del Activo, Cantidad del Activo y Valor del Activo
function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}

let case_2_1_asset={}; //Objeto que tiene los $USD en efectivo

let case_2_1=[]; //Array que tiene las acciones o bonos en $USD
let case_2_2=[]; //Array que tiene las otras monedas FIAT que el usuario ingrese.

let case_2={}; //Objeto que almacena temporalmente el valor de las acciones o bonos en $USD, y monedas extranjeras para luego push al objeto



let asset_input_amount=0; //Creo la variable que determina la cantidad de un item predefinido, cuando no los tiene el usuario.
let asset_input_name=""; //Creo la variables que determina el nombre del activo.
let asset_input_value=0; //Creo la variable que determina el valor de un item predefinido, cuando no los tiene el usuario.
let asset_quantity=0; //Creo la variable que uso en los FOR

 
//Dolares
    while_inner_exit=true;

    asset_input_amount=parseInt(prompt('Ingrese la cantidad de $USD que posee: '));
    asset_input_name="$USD"; 
    asset_input_value=dolar_value;
    //Estos dos elementos en este caso son fijos, en otros el programa debera calcular.
    
    case_2_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value); 
    //Creo un objeto con el constructor dada tres propiedades del activo: Nombre, Cantidad, Valor.    



//Bonos y Acciones en Dolares
    asset_quantity=parseInt(prompt('Ingrese la cantidad de acciones o bonos que posee: '));
        
    //Hago un for con el cual creo los valores para un constructor y luego .push al array
    for (let stock_number=1;stock_number<=asset_quantity;stock_number++){
            

        asset_input_name=prompt('Escriba el nombre de la accion o bono en dolares no. '+stock_number+'.');
        asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee de '+asset_input_name+':'));
        asset_input_value=parseInt(prompt('Ingrese el valor de la cotización de la accion '+asset_input_name+' en $USD.'))

        case_2 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*dolar_value);
            
        case_2_1.push(case_2);
    }


//Otras Monedas
    asset_quantity=parseInt(prompt('Ingrese que cantidad de las otras monedas posee: '));
        
    //Hago un for con el cual creo los valores para un constructor y luego .push al array
        for (let stock_number=1;stock_number<=asset_quantity;stock_number++){
            
            asset_input_name=prompt('Escriba el nombre de la moneda '+stock_number+'.');
            asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee de '+asset_input_name+':'));
            asset_input_value=parseInt(prompt('Ingrese a cuantos $USD equivale 1 (UN) '+asset_input_name+'.'))

            case_2 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*dolar_value);
            
            case_2_2.push(case_2);
        }

//ACOMODAMOS LOS VALORES DENTRO DE LOS 3 PRIMEROS OBJETOS (case_1_1_asset), (case_1_2_asset) y (case_2_1_asset)
//ASIGNACION DE VALORES DE LAS PROPIEDADES DE CADA OBJETO A VARIABLES MEJOR DEFINIDAS PARA EL USO
//EL IF SE USA PARA EVITAR LA ASIGNACION DE VARIABLES SI EL USUARIO NO INGRESO VALORES EN ALGUNO DE ESOS TRES OBJETOS.

if (int(case_2_1_asset.asset_input_amount) || case_2_1_asset.asset_input_amount==0){
}else{
    dolares_nombre =        case_2_1_asset.asset_input_name;
    dolares_cantidad =      case_2_1_asset.asset_input_amount;
    dolares_valor =         case_2_1_asset.asset_input_value;
}



//MANIPULACION DE ARRAY DE OBJETOS PARA OBTENER VARIABLES MEJOR DEFINIDAS
// (case_2_1): Array que almacena objetos con Nombre, Cantidad y Valor de Acciones/Bonos en $USD.

acciones_dolares_nombres = []
acciones_dolares_valor = []
acciones_dolares_cantidad = []

for (let el in case_2_1){
    acciones_dolares_nombres =      push(case_2_1.asset_input_name);
    acciones_dolares_valor =        push(case_2_1.asset_input_amount);
    acciones_dolares_cantidad =     push(case_2_1.asset_input_value);
}

// (case_2_2): Array que almacena objetos con Nombre, Cantidad y Valor de otras monedas FIAT.

otras_monedas_nombres = []
otras_monedas_valor = []
otras_monedas_cantidad = []

for (let el in case_2_2){
    otras_monedas_nombres =         push(case_2_2.asset_input_name);
    otras_monedas_valor =           push(case_2_2.asset_input_amount);
    otras_monedas_cantidad =        push(case_2_2.asset_input_value);
}