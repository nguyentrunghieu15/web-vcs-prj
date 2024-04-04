import DashboardSideBar from "@/components/layouts/DashboardSideBar.vue";
import { HomeSideBar } from "@/components/layouts/components/constants";
import type { SidebarItem } from "@/components/layouts/components/interfaces";
import LoginPage from "@/components/pages/LoginPage.vue";
import Page404 from "@/components/pages/Page404.vue";
import ServerView from "@/components/views/serverView/ServerView.vue";
import { useSideBarStore } from "@/stores/sideBarStore";
import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        name: "home",
        path: "/home",
        component: DashboardSideBar,
        children: [
            { path: "", redirect: { name: "server" } },
            { name: "server", path: "server", component: ServerView },
        ],
        meta: {
            sideBar: HomeSideBar,
            requiresAuth: true,
        },
    },
    { name: "login", path: "/login", component: LoginPage },
    { name: "404", path: "/error", component: Page404 },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

router.beforeEach((to, from) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta?.requiresAuth) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: "/login",
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        };
    }

    if (to.meta?.sideBar) {
        const store = useSideBarStore();
        store.updateSideBar(to.meta.sideBar as SidebarItem[]);
    }
});

export default router;
