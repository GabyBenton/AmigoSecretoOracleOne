// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
     
    let cajita= input.value.trim();

    if(cajita != null && cajita !=""){

        if (amigos.includes(cajita)) {
            alert("El nombre ya fue ingresado");
        }else{
            amigos.push(cajita);
            input.value="";
        }
        
    }else{
        alert("Ingresa un nombre");
    }
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    console.log(cajita);
    console.log(amigos);
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;  
        lista.appendChild(li);
        console.log(amigo);
    });

    
}

function sortearAmigo(){
    let indice = Math.floor(Math.random()*amigos.length);
    console.log(indice);

    let amigoSecreto = amigos[indice];
    console.log(amigoSecreto);
    const li = document.getElementById("resultado");
    li.insertAdjacentHTML('beforeend', `<li>${amigoSecreto}</li>`);

}