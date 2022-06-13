//VARIABLES GLOBALES



//FUNCIONES
// 1) Función para ingresar el valor de un activo y retornarlo:
function user_price_input(a){
    asset_value=parseInt(prompt("Ingrese el valor actual de: "+a+"."));
    return asset_value
}
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



//Codigo aplicación
// Inicio de Aplicación

alert("Bienvenido a la v.0..0.2 de su Cartera de Inversiones! 🥳\nA traves de una serie de preguntas intentaremos analizar los resultados de sus inversiones a lo largo del tiempo.")
alert("Para empezar le tendremos que hacer unas preguntas para que este programa este lo mas actualizado posible.")

//Solicitud Nombre Usuario
let user_name = prompt("Por favor, ingrese su nombre:")
let user_confirmation="";
//Confirmamos con el usuario si lo que ingreso es correcto.
while (user_confirmation!="Si"){
    confirm(user_name); //Funcion 2
    //En la función 3 devuelvo los valores con un array, tengo que asignarlos a variables.
    let func_return=user_confirm_func(user_name,"Tu nombre"); //Funcion 3        
    user_name=func_return[1];
    user_confirmation=func_return[0];
} 

//Solicitud de Datos principales (Dolar y Tasa de Interes)

alert("Perfecto entonces, "+user_name+". Ahora tenemos que saber unos datos muy importantes de la realidad, llamadas variables macroeconomicas 📈.\nEn un futuro, espero que el programador aprenda a obtenerlos automaticamente y no molestar al usuario.");

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

//Hasta aca tenemos el valor del dolar y la tasa de interes. Ahora empezaremos a solicitar al usuario que ingrese sus activos.

alert("Perfecto "+user_name+". Por ahora hemos creado una base para armar tu cartera de inversiones.\nAhora a completar la siguiente sección 🎉");

let while_exit=true;
let while_inner_exit=true;
let asset_input=""
let asset_input_amount=0;
let user_asset_analysis_input=""
let asset_input_name="";
let asset_input_value=0;
let asset_quantity=0;

let case_1_1_asset={};
let case_1_2_asset={};
let case_1_3=[];
let case_i={};

//Empezamos a diferenciar distintos tipos de ahorros y los creamos como objetos. Estos objetos despues iran a un array donde seran
//facilmente manejables.

while(while_exit){
    user_asset_analysis_input=prompt("¿Elija en que moneda esta ahorrando actualmente?\n1) Moneda Nacional ($ARS)\n2) Moneda Extranjera ($USD)\n3) Criptomonedas\nPara salir escriba cualquier otra cosa.");
    if(user_asset_analysis_input=="1"){
            //PESOS EN EFECTIVO
            //Creo un while para controlar que el valor de asset_input sea (si/no), saliendo del while con la funcion user_asset_input_check, que modifica el valor de la condicion del while a true o false dependiendo que ingresa el usuario en asset_input.
            //Si el valor de asset_input es positivo, pregunta al usuario cuanto de este activo tiene. Dandole valor a unos de los elementos de objetos,
            while(while_inner_exit){
                asset_input=prompt('¿Tiene moneda nacional ahorrada en efectivo o depositos? (SI/NO):');
                while_inner_exit=user_asset_input_check(asset_input);
            }
            if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee: '));
            }
            
            asset_input_name="$ARS"; 
            asset_input_value=1;
            //Estos dos elementos en este caso son fijos, en otros el programa debera calcular.
            case_1_1_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value); 
            //Creo un objeto con el constructor dada tres propiedades del activo: Nombre, Cantidad, Valor.
            

            //PLAZO FIJO
            while_inner_exit=true; //Reinicio el valor de while_inner_exit para el siguiente paso.

            while(while_inner_exit){
                asset_input=prompt('¿Tiene moneda nacional ahorrada en Plazo Fijo con un interes del '+interest_rate+'%?');
                while_inner_exit=user_asset_input_check(asset_input);
            }
            if((asset_input=="Si") || (asset_input=="si") || (asset_input=="SI")){ 
                asset_input_amount=parseInt(prompt('Ingrese la cantidad que posee en Plazo Fijo $ARS: '));
            }
            
            asset_input_name="Plazo Fijo $ARS"; 
            asset_input_value=1;
            //Estos dos elementos en este caso son fijos, en otros el programa debera calcular.
            case_1_2_asset = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value); 
            //Creo un objeto con el constructor dada tres propiedades del activo: Nombre, Cantidad, Valor.




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
                case_i = new Wallet_assets(asset_input_name,asset_input_amount,asset_input_value);
                case_1_3.push(case_i);
                }
            }
        while_inner_exit=false;    
        }
    }


    else if(user_asset_analysis_input=="2"){} //Moneda Extranjera
    else if(user_asset_analysis_input=="3"){} //Criptomonedas
    else{
        let exit_program=prompt("Usted esta a punto de salir del programa. Escriba 'NO' para evitar salir");
        if (exit_program=="NO"){
            continue;
        }else{
            break;
        }
    }
}