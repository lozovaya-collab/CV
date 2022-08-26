const state = {
    jobs: [{
        dateStart: "Cентябрь 2021",
        dateEnd: null,
        company: "M-Стайл",
        occupation: "Front-end разработчик",
        responsibilities: [
            { text: "Разработка и поддержка приложений для внутренних нужд компаний" },
            { text: "Разработка веб-интерфейса приложений на Vue" },
            { text: "Работа с API" },
        ],
    }],
    skills: [
        { text: "JavaScript, ES6+" },
        { text: "Vue.js + Vuex, Vue-router, Vuetify" },
        { text: "HTML5, CSS3, Sass/Scss (БЭМ)" },
        { text: "Протокол HTTP/HTTPS" },
        { text: "RestAPI" },
        { text: "Опыт разработки SPA (Vue 2)" },
        { text: "Git" },
        { text: "Node.js, Express" },
    ],
    langs: [
        { text: "Английский - Intermediate (B1)" },

    ]

};
const getters = {
    GET_JOBS(state) {
        return state.jobs;
    },
    GET_SKILLS(state) {
        return state.skills;
    },
    GET_LANG(state) {
        return state.langs;
    },
};
const mutations = {

};
const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
}