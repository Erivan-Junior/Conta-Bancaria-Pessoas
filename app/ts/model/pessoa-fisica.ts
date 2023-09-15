class PessoaFisica extends Pessoa {
    constructor(nome: string, 
                idade:number, 
                dataNascimento: Date,
                private _cpf: string)
    {super(nome,idade,dataNascimento)}
    
    get cpf(): string {
        return this._cpf;
    }
}