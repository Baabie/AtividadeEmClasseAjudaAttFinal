import { Product } from "./classes/Product";
import { User } from "./classes/User";

const joao = new User("Joao", "João", "jao@mail.com");
const calca = new Product("Calça jeans", 60);
const camisa = new Product("Camisa polo", 100);

calca.comment("Essa calça é legal", joao);
calca.rate(4, joao);
calca.show();
joao.addToCart(calca);
// joao.removeFromCart(calca);
joao.showProducts();
