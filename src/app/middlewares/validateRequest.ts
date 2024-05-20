import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsyncError from '../utils/catchAsyncError';

function validateRequest(zodSchema: AnyZodObject) {
    return catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
        await zodSchema.parseAsync({
            body: req.body,
            cookie: req.cookies,
        });
        next();
    });
}

export default validateRequest;
