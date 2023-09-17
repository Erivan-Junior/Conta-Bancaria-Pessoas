class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, _cnpj) {
        super(nome + " - Juridica", idade, dataNascimento);
        this._cnpj = _cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    toString() {
        return super.toString() + " | " + " CNPJ: " + this.cnpj;
    }
}
