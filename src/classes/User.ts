import { Base } from "./Base";
import { Product } from "./Product";

export class User extends Base{
    public name: string;
    public username: string;
    public email: string;
    private _cart: Product[]

    constructor(name: string, username:string, email: string, ) {
        super()

        this.name = name;
        this.username = username;
        this.email = email;
        this._cart = [];
    }

    public addToCart(product:Product): void{

    }

    public removeFromCart (product: Product):void{

    }

    public showProducts(): string{
        return ""
    }
}