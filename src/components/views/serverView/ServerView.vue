<template>
    <div class="relative overflow-x-auto sm:rounded-lg">
        <div
            class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4"
        >
            <div class="flex">
                <button
                    @click="onClickCreate"
                    type="button"
                    class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mx-2"
                >
                    New Server
                </button>
                <button
                    @click="onClickFilter"
                    type="button"
                    class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55"
                >
                    Filter
                </button>
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
                <div
                    class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"
                >
                    <svg
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>
                <input
                    type="text"
                    id="table-search"
                    class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items"
                    v-model="query"
                    @input="onChangeSearchQuery"
                />
            </div>
        </div>
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-all-search" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">Server Name</th>
                    <th scope="col" class="px-6 py-3">Create By</th>
                    <th scope="col" class="px-6 py-3">Create At</th>
                    <th scope="col" class="px-6 py-3">Last update</th>
                    <th scope="col" class="px-6 py-3">Status</th>
                    <th scope="col" class="px-6 py-3">IPv4</th>
                    <th scope="col" class="px-6 py-3 flex justify-center">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="server in listServer"
                    :key="server.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input
                                id="checkbox-table-search-1"
                                type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-search-1" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </td>
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {{ server.name }}
                    </th>
                    <td class="px-6 py-4">{{ server.createdBy }}</td>
                    <td class="px-6 py-4">
                        {{ server.createdAt }}
                    </td>
                    <td class="px-6 py-4">
                        {{ server.updatedAt }}
                    </td>
                    <td class="px-6 py-4">
                        {{ server.status === Status.ON ? "ON" : "OFF" }}
                    </td>
                    <td class="px-6 py-4">{{ server.ipv4 }}</td>
                    <td class="px-6 py-4 flex justify-center">
                        <button
                            @click="onClickEdit(server.id)"
                            type="button"
                            class="h-10 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-700"
                        >
                            Edit
                        </button>
                        <button
                            @click="onChangeStatusServer(server.id)"
                            type="button"
                            class="h-10 w-24 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                            {{
                                server.status === Status.ON
                                    ? "Turn off"
                                    : "Turn on"
                            }}
                        </button>
                        <button
                            @click="onClickDelete(server.id)"
                            type="button"
                            class="h-10 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav
            class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
        >
            <span
                class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
                >Showing
                <span class="font-semibold text-gray-900 dark:text-white"
                    >1-10</span
                >
                of
                <span class="font-semibold text-gray-900 dark:text-white">{{
                    totalServer
                }}</span></span
            >
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li @click="onClickPrevious">
                    <span
                        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Previous
                    </span>
                </li>
                <li
                    v-for="p in pigination"
                    :key="p"
                    @click="onClickPage(p)"
                    :class="p === page ? 'bg-blue-300' : ''"
                >
                    <span
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        {{ p }}
                    </span>
                </li>
                <li @click="onClickNext">
                    <span
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Next
                    </span>
                </li>
            </ul>
        </nav>
    </div>
    <EditServerPopup v-model:isOpen="isOpenEditPopup"></EditServerPopup>
    <CreateServerPopup v-model:isOpen="isOpenCreatePopup"></CreateServerPopup>
    <FilterServerPopup v-model:is-open="isOpenFilterPopup"></FilterServerPopup>
    <ComfirmPopup
        :content="confirmDelete.content"
        :title="confirmDelete.title"
        v-model:is-open="isOpenDeletePopup"
        @confirm="onAcceptDelete"
    ></ComfirmPopup>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";
import { useServerStore } from "@/stores/serverStore";
import { Status } from "./../interfaces";
import EditServerPopup from "./EditServerPopup.vue";
import CreateServerPopup from "./CreateServerPopup.vue";
import FilterServerPopup from "./FilterServerPopup.vue";
import { DefaultPagination } from "../constants";
import ComfirmPopup from "@/components/base/ComfirmPopup.vue";
import { serverService } from "@/plugins/axios/server/serverService";
import {
    ServerStatus,
    type IListServerRequest,
} from "@/plugins/axios/server/interfaces";
import { useMainStore } from "@/stores/mainStore";

