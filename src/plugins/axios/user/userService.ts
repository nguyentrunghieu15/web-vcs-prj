import type { AxiosInstance } from "axios";
import axios from "axios";
import {
    errorHandlerRequest,
    preHandlerResquest,
} from "../interpretors/requestPretorCommon";
import {
    errorHandlerResponse,
    successHandlerResponse,
} from "../interpretors/responsePretorCommon";
import type {
    InterPretorRequest,
    InterPretorResponse,
} from "../interpretors/interfaces";
import { authInterpretor } from "../interpretors/authorizeInterpretor";
import type {
    IGetUserByEmailRequest,
    IRequestCreateUser,
    IRequestUpdateUser,
    IResponseGetListUser,
    IUser,
} from "./interfaces";

class UserService {
    axiosInstance: AxiosInstance;
    constructor(
        baseURL: string,
        interpretorsRequest?: Array<InterPretorRequest>,
        interpretorsResponse?: Array<InterPretorResponse>
    ) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
        this.axiosInstance.interceptors.request.use(
            preHandlerResquest,
            errorHandlerRequest
        );
        this.axiosInstance.interceptors.response.use(
            successHandlerResponse,
            errorHandlerResponse
        );
        interpretorsRequest?.forEach((element) => {
            this.axiosInstance.interceptors.request.use(
                element.beforeRequest,
                element.errorHandler
            );
        });
        interpretorsResponse?.forEach((element) => {
            this.axiosInstance.interceptors.response.use(
                element.beforeResponse,
                element.errorHandler
            );
        });
    }
    getUserByEmail(req: IGetUserByEmailRequest) {
        return this.axiosInstance.get<IUser>(`/email/${req.email}`);
    }
    getListUser() {
        return this.axiosInstance.get<IResponseGetListUser>("");
    }

    createUser(data: IRequestCreateUser) {
        return this.axiosInstance.post<IUser>("", data);
    }

    deleteUser(id: number) {
        return this.axiosInstance.delete(`/${id}`);
    }

    updateUser(id: number, data: IRequestUpdateUser) {
        return this.axiosInstance.patch<IUser>(`/${id}`, data);
    }
}

export const userService = new UserService(
    `${import.meta.env["VITE_GT_BASE_URL"]}/user`,
    [authInterpretor],
    []
);
