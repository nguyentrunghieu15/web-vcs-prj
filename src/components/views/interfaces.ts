export enum Status {
    ON = "ON",
    OFF = "OFF",
}
export interface Server {
    id: number;
    name: string;
    createdBy: number;
    createdAt: string;
    updatedAt: string;
    status: Status;
    ipv4: string;
}

export enum ServerFilterEnum {
    ALL,
    YESTERDAY,
    LAST_WEEK,
    LAST_MONTH,
}
