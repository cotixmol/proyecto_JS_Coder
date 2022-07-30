/*  En esta sección explico la funcionalidad de la barra de initial values:
    Durante toda la aplicación hay una vista previa de los datos ingresados por el usuario en la primer pagina, esto genera una personalización interesante.
    En primer lugar tomo del LocalStorage el objeto con los datos ingresado por el usuario en la primer pagina. A partir de aqui asigno a variables especificas las distintas propiedades del objeto, y modifico los campos de la barra con un .innerHTML
*/

let initial_variables = JSON.parse(localStorage.getItem("Variables Iniciales"))

let user_name = initial_variables.user_name;
let dolar_value = parseInt(initial_variables.dolar_value);
let interest_rate = parseInt(initial_variables.interest_rate);

document.getElementById("welcome_user").innerHTML = `Te damos la bienvenida ${user_name}`;
document.getElementById("dolar_value_tag").innerHTML = `Dolar: $${dolar_value}.`;
document.getElementById("interest_rate_tag").innerHTML = `Tasa de Interes: ${interest_rate}%.`;
