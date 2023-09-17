class PessoaFisica extends Pessoa {
    constructor(nome: string, 
                idade:number, 
                dataNascimento: Date,
                private _cpf: string)
    {super(nome + " - Fisica",idade,dataNascimento)}
    
    get cpf(): string {
        return this._cpf;
    }

    toString(): string {
        return super.toString() + " | " + " CPF: " + this.cpf;
    }
}