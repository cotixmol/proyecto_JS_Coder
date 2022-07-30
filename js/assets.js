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

