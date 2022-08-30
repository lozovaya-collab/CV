const state = {
    jobs: [{
        dateStart: "Cентябрь 2021",
        dateEnd: null,
        company: "M-Стайл",
        description: "Разработка и поддержка продуктов для упрощения доступа к базе данных компании с любого устройства",
        team: "4 специалиста (2 фронт, 2 бэк)",
        occupation: "Front-end разработчик (Vue)",
        stack: " JS, Vue, Vuex, Vuetify, vue-cropperjs, vue-excel-export, HTML5, CSS3 (SCSS), Stimulsoft, WebRTC",
        responsibilities: [
            { text: "Написание клиентской части" },
            { text: "Разработка мобильной адаптированной версии приложений" },
            { text: "Верстка макетов страниц, создание компонентов (Figma + UI Kit)" },
            { text: "Разработка SPA" },
            { text: "Работа с JWT, реализация двухфакторной авторизации" },
            {
                text: "Разработка и поддержка приложений Конструктор отчетов и Демонстрация"
            },
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