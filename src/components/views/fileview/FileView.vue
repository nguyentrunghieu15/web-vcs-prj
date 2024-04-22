<template>
    <div class="relative overflow-x-auto sm:rounded-lg sm:boder-2">
        <div
            class="w-full uppercase font-bold text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-3"
        >
            Uploaded files
        </div>
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <!-- <EmptyStates></EmptyStates> -->
            <tbody>
                <tr
                    v-for="i in [1, 3, 4, 5, 6, 7]"
                    :key="i"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                    <td class="w-4 h-4">
                        <IconExcell />
                    </td>
                    <th scope="col" class="px-6 py-3 w-1/2">Test</th>
                    <th scope="col" class="px-6 py-3">8mb</th>
                    <th scope="col" class="px-6 py-3">
                        <div>failed</div>
                    </th>
                    <td>
                        <a
                            class="px-6 py-3 flex justify-center text-blue-500 hover:underline hover:cursor-pointer"
                            >Download</a
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import IconExcell from "@/components/icons/IconExcell.vue";
</script>
