//Genero un objeto para almacenar variables iniciales

let inicial_variables={};

//Genero la funcion que guarda lo ingresado por el usuario en el formulario en pares clave-valor.
const saveInitialData = (e) =>{
    e.preventDefault();                                                                 //No manda el formulario.
    inicial_variables = {
        user_name: document.getElementById("user_name").value,
        dolar_value: document.getElementById("dolar_value").value,
        interest_rate: document.getElementById("interest_rate").value,
    }
    document.querySelector("form").reset();                                             //Resetea el formulario.
    localStorage.setItem("Variables Iniciales", JSON.stringify(inicial_variables));     //Guarda el objeto como string en LocalStorage.
    window.location.href="../pages/assets.html"                                                //Redirige a la siguiente pagina.
}

document.getElementById("next_step_btn").addEventListener("click",saveInitialData);     //Evento que al clickear ejecuta la funcion creada.