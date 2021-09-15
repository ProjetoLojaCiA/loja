"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, categoria, preco) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.id = Math.floor(Math.random() * 10000);
    }
    return Produto;
}());
exports.default = Produto;
