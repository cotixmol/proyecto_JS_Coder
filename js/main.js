//Funciones
function user_price_input(a){
    asset_value=parseInt(prompt("Ingrese el valor actual de: "+a+"."));
    return asset_value
}

function user_confirm_func(a){
    if (user_confirmation=="Si" || user_confirmation=="SI" || user_confirmation=="si"){
        user_confirmation="Si";
    }else if (user_confirmation=="No" || user_confirmation=="NO" || user_confirmation=="no"){
        user_name=prompt("Por favor, ingresa correctamente: "+a+".");
    }else{
        alert("Tenes que poner Si o No");
    }
    return user_confirmation;
}

//Codigo aplicación

alert("Bienvenido a la v.0.1 de su Cartera de Inversiones! 🥳\nA traves de una serie de preguntas intentaremos analizar los resultados de sus inversiones a lo largo del tiempo.")
alert("Para empezar 🚀, debido a que el programador aun no sabe importar datos a codigo de JS 😭 le tendremos que hacer unas preguntas para que este esto lo mas actualizado posible.")

//Entrada nombre del usuario
let user_name = prompt("Ah, me olvidaba! ¿Como te llamas?")
let user_confirmation="";

while (user_confirmation!="Si"){
    user_confirmation=prompt("¿Estas seguro que te llamas "+user_name+"?")
    user_confirm_func("Tu nombre")
} 

//Actualización de datos Macroeconomicos

alert("Perfecto, entonces "+user_name+". Ahora tenemos que saber unos datos muy importantes de la realidad, llamadas variables macroeconomicas 📈.\nEn un futuro, espero que el programador aprenda a obtenerlos automaticamente y no molestar al usuario");

user_confirmation="";

user_price_input("Dolar/Peso");
let dolar_value=asset_value;
while (user_confirmation!="Si"){
    user_confirmation=prompt("El valor ingresado es $"+dolar_value+". ¿Es correcto?")
    user_confirm_func("Dolar/Peso")
} 

user_confirmation="";

user_price_input("Tasa de Interes");
let interest_rate=asset_value;
while (user_confirmation!="Si"){
    user_confirmation=prompt("El valor ingresado es "+interest_rate+"%. ¿Es correcto?.")
    user_confirm_func("Tasa de Interes")
} 

