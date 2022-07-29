//Sweet Alert de Exito
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Genial, continuemos',
    showConfirmButton: false,
    timer: 2000
  })

/*  Creamos un función para hacer lo siguiente:
    Cada una de las 3 preguntas de assets.html va a ser asociada a una variable.
    Si el usuario hace click sobre "NO" , el bloque desaparece.
    La idea es generar contenido dinamico */

const delete_block = (block,button) => {
    let currency_block = document.getElementById(block);
    document.getElementById(button).addEventListener("click",() => currency_block.remove());
}

delete_block("local_currency","no_btn_local")
delete_block("foreign_currency","no_btn_foreign")
delete_block("crypto_currency","no_btn_crypto")

