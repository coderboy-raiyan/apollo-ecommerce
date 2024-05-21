import mongoose from 'mongoose';

export type TOrder = {
    email: string;
    productId: typeof mongoose.Types.ObjectId;
    price: number;
    quantity: number;
};

export type TGetAllOrdersOrSearchByEmailResponse = {
    message: string;
    data: TOrder[];
};
