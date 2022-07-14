//CONTADOR QUE USO PARA ACCIONES, CRYPTO Y OTRAS MONEDAS EXTRANJERAS.

let contador_3 = 0;                                                       //Creo la variable que cuenta el numero de Activos

let botones_3 = document.querySelectorAll(".btn");                         //Selecciono los elementos con class="btn" y creo una clase de objeto
let numero_3 = document.getElementById("contador_3");                       //Selecciono el campo numerico del contador

botones_3.forEach(function (boton){                                       //Al objeto Botones, lo recorro y al ejecutar un click en alguno de sus elementos ejecuto una funcion.
    boton.addEventListener("click",function(e){
        let lista_de_clases = e.currentTarget.classList;                //Toma la clase del evento que se esta ejecutando
        if(lista_de_clases.contains("sumar")){                          //Si el elemento del evento donde clickee tiene clase "sumar", suma 1 al contador
            contador_3++;
        }
        else if(lista_de_clases.contains("reiniciar")){                 //Si el elemento del evento donde clickee tiene clase "reiniciar", pone el contador en 0
            contador_3=0;
        }
        numero_3.textContent = contador_3; 
                                         //Cambio el valor en pantalla
        localStorage.setItem("Contador 3", JSON.stringify(contador_3));     //Guardo el valor en LocalStorage para uso posterior.
    })
})