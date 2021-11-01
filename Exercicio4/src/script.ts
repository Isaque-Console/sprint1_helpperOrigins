let lista: Array<Object> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

let id: string;

const Armazenamento: Object = {
    buscar(): Array<Object> {
        return JSON.parse(localStorage.getItem("helpper.origins:cientistas")) || [];
    },

    gravar(cientistas: Object) {
        localStorage.setItem("helpper.origins:cientistas", JSON.stringify(cientistas));
    }
}

const Cientista: Object = {
    editar(): void {
        
    },

    remover(index:number): void {
        lista.filter((el, i) => {
            if (index == el["id"]) lista.splice(i, 1);
        }) 

        Armazenamento["gravar"](lista);
        Aplicativo["recarregar"]();
    }
}

const DOM: Object = {
    adicionarCientista (cientista: Object): void {
        let tbody: HTMLTableElement = document.querySelector("#tabelaCientistas tbody") as HTMLTableElement;
    
        let htmlCientista: string = `
            <th scope="row">${cientista["id"]}</th>
            <td>${cientista["name"]}</td>
            <td>${cientista["bio"]}</td>
            <td id="${cientista["id"]}">
                <button type="button" onclick="Formulario.atribuirId()" class="btn btn-primary" data-toggle="modal" data-target="#modalEdicao">Editar</button>
            </td>
            <td>
                <button type="button" onclick="Cientista.remover(${cientista["id"]})" class="btn btn-danger">Deletar</button>
            </td>
        `;
    
        let tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = htmlCientista;
        tr.dataset.index = cientista["id"];
    
        tbody.appendChild(tr);
    },

    limparCientistas(): void {
        let containerCientistas: HTMLTableElement = document.querySelector('#tabelaCientistas tbody');

        containerCientistas.innerHTML = "";
    }

}

const Formulario: Object = {
    
    validarCampos(): void {
        let inputNome: HTMLInputElement = document.querySelector("#campo-nome");
        let inputBio: HTMLInputElement = document.querySelector("#campo-bio");
        let name: string = inputNome.value;
        let bio: string = inputBio.value;

        if (name.trim() === "" ||
            bio.trim() === ""
        ) {
            throw new Error("Por favor, preencha todos os campos");
            
        }
    },    
    
    limparCampos() {
        let inputNome: HTMLInputElement = document.querySelector("#campo-nome");
        let inputBio: HTMLInputElement = document.querySelector("#campo-bio");

        inputNome.value = "";
        inputBio.value = "";
    },

    atribuirId(): void {
        document.querySelector('#tabelaCientistas')["onclick"] = function(evento: PointerEvent) {
            id = evento.target["parentElement"].id;
        }
    },

    submeter(evento: Event): void {
        evento.preventDefault();

        try {
            // REFATORAR ISSO EM FUNCOES
            Formulario["validarCampos"]();
            // pega os valores dos inputs
            let inputNome: HTMLInputElement = document.querySelector("#campo-nome");
            let inputBio: HTMLInputElement = document.querySelector("#campo-bio");
            let name: string = inputNome.value;
            let bio: string = inputBio.value;
            // coloca esses dados em um objeto
            let cientistaEditado: object = {id: Number(id), name, bio};
            // busca o array do LocalStorage
            lista = Armazenamento["buscar"]();
            // substitui o objeto do id selecionado pelo novo objeto
            lista = lista.map( obj => {
                if (obj["id"] == id) obj = cientistaEditado;

                return obj;
            })
            // grava esse novo array no LocalStorage
            Armazenamento["gravar"](lista);
            // fechar o modal
            document.getElementById("fecharModal").click();
            // limpa os campos do formulario
            Formulario["limparCampos"]();
            // recarregar
            Aplicativo["recarregar"]();
        } catch (error) {
            alert(error.message)
        }
    }
}

const Aplicativo: Object = {
    iniciarDados(cientistas: Array<Object>): void {
        Armazenamento["gravar"](cientistas);
    },

    carregarDados(): void {
        let cientistas: Array<Object> = Armazenamento["buscar"]();

        // preencher o DOM com as linhas
        cientistas.forEach(cientista => { DOM["adicionarCientista"](cientista); });
    },

    recarregar(): void {
        DOM["limparCientistas"]();
        Aplicativo["carregarDados"]();
    }
}

Aplicativo["iniciarDados"](lista);

Aplicativo["carregarDados"]();
