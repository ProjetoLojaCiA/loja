"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, telefone, email, endereco) {
        this.id = Math.floor(Math.random() * 10000);
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
    }
    return Cliente;
}());
exports.default = Cliente;
