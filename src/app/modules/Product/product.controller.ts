import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsyncError from '../../utils/catchAsyncError';
import sendResponse from '../../utils/sendResponse';
import { TProduct } from './product.interface';
import ProductService from './product.service';

const createProduct = catchAsyncError(async (req: Request, res: Response) => {
    const { product } = req.body;
    const result = await ProductService.createProductToDB(product);

    sendResponse<TProduct>(res, {
        success: true,
        message: 'Product created successfully!',
        statusCode: httpStatus.OK,
        data: result,
    });
});

const ProductController = {
    createProduct,
};

export default ProductController;
