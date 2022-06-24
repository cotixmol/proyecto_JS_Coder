/*
//VARIABLES GLOBALES PARTE 2 CODIGO.
let case_1_1_asset={}; //Objeto que tiene los $ARS en efectivo
let case_1_2_asset={}; //Objeto que tiene los Plazo Fijo $ARS
let case_2_1_asset={}; //Objeto que tiene los $USD en efectivo
let case_1_1=[]; //Array que tiene las acciones o bonos en $ARS
let case_2_1=[]; //Array que tiene las acciones o bonos en $USD
let case_2_2=[]; //Array que tiene las otras monedas FIAT que el usuario ingrese.
let case_3_1=[]; //Array que tiene las cryptomonedas.
let case_1={}; //Objeto que almacena temporalmente el valor de las acciones o bonos en $ARS para luego push al objeto
let case_2={}; //Objeto que almacena temporalmente el valor de las acciones o bonos en $USD, y monedas extranjeras para luego push al objeto
let case_3={}; //Objeto que almacena temporalmente el valor de las cryptomonedas en $USD para luego push al objeto


//FUNCIONES DEL CODIGO
// 2) Función para confirmar que el usuario ingreso correctamente retonando un valor "Si","No" u otro:
function confirm(a){
    return(user_confirmation = prompt("El valor ingresado es "+a+". ¿Es correcto? (Si/No)"));
};
// 3) Función que comprueba la respuesta anterior, dando la posibilidad de reingreso de la variable b o indicando que tiene que contestar con "Si" o con "No":
function user_confirm_func(b,a){
    if (user_confirmation=="Si" || user_confirmation=="SI" || user_confirmation=="si"){
        user_confirmation="Si";
    }else if (user_confirmation=="No" || user_confirmation=="NO" || user_confirmation=="no"){
        b=prompt("Por favor, ingresa correctamente: "+a+".");
    }else{
        alert("Tenes que poner Si o No");
    }
    return [user_confirmation,b]; //Devuelvo los valores con un array
}
// 4) Funcion que uso para revisar si el usuario ingreso si o no. Al comprobarlo cambia a false la condicion del while local.
function user_asset_input_check(a){
    if ((a=="Si") || (a=="SI") || (a=="si") || (a=="No") || (a=="NO") || (a=="no")){
        return false;
    }else{
        alert('Tiene que ingresar Si o No')
        return true;
    }    
}
// 5) Funcion de construcción que uso para crear los objetos de inversion, cada uno tiene un nombre, valor y cantidad asociado.
// Luego cada objeto ira a un array.
function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}
*/
//PARTE 1. INICIO DE APLICACION

//Estructuro los saludos iniciales e ingresos iniciales con DOM
//Contador para el bloque de saludos e ingreso de datos principales
let start_block_counter=0

//Genero una lista de los textos que quiero ir mostrando a medida que se hace click en siguiente.
const app_start_block=[
    "Bienvenido a la aplicación web que determina su cartera de activos. A traves de una serie de preguntas intentaremos analizar su cartera de inversiones de una forma resumida y practica.",
    "Para comenzar, ingrese su nombre",
    "Perfecto. Ahora vamos a ingresar 2 variables macroeconomicas que tienen que ver en gran medida con la realidad del pais'",
    "Ingrese la cotización actual del Dolar",
    "Ingrese la tasa de interes actual",
    "Perfecto, ya ingreso todo lo necesario. Continuemos con la siguiente parte"
]
//Genero una lista de los inputs que quiero ir mostrando a medida que se hace click en siguiente.
const app_start_block_inputs=[
    "",
    "<input id='user_name_input' placeholder='Ingrese su nombre' type='text'>",
    "",
    "<input id='dolar_value_input' placeholder='Valor $USD/$ARS' type='number'>",
    "<input id='interest_rate_input' placeholder='Tasa de Interes' type='number'>",
    ""
]

//Inicio la aplicacion modificando el HTML con el indice 0 de de la lista app_start_block.
document.getElementById("start_block").innerHTML = app_start_block[start_block_counter];
document.getElementById("start_block_inputs").innerHTML = app_start_block_inputs[start_block_counter];


//Genero un evento donde al clickear modifica el HTML con el siguiente elemento de la lista app_start_block y la lista app_start_block_inputs. 
//Estan sincronizadas para que aparezcan las opciones.
initial_variables=[]
initial_variables_counter=0

