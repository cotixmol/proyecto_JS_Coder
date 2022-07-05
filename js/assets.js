//Asigno a unas variables los bloques donde esta cada pregunta
let local_currency_block = document.getElementById("local_currency")
let foreign_currency_block = document.getElementById("foreign_currency")
let crypto_currency_block = document.getElementById("crypto_currency")

//Asigno a unas variables los botones SI/NO de cada pregunta
let si_pesos = document.getElementById("yes_btn_local");
let no_pesos = document.getElementById("no_btn_local");
let si_dolares = document.getElementById("yes_btn_foreign");
let no_dolares = document.getElementById("no_btn_foreign");
let si_crypto = document.getElementById("yes_btn_crypto");
let no_crypto = document.getElementById("no_btn_crypto");

//En caso de que el usuario clickee no activa el evento que tiene una funcion que remueve el bloque.
no_pesos.addEventListener("click",() => local_currency_block.remove());
no_dolares.addEventListener("click",() => foreign_currency_block.remove());
no_crypto.addEventListener("click",() => crypto_currency_block.remove());

//Funcion que esta en el evento al clickear SI. Manda a otra pagina.
