export enum Status {
    ON = "ON",
    OFF = "OFF",
}
export interface Server {
    id: string;
    name: string;
    createdBy: number;
    createdAt: string;
    updatedAt: string;
    status: Status;
    ipv4: string;
}

