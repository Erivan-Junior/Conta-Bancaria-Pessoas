class PessoaJuridica extends Pessoa{
    constructor(nome: string, 
                idade:number, 
                dataNascimento: Date,
                private _cnpj: string)
    {super(nome + " - Juridica",idade,dataNascimento)}
    
    get cnpj(): string {
        return this._cnpj;
    }

    toString(): string {
        return super.toString() + " | " + " CNPJ: " + this.cnpj;
    }
}