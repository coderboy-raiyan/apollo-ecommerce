import { TGetAllOrdersOrSearchByEmailResponse, TOrder } from './order.interface';
import Order from './order.model';

const createOrderToDB = async (order: TOrder): Promise<TOrder> => {
    const result = await Order.create(order);
    return result;
};

const getAllOrdersFromDB = async (
    email: string | null = null
): Promise<TGetAllOrdersOrSearchByEmailResponse> => {
    let result: TOrder[];
    let response: TGetAllOrdersOrSearchByEmailResponse;

    if (email && email !== '') {
        result = await Order.find({ email });

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
