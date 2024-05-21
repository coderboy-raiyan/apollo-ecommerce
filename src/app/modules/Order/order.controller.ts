import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsyncError from '../../utils/catchAsyncError';
import sendResponse from '../../utils/sendResponse';
import { TOrder } from './order.interface';
import OrderService from './order.service';

const createOrder = catchAsyncError(async (req: Request, res: Response) => {
    const order = req.body;
    const result = await OrderService.createOrderToDB(order);
    sendResponse<TOrder>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Order created successfully!',
        data: result,
    });
});

const getAllOrders = catchAsyncError(async (req: Request, res: Response) => {
    const { email } = req.query;
    const result = await OrderService.getAllOrdersFromDB(email as string);
    sendResponse<TOrder[]>(res, {
        success: result.data.length !== 0,
        statusCode: result.data.length !== 0 ? httpStatus.OK : httpStatus.NOT_FOUND,
        message: result.message,
        data: result.data,
    });
});

const OrderController = {
    createOrder,
    getAllOrders,
};

export default OrderController;
