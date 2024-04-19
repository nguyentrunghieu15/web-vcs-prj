import {
    TypeSort,
    type IServerPagination,
} from "@/plugins/axios/server/interfaces";

export const DefaultPagination: IServerPagination = {
    limit: 10,
    page: 1,
    pageSize: 10,
    sort: TypeSort.ASC,
    sortBy: "created_at",
};
