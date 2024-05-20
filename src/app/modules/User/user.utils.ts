import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import ApiError from '../../errors/ApiError';

export const createJWt = (
    jwtPayload: { userId: string | mongoose.Types.ObjectId; role: string },
    secretKey: string,
    expiresIn: string
) => {
    const token = jwt.sign(jwtPayload, secretKey, {
        expiresIn: expiresIn,
    });
    return token;
};

export const verifyToken = async (token: string, secretKey: string) => {
    return jwt.verify(token, secretKey, function (error, decoded) {
        if (error) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Invalid token');
        }
        return decoded;
    });
};
