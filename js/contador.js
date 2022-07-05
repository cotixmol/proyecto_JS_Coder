//CONTADOR QUE USO PARA ACCIONES, CRYPTO Y OTRAS MONEDAS EXTRANJERAS.

let contador = 0;                                                       //Creo la variable que cuenta el numero de Activos


let botones = document.querySelectorAll(".btn")                         //Selecciono los elementos con class="btn" y creo una clase de objeto
let numero = document.getElementById("contador");                       //Selecciono el campo numerico del contador

botones.forEach(function (boton){                                       //Al objeto Botones, lo recorro y al ejecutar un click en alguno de sus elementos ejecuto una funcion.
    boton.addEventListener("click",function(e){
        let lista_de_clases = e.currentTarget.classList;                //Toma la clase del evento que se esta ejecutando
        if(lista_de_clases.contains("sumar")){                          //Si el elemento del evento donde clickee tiene clase "sumar", suma 1 al contador
            contador++;
        }
        else if(lista_de_clases.contains("reiniciar")){                 //Si el elemento del evento donde clickee tiene clase "reiniciar", pone el contador en 0
            contador=0;
        }
        numero.textContent = contador;                                  //Cambio el valor en pantalla
        localStorage.setItem("Contador", JSON.stringify(contador));     //Guardo el valor en LocalStorage para uso posterior.
    })
})

