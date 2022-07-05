//Barra superior con la infomación puesta en la primer pagina.
//Tomo los valores de localstorage y los convierto de string a objeto para el uso.
let initial_variables = JSON.parse(localStorage.getItem("Variables Iniciales"))

//ya con el objeto utilizable, tomo los valores del objeto y los asigno a variables
let user_name = initial_variables.user_name;
let dolar_value = initial_variables.dolar_value;
let interest_rate = initial_variables.interest_rate;

//Cambio la barra de la información en base a los datos que ingreso el usuario.
document.getElementById("welcome_user").innerHTML = "Te damos la bienvenida "+user_name+".";
document.getElementById("dolar_value_tag").innerHTML = "Dolar: $"+parseInt(dolar_value)+".";
document.getElementById("interest_rate_tag").innerHTML = "Tasa de Interes: "+parseInt(interest_rate)+"%.";
