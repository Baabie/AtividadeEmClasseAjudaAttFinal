import { Base } from "./Base";

export class User extends Base{
    public name: string;
    public username: string;
    public email: string;

    constructor(name: string, username: string, email: string){
        super()

        this.name = name;
        this.username = username;
        this.email = email;
    }

    public addToCart(product: any): void{

    }

    public removeFromCart(product: any): void{

    }

    public showProducts(): string{
        return ""
    }
}