//Genero un evento que al hacer click cambie los elementos de las listas app_start_block y app_start_block_inputs. Como estan sincronizados se muestran como corresponde
//Luego genero una variable que toma el hijo del bloque de html con id start_block_inputs, ve si esta definido o no. En caso de estar definido, siempre es un input.
//Tomamos el valor con e.target.value y lo aplicamos al item 0, 1 y 2 de una lista llamada initial_variables
//Luego los elementos de esta lista los llevamos a variables.

document.getElementById("next_button").addEventListener("click", ()=>{
        document.getElementById("start_block").innerHTML = app_start_block[start_block_counter+1]
        document.getElementById("start_block_inputs").innerHTML = app_start_block_inputs[start_block_counter+1]
        start_block_counter+=1
    
        const input = document.getElementById("start_block_inputs").children[0];  
            if (input != undefined) {
                input.addEventListener('change', (e) => {
                initial_variables[initial_variables_counter]=e.target.value;
                initial_variables_counter+=1;
        })
    }
        //Elimino la flecha al llegar al ultimo
        if (start_block_counter>=app_start_block.length-1){
            document.getElementById("next_button_div").innerHTML="";
    }
});


/*
//Solicitud de Datos principales (Dolar y Tasa de Interes)

//Solicitud de valor del Dolar
user_confirmation="";
user_price_input("Dolar/Peso"); //Funcion 1. // Funcion para preguntar acerca de la cotización de un valor.
let dolar_value=asset_value;    //Toma el return de la función y lo pone dentro de la variable
//Confirmamos con el usuario si lo que ingreso es correcto.
while (user_confirmation!="Si"){
    confirm(dolar_value); //Funcion 2
    //En la función 3 devuelvo los valores con un array, tengo que asignarlos a variables.                       
    let func_return=user_confirm_func(dolar_value,"Dolar/Peso");  //Funcion 3      
    dolar_value=func_return[1];
    user_confirmation=func_return[0];    
} 

//Solicitud de valor Tasa de Interes
user_confirmation="";

user_price_input("Tasa de Interes"); //Funcion 1. // Funcion para preguntar acerca de la cotización de un valor.
let interest_rate=asset_value;   //Toma el return de la función y lo pone dentro de la variable.
//Confirmamos con el usuario si lo que ingreso es correcto.
while (user_confirmation!="Si"){
    confirm(interest_rate); //Funcion 2
    //En la función 3 devuelvo los valores con un array, tengo que asignarlos a variables.                        
    let func_return=user_confirm_func(interest_rate,"Tasa de Interes"); //Funcion 3      
    interest_rate=func_return[1];
    user_confirmation=func_return[0];
} 

//CREACION VARIABLES PARA LA PARTE 2 DEL CODIGO.
let while_exit=true;
let while_inner_exit=true;  //Valores para iniciar los ciclos while.
let asset_input=""  //Creo que la variable que determina la respuesta del usuario, ante si tiene o no tal activo.
let asset_input_amount=0; //Creo la variable que determina la cantidad de un item predefinido, cuando no los tiene el usuario.
let user_asset_analysis_input="" //Creo variable que determina la estructura IF.
let asset_input_name=""; //Creo la variables que determina el nombre del activo.
let asset_input_value=0; //Creo la variable que determina el valor de un item predefinido, cuando no los tiene el usuario.
let asset_quantity=0; //Creo la variable que uso en los FOR

// PARTE 2. TOMA DE INFORMACIÓN DE ACTIVOS.

alert("Perfecto "+user_name+". Por ahora hemos creado una base para armar tu cartera de inversiones.\nAhora a completar la siguiente sección 🎉");

//Empezamos a diferenciar distintos tipos de ahorros y los creamos como objetos. Estos objetos despues iran a un array donde seran
//facilmente manejables.

while(while_exit){
    user_asset_analysis_input=prompt("¿Elija en que moneda esta ahorrando actualmente?\n1) Moneda Nacional ($ARS)\n2) Moneda Extranjera ($USD)\n3) Criptomonedas\nPara salir escriba cualquier otra cosa.");
    //MONEDA NACIONAL ($ARS)
    if(user_asset_analysis_input=="1"){
            
        //PESOS EN EFECTIVO
            while_inner_exit=true; //Reinicio el valor de while_inner_exit para el siguiente paso.
            //Creo un while para controlar que el valor de asset_input sea (si/no), saliendo del while con la funcion user_asset_input_check, que modifica el valor de la condicion del while a true o false dependiendo que ingresa el usuario en asset_input.
            //Si el valor de asset_input es positivo, pregunta al usuario cuanto de este activo tiene. Dandole valor a unos de los elementos de objetos,
            while(while_inner_exit){
                asset_input=prompt('¿Tiene moneda nacional ahorrada en efectivo o depositos? (SI/NO):');
                while_inner_exit=user_asset_input_check(asset_input);
            }
            if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee: '));

            asset_input_name="$ARS"; 
            asset_input_value=1;
            //Estos dos elementos en este caso son fijos, en otros el programa debera calcular.
            case_1_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value); 
            //Creo un objeto con el constructor dada tres propiedades del activo: Nombre, Cantidad, Valor.
            }
            

            //PLAZO FIJO
            while_inner_exit=true; //Reinicio el valor de while_inner_exit para el siguiente paso.


            while(while_inner_exit){
                asset_input=prompt('¿Tiene moneda nacional ahorrada en Plazo Fijo con un interes del '+interest_rate+'%?');
                while_inner_exit=user_asset_input_check(asset_input);
            }
            if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee en Plazo Fijo $ARS: '));
                
            asset_input_name="Plazo Fijo $ARS"; 
            asset_input_value=1;
            //Estos dos elementos en este caso son fijos, en otros el programa debera calcular.
            case_1_2_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value); 
            //Creo un objeto con el constructor dada tres propiedades del activo: Nombre, Cantidad, Valor.
            }


            //ACCIONES Y VALORES
            while_inner_exit=true; //Reinicio el valor de while_inner_exit para el siguiente paso.

            while(while_inner_exit){
                asset_input=prompt('¿Tiene acciones o bonos con valuacion en Moneda Nacional $ARS?');
                while_inner_exit=user_asset_input_check(asset_input);
                if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                    asset_quantity=parseInt(prompt('Ingrese la cantidad de acciones o bonos que posee: '));
                }
            //Hago un for con el cual creo los valores para un constructor y luego .push al array
            for (let stock_number=1;stock_number<=asset_quantity;stock_number++){
                
                if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                    asset_input_name=prompt('Escriba el nombre de la accion o bono no. '+stock_number+'.');
                    user_confirmation="";

                    while (user_confirmation!="Si"){
                    confirm(asset_input_name);
                    let func_return=user_confirm_func(asset_input_name,"Nombre Acción");  //Funcion 3      
                    asset_input_name=func_return[1];
                    user_confirmation=func_return[0];
                    }    

                    asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee de '+asset_input_name+':'));
                    user_confirmation="";
                    while (user_confirmation!="Si"){
                    confirm(asset_input_amount);
                    let func_return=user_confirm_func(asset_input_amount,"Cantidad de Acciones");  //Funcion 3      
                    asset_input_amount=func_return[1];
                    user_confirmation=func_return[0];
                    }   

                    asset_input_value=parseInt(prompt('Ingrese el valor de la cotización de la accion '+asset_input_name+'.'))
                    user_confirmation="";
                    while (user_confirmation!="Si"){
                    confirm(asset_input_value);
                    let func_return=user_confirm_func(asset_input_value,"Cotizacion Acción");  //Funcion 3      
                    asset_input_value=func_return[1];
                    user_confirmation=func_return[0];    
                    }
                }
                case_1 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value);
                case_1_1.push(case_1);
            }
        while_inner_exit=false;    
        }
    }
    //MONEDA EXTRANJERA ($USD)
    else if(user_asset_analysis_input=="2"){
        
        //DOLARES
        while_inner_exit=true;

        while(while_inner_exit){
            asset_input=prompt('¿Tiene $USD ahorrados en efectivo o depositos? (SI/NO):');
            while_inner_exit=user_asset_input_check(asset_input);
        }
        if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
            asset_input_amount=parseInt(prompt('Ingrese la cantidad de $USD que posee: '));

        asset_input_name="$USD"; 
        asset_input_value=dolar_value;
        //Estos dos elementos en este caso son fijos, en otros el programa debera calcular.
        case_2_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value); 
        //Creo un objeto con el constructor dada tres propiedades del activo: Nombre, Cantidad, Valor.    
        }


        //BONOS ACCIONES EN DOLARES
        while_inner_exit=true; //Reinicio el valor de while_inner_exit para el siguiente paso.

        while(while_inner_exit){
            asset_input=prompt('¿Tiene acciones o bonos con valuacion en $USD? (SI/NO)');
            while_inner_exit=user_asset_input_check(asset_input);
            if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                asset_quantity=parseInt(prompt('Ingrese la cantidad de acciones o bonos que posee: '));
            }
        //Hago un for con el cual creo los valores para un constructor y luego .push al array
            for (let stock_number=1;stock_number<=asset_quantity;stock_number++){
                
                if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                    asset_input_name=prompt('Escriba el nombre de la accion o bono en dolares no. '+stock_number+'.');
                    user_confirmation="";

                    while (user_confirmation!="Si"){
                    confirm(asset_input_name);
                    let func_return=user_confirm_func(asset_input_name,"Nombre Acción/Bono");  //Funcion 3      
                    asset_input_name=func_return[1];
                    user_confirmation=func_return[0];
                    }    

                    asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee de '+asset_input_name+':'));
                    user_confirmation="";
                    while (user_confirmation!="Si"){
                    confirm(asset_input_amount);
                    let func_return=user_confirm_func(asset_input_amount,"Cantidad de Acciones");  //Funcion 3      
                    asset_input_amount=func_return[1];
                    user_confirmation=func_return[0];
                    }   

                    asset_input_value=parseInt(prompt('Ingrese el valor de la cotización de la accion '+asset_input_name+' en $USD.'))
                    user_confirmation="";
                    while (user_confirmation!="Si"){
                    confirm(asset_input_value);
                    let func_return=user_confirm_func(asset_input_value,"Cotizacion Acción");  //Funcion 3      
                    asset_input_value=func_return[1];
                    user_confirmation=func_return[0];    
                    }
                case_2 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*dolar_value);
                case_2_1.push(case_2);
            }
        }
            while_inner_exit=false;    
    }

        while_inner_exit=true; //Reinicio el valor de while_inner_exit para el siguiente paso.

        while(while_inner_exit){
            asset_input=prompt('¿Tiene alguna otra moneda FIAT en efectivo o depositada?');
            while_inner_exit=user_asset_input_check(asset_input);
            if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                asset_quantity=parseInt(prompt('Ingrese que cantidad de las otras monedas posee: '));
            }
        //Hago un for con el cual creo los valores para un constructor y luego .push al array
            for (let stock_number=1;stock_number<=asset_quantity;stock_number++){
                
                if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                    asset_input_name=prompt('Escriba el nombre de la moneda '+stock_number+'.');
                    user_confirmation="";

                    while (user_confirmation!="Si"){
                    confirm(asset_input_name);
                    let func_return=user_confirm_func(asset_input_name,"Nombre Moneda FIAT");  //Funcion 3      
                    asset_input_name=func_return[1];
                    user_confirmation=func_return[0];
                    }    

                    asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee de '+asset_input_name+':'));
                    user_confirmation="";
                    while (user_confirmation!="Si"){
                    confirm(asset_input_amount);
                    let func_return=user_confirm_func(asset_input_amount,"Cantidad de unidades");  //Funcion 3      
                    asset_input_amount=func_return[1];
                    user_confirmation=func_return[0];
                    }   

                    asset_input_value=parseInt(prompt('Ingrese a cuantos $USD equivale 1 (UN) '+asset_input_name+'.'))
                    user_confirmation="";
                    while (user_confirmation!="Si"){
                    confirm(asset_input_value);
                    let func_return=user_confirm_func(asset_input_value,"Cotización "+asset_input_amount+"/USD");  //Funcion 3      
                    asset_input_value=func_return[1];
                    user_confirmation=func_return[0];    
                    }
                case_2 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*dolar_value);
                case_2_2.push(case_2);
            }
        }
            while_inner_exit=false;    
    }
}
    //CRYPTOMONEDAS
    else if(user_asset_analysis_input=="3"){
        while_inner_exit=true; //Reinicio el valor de while_inner_exit para el siguiente paso.
        
        while(while_inner_exit){
            asset_input=prompt('¿Tiene ahorros en Cryptomonedas?');
            while_inner_exit=user_asset_input_check(asset_input);
            if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                asset_quantity=parseInt(prompt('Ingrese que cantidad de distintas cryptomonedas que posee: '));
            }
            //Hago un for con el cual creo los valores para un constructor y luego .push al array
            for (let stock_number=1;stock_number<=asset_quantity;stock_number++){
                
                if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                    asset_input_name=prompt('Escriba el nombre de la cryptomoneda '+stock_number+'.');
                    user_confirmation="";

                    while (user_confirmation!="Si"){
                    confirm(asset_input_name);
                    let func_return=user_confirm_func(asset_input_name,"Nombre Cryptomoneda");  //Funcion 3      
                    asset_input_name=func_return[1];
                    user_confirmation=func_return[0];
                    }    

                    asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee de '+asset_input_name+':'));
                    user_confirmation="";
                    while (user_confirmation!="Si"){
                    confirm(asset_input_amount);
                    let func_return=user_confirm_func(asset_input_amount,"Cantidad de unidades");  //Funcion 3      
                    asset_input_amount=func_return[1];
                    user_confirmation=func_return[0];
                    }   

                    asset_input_value=parseInt(prompt('Ingrese a cuantos $USD equivale 1 (UN) '+asset_input_name+'.'))
                    user_confirmation="";
                    while (user_confirmation!="Si"){
                    confirm(asset_input_value);
                    let func_return=user_confirm_func(asset_input_value,"Cotización "+asset_input_amount+"/USD");  //Funcion 3      
                    asset_input_value=func_return[1];
                    user_confirmation=func_return[0];    
                    }
                case_3 = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value*dolar_value);
                case_3_1.push(case_3);
            }
        }
            while_inner_exit=false;    
    }
    }

    //SALIDA DEL WHILE
    else{
        let exit_program=prompt("Usted esta a punto de salir del programa. Escriba 'NO' para evitar salir");
        if (exit_program=="NO"){
            continue;
        }else{
            break;
        }
    }
}

//HASTA ACA ALMACENAMOS TODOS LOS VALORES QUE POSEE EL USUARIO. A PARTIR DE AQUI HAY QUE RESUMIR LA INFORMACIÓN Y MOSTRARLA.



//ESTOS 3 OBJETOS ALMACENAN INFORMACION PARA TRABAJAR
(case_1_1_asset) //Objeto Nombre, Cantidad y Valor de $ARS en efectivo/depositado
(case_1_2_asset) //Objeto Nombre, Cantidad y Valor de Plazo Fijo $ARS
(case_2_1_asset) //Objeto Nombre, Cantidad y Valor de $USD en efectivo/depositado

//ESTOS 4 ARRAYS QUE CONTIENEN OBJETOS SON LOS QUE TRABAJAREMOS PARA PODER MODIFICAR VALORES EN HTML Y MOSTRARLE RESULTADOS AL USUARIO.
(case_1_1); //Array que almacena objetos con Nombre, Cantidad y Valor de Acciones/Bonos en $ARS.
(case_2_1); //Array que almacena objetos con Nombre, Cantidad y Valor de Acciones/Bonos en $USD.
(case_2_2); //Array que almacena objetos con Nombre, Cantidad y Valor de otras monedas FIAT.
(case_3_1); //Array que almacena objetos con Nombre, Cantidad y Valor de Cryptomonedas.


//NOMBRE DE LAS PROPIEDADES DENTRO DE CADA OBJETO
(asset_input_name)
(asset_input_amount)
(asset_input_value)

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

if (int(case_2_1_asset.asset_input_amount) || case_2_1_asset.asset_input_amount==0){
}else{
    dolares_nombre =        case_2_1_asset.asset_input_name;
    dolares_cantidad =      case_2_1_asset.asset_input_amount;
    dolares_valor =         case_2_1_asset.asset_input_value;
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

//(case_3_1): Array que almacena objetos con Nombre, Cantidad y Valor de Cryptomonedas.

cryptomonedas_nombres = []
cryptomonedas_valor = []
cryptomonedas_cantidad = []

for (let el in case_3_1){
    cryptomonedas_nombres =         push(case_3_1.asset_input_name);
    cryptomonedas_valor =           push(case_3_1.asset_input_amount);
    cryptomonedas_cantidad =        push(case_3_1.asset_input_value);
}


//ME QUEDAN LOS SIGUIENTES ARRAYS Y VARIABLES ARMADOS PARA LUEGO PASAR DATOS PUNTUALES AL HTML. LAS VARIABLES TIENEN NOMBRES MAS
//AMIGABLES Y FACILES DE MANEJAR

//VARIABLES 
(pesos_nombre)         
(pesos_cantidad)       
(pesos_valor)        

(PF_nombre)
(PF_cantidad)          
(PF_valor)            

(dolares_nombre)
(dolares_cantidad)
(dolares_valor)    

//ARRAYS
(acciones_pesos_nombres)
(acciones_pesos_valor)
(acciones_pesos_cantidad)

(acciones_dolares_nombres)
(acciones_dolares_valor)
(acciones_dolares_cantidad)

(otras_monedas_nombres)
(otras_monedas_valor)
(otras_monedas_cantidad)

(cryptomonedas_nombres)
(cryptomonedas_valor)
(cryptomonedas_cantidad)


//HASTA AQUI ESTA TODO PLANTEADO Y ORGANIZADO PARA MANDAR LA INFORMACION AL HTML MEDIANTE MANIPULACION DE DOM

*/