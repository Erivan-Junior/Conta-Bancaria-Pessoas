class Pessoa {
    constructor(_nome, _idade, _dataNascimento) {
        this._nome = _nome;
        this._idade = _idade;
        this._dataNascimento = _dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
    }
    toString() {
        let retorno = "";
        retorno += "Nome: " + this.nome + " | ";
        retorno += "Idade: " + this.idade + " | ";
        retorno += "Aniversário: " + this.dataNascimento.toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        return retorno;
    }
}
