import IPriceHistory from "./PriceHIstory";

export interface IProduct {

    _id: string;
    title: string;
    price: string;
    highestPrice?: string;
    lowestPrice?: string;
    image: string;
    site: string;
    link: string;
    category: string;
    product: string;
    priceHistory?: IPriceHistory[];
    cratedAt?: Date
    updatedAt?: Date

}