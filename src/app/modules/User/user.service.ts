import httpStatus from 'http-status';
import config from '../../../config';
import ApiError from '../../errors/ApiError';
import { TUser } from './user.interface';
import User from './user.model';
import { createJWt } from './user.utils';

const registerUserToDB = async (user: TUser) => {
    const { email } = user;
    const isExists = await User.findOne({ email });
    if (isExists) {
        throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'Already have an account please login!!');
    }

    const result = (await User.create(user)).toObject();
    const accessToken = createJWt(
        { userId: result._id, role: result.role },
        config.JWT_SECRET,
        '15d'
    );
    delete result.password;
    return { ...result, accessToken };
};

const UserServices = {
    registerUserToDB,
};

export default UserServices;
