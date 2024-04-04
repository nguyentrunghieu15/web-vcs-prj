export enum Status {
    ON,
    OFF,
}
export interface Server {
    id: string;
    serverName: string;
    createBy: string;
    createAt: Date;
    lastUpdate: Date;
    status: Status;
    ipv4: string;
}

export enum ServerFilterEnum {
    ALL,
    YESTERDAY,
    LAST_WEEK,
    LAST_MONTH,
}
