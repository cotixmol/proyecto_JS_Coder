//CONTADOR QUE USO PARA CRYPTOMONEDAS

let contador_4 = 0;                                                       //Creo la variable que cuenta el numero de Activos

let botones_4 = document.querySelectorAll(".btn");                         //Selecciono los elementos con class="btn" y creo una clase de objeto
let numero_4 = document.getElementById("contador_4");                       //Selecciono el campo numerico del contador

botones_4.forEach(function (boton){                                       //Al objeto Botones, lo recorro y al ejecutar un click en alguno de sus elementos ejecuto una funcion.
    boton.addEventListener("click",function(e){
        let lista_de_clases = e.currentTarget.classList;                //Toma la clase del evento que se esta ejecutando
        if(lista_de_clases.contains("sumar")){                          //Si el elemento del evento donde clickee tiene clase "sumar", suma 1 al contador
            contador_4++;
        }
        else if(lista_de_clases.contains("reiniciar")){                 //Si el elemento del evento donde clickee tiene clase "reiniciar", pone el contador en 0
            contador_4=0;
        }
        numero_4.textContent = contador_4; 
                                         //Cambio el valor en pantalla
        localStorage.setItem("Contador 4", JSON.stringify(contador_4));     //Guardo el valor en LocalStorage para uso posterior.
    })
})