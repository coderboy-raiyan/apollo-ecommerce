import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsyncError from '../../utils/catchAsyncError';
import UserServices from './user.service';

const register = catchAsyncError(async (req: Request, res: Response) => {
    const { user } = req.body;
    const result = await UserServices.registerUserToDB(user);
    res.cookie('accessToken', result.accessToken, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    });
    return res.status(httpStatus.OK).json({
        success: true,
        message: 'User signed up successfully',
        data: result,
    });
});

const UserController = {
    register,
};

export default UserController;
