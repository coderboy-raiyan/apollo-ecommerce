import { hash } from 'bcrypt';
import { Schema, model } from 'mongoose';
import { UserRole } from './user.constant';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    homeAddress: {
        type: String,
        required: true,
    },
    officeAddress: {
        type: String,
        default: '',
    },
    profileImg: {
        type: String,
        default:
            'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1716216233~exp=1716216833~hmac=4d94e253ae8a086f42987e752abc9e88e8f9a59b199d968477d0b5207331b974',
    },
    contactNo: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: UserRole,
        default: 'user',
    },
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await hash(this.password, 12);
    }
    next();
});

const User = model('User', userSchema);

export default User;
