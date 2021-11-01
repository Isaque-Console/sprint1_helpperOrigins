let list: Array<Object> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

let id: number = 2;

if (id > 4 || id < 1) console.log([{ "erro": "Não existe objeto para o id passado"}]);
else {
    let property: string = (id % 2) == 0 ? "bio" : "name";
    
    let newArray: Array<object> = list.map(obj => {
        if(obj["id"] == id) obj[property] = `${property} alterado(a) com sucesso`; // se o id for par, altera a bio, se for impar, altera o name
    
        return obj;
    })
    
    console.log(newArray);
}