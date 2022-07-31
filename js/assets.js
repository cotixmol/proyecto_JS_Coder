/*  En esta sección explico la funcionalidad de la pagina "assets.html"
    En primer lugar genero un SweetAlert para indicar que los procesos de donde provengo antes de llegar aqui fueron un exito.
    Creo una función que da un dinamismo a cada una de las 3 preguntas de assets.html. Esta toma el id del bloque html y el id del botón "No" de cada pregunta. Si el usuario hace click sobre "NO" , el bloque desaparece.
*/

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Genial, continuemos',
    showConfirmButton: false,
    timer: 2000
  })

const delete_block = (block,button) => {
    let currency_block = document.getElementById(block);
    document.getElementById(button).addEventListener("click",() => currency_block.remove());
}

delete_block("local_currency","no_btn_local")
delete_block("foreign_currency","no_btn_foreign")
delete_block("crypto_currency","no_btn_crypto")

    let pesos_pesos = parseInt(JSON.parse(localStorage.getItem("Pesos Valores Finales Pesos")))
    let dolares_pesos = parseInt(JSON.parse(localStorage.getItem("Dolares Valores Finales Pesos")))
    let btc_pesos = parseFloat(JSON.parse(localStorage.getItem("BTC Valores Finales Pesos")))

    let pesos_dolares = parseInt(JSON.parse(localStorage.getItem("Pesos Valores Finales Dolares")))
    let dolares_dolares = parseInt(JSON.parse(localStorage.getItem("Dolares Valores Finales Dolares")))
    let btc_dolares = parseFloat(JSON.parse(localStorage.getItem("BTC Valores Finales Dolares")))

    let pesos_crypto = parseInt(JSON.parse(localStorage.getItem("Pesos Valores Finales Cryptomoneda")))
    let dolares_crypto = parseInt(JSON.parse(localStorage.getItem("Dolares Valores Finales Cryptomoneda")))
    let btc_crypto = parseFloat(JSON.parse(localStorage.getItem("BTC Valores Finales Cryptomoneda")))

    sum_pesos= ((pesos_pesos)||0) + ((pesos_dolares)||0) + ((pesos_crypto)||0);
    sum_dolares = ((dolares_pesos)||0) + ((dolares_dolares)||0) + ((dolares_crypto)||0);
    sum_btc= ((btc_pesos)||0) + ((btc_dolares)||0) + ((btc_crypto)||0);

    document.querySelector(".peso_patrimony_final").innerHTML = sum_pesos;
    document.querySelector(".dolar_patrimony_final").innerHTML = sum_dolares;
    document.querySelector(".btc_patrimony_final").innerHTML = sum_btc;