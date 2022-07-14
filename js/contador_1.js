//CONTADOR QUE USO PARA ACCIONES, CRYPTO Y OTRAS MONEDAS EXTRANJERAS.

let contador_1 = 0;                                                       //Creo la variable que cuenta el numero de Activos

let botones_1 = document.querySelectorAll(".btn");                         //Selecciono los elementos con class="btn" y creo una clase de objeto
let numero_1 = document.getElementById("contador_1");                       //Selecciono el campo numerico del contador

botones_1.forEach(function (boton){                                       //Al objeto Botones, lo recorro y al ejecutar un click en alguno de sus elementos ejecuto una funcion.
    boton.addEventListener("click",function(e){
        let lista_de_clases = e.currentTarget.classList;                //Toma la clase del evento que se esta ejecutando
        if(lista_de_clases.contains("sumar")){                          //Si el elemento del evento donde clickee tiene clase "sumar", suma 1 al contador
            contador_1++;
        }
        else if(lista_de_clases.contains("reiniciar")){                 //Si el elemento del evento donde clickee tiene clase "reiniciar", pone el contador en 0
            contador_1=0;
        }
        numero_1.textContent = contador_1; 
                                         //Cambio el valor en pantalla
        localStorage.setItem("Contador 1", JSON.stringify(contador_1));     //Guardo el valor en LocalStorage para uso posterior.
    })
})