import { createWebHistory, createRouter } from "vue-router";
import AboutMe from "@/components/AboutMe/AboutMe";
import JobsAndSkills from "@/components/JobsAndSkills/JobsAndSkills";
import Education from "@/components/Education";

const routes = [{
        path: "/CV",
        name: "About me",
        component: AboutMe,
        icon: "id-card.png",

    },
    {
        path: "/jobs",
        name: "Jobs and Skills",
        component: JobsAndSkills,
        icon: "suitcase.png",
    },
    {
        path: "/education",
        name: "Education",
        component: Education,
        icon: "mortarboard.png",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;