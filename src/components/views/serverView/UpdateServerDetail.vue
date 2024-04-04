<template>
    <form @submit.prevent="onSubmit">
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                    Server profile
                </h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed when save
                </p>

                <div class="mt-10">
                    <InputFiled
                        :is-required="true"
                        label="Server name"
                        v-model:model-value="form.serverName.value"
                    ></InputFiled>
                    <InputFiled
                        :is-required="true"
                        label="Server IPv4"
                        v-model:model-value="form.ipv4.value"
                        :errors="form.errors.value.ipv4"
                    ></InputFiled>
                    <Switch
                        label="Server status"
                        :is-required="false"
                        v-model:model-value="form.status.value"
                    ></Switch>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
                type="button"
                class="text-sm font-semibold leading-6 text-gray-900"
                @click="emit('closeForm')"
            >
                Cancel
            </button>
            <button
                type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Save
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import form from "./updateServerFrom";
import InputFiled from "@/components/base/InputFiled.vue";
import Switch from "@/components/base/Switch.vue";
import { useServerStore } from "@/stores/serverStore";
import { onMounted, onUnmounted } from "vue";
import { Status } from "../interfaces";

const serverStore = useServerStore();

const selectedServer = serverStore.selectedServerComputed;

onMounted(() => {
    form.resetForm();
    form.setFieldValue("serverName", selectedServer.value?.serverName);
    form.setFieldValue("ipv4", selectedServer.value?.ipv4);
    form.setFieldValue(
        "status",
        selectedServer.value?.status === Status.ON ? true : false
    );
});

onUnmounted(() => {
    form.resetForm();
});

const emit = defineEmits(["closeForm"]);

const onSubmit = async () => {
    await form.onSubmit();
    emit("closeForm");
};
</script>
