import { comments } from "../db/comments";
import { Base } from "./Base";
import { Comment } from "./Comment";
import { Rate, Rating } from "./Rating";
import { User } from "./User";
import { ratings } from "../db/ratings";

export class Product extends Base {
  public name: string;
  public value: number;

  constructor(name: string, value: number) {
    super(); // Chama o constructor da classe pai.

    this.name = name;
    this.value = value;
  }

  public show(): string {
    this.showDetails();
    console.log("\n----------------------\n");

    return "";
  }

  private showDetails(): string {
    /* 
        
        Mostrar o produto.
        Mostrar a média de avaliações.
        Mostrar todos os comentários. 
        
        Calça preta (R$ 300)
            | Avaliação média: 4.5 |
            [bruninha]: Muito bonita, preço bom
            [daphne]: Ficou grande
        */
    console.log(`${this.name} (R$ ${this.value})`);

    // 1- Buscar todas as avaliações desse produto
    const avaliacoes = ratings.filter((rating) => rating.product === this);
    if (avaliacoes.length != 0) {
      // 2- Somar todas as avaliações desse produto
      const somaAvaliacoes = avaliacoes.reduce(
        (prev, cure) => prev + cure.rate,
        0
      );
      // 3- Dividir pelo numero total de avaliações
      const mediaAvaliacoes = somaAvaliacoes / avaliacoes.length;
      // 4- Mostrar no log
      console.log(`A média das avaliações é de ${mediaAvaliacoes}`);
    } else {
      console.log("Não existem avaliações.");
    }

    const comentarios = comments.filter(
      (comentario) => comentario.product === this
    );
    comentarios.forEach((element) => {
      console.log(`[${element.user.username}]: ${element.content}`);
    });

    return "";
  }

  public comment(content: string, user: any): void {
    // any só para n dar erro, trocar para User.
    const comment = new Comment(content, this, user);
    comments.push(comment);
  }

  public rate(rate: Rate, user: User): void {
    const rating = new Rating(rate, this, user);

    ratings.push(rating);
  }
}
