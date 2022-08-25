import { createWebHistory, createRouter } from "vue-router";
import AboutMe from "@/components/AboutMe/AboutMe";
import Jobs from "@/components/Jobs";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const routes = [{
        path: "/",
        name: "About me",
        component: AboutMe,
        icon: "id-card.png",

    },
    {
        path: "/jobs",
        name: "Jobs",
        component: Jobs,
        icon: "suitcase.png",
    },
    {
        path: "/education",
        name: "Education",
        component: Education,
        icon: "mortarboard.png",
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
        icon: "skills.png",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;