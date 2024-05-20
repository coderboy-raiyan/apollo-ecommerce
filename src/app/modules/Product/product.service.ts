import { TProduct } from './product.interface';
import Product from './product.model';

const createProductToDB = async (product: TProduct): Promise<TProduct> => {
    const result = await Product.create(product);
    return result;
};

const getAllProductsFromDB = async (): Promise<TProduct[]> => {
    const result = await Product.find({});
    return result;
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
