import { comments } from "../db/comments";
import { Base } from "./Base";
import { Comment } from "./Comment";
import { Rate } from "./Rating";
import { User } from "./User";
import { Rating } from "./Rating";
import { rattings } from "../db/ratings";

export class Product extends Base {
    public name: string;
    public value: number;

    constructor(name: string, value: number) {
        super() // Chama o construtor da classe pai

        this.name = name;
        this.value = value;
    }
    public show(): string {
        this.showDetails();
        console.log("\n----------------\n");
        
        // const resposta = `Produto: ${this.name}\nValor: ${this.value}`
        // console.log(resposta);
        // console.log("\n---------------------\n");
        // return resposta;
        return ""
    }
    private showDetails (): string {
        // Mostrar o produto
        // Mostre a média de avaliações
        // Mostrar todos os comentários
        // Calça preta (R$ 300)
        // | Avaliação média: 4.5|
        // [Bruninha]: Muito bonita, preço bom
        // [daphene]: Ficou grande
        console.log(`${this.name} (R$ ${this.value})`)
        // 1- Buscar todas as avaliações do produto
        const avaliacoes = rattings.filter(ratting => ratting.product === this)
        if (avaliacoes.length != 0){

            // 2- Soma todas as avaliações do produto
            const somaAvaliacoes = avaliacoes.reduce((prev, atual)=> prev + atual.rate, 0)
            // 3- Pedir pelo numero total de avaliações
            const mediaAvaliacoes = somaAvaliacoes / avaliacoes.length
            // 4- Mostrar no log
            console.log(`A média das avaliações é de ${mediaAvaliacoes.toFixed(1)}`)
        } else {
            console.log("Não existem avaliações")
        }

        const comentarios = comments.filter(comentario => comentario.product === this)

        comentarios.forEach(element => {
            console.log(`[${element.user.username}]: ${element.content}`)
        });

        return"" // só pra seguir a requisicao
    }
    public comment (content: string, user: User): void{
        const comment = new Comment(content, this, user)
        // this carrega todos os dados da classe
        comments.push(comment);
    }
    public rate (rate: Rate, user: User): void{  
        const ratting = new Rating(rate, this, user);

        rattings.push(ratting);
    }
}

