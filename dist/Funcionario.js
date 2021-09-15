"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cpf, endereco, email, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.matricula = Math.floor(Math.random() * 10000);
    }
    return Funcionario;
}());
exports.default = Funcionario;
