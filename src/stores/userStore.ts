import type { IUser } from "@/plugins/axios/user/interfaces";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = ref<IUser>();

    const currentUser = computed(() => user);

    function setUser(u: IUser) {
        user.value = u;
    }

    function clear() {
        user.value = undefined;
    }

    return { currentUser, setUser, clear };
});
