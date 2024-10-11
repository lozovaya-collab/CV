const state = {
    jobs: [{
            dateStart: "Ноябрь 2022",
            dateEnd: null,
            company: "Saber Interactive",
            description: "Разработка и поддержка внутренних продуктов для упрощения работы IT отдела",
            team: "4 специалиста (1 пм, 1 тестировщик, 1 фронт, 1 бэк)",
            occupation: "Front-end разработчик (Vue)",
            stack: "JS, TS, Vue 2/3, Vuex, Sass/Scss, Vuetify 2/3, PrimeVue, Webpack, Vite, Cypress",
            projects: [
                { text: "Внутренняя система закупок. Система для контроля трат и ведения закупок для департаментов, отображение общей аналитики по офисам, учет закупаемых компонентов, система аппрувов закупок." },
                { text: "Внутренняя система учета аппаратуры. Система для отслеживания аппаратуры прикрепленными за сотрудниками, учет аппаратуры на складе, общая аналитика для развертываемых серверов на проектах." },
                { text: "Админка для внутренних впн серверов. Управление назначением впн серверов и софтов на пользователей, просмотр общей статистики." },
                { text: "Страница авторизации. Реализация sso." },
                {
                    text: "Админка билдов. Управление выгрузкой и доставки билда определенного проекта до пользователя."
                },
            ],
            responsibilities: [
                { text: "Участие в реализации собственного UI-kit" },
                { text: "Покрытие Vue-компонентов тестами (Cypress)" },
                { text: "Написание документации для UI-kit (Storybook)" },
                { text: "Развитие и поддрежка SPA-приложений на Vue 2/3" },
                {
                    text: "Работа с legacy"
                },
            ],
        },
        {
            dateStart: "Cентябрь 2021",
            dateEnd: "Ноябрь 2022",
            company: "M-Стайл",
            description: "Разработка и поддержка продуктов для упрощения доступа к базе данных компании с любого устройства",
            team: "4 специалиста (2 фронт, 2 бэк)",
            occupation: "Front-end разработчик (Vue)",
            stack: "JS, Vue, Vuex, Vuetify, vue-cropperjs, vue-excel-export, HTML5, CSS3 (SCSS), Stimulsoft, WebRTC",
            projects: [],
            responsibilities: [
                { text: "Реализация UI-Kit на Vue 2" },
                { text: "Разработка мобильной адаптированной версии приложений" },
                { text: "Разработка SPA" },
                { text: "Работа с JWT, реализация двухфакторной авторизации" },
                {
                    text: "Разработка и поддержка приложений Конструктор отчетов и Демонстрация"
                },
            ],
        },

    ],
    skills: [
        { text: "JavaScript, ES6+" },
        { text: "TypeScript" },
        { text: "Vue.js (2/3) + Vuex, Vue-router, Vuetify, PrimeVue" },
        { text: "Cypress" },
        { text: "Storybook" },
        { text: "HTML5, CSS3, Sass/Scss (БЭМ)" },
        { text: "Протокол HTTP/HTTPS" },
        { text: "RestAPI" },
        { text: "Опыт разработки SPA (Vue 2/3, Svelte)" },
        { text: "Svelte, SvelteKit, Bootstrap 5" },
        { text: "Git" },
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