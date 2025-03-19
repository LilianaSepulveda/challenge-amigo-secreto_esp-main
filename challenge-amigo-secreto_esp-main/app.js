// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listNames = [];

//Adicionar amigos
    function agregarAmigo() {
        let nombreAmigo = document.getElementById("amigo").value;
        if (nombreAmigo == "") {
            alert("Por favor, ingresa un nombre válido");

        } else {
            listNames.push(nombreAmigo);
            document.getElementById("amigo").value = "";
            listaActualizada();

        }
    }
    //actualizar lista de amigos
    function listaActualizada() {
        let listaActualizada = document.getElementById("listaAmigos");
        listaActualizada.innerHTML = "";
        for (let i = 0; i < listNames.length; i++) {
            let itemLista = document.createElement("li");
            itemLista.innerHTML = listNames[i];
            listaActualizada.appendChild(itemLista);
            }
        }
    //nombre aleatorio
    function sortearAmigo() {
            if (listNames.length == 0) {
                alert("Por favor, ingresar un nombre.");
                return;
            }
            let indiceAleatorio = Math.floor(Math.random() * listNames.length);
            let nombreAleatorio = listNames[indiceAleatorio];
            
            document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${nombreAleatorio}`;
        }


