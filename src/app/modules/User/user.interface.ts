export type TUser = {
    name: string;
    email: string;
    password: string;
    homeAddress: string;
    officeAddress?: string;
    profileImg?: string;
    contactNo: number;
    role?: 'admin' | 'user';
};
