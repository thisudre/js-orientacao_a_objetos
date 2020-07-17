import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const dir = new Diretor("Thiago", "12323467876", 6000);
const ger = new Gerente("Alice", "12323445476", 3000);
const cli = new Cliente("Roberto", "98721309898", "123");

dir.cadastrarSenha("123456");
ger.cadastrarSenha("123456");

const loginDir = SistemaAutenticacao.login(dir, "123456");
const loginGer = SistemaAutenticacao.login(ger, "123456");
const loginCli = SistemaAutenticacao.login(cli, "13");

console.log(`Login Diretor: ${loginDir}`);
console.log(`Login Gerente: ${loginGer}`);
console.log(`Login Cliente: ${loginCli}`);