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

const ProductService = {
    createProductToDB,
    getAllProductsFromDB,
};

export default ProductService;
