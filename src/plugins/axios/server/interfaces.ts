import type { Server } from "@/components/views/interfaces";

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

export enum ServerStatus {
    STATUSNONE = 0,
    ON = 1,
    OFF = 2,
}

export interface ICreateServerRequest {
    name: string;
    status: ServerStatus;
    ipv4: string;
}

export enum TypeSort {
    NONE = 0,
    ASC = 1,
    DESC = 2,
}

export interface IServerPagination {
    limit?: number;
    page?: number;
    pageSize?: number;
    sort?: TypeSort;
    sortBy?: string;
}

export interface IServerFilter {
    createdAtFrom?: string;
    createdAtTo?: string;
    updatedAtFrom?: string;
    updatedAtTo?: string;
    status?: ServerStatus;
}

export interface IListServerRequest {
    query?: string;
    filter?: IServerFilter;
    pagination?: IServerPagination;
}

export interface IListServerResponse {
    servers: Server[];
    total: number;
}

export interface IUpdateServerRequest {
    id: number;
    name: string;
    status: ServerStatus;
    ipv4: string;
}
