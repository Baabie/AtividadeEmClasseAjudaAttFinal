import { Base } from "./Base";

export class Product extends Base{
    public name: string;
    public value: number;

    constructor(name: string, value: number){
        super(); // Chama o constructor da classe pai.
        
        this.name = name;
        this.value = value;
    }

    public show(): string{
        return ""
    }

    private showDetails(): string{
        return ""
    }

    public comment(content: string, user: any): void{// any só para n dar erro, trocar para User.

    }

    public rate(rate: number, user: any): void{

    }
}