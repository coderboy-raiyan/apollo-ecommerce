/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct, TProductGetOrSearchResponse } from './product.interface';
import Product from './product.model';

const createProductToDB = async (product: TProduct): Promise<TProduct> => {
    const result = await Product.create(product);
    return result;
};

const getAllProductsFromDB = async (
    searchTerm: string | null = null
): Promise<TProductGetOrSearchResponse> => {
    const query: any = [];
    let result: TProduct[];
    let response: TProductGetOrSearchResponse;

    if (searchTerm && searchTerm !== '') {
        query.push({ name: { $regex: searchTerm, $options: 'i' } });
        query.push({ description: { $regex: searchTerm, $options: 'i' } });
        query.push({ category: { $regex: searchTerm, $options: 'i' } });
        result = await Product.find({ $or: query });

        response = {
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        };
    } else {
        result = await Product.find({});
        response = {
            message: 'Products fetched successfully!',
            data: result,
        };
    }

    return response;
};

const getSingleProductFromDB = async (productId: string): Promise<TProduct> => {
    const result = await Product.findById(productId);
    return result;
};

const updateSingleProductToDB = async (productId: string, payload: TProduct): Promise<TProduct> => {
    const result = await Product.findByIdAndUpdate(productId, { ...payload }, { new: true });
    return result;
};

const deleteProductToDB = async (productId: string) => {
    await Product.findByIdAndDelete(productId);
};

const ProductService = {
    createProductToDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateSingleProductToDB,
    deleteProductToDB,
};

export default ProductService;
