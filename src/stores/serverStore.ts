import { Status, type Server } from "@/components/views/interfaces";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useServerStore = defineStore("servers", () => {
    const listServer = ref<Server[]>([
        {
            serverName: "Server 1",
            createAt: new Date(),
            createBy: "sdsd",
            id: "1",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 2",
            createAt: new Date(),
            createBy: "sdsd",
            id: "2",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 3",
            createAt: new Date(),
            createBy: "sdsd",
            id: "3",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 4",
            createAt: new Date(),
            createBy: "sdsd",
            id: "4",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 5",
            createAt: new Date(),
            createBy: "sdsd",
            id: "5",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 6",
            createAt: new Date(),
            createBy: "sdsd",
            id: "6",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 7",
            createAt: new Date(),
            createBy: "sdsd",
            id: "7",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 8",
            createAt: new Date(),
            createBy: "sdsd",
            id: "8",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 9",
            createAt: new Date(),
            createBy: "sdsd",
            id: "9",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 10",
            createAt: new Date(),
            createBy: "sdsd",
            id: "10",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 11",
            createAt: new Date(),
            createBy: "sdsd",
            id: "11",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 12",
            createAt: new Date(),
            createBy: "sdsd",
            id: "12",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 13",
            createAt: new Date(),
            createBy: "sdsd",
            id: "13",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 14",
            createAt: new Date(),
            createBy: "sdsd",
            id: "14",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 15",
            createAt: new Date(),
            createBy: "sdsd",
            id: "15",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 16",
            createAt: new Date(),
            createBy: "sdsd",
            id: "16",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 17",
            createAt: new Date(),
            createBy: "sdsd",
            id: "17",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 18",
            createAt: new Date(),
            createBy: "sdsd",
            id: "18",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 19",
            createAt: new Date(),
            createBy: "sdsd",
            id: "19",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
        {
            serverName: "Server 20",
            createAt: new Date(),
            createBy: "sdsd",
            id: "20",
            ipv4: "0.0.0.0",
            lastUpdate: new Date(),
            status: Status.ON,
        },
    ]);

    const selectedServer = ref<Server>();

    const servers = computed(() => {
        return listServer;
    });

    const selectedServerComputed = computed(() => {
        return selectedServer;
    });

    function setSelectedServer(id: string) {
        selectedServer.value = listServer.value.find((e) => e.id === id);
    }

    function updateServers(value: Server[]) {
        listServer.value = value;
    }

    return {
        servers,
        updateServers,
        setSelectedServer,
        selectedServerComputed,
    };
});
