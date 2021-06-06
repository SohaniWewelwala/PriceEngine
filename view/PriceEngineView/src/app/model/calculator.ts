import { Product } from './product';

export class Calculator {
    product: Product;
    amount: number;
    price: number;
}

export class TotalPriceRequest {
    productId: number;
    price: number;
}
