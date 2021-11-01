var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
var id;
var Armazenamento = {
    buscar: function () {
        return JSON.parse(localStorage.getItem("helpper.origins:cientistas")) || [];
    },
    gravar: function (cientistas) {
        localStorage.setItem("helpper.origins:cientistas", JSON.stringify(cientistas));
    }
};
var Cientista = {
    editar: function () {
        // pega os valores dos inputs
        var inputNome = document.querySelector("#campo-nome");
        var inputBio = document.querySelector("#campo-bio");
        var name = inputNome.value;
        var bio = inputBio.value;
        var cientistaEditado = { id: Number(id), name: name, bio: bio };
        lista = Armazenamento["buscar"]();
        // substitui o objeto do id selecionado pelo novo objeto
        lista = lista.map(function (obj) {
            if (obj["id"] == id)
                obj = cientistaEditado;
            return obj;
        });
        Armazenamento["gravar"](lista);
    },
    remover: function (index) {
        lista.filter(function (el, i) {
            if (index == el["id"])
                lista.splice(i, 1);
        });
        Armazenamento["gravar"](lista);
        Aplicativo["recarregar"]();
    }
};
var DOM = {
    adicionarCientista: function (cientista) {
        var tbody = document.querySelector("#tabelaCientistas tbody");
        var htmlCientista = "\n            <th scope=\"row\">" + cientista["id"] + "</th>\n            <td>" + cientista["name"] + "</td>\n            <td>" + cientista["bio"] + "</td>\n            <td id=\"" + cientista["id"] + "\">\n                <button type=\"button\" onclick=\"Formulario.atribuirId()\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalEdicao\">Editar</button>\n            </td>\n            <td>\n                <button type=\"button\" onclick=\"Cientista.remover(" + cientista["id"] + ")\" class=\"btn btn-danger\">Deletar</button>\n            </td>\n        ";
        var tr = document.createElement('tr');
        tr.innerHTML = htmlCientista;
        tr.dataset.index = cientista["id"];
        tbody.appendChild(tr);
    },
    limparCientistas: function () {
        var containerCientistas = document.querySelector('#tabelaCientistas tbody');
        containerCientistas.innerHTML = "";
    }
};
var Formulario = {
    validarCampos: function () {
        var inputNome = document.querySelector("#campo-nome");
        var inputBio = document.querySelector("#campo-bio");
        var name = inputNome.value;
        var bio = inputBio.value;
        if (name.trim() === "" ||
            bio.trim() === "") {
            throw new Error("Por favor, preencha todos os campos");
        }
    },
    limparCampos: function () {
        var inputNome = document.querySelector("#campo-nome");
        var inputBio = document.querySelector("#campo-bio");
        inputNome.value = "";
        inputBio.value = "";
    },
    atribuirId: function () {
        document.querySelector('#tabelaCientistas')["onclick"] = function (evento) {
            id = evento.target["parentElement"].id;
        };
    },
    submeter: function (evento) {
        evento.preventDefault();
        try {
            Formulario["validarCampos"]();
            Cientista["editar"]();
            document.getElementById("fecharModal").click(); // fechar o modal 
            Formulario["limparCampos"]();
            Aplicativo["recarregar"](); // recarregar os dados da tabela
        }
        catch (error) {
            alert(error.message);
        }
    }
};
var Aplicativo = {
    iniciarDados: function (cientistas) {
        Armazenamento["gravar"](cientistas);
    },
    preencherTabela: function () {
        var cientistas = Armazenamento["buscar"]();
        // preencher o DOM com as linhas
        cientistas.forEach(function (cientista) { return DOM["adicionarCientista"](cientista); });
    },
    recarregar: function () {
        DOM["limparCientistas"]();
        Aplicativo["preencherTabela"]();
    }
};
Aplicativo["iniciarDados"](lista);
Aplicativo["preencherTabela"]();
