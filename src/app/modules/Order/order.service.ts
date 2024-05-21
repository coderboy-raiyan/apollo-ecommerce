import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import Product from '../Product/product.model';
import { TGetAllOrdersOrSearchByEmailResponse, TOrder } from './order.interface';
import Order from './order.model';

const createOrderToDB = async (order: TOrder): Promise<TOrder> => {
    const { productId, quantity } = order;
    const isProductExists = await Product.findById(productId);
    if (!isProductExists) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
    }

    if (isProductExists.inventory.quantity < 1) {
        throw new ApiError(
            httpStatus.NOT_ACCEPTABLE,
            'Insufficient quantity available in inventory'
        );
    }

    const result = await Order.create(order);

    const reducedQtyProduct = await Product.findByIdAndUpdate(
        isProductExists._id,
        {
            $inc: { 'inventory.quantity': -quantity },
        },
        { new: true }
    );

    if (reducedQtyProduct.inventory.quantity <= 0) {
        await Product.findByIdAndUpdate(isProductExists._id, {
            'inventory.inStock': false,
        });
    }

    return result;
};

const getAllOrdersFromDB = async (
    email: string | null = null
): Promise<TGetAllOrdersOrSearchByEmailResponse> => {
    let result: TOrder[];
    let response: TGetAllOrdersOrSearchByEmailResponse;

    if (email && email !== '') {
        result = await Order.find({ email });

        if (!result.length) {
            response = {
                message: `No order found for the user with email "${email}".`,
                data: result,
            };
            return response;
        }

        response = {
            message: `Orders fetched successfully for user '${email}!'`,
            data: result,
        };
    } else {
        result = await Order.find({});
        response = {
            message: 'Orders fetched successfully!',
            data: result,
        };
    }

    return response;
};

const OrderService = {
    createOrderToDB,
    getAllOrdersFromDB,
};
export default OrderService;
