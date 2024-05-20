import { z } from 'zod';

const variantValidationSchema = z.object({
    type: z.string(),
    value: z.string(),
});

const productValidationSchema = z.object({
    body: z.object({
        name: z.string().max(100),
        description: z.string(),
        price: z.number().min(0),
        category: z.string(),
        tags: z.string().array(),
        variants: z.array(variantValidationSchema),
        inventory: z.object({
            quantity: z.number().min(0),
            inStock: z.boolean(),
        }),
        images: z.string().array().optional(),
    }),
});

export default productValidationSchema;
