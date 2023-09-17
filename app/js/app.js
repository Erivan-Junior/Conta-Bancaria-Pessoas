const pessoa = new Pessoa("roberto", 20, new Date("2003-03-27T00:00:00"));
const pessoa_fisica = new PessoaFisica("roberto", 20, new Date("2003-03-27T00:00:00"), "11111111111");
const pessoa_juridica = new PessoaJuridica("roberto", 20, new Date("2003-03-27T00:00:00"), "22222222222222");
console.log(pessoa.toString());
console.log(pessoa_fisica.toString());
console.log(pessoa_juridica.toString());
