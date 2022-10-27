import products from "./products";

type Product = {
    id: number;
    image: string;
    title: string;
    price: string;
    description: string;
}

export default class ProductService
{
    static findAll = (): Array<Product> => {
        return products;
    }

    static findById = (id: number): Product|undefined => {
        return products.find((product: Product) => product.id === id);
    }
}
