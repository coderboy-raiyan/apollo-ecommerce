import { z } from 'zod';
import { UserRole } from './user.constant';

const userValidationSchema = z.object({
    body: z.object({
        user: z.object({
            name: z.string().max(30),
            email: z.string().email(),
            password: z.string().min(6).max(18),
            homeAddress: z.string(),
            officeAddress: z.string().optional(),
            profileImg: z.string().optional(),
            contactNo: z.number().min(11),
            role: z.enum(UserRole).default('user').optional(),
        }),
    }),
});

export default userValidationSchema;
