export default class Produto {
    private id : number
    private categoria : string
    private nome : string
    private preco : number

    constructor(nome : string, categoria : string, preco : number) {
        this.nome = nome
        this.categoria = categoria
        this.preco = preco
        this.id = Math.floor(Math.random() * 10000)
    }
}