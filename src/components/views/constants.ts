import { ServerFilterEnum } from "./interfaces";

export const ServerFilter: Map<ServerFilterEnum, string> = new Map<
    ServerFilterEnum,
    string
>([
    [ServerFilterEnum.ALL, "All"],
    [ServerFilterEnum.LAST_MONTH, "Last 30 day"],
    [ServerFilterEnum.LAST_WEEK, "Last 7 day"],
    [ServerFilterEnum.YESTERDAY, "Last 1 day"],
]);
