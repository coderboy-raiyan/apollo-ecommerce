import { TProduct } from './product.interface';
import Product from './product.model';

const createProductToDB = async (product: TProduct): Promise<TProduct> => {
    const result = await Product.create(product);
    return result;
};

const ProductService = {
    createProductToDB,
};

export default ProductService;
