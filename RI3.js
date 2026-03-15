class Cliente{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = new Set();
        this.#cpf = cpf;
    }

    get cpf(){
        return this.#cpf;
    }
}

class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero;
    }

}

class Endereco{
    constructor(estado, cidade, rua, numero){
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }

}

class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, endereco, cnpj){
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.#cnpj = cnpj;
        this.clientes  = new Set();
        this.telefone = new Set();
    }

    get cnpj(){
        return this.#cnpj;
    }
    detalhe() {
    let texto = `Razão Social: ${this.razaoSocial}\n Nome fantasia: ${this.nomeFantasia} \n------------------------------------\n`;

    for (let cliente of this.clientes) {
        texto += `Nome: ${cliente.nome}\n`;
        texto += `Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;

        for (let tel of cliente.telefone) {
        texto += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
      }
    }
    return texto; //JS é uma coisa...
  }
}

let enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Av. Paulista', '1000');
let empresa = new Empresa('ABC LTDA', 'Mercado Online', '12.345.678/0001-99', enderecoEmpresa);

empresa.telefone.add(new Telefone('11', '40028922'));
empresa.telefone.add(new Telefone('11', '40028923'));

let enderecoJoao = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '987');
let joao = new Cliente('João', '111.111.111-11', enderecoJoao);
joao.telefone.add(new Telefone('12', '99999999'));
joao.telefone.add(new Telefone('12', '99999999'));
empresa.clientes.add(joao);

let enderecoGabriel = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '412');
let gabriel = new Cliente('Gabriel', '222.222.222-22', enderecoGabriel);
gabriel.telefone.add(new Telefone('12', '88888888'));
gabriel.telefone.add(new Telefone('12', '88888888'));
empresa.clientes.add(gabriel);

let enderecoBarbara = new Endereco('SP', 'São José dos Campos', 'Av São João', '789');
let barbara = new Cliente('Barbara', '333.333.333-33', enderecoBarbara);
barbara.telefone.add(new Telefone('12', '77777777'));
barbara.telefone.add(new Telefone('12', '77777777'));
empresa.clientes.add(barbara);

let enderecoMarcia = new Endereco('SP', 'São José dos Campos', 'Av Andromeda', '452');
let marcia = new Cliente('Márcia', '444.444.444-44', enderecoMarcia);
marcia.telefone.add(new Telefone('12', '66666666'));
marcia.telefone.add(new Telefone('12', '66666666'));
empresa.clientes.add(marcia);

let enderecoCarlos = new Endereco('SP', 'São José dos Campos', 'Av Cassiano Ricardo', '100');
let carlos = new Cliente('Carlos', '555.555.555-55', enderecoCarlos);
carlos.telefone.add(new Telefone('12', '55555555'));
carlos.telefone.add(new Telefone('12', '55555555'));
empresa.clientes.add(carlos);

console.log(`Empresa ${empresa.nomeFantasia} possui ${empresa.clientes.size} clientes cadastrados.\n`);
console.log(empresa.detalhe());