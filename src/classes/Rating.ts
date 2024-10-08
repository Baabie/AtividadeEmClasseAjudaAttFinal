import { Base } from "../classes/Base";
import { Product } from "../classes/Product";
import { User } from "../classes/User";

export type Rate = 0 | 1 | 2 | 3 | 4 | 5;

export class Rating extends Base {
  public rate: Rate;
  private _product: Product;
  private _user: User;

  constructor(rate: Rate, product: Product, user: User) {
    super();

    this.rate = rate;
    this._product = product;
    this._user = user;
  }

  public get product(): Product {
    return this._product;
  }
}

/* export type Rate = 1| 2| 3| 4| 5;

export class Rating extends Base {
    public userId: string;
    public productId: string;
    public rate: Rate;

    constructor(userId: string, productId: string, rate: Rate) {
        super()

        this.userId = userId;
        this.productId = productId;
        this.rate = rate;
    }
} */
