import { Product } from './product';

export class Calculator {
    Product: Product;
    amount: number;
    price: number;
}

export class TotalPriceRequest {
    productId: number;
    amount: number;
}
