class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, _cpf) {
        super(nome + " - Fisica", idade, dataNascimento);
        this._cpf = _cpf;
    }
    get cpf() {
        return this._cpf;
    }
    toString() {
        return super.toString() + " | " + " CPF: " + this.cpf;
    }
}