const serverStore = useServerStore();
const mainStore = useMainStore();

const selectedServer = serverStore.selectedServerComputed;

const page = ref(0);

const confirmDelete = ref({
    title: "Warnning delete",
    content: "Select 'Yes' if you are sure you want to delete the server.",
});

const pigination = computed(() => {
    const result: number[] = [];
    for (let index: number = page.value - 2; index < page.value + 2; index++) {
        if (index * 10 >= 0 && (index + 1) * 10 - 9 <= totalServer.value) {
            result.push(index);
        }
    }
    return result;
});

const getListServer = (req: IListServerRequest) => {
    serverService.getListServer(req).then((response) => {
        const { data } = response;
        serverStore.updateServers(data.servers);
        serverStore.updateTotalServer(data.total);
    });
};

onMounted(() => {
    getListServer({ pagination: DefaultPagination });
});

const isOpenEditPopup = ref(false);
const isOpenCreatePopup = ref(false);
const isOpenDeletePopup = ref(false);
const isOpenFilterPopup = ref(false);

const listServer = serverStore.servers;
const totalServer = serverStore.total;
const filterServer = serverStore.filterServerComputed;

const onClickDelete = (id: number) => {
    serverStore.setSelectedServer(id);
    isOpenDeletePopup.value = !isOpenDeletePopup.value;
};

const onClickEdit = (id: number) => {
    serverStore.setSelectedServer(id);
    isOpenEditPopup.value = !isOpenEditPopup.value;
};

const onClickNext = () => {
    if (totalServer && page.value + 1 < totalServer.value / 10) {
        page.value++;
        getListServer({
            query: query.value === "" ? undefined : query.value,
            filter: filterServer.value,
            pagination: {
                limit: 10,
                page: page.value + 1,
                pageSize: 10,
            },
        });
    }
};

const onClickPrevious = () => {
    if (page.value > 0) {
        page.value--;
        getListServer({
            query: query.value === "" ? undefined : query.value,
            filter: filterServer.value,
            pagination: {
                limit: 10,
                page: page.value + 1,
                pageSize: 10,
            },
        });
    }
};

function onClickPage(p: number) {
    page.value = p;
    getListServer({
        query: query.value === "" ? undefined : query.value,
        filter: filterServer.value,
        pagination: {
            limit: 10,
            page: page.value + 1,
            pageSize: 10,
        },
    });
}

const onClickCreate = () => {
    isOpenCreatePopup.value = !isOpenCreatePopup.value;
};

const onClickFilter = () => {
    isOpenFilterPopup.value = !isOpenFilterPopup.value;
};

const onAcceptDelete = (value: boolean) => {
    if (value && selectedServer.value?.id) {
        serverService.deleteServer(selectedServer.value?.id);
    }
};

const onChangeStatusServer = (id: number) => {
    const server = listServer.value.find((s) => {
        return s.id === id;
    });
    if (server) {
        serverService
            .updateServer({
                id: server?.id,
                ipv4: server?.ipv4,
                name: server?.name,
                status:
                    server?.status === Status.ON
                        ? ServerStatus.OFF
                        : ServerStatus.ON,
            })
            .then((response) => {
                mainStore.showNofitication({
                    typeNotification: "infor",
                    title: "Update server",
                    content: `Turn ${
                        server?.status === Status.ON ? "off" : "on"
                    }  server`,
                });
                getListServer({
                    filter: filterServer.value,
                    pagination: DefaultPagination,
                });
            });
    }
};

const query = ref("");
let delaySearch: number | undefined;
function onChangeSearchQuery(e: Event) {
    clearTimeout(delaySearch);
    delaySearch = setTimeout(() => {
        getListServer({
            query: query.value === "" ? undefined : query.value,
            filter: filterServer.value,
            pagination: DefaultPagination,
        });
    }, 1000);
}
</script>
