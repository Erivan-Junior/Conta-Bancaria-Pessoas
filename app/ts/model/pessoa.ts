class Pessoa {
    constructor(private _nome: string, 
                private _idade: number, 
                private _dataNascimento: Date) {}
    get nome(): string {
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }
    get idade(): number {
        return this._idade;
    }
    set idade(idade: number) {
        this._idade = idade;
    }
    get dataNascimento(): Date {
        return this._dataNascimento;
    }
    set dataNascimento(dataNascimento: Date) {
        this._dataNascimento = dataNascimento;
    }

    toString(): string {
        let retorno = "";
        retorno += "Nome: " + this.nome + " | "
        retorno += "Idade: " + this.idade + " | "
        retorno += "Aniversário: " + this.dataNascimento.toLocaleString('pt-BR', {
                                                                year: 'numeric',
                                                                month: '2-digit',
                                                                day: '2-digit'})
        return retorno;
    }
}