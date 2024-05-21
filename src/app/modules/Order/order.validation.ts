import { z } from 'zod';

const orderValidationSchema = z.object({
    body: z.object({
        email: z.string().email(),
        productId: z.string(),
        price: z.number().min(0),
        quantity: z.number().min(0),
    }),
});

export default orderValidationSchema;
