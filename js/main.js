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

//Codigo aplicación
// Inicio de Aplicación

alert("Bienvenido a la v.0..0.1 de su Cartera de Inversiones! 🥳\nA traves de una serie de preguntas intentaremos analizar los resultados de sus inversiones a lo largo del tiempo.")
alert("Para empezar 🚀, debido a que el programador aun no sabe importar datos a codigo de JS 😭 le tendremos que hacer unas preguntas para que este esto lo mas actualizado posible.")

//Solicitud Nombre Usuario
let user_name = prompt("Ah, me olvidaba! ¿Como te llamas?")
let user_confirmation="";

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

user_price_input("Dolar/Peso"); //Funcion 1
let dolar_value=asset_value;    //toma el return de la función y lo pone dentro de la variable
while (user_confirmation!="Si"){
    confirm(dolar_value); //Funcion 2
    //En la función 3 devuelvo los valores con un array, tengo que asignarlos a variables.                       
    let func_return=user_confirm_func(dolar_value,"Dolar/Peso");  //Funcion 3      
    dolar_value=func_return[1];
    user_confirmation=func_return[0];    
} 

//Solicitud de valor Tasa de Interes
user_confirmation="";

user_price_input("Tasa de Interes"); //Funcion 1
let interest_rate=asset_value;   //toma el return de la función y lo pone dentro de la variable
while (user_confirmation!="Si"){
    confirm(interest_rate); //Funcion 2
    //En la función 3 devuelvo los valores con un array, tengo que asignarlos a variables.                        
    let func_return=user_confirm_func(interest_rate,"Tasa de Interes"); //Funcion 3      
    interest_rate=func_return[1];
    user_confirmation=func_return[0];
} 

//Hasta aca tenemos el valor del dolar y la tasa de interes. Ahora empezaremos a solicitar al usuario que ingrese sus activos.

alert("Perfecto "+user_name+". Por ahora hemos creado una base para armar tu cartera de inversiones.\nAhora a completar la siguiente sección 🎉");

let user_asset_analysis_input=""

while_exit=true
while (while_exit){
    user_asset_analysis_input=parseInt(prompt("¿Elija en que moneda esta ahorrando actualmente?\n1) Moneda Nacional ($ARS)\n2) Moneda Extranjera ($USD)\n3) Criptomonedas\nPara salir escriba cualquier otra cosa."));
    switch(user_asset_analysis_input){
        case 1:
            user_confirm_func("Moneda Nacional ($ARS)");
            alert("software aun en desarrollo 🤖")
            while_exit=false;
            break;
        case 2:
            user_confirm_func("Moneda Extranjera ($USD)");
            alert("software aun en desarrollo 🤖")
            while_exit=false;
            break;
        case 3:
            user_confirm_func("Criptomonedas");
            alert("software aun en desarrollo 🤖")
            while_exit=false;
            break;
        case NaN:
            let exit_program=prompt("Usted esta a punto de salir del programa. Escriba 'NO' para evitar salir");
            if (exit_program=="NO"){
            continue;
            }else{
                while_exit=false;
                break;
            }

        }
    }

