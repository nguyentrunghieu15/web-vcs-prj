import DashboardSideBar from "@/components/layouts/DashboardSideBar.vue";
import LoginPage from "@/components/pages/LoginPage.vue";
import SignupPage from "@/components/pages/SignupPage.vue";
import {
    createMemoryHistory,
    createRouter,
    type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: DashboardSideBar,
    },
    { path: "/login", component: LoginPage },
    { path: "/signup", component: SignupPage },
];

const router = createRouter({
    history: createMemoryHistory("/"),
    routes,
});

export default router;
