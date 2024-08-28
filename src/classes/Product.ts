import { Base } from "./Base";
import { Comment } from "./Comment";

export class Product extends Base{
    public name: string;
    public value: number;

    constructor(name: string, value: number){
        super(); // Chama o constructor da classe pai.
        
        this.name = name;
        this.value = value;
    }

    public show(): string{
        const resposta = `Produto: ${this.name}\n Valor: R$${this.value}`
        console.log(resposta);
        console.log()
        return ""
    }

    private showDetails(): string{
        return ""
    }

    public comment(content: string, user: any): void{// any só para n dar erro, trocar para User.
        const comment = new Comment(content, this, user);
    }

    public rate(rate: number, user: any): void{

    }
}