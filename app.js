let amigos = []

/*Comandos de adicionar amigo*/
let adicionarAmigo = () => {
    let text = document.getElementById("amigo").value;
    if (text !== "" && text !==null) {
        amigos.push(text);
        document.getElementById("amigo").value = "";
        atualizarLista();
        }   else {
        alert("DIGITE UM NOME VÁLIDO");
        }
    console.log(text);
}

/*Comandos de atualizar a lista*/
let atualizarLista = () => {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);};
}

/*Comandos para sortear amigo*/
let sortearAmigo = () => {
if (amigos.length === 0) {
    alert("A LISTA ESTÁ VAZIA!");
    }   else {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoEscolhido = amigos[indiceAleatorio];
    document.getElementById("resultado").textContent = `AMIGO ESCOLHIDO: ${amigoEscolhido}`;
}

}

/*Feito por Bruno Nobre (Nobre Nerd) 17/03/2025*/