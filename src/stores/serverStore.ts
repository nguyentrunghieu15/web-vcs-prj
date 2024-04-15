import type { Server } from "@/components/views/interfaces";
import type { IServerFilter } from "@/plugins/axios/server/interfaces";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useServerStore = defineStore("servers", () => {
    const listServer = ref<Server[]>([]);

    const selectedServer = ref<Server>();

    const filterServer = ref<IServerFilter>();

    const servers = computed(() => {
        return listServer;
    });

    const selectedServerComputed = computed(() => {
        return selectedServer;
    });

    const filterServerComputed = computed(() => {
        return filterServer;
    });

    function setSelectedServer(id: number) {
        selectedServer.value = listServer.value.find((e) => e.id === id);
    }

    function updateServers(value: Server[]) {
        listServer.value = value;
    }

    function updateFilterServer(value: IServerFilter) {
        filterServer.value = value;
    }

    function clear() {
        listServer.value = [];
    }

    return {
        servers,
        updateServers,
        setSelectedServer,
        selectedServerComputed,
        clear,
        filterServerComputed,
        updateFilterServer,
    };
});
