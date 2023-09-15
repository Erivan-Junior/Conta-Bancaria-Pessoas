class Pessoa {
    constructor(_nome, _idade, _dataNascimento) {
        this._nome = _nome;
        this._idade = _idade;
        this._dataNascimento = _dataNascimento;
    }
    get nome() {
        return this.nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get idade() {
        return this.idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get dataNascimento() {
        return this.dataNascimento;
    }
    set dataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
    }
}
