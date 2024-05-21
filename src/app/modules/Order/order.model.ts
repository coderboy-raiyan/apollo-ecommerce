import mongoose, { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
    email: {
        type: String,
        required: true,
    },
    productId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
});

const Order = model('Order', orderSchema);

export default Order;
