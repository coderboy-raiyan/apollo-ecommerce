import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsyncError from '../../utils/catchAsyncError';
import sendResponse from '../../utils/sendResponse';
import { TProduct } from './product.interface';
import ProductService from './product.service';

const createProduct = catchAsyncError(async (req: Request, res: Response) => {
    const product = req.body;
    const result = await ProductService.createProductToDB(product);

    sendResponse<TProduct>(res, {
        success: true,
        message: 'Product created successfully!',
        statusCode: httpStatus.OK,
        data: result,
    });
});

const getAllProducts = catchAsyncError(async (req: Request, res: Response) => {
    const result = await ProductService.getAllProductsFromDB();

    sendResponse<TProduct[]>(res, {
        success: true,
        message: 'Products fetched successfully!',
        statusCode: httpStatus.OK,
        data: result,
    });
});

const getSingleProduct = catchAsyncError(async (req: Request, res: Response) => {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);

    sendResponse<TProduct>(res, {
        success: true,
        message: 'Product fetched successfully!',
        statusCode: httpStatus.OK,
        data: result,
    });
});

const updateSingleProduct = catchAsyncError(async (req: Request, res: Response) => {
    const { productId } = req.params;
    const product = req.body;
    const result = await ProductService.updateSingleProductToDB(productId, product);

    sendResponse<TProduct>(res, {
        success: true,
        message: 'Product updated successfully!',
        statusCode: httpStatus.OK,
        data: result,
    });
});

const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
};

export default ProductController;
