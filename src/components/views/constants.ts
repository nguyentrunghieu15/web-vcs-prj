import type { IServerPagination } from "@/plugins/axios/server/interfaces";

export const DefaultPagination: IServerPagination = {
    limit: 10,
    page: 1,
    pageSize: 10,
};
