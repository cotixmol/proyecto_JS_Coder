/*  En esta sección explico la funcionalidad del Index:
    Apenas reinicio o inicio la aplicación me aseguro de que todo el localStorage este limpio, esta funcionalidad tambien sirve por si queremos volver a reigresar los datos, desde la opción "¿Estos datos estan mal?" en "assets.htlm".
    Creo un objeto que asigno a la variable "initial_variables", aqui dentro inserto los valores ingresados por el usuario en la pagina principal. Guardandolo en el LocalStorage para un uso posterior.
    Ademas, debajo, genere un condicional que emite un Sweet Alert en caso que el usuario no ingrese todos los campos. En caso positivo direcciono al usuario al html "assets.html"
    Luego genero el evento al clickear en continuar.
*/

localStorage.clear()
let inicial_variables={};

const saveInitialData = (e) =>{
    e.preventDefault();                                                          
    
    inicial_variables = {
        user_name: document.getElementById("user_name").value,
        dolar_value: document.getElementById("dolar_value").value,
        interest_rate: document.getElementById("interest_rate").value,
    }

    document.querySelector("form").reset();

    localStorage.setItem("Variables Iniciales", JSON.stringify(inicial_variables));     

    if ((document.getElementById("user_name").value!="") && (document.getElementById("dolar_value").value!=0) && (document.getElementById("interest_rate").value!=0)){
        window.location.href="../pages/assets.html"  
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Faltan Campos',
            text: 'Ingresa todos los campos correctamente',
            confirmButtonColor: '#0B0033',
        })
    }
}
document.getElementById("next_step_btn").addEventListener("click",saveInitialData);