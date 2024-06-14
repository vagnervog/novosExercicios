function alterarTexto() {
    document.getElementById("p").innerHTML = "Boa tarde!";
}

function listItems() {
    const listaContiner = document.getElementById("listaContiner");

    // Criar o elemento da lista (ul)
    const lista = document.createElement("ul");

    // Criar os itens da lista (li)
    const item1 = document.createElement("li");
    item1.textContent = "Item 1 da lista dinâmica";

    const item2 = document.createElement("li");
    item2.textContent = "Item 2 da lista dinâmica";

    const item3 = document.createElement("li");
    item3.textContent = "Item 3 da lista dinâmica";

    // Adicionar os itens à lista
    lista.appendChild(item1);
    lista.appendChild(item2);
    lista.appendChild(item3);

    // Adicionar a lista ao elemento pai
    listaContiner.appendChild(lista);
}

  
