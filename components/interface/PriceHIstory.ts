
interface IPriceHistory {
    _id: string;

    productId: string; 
    price: string;       
    date?: Date;         
}

export default IPriceHistory;
