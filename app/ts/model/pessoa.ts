class Pessoa {
    constructor(private _nome: string, 
                private _idade: number, 
                private _dataNascimento: Date) {}
    get nome(): string {
        return this.nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }
    get idade(): number {
        return this.idade;
    }
    set idade(idade: number) {
        this._idade = idade;
    }
    get dataNascimento(): Date {
        return this.dataNascimento;
    }
    set dataNascimento(dataNascimento: Date) {
        this._dataNascimento = dataNascimento;
    }
}