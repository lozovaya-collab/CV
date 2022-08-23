import { createWebHistory, createRouter } from "vue-router";
import AboutMe from "@/components/AboutMe";
import Jobs from "@/components/Jobs";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const routes = [{
        path: "/",
        name: "About me",
        component: AboutMe,
    },
    {
        path: "/jobs",
        name: "Jobs",
        component: Jobs,
    },
    {
        path: "/education",
        name: "Education",
        component: Education,
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;