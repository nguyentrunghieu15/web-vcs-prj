export interface IGetUserByEmailRequest {
    email: string;
}

export interface IUser {
    fullName: string;
    email: string;
    phone?: string;
    avatar?: string;
    role: string;
}
