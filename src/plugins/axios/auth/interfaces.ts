export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string;
    expireTime: string;
    typeToken: string;
    refreshToken: string;
}

export interface IRefressTokenRequest {
    refreshToken: string;
}

export interface IRefressTokenResponse {
    accessToken: string;
}